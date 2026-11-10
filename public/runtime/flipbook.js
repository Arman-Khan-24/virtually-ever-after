window.__loadLocalPdfJs().then(function(pdfjsLib){

(function () {
'use strict';



/* same-origin, always: an absolute link to the live domain made a preview
   or a local run fetch across the internet for a file lying beside it */
var DEFAULT_PDF = "/assets/pdf/PDF_v2-5mbs-c2w2.pdf";
var qs  = new URLSearchParams(location.search);
var SRC = qs.get('pdf') || DEFAULT_PDF;
try { var local = new URL(SRC, location.origin); if(local.origin !== location.origin || !local.pathname.endsWith('.pdf')) throw new Error('Choose a local PDF.'); SRC = local.pathname; } catch(error) { document.getElementById('loading').style.display='none'; document.getElementById('error').style.display='flex'; document.getElementById('errorSrc').textContent='Choose a PDF in the local archive.'; return; }

var canvas   = document.getElementById('gl');
var counter  = document.getElementById('counter');
var prevBtn  = document.getElementById('prevBtn');
var nextBtn  = document.getElementById('nextBtn');
var loading  = document.getElementById('loading');
var errorBox = document.getElementById('error');
var zoombar  = document.getElementById('zoombar');
var zoomInp  = document.getElementById('zoom');

var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
var DPR = function () { return Math.min(2, window.devicePixelRatio || 1); };
var PI = Math.PI;

/* ── book state ── */
var pdf = null;
var N = 0, S = 0, cur = 0;
var pageRatio = 1.414;
var pw = 0, ph = 0;          /* single page size, css px */
var vw = 0, vh = 0;          /* viewport, css px */
var pageTex = {};            /* pageNum -> WebGLTexture */
var renderedAt = {};
var PAPER = [0.965, 0.957, 0.937];

/* ── zoom (mobile reading aid) ──
   A bottom slider magnifies the spread. While magnified the finger PANS the
   sheet (turning it would fight the zoom) and the two footer arrows step the
   pages; at 1x the page-curl returns exactly as before. The magnify happens
   in the render transform (zx/zy) and the page textures are re-baked crisp
   at the held zoom, so it stays sharp, never a blurry css upscale. */
var ZOOMABLE = false;
try { ZOOMABLE = (window.matchMedia && matchMedia('(pointer:coarse)').matches) ||
                 window.innerWidth <= 860; } catch (_) {}
var Z = 1, PANx = 0, PANy = 0, MAXZOOM = 3;
var renderZoom = 1;          /* the zoom the textures were last baked for */
var MAXTEX = 2560;           /* device-px texture cap (tightened once GL is up) */
var pan = null;              /* active pan drag while zoomed */
var texZoomT = null;

/* ─────────────────────────────────────────────────────────────
   PAGE-CURL PHYSICS
   The grabbed paper point O (page coords: x from the spine,
   y from the top) is pulled to P. The sheet folds along the
   perpendicular bisector of O→P and wraps around a cylinder
   lying on that fold line, so the curl starts at the grabbed
   corner and sweeps diagonally, the spine edge never moves.
   P is inextensibility-clamped so the paper can't tear off
   the binding.
   ───────────────────────────────────────────────────────────── */
var live = null;   /* { idx, dir, O:{x,y}, P:{x,y}, V:{x,y}, T:{x,y}, dragging } */
var raf = null;

function startLive(idx, dir, O) {
    live = {
        idx: idx, dir: dir,
        O: { x: O.x, y: O.y },
        P: { x: O.x, y: O.y },
        V: { x: 0, y: 0 },
        T: { x: O.x, y: O.y },
        dragging: false,
        t0: performance.now(),
        last: performance.now()
    };
    if (!raf) raf = requestAnimationFrame(tick);
}

/* if the pointer moves beyond the grabbed point's reach, the paper
   slips through the hand: the grab point slides toward the free
   edge so the sheet keeps following the pointer exactly           */
function slideGrab(L, pt) {
    var oy = L.O.y;
    var need = Math.max(
        Math.hypot(pt.x, pt.y - oy),
        Math.sqrt(Math.max(0, pt.x * pt.x + pt.y * pt.y - oy * oy)),
        Math.sqrt(Math.max(0, pt.x * pt.x + (pt.y - ph) * (pt.y - ph) - (ph - oy) * (ph - oy)))
    );
    if (need > L.O.x) L.O.x = Math.min(pw * 0.995, need);
}

/* the paper cannot stretch: P stays within reach of the spine */
function clampP(pt, O) {
    var anchors = [
        { x: 0, y: 0,   r: Math.hypot(O.x, O.y) },
        { x: 0, y: ph,  r: Math.hypot(O.x, ph - O.y) },
        { x: 0, y: O.y, r: O.x }
    ];
    for (var k = 0; k < 3; k++) {
        for (var i = 0; i < anchors.length; i++) {
            var a = anchors[i];
            var dx = pt.x - a.x, dy = pt.y - a.y;
            var d = Math.hypot(dx, dy);
            if (d > a.r && d > 0.0001) {
                var f = a.r / d;
                pt.x = a.x + dx * f;
                pt.y = a.y + dy * f;
            }
        }
    }
    return pt;
}

function progress() {
    if (!live) return 0;
    return clamp((live.O.x - live.P.x) / (2 * live.O.x), 0, 1);
}

function tick(now) {
    raf = null;
    if (!live) return;
    var real = clamp((now - live.last) / 1000, 0.001, 0.1);
    live.last = now;
    var L = live;

    /* while held the paper sits exactly under the pointer (set in
       pointermove); in flight a spring carries it home, substepped
       so slow frames don't slow the paper down */
    if (!L.dragging) {
        var k = 30, c = 10;
        var steps = Math.min(6, Math.max(1, Math.ceil(real / 0.0166)));
        var dt = real / steps;
        for (var i = 0; i < steps; i++) {
            L.V.x += (k * (L.T.x - L.P.x) - c * L.V.x) * dt;
            L.V.y += (k * (L.T.y - L.P.y) - c * L.V.y) * dt;
            L.P.x += L.V.x * dt;
            L.P.y += L.V.y * dt;
        }
        clampP(L.P, L.O);
    }

    render();

    var settled = !L.dragging &&
        Math.hypot(L.T.x - L.P.x, L.T.y - L.P.y) < 2 &&
        Math.hypot(L.V.x, L.V.y) < 40;
    if (settled || now - L.t0 > 6000) {
        finishLive();
        return;
    }
    raf = requestAnimationFrame(tick);
}

var queued = null;   /* one pending turn, started the instant the current one lands */

function finishLive() {
    if (!live) return;
    if (live.T.x < 0) cur += live.dir;    /* forward: +1, backward: -1 */
    live = null;
    updateUI();
    render();
    ensure();
    if (queued) {
        var q = queued; queued = null;
        if (q === 1 && cur < S) autoTurn(cur, 1);
        else if (q === -1 && cur > 0) autoTurn(cur - 1, -1);
    }
}

/* ── flips ──
   button/keyboard turns grab the bottom corner and get a small
   upward kick, so the fold sweeps diagonally like a hand turn.
   While a turn is in the air, new input queues instead of being
   swallowed or snapping the airborne page. */
function autoTurn(idx, dir) {
    startLive(idx, dir, { x: pw * 0.97, y: ph * 0.92 });
    live.T = { x: -pw * 0.97, y: ph * 0.92 };
    live.V.y = -pw * 1.5;
    updateUI();
}
function flipNext() {
    if (Z > 1) { stepZoomed(1); return; }   /* zoomed: arrows step, no curl */
    if (live) { if (!live.dragging) queued = 1; return; }
    if (cur >= S) return;
    autoTurn(cur, 1);
}
function flipPrev() {
    if (Z > 1) { stepZoomed(-1); return; }
    if (live) { if (!live.dragging) queued = -1; return; }
    if (cur <= 0) return;
    autoTurn(cur - 1, -1);
}

/* ── pointer: right page drags forward, left page drags backward ── */
var drag = null;
var interacted = false;   /* any real touch cancels the auto cover-lift */

function shiftNow() {
    var eff = cur + (live ? (live.dir === 1 ? progress() : -progress()) : 0);
    var f0 = clamp(eff, 0, 1);
    var fS = clamp(eff - (S - 1), 0, 1);
    return (-0.5 + 0.5 * f0 + 0.5 * fS) * pw;
}
/* page-local turn-space coords of a client point; mirrored for backward */
function toTurn(cx, cy, mirrored) {
    var sx = vw / 2 + shiftNow();
    var ty = vh / 2 - ph / 2;
    var lx = cx - sx;
    return { x: mirrored ? -lx : lx, y: cy - ty };
}

canvas.addEventListener('pointerdown', function (e) {
    if (!N) return;
    if (e.button !== undefined && e.button !== 0) return;
    interacted = true;
    if (Z > 1) {                            /* zoomed: the finger PANS the sheet */
        pan = { x0: e.clientX, y0: e.clientY, px: PANx, py: PANy };
        canvas.classList.add('dragging');
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
        e.preventDefault();
        return;
    }
    var sx = vw / 2 + shiftNow();
    if (live) {                             /* mid-air: queue, never hijack */
        if (!live.dragging) queued = e.clientX >= sx ? 1 : -1;
        return;
    }
    var idx, dir;
    if (e.clientX >= sx) {
        if (cur >= S) return;
        idx = cur; dir = 1;
    } else {
        if (cur <= 0) return;
        idx = cur - 1; dir = -1;
    }
    var t = toTurn(e.clientX, e.clientY, dir === -1);
    var O = { x: clamp(t.x, pw * 0.05, pw * 0.995), y: clamp(t.y, 0, ph) };
    startLive(idx, dir, O);
    live.dragging = true;
    drag = { x0: e.clientX, y0: e.clientY, moved: false, hist: [] };
    canvas.classList.add('dragging');
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
});

canvas.addEventListener('pointermove', function (e) {
    if (pan) {
        PANx = pan.px + (e.clientX - pan.x0);
        PANy = pan.py + (e.clientY - pan.y0);
        clampPan(); render();
        return;
    }
    if (!drag || !live || !live.dragging) return;
    if (!drag.moved &&
        Math.abs(e.clientX - drag.x0) + Math.abs(e.clientY - drag.y0) > 6) drag.moved = true;
    if (!drag.moved) return;
    /* 1:1, the paper point under the pointer follows it exactly,
       slipping through the hand when pulled past its reach */
    var t = toTurn(e.clientX, e.clientY, live.dir === -1);
    var pt = { x: t.x, y: t.y };
    slideGrab(live, pt);
    pt = clampP(pt, live.O);
    live.P.x = pt.x; live.P.y = pt.y;
    live.T.x = pt.x; live.T.y = pt.y;
    drag.hist.push({ t: performance.now(), x: pt.x, y: pt.y });
    if (drag.hist.length > 8) drag.hist.shift();
});

function endDrag() {
    if (pan) { pan = null; canvas.classList.remove('dragging'); return; }
    if (!live || !live.dragging) { drag = null; return; }
    var moved = drag && drag.moved;
    var hist = drag ? drag.hist : [];
    drag = null;
    canvas.classList.remove('dragging');
    live.dragging = false;
    var L = live;

    /* release velocity from recent pointer motion */
    L.V.x = 0; L.V.y = 0;
    if (hist.length > 1) {
        var now = performance.now();
        var old = hist[0];
        for (var i = 0; i < hist.length; i++) {
            if (now - hist[i].t <= 110) { old = hist[i]; break; }
        }
        var dts = Math.max(0.016, (now - old.t) / 1000);
        L.V.x = clamp((L.P.x - old.x) / dts, -6000, 6000);
        L.V.y = clamp((L.P.y - old.y) / dts, -6000, 6000);
    }

    var complete;
    if (!moved) {
        complete = true;                          /* plain click = turn the page */
        L.V.y += (L.O.y > ph * 0.5 ? -1 : 1) * pw * 1.2;
    } else if (L.V.x < -420) {
        complete = true;                          /* flicked away */
    } else if (L.V.x > 420) {
        complete = false;                         /* flicked home */
    } else {
        complete = L.P.x < L.O.x * 0.25;          /* past the midline */
    }
    L.T = complete ? { x: -L.O.x, y: L.O.y } : { x: L.O.x, y: L.O.y };
}
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', endDrag);

nextBtn.addEventListener('click', function () { interacted = true; flipNext(); });
prevBtn.addEventListener('click', function () { interacted = true; flipPrev(); });
if (zoomInp) {
    zoomInp.addEventListener('input', function () { setZoom(parseFloat(zoomInp.value) || 1); });
    /* the thumb owns its own drag; keep it from waking the canvas underneath */
    zoomInp.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === ' ') { interacted = true; flipNext(); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { interacted = true; flipPrev(); e.preventDefault(); }
});

/* ── ui ── */
function updateUI() {
    counter.textContent = counterText();
    prevBtn.disabled = cur <= 0;
    nextBtn.disabled = cur >= S;
}
function counterText() {
    if (!N) return '';
    if (cur === 0) return '1 / ' + N;
    if (cur === S) return N + ' / ' + N;
    var l = 2 * cur, r = 2 * cur + 1;
    return (r <= N) ? l + '-' + r + ' / ' + N : l + ' / ' + N;
}

/* ─────────────────────────────────────────────────────────────
   WEBGL RENDERER
   ───────────────────────────────────────────────────────────── */
var gl = canvas.getContext('webgl', { alpha: false, antialias: true, depth: true }) ||
         canvas.getContext('experimental-webgl', { alpha: false, antialias: true, depth: true });

function makeProgram(vsSrc, fsSrc) {
    function sh(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
    }
    var p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(p);
    return p;
}

var progTex = makeProgram(
    'attribute vec3 aPos; attribute vec2 aUV; attribute float aShade;' +
    'uniform vec2 uScale; varying vec2 vUV; varying float vShade;' +
    'void main(){' +
    '  gl_Position = vec4(aPos.x*uScale.x - 1.0, aPos.y*uScale.y + 1.0, -aPos.z*0.00025, 1.0);' +
    '  vUV = aUV; vShade = aShade;' +
    '}',
    'precision mediump float; varying vec2 vUV; varying float vShade;' +
    'uniform sampler2D uTex; uniform float uAlpha;' +
    'void main(){' +
    '  vec4 c = texture2D(uTex, vUV);' +
    '  gl_FragColor = vec4(c.rgb * vShade, uAlpha);' +
    '}'
);
var locTex = {
    aPos: gl.getAttribLocation(progTex, 'aPos'),
    aUV: gl.getAttribLocation(progTex, 'aUV'),
    aShade: gl.getAttribLocation(progTex, 'aShade'),
    uScale: gl.getUniformLocation(progTex, 'uScale'),
    uTex: gl.getUniformLocation(progTex, 'uTex'),
    uAlpha: gl.getUniformLocation(progTex, 'uAlpha')
};
var bufTex = gl.createBuffer();
var bufMesh = gl.createBuffer();
var bufIdx = gl.createBuffer();

gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
gl.clearColor(0, 0, 0, 1);
try { MAXTEX = Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE) || 2048, 2560); } catch (_) {}

/* paper texture for blank faces */
function solidTex(rgb) {
    var t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
        new Uint8Array([rgb[0] * 255, rgb[1] * 255, rgb[2] * 255, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return t;
}
var paperTex = solidTex(PAPER);

function texFromCanvas(c, old) {
    var t = old || gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return t;
}

/* ── mesh grid ── */
var GX = 36, GY = 22;
/* interleave: x y z | u v | u2 v | shadeF shadeB  (v duplicated so both
   UV sets are contiguous pairs), 9 floats, stride 36 bytes            */
var meshData = new Float32Array((GX + 1) * (GY + 1) * 9);
var meshIndices = (function () {
    var idx = [];
    for (var j = 0; j < GY; j++) {
        for (var i = 0; i < GX; i++) {
            var a = j * (GX + 1) + i, b = a + 1, c2 = a + GX + 1, d = c2 + 1;
            idx.push(a, b, c2, b, d, c2);
        }
    }
    return new Uint16Array(idx);
})();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufIdx);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, meshIndices, gl.STATIC_DRAW);

/* ── draw helpers (screen-space px, y down) ── */
function drawTexQuad(x, y, w, h, tex, flipU, alpha) {
    var u0 = flipU ? 1 : 0, u1 = flipU ? 0 : 1;
    var v = new Float32Array([
        x, y, 0,         u0, 0, 1,
        x + w, y, 0,     u1, 0, 1,
        x, y + h, 0,     u0, 1, 1,
        x + w, y, 0,     u1, 0, 1,
        x + w, y + h, 0, u1, 1, 1,
        x, y + h, 0,     u0, 1, 1
    ]);
    gl.useProgram(progTex);
    gl.uniform2f(locTex.uScale, 2 / vw, -2 / vh);
    gl.uniform1f(locTex.uAlpha, alpha == null ? 1 : alpha);
    gl.uniform1i(locTex.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.bindBuffer(gl.ARRAY_BUFFER, bufTex);
    gl.bufferData(gl.ARRAY_BUFFER, v, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(locTex.aPos);
    gl.enableVertexAttribArray(locTex.aUV);
    gl.enableVertexAttribArray(locTex.aShade);
    gl.vertexAttribPointer(locTex.aPos, 3, gl.FLOAT, false, 24, 0);
    gl.vertexAttribPointer(locTex.aUV, 2, gl.FLOAT, false, 24, 12);
    gl.vertexAttribPointer(locTex.aShade, 1, gl.FLOAT, false, 24, 20);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

/* ── the curl itself ── */
function smooth01(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }

function computeMesh(L, mirrored, bx, ty) {
    var O = L.O, P = L.P;
    var p = progress();
    var r = Math.max(3, pw * (0.02 + 0.34 * Math.pow(Math.sin(PI * p), 1.25)));
    var dx = P.x - O.x, dy = P.y - O.y;
    var dist = Math.hypot(dx, dy);
    var flat = dist < 0.5;
    var nx = 0, ny = 0, mx = 0, my = 0;
    if (!flat) {
        nx = -dx / dist; ny = -dy / dist;      /* points toward the grabbed side */
        mx = (O.x + P.x) / 2; my = (O.y + P.y) / 2;
    }
    /* in flight, the last stretch blends to the exact flat pose so the
       sheet lands pixel-perfect on its resting position, no snap */
    var landIn = 0, landOut = 0;
    if (!L.dragging) {
        landIn  = smooth01((p - 0.93) / 0.07);   /* -> mirrored flat */
        landOut = smooth01((0.07 - p) / 0.07);   /* -> original flat */
    }
    var sideX = mirrored ? -1 : 1;
    var n = 0;
    for (var j = 0; j <= GY; j++) {
        for (var i = 0; i <= GX; i++) {
            var x = pw * i / GX;
            var y = ph * j / GY;
            var X = x, Y = y, Z = 0, s = flat ? -1 : (x - mx) * nx + (y - my) * ny;
            if (!flat && s > 0) {
                var th = s / r;
                if (th < PI) {
                    var w = s - r * Math.sin(th);
                    X = x - nx * w; Y = y - ny * w;
                    Z = r * (1 - Math.cos(th));
                } else {
                    var w2 = 2 * s - PI * r;
                    X = x - nx * w2; Y = y - ny * w2;
                    Z = 2 * r;
                }
            }
            if (landIn > 0) {
                X = X * (1 - landIn) - x * landIn;
                Y = Y * (1 - landIn) + y * landIn;
                Z = Z * (1 - landIn);
            } else if (landOut > 0) {
                X = X * (1 - landOut) + x * landOut;
                Y = Y * (1 - landOut) + y * landOut;
                Z = Z * (1 - landOut);
            }
            meshData[n++] = bx + sideX * X;
            meshData[n++] = ty + Y;
            meshData[n++] = Z + 0.8;              /* bias over the under-page */
            meshData[n++] = x / pw;
            meshData[n++] = y / ph;
            meshData[n++] = 1 - x / pw;
            meshData[n++] = y / ph;
            meshData[n++] = 1;                    /* no shading on pages */
            meshData[n++] = 1;
        }
    }
}

function drawMesh(L, mirrored) {
    /* the sheet: front then back, sorted by the depth buffer */
    var frontPage = 2 * L.idx + 1;
    var backPage  = 2 * L.idx + 2;
    var texF = pageTex[frontPage] || paperTex;
    var texB = backPage <= N ? (pageTex[backPage] || paperTex) : paperTex;

    gl.useProgram(progTex);
    gl.uniform2f(locTex.uScale, 2 / vw, -2 / vh);
    gl.uniform1f(locTex.uAlpha, 1);
    gl.uniform1i(locTex.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindBuffer(gl.ARRAY_BUFFER, bufMesh);
    gl.bufferData(gl.ARRAY_BUFFER, meshData, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufIdx);
    gl.enableVertexAttribArray(locTex.aPos);
    gl.enableVertexAttribArray(locTex.aUV);
    gl.enableVertexAttribArray(locTex.aShade);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(mirrored ? gl.CCW : gl.CW);

    /* front face: the side facing the viewer at rest.
       forward flips sample (u,v); mirrored flips sample (u2,v). */
    gl.bindTexture(gl.TEXTURE_2D, mirrored ? texB : texF);
    gl.vertexAttribPointer(locTex.aPos, 3, gl.FLOAT, false, 36, 0);
    gl.vertexAttribPointer(locTex.aUV, 2, gl.FLOAT, false, 36, mirrored ? 20 : 12);
    gl.vertexAttribPointer(locTex.aShade, 1, gl.FLOAT, false, 36, 28);
    gl.cullFace(gl.BACK);
    gl.drawElements(gl.TRIANGLES, meshIndices.length, gl.UNSIGNED_SHORT, 0);

    /* back face */
    gl.bindTexture(gl.TEXTURE_2D, mirrored ? texF : texB);
    gl.vertexAttribPointer(locTex.aUV, 2, gl.FLOAT, false, 36, mirrored ? 12 : 20);
    gl.vertexAttribPointer(locTex.aShade, 1, gl.FLOAT, false, 36, 32);
    gl.cullFace(gl.FRONT);
    gl.drawElements(gl.TRIANGLES, meshIndices.length, gl.UNSIGNED_SHORT, 0);

    gl.disable(gl.CULL_FACE);
}

/* ── zoom transform: map a screen-px point through the current zoom/pan,
   anchored at the viewport centre. Identity at Z===1 with no pan, so the
   1x path renders byte-for-byte as before. ── */
function zx(x) { return (x - vw / 2) * Z + vw / 2 + PANx; }
function zy(y) { return (y - vh / 2) * Z + vh / 2 + PANy; }
function clampPan() {
    var single = (cur === 0 || cur === S);        /* cover / back = one page */
    var overW = Math.max(0, (single ? pw : 2 * pw) * Z - vw);
    var overH = Math.max(0, ph * Z - vh);
    PANx = clamp(PANx, -overW / 2 - 24, overW / 2 + 24);
    PANy = clamp(PANy, -overH / 2 - 24, overH / 2 + 24);
}
function setZoom(v) {
    var nz = clamp(v, 1, MAXZOOM);
    interacted = true;
    if (nz <= 1.001) { Z = 1; PANx = 0; PANy = 0; }
    else {
        Z = nz;
        if (live) { live = null; queued = null; }  /* a curl can't share the screen with a zoom */
        clampPan();
    }
    render();
    /* re-bake the visible pages crisp at the held zoom, debounced so a
       slider drag doesn't thrash the rasteriser */
    clearTimeout(texZoomT);
    texZoomT = setTimeout(function () { renderZoom = Z; ensure(); }, 180);
}
function stepZoomed(dir) {
    var nx = clamp(cur + dir, 0, S);
    if (nx === cur) return;
    cur = nx; PANx = 0; PANy = 0;                  /* recentre on the new page */
    updateUI(); render(); ensure();
}

/* ── scene ── */
function render() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (!N) return;

    var shift = shiftNow();
    var bx = vw / 2 + shift;            /* spine x */
    var ty = vh / 2 - ph / 2;           /* page top y */

    /* which pages lie flat on each side underneath everything */
    var leftPage = null, rightPage = null;
    if (live && live.dir === 1) {
        if (cur > 0) leftPage = 2 * cur;
        if (live.idx + 1 < S) rightPage = 2 * (live.idx + 1) + 1;
    } else if (live && live.dir === -1) {
        if (live.idx > 0) leftPage = 2 * live.idx;
        if (cur < S) rightPage = 2 * cur + 1;
    } else {
        if (cur > 0) leftPage = 2 * cur;
        if (cur < S) rightPage = 2 * cur + 1;
    }

    if (leftPage != null) {
        drawTexQuad(zx(bx - pw), zy(ty), pw * Z, ph * Z,
            leftPage <= N ? (pageTex[leftPage] || paperTex) : paperTex, false, 1);
    }
    if (rightPage != null) {
        drawTexQuad(zx(bx), zy(ty), pw * Z, ph * Z,
            rightPage <= N ? (pageTex[rightPage] || paperTex) : paperTex, false, 1);
    }

    /* the turning sheet */
    if (live) {
        var mirrored = live.dir === -1;
        computeMesh(live, mirrored, bx, ty);
        drawMesh(live, mirrored);
    }
}

/* ── pdf page -> texture ── */
function renderPage(n) {
    if (n < 1 || n > N) return Promise.resolve();
    var targetW = pw * renderZoom;
    var maxCss = MAXTEX / DPR();             /* keep the bitmap within GL limits */
    if (targetW > maxCss) targetW = maxCss;
    if (renderedAt[n] && Math.abs(renderedAt[n] - targetW) / renderedAt[n] < 0.2) return Promise.resolve();
    renderedAt[n] = targetW;
    return pdf.getPage(n).then(function (page) {
        var base = page.getViewport({ scale: 1 });
        var scale = (targetW * DPR()) / base.width;
        var vp = page.getViewport({ scale: scale });
        var c = document.createElement('canvas');
        c.width = Math.floor(vp.width);
        c.height = Math.floor(vp.height);
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        return page.render({ canvasContext: ctx, viewport: vp }).promise.then(function () {
            pageTex[n] = texFromCanvas(c, pageTex[n]);
            if (!live) render();
        });
    }).catch(function () { delete renderedAt[n]; });
}

function ensure() {
    var jobs = [];
    for (var i = cur - 2; i <= cur + 2; i++) {
        if (i < 0 || i >= S) continue;
        jobs.push(renderPage(2 * i + 1));
        jobs.push(renderPage(2 * i + 2));
    }
    return Promise.all(jobs);
}

/* ── layout ── */
function layout() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    canvas.width = Math.round(vw * DPR());
    canvas.height = Math.round(vh * DPR());
    var byW = vw * 0.98 / 2;
    var byH = vh * 0.86 / pageRatio;
    pw = Math.floor(Math.min(byW, byH));
    ph = Math.round(pw * pageRatio);
}

var resizeT = null;
window.addEventListener('resize', function () {
    layout();
    if (Z > 1) clampPan();
    render();
    clearTimeout(resizeT);
    resizeT = setTimeout(function () { ensure(); }, 350);
});

/* test hook */
window.__fb = {
    state: function () {
        return { cur: cur, live: !!live, p: live ? progress() : null, counter: counter.textContent,
                 z: Z, panx: PANx, pany: PANy, zoomable: ZOOMABLE };
    },
    setZoom: function (v) { setZoom(v); },
    force: function (dir, ox, oy, px, py) {   /* freeze a curl pose for testing */
        var idx = dir === 1 ? cur : cur - 1;
        live = {
            idx: idx, dir: dir,
            O: { x: ox * pw, y: oy * ph },
            P: clampP({ x: px * pw, y: py * ph }, { x: ox * pw, y: oy * ph }),
            V: { x: 0, y: 0 }, T: { x: px * pw, y: py * ph },
            dragging: true, t0: performance.now(), last: performance.now()
        };
        render();
    },
    unforce: function () { live = null; render(); }
};

/* ── boot ── */
layout();
pdfjsLib.getDocument(SRC).promise.then(function (doc) {
    pdf = doc;
    N = doc.numPages;
    S = Math.ceil(N / 2);
    return doc.getPage(1).then(function (p1) {
        var v = p1.getViewport({ scale: 1 });
        pageRatio = v.height / v.width;
        layout();
        updateUI();
        return ensure();
    });
}).then(function () {
    loading.style.display = 'none';
    window.__localPdfReady = true;
    if (ZOOMABLE && zoombar) zoombar.style.display = 'flex';   /* the reading aid rides mobile only */
    render();
    /* the cover lifts by itself: 2s after the book is ready, the first
       page turns open, unless the visitor already reached for it */
    setTimeout(function () {
        if (!interacted && cur === 0 && !live) flipNext();
    }, 2000);
}).catch(function (err) {
    loading.style.display = 'none';
    errorBox.style.display = 'flex';
    document.getElementById('errorSrc').textContent = SRC + (err && err.message ? ' · ' + err.message : '');
});

})();

}).catch(function(error){ document.getElementById("loading").style.display="none"; document.getElementById("error").style.display="flex"; });

document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
document.addEventListener('dragstart', function(e){ var t=e.target; if(t && (t.tagName==='IMG' || t.tagName==='VIDEO' || (t.closest && t.closest('a')))) e.preventDefault(); });
