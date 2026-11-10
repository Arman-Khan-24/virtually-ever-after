
(function(){
'use strict';

/* ── chrome links vs the pretty address ──
   On …/work/<slug> the document base is a virtual /work/ directory, so
   every bare-relative chrome link rots: about.html resolves to
   /work/about.html, the 404 bridge reads it as a slug, hands it to
   work.html?p=about.html, the lookup misses and the FIRST work opens
   wearing its pretty URL. Pin the static chrome (topbar + menu) to the
   site root before anyone can click. */
try{
  var _root = VEA.siteRoot();
  document.querySelectorAll('.topbar a[href], #menu a[href]').forEach(function(a){
    var h = a.getAttribute('href');
    if(!h || /^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(h)) return;
    a.setAttribute('href', _root + (h === './' ? '' : h));
  });
}catch(_){}

/* ── menu ── */
var menu = document.getElementById('menu'),
    menuBtn = document.getElementById('menuBtn');
try{ menu.setAttribute('aria-hidden', 'true'); }catch(_){}
function menuSet(open){
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
  /* closing the menu must not free the page while an overlay (film
     player / lite curtain) still holds it */
  var held = (typeof vpS !== 'undefined' && vpS) ||
             (typeof lov !== 'undefined' && lov && lov.classList.contains('open'));
  document.body.style.overflow = (open || held) ? 'hidden' : '';
  if(open){
    /* the overlay becomes a modal: focus goes IN, Tab is trapped, and a
       keystroke can never reach (or navigate) the page behind it */
    menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-modal', 'true');
    menuSet._last = document.activeElement;
    menuSet._trap = function(e){
      if(e.key !== 'Tab') return;
      var f = [].slice.call(menu.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'))
               .filter(function(el){ return el.offsetParent !== null; });
      if(!f.length) return;
      var first = f[0], last = f[f.length - 1], a = document.activeElement;
      if(e.shiftKey){ if(a === first || !menu.contains(a)){ e.preventDefault(); last.focus(); } }
      else { if(a === last || !menu.contains(a)){ e.preventDefault(); first.focus(); } }
    };
    document.addEventListener('keydown', menuSet._trap, true);
    var f0 = menu.querySelector('a[href],button:not([disabled])'); if(f0){ try{ f0.focus(); }catch(_){} }
  } else {
    if(menuSet._trap){ document.removeEventListener('keydown', menuSet._trap, true); menuSet._trap = null; }
    menu.removeAttribute('aria-modal'); menu.removeAttribute('role');
    var back = menuSet._last;
    if(back && back.focus){ try{ back.focus(); }catch(_){} } else { try{ menuBtn.focus(); }catch(_){} }
    menuSet._last = null;
  }
}
menuBtn.addEventListener('click', function(){ menuSet(!menu.classList.contains('open')); });
document.getElementById('menuClose').addEventListener('click', function(){ menuSet(false); });
menu.addEventListener('click', function(e){ if(e.target.closest('a')) menuSet(false); });
document.addEventListener('keydown', function(e){
  if(e.key !== 'Escape') return;
  if(menu.classList.contains('open')){ menuSet(false); return; }
  if(lov && lov.classList.contains('open')){ closeLite(); return; }
  if(vpS){ closePlayer(); return; }
});

function esc(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
var POSTER = '/assets/img/example.png';

function param(){
  try{ return new URLSearchParams(location.search).get('p') || ''; }catch(_){ return ''; }
}
/* pretty address: …/work/<slug>, the slug is column O of the sheet */
function pathSlug(){
  var m = location.pathname.match(/\/work\/([^\/]+)\/?$/);
  if(!m) return '';
  try{ return decodeURIComponent(m[1]); }catch(_){ return m[1]; }
}
/* <base> makes bare #fragments resolve to the root, the skip link
   scrolls instead of navigating */
var skipLink = document.querySelector('a.sr-only');
if(skipLink) skipLink.addEventListener('click', function(e){
  e.preventDefault();
  var mn = document.getElementById('main');
  if(mn) mn.scrollIntoView();
});
function domainOf(u){
  try{ return new URL(u).hostname.replace(/^www\./,''); }catch(_){ return u; }
}

function isVidUrl(u){ return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(u); }
/* what fills a website slot: the column-L preview, image / gif / video,
   or a LIVE html page (pointer-shy: the tap still belongs to Launch) */
function prevEl(url, label){
  if(isHlsSrc(url)){
    return '<video class="prev-hls" muted loop autoplay playsinline preload="metadata" data-hls="' + esc(url) + '"></video>';
  }
  if(isVidUrl(url)){
    return '<video muted loop autoplay playsinline preload="metadata" src="' + esc(VEA.videoSrc(url)) + '"></video>';
  }
  if(isImgUrl(url)){
    return '<img src="' + esc(url) + '" alt="' + esc(label) + '" loading="lazy" onerror="this.src=\'' + POSTER + '\'"/>';
  }
  return '<iframe class="prev-live" data-src="' + esc(url) + '" title="' + esc(label) +
         '" loading="lazy" tabindex="-1" aria-hidden="true"' +
         ' allow="autoplay; fullscreen; encrypted-media" referrerpolicy="no-referrer"></iframe>';
}

/* one archive media, no frame, contained; click a film to pause/play.
   Videos and images carry an Enlarge chip (same lifted look as the
   archive cards) that forces TRUE full screen, Bunny's adaptive
   stream must not decide the size, and plays with sound on.        */
function isHlsSrc(u){ return /\.m3u8(\?|#|$)/i.test(u); }
var CHIP_ZOOM = '<button class="card-chip chip-zoom" type="button" aria-label="View full screen">Enlarge ⤢</button>';
function mediaSlot(m, w, label){
  /* column N ("activation button") = no → no Enlarge / Launch chips */
  var zoomChip = (w && w.noCta) ? '' : CHIP_ZOOM;
  if(m.k === 'video'){
    var srcAttr = isHlsSrc(m.src)
      ? ' data-hls="' + esc(m.src) + '"'
      : ' data-src="' + esc(VEA.videoSrc(m.src)) + '"';
    /* an image thumbnail from the sheet makes the film's poster */
    var pth = (w && (w.thumb || w.lprev)) || '';
    var pos = (pth && isImgUrl(pth)) ? pth : POSTER;
    return '<div class="media-slot fit"><span class="vid-wrap">' +
      '<video muted loop playsinline preload="metadata" poster="' + esc(pos) +
      '" style="cursor:pointer"' + srcAttr + ' aria-label="' + esc(label) + '"' +
      ' data-pclient="' + esc(w ? w.client : '') + '" data-ptitle="' + esc(w ? (w.title || '') : '') + '"' +
      ' data-pdesc="' + esc(w ? (w.jinfo || w.desc || '') : '') + '"></video>' +
      '<button class="snd-chip" type="button" aria-label="Toggle sound">' +
      '<svg class="ico-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l5 6M21 9l-5 6"/></svg>' +
      '<svg class="ico-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg>' +
      '</button>' + zoomChip + '</span></div>';
  }
  if(m.k === 'embed'){
    return '<div class="media-slot ratio"><iframe data-src="' + esc(m.src) + '" title="' + esc(label) +
      '" loading="lazy" allow="autoplay; fullscreen; encrypted-media" allowfullscreen referrerpolicy="no-referrer"></iframe></div>';
  }
  if(m.k === 'image'){
    return '<div class="media-slot fit"><span class="vid-wrap">' +
      '<img src="' + esc(m.src) + '" alt="' + esc(label) + '" loading="lazy"/>' +
      zoomChip + '</span></div>';
  }
  if(m.k === 'pdf'){
    /* desktop: the page-curl flipbook exhibit (flipbook.html) right in
       the slot, Enlarge = the slot goes full page, Close hands it back.
       Mobile keeps the plain scrolling reader unchanged. */
    if(window.innerWidth > 860){
      return '<div class="media-slot ratio pdf-flip">' +
        '<iframe src="/flipbook.html?pdf=' + encodeURIComponent(m.src) + '" title="' + esc(label) +
        '" loading="lazy" allow="fullscreen"></iframe>' +
        '<button class="card-chip chip-zoom pdf-zoom" type="button" aria-label="View full page">Enlarge ⤢</button>' +
        '<button class="card-chip pdf-close" type="button" aria-label="Close full page">Close ✕</button>' +
        '</div>';
    }
    return '<div class="pdf-reader" data-pdf="' + esc(m.src) + '"><span class="pdf-loading">Loading PDF…</span></div>';
  }
  /* website, the sheet's M column picks the format:
     "yes" → the site runs LIVE right in the slot, interactive, no
             Launch step; the page around it keeps scrolling normally
     empty → the classic format: the column-L preview runs inside the
             web area and Launch opens the site in its own tab */
  if(w && w.wlive){
    return '<div class="media-slot web-live"><iframe data-src="' + esc(m.src) + '" title="' + esc(label) +
      '" loading="lazy" allow="autoplay; fullscreen; encrypted-media" referrerpolicy="no-referrer"></iframe></div>';
  }
  var prev = (w && (w.lprev || w.thumb)) || '';
  var prevInner = prev ? prevEl(prev, label) : '<img src="' + POSTER + '" alt="" loading="lazy"/>';
  if(w && w.noCta){
    /* activation off: the preview shows, nothing launches anywhere */
    return '<div class="media-slot ratio">' + prevInner + '</div>';
  }
  return '<a class="media-slot ratio" style="display:block" href="' + esc(m.src) +
    '" target="_blank" rel="noopener noreferrer">' +
    prevInner +
    '<span class="pt-launch"><span>Launch ' + esc(domainOf(m.src)) + ' ↗</span></span></a>';
}

/* hls.js on demand, shared by the media slots and the dex thumbs */
var hlsJs = null;
function loadHlsJs(){
  if(window.Hls) return Promise.resolve();
  if(!hlsJs){
    hlsJs = new Promise(function(res){
      var s = document.createElement('script');
      s.src = '/lib/hls.min.js';
      s.onload = res; s.onerror = res;
      document.head.appendChild(s);
    });
  }
  return hlsJs;
}
function wireHls(v, url){
  /* hls.js FIRST (it exists on iPhone too via ManagedMediaSource):
     nothing loads until the top rung is pinned, so no blurry fragment
     can ever reach the buffer, crisp from frame one, crisp on loops */
  loadHlsJs().then(function(){
    if(window.Hls && Hls.isSupported()){
      /* iPhone runs hls.js over ManagedMediaSource, it refuses to
         open unless remote playback is off */
      try{ v.disableRemotePlayback = true; }catch(_){}
      /* phone: AUTOMATIC quality sized to the element, fast, light,
         adaptive. Desktop: nothing loads until the top rung is pinned,
         so films can never open or loop blurry on the big screen. */
      var mob = window.innerWidth <= 860;
      var h = new Hls(mob
        ? {capLevelToPlayerSize: true, maxBufferLength: 8}
        : {autoStartLoad: false, maxBufferLength: 10});
      h.loadSource(url);
      h.attachMedia(v);
      v._hls = h;
      h.on(Hls.Events.MANIFEST_PARSED, function(){
        if(!mob){
          try{
            h.startLevel = h.levels.length - 1;
            h.currentLevel = h.levels.length - 1;
          }catch(_){}
          h.startLoad(0);
        }
        v.play().catch(function(){});
      });
      /* safety net: if nothing has arrived shortly, hand the film to
         the native player, ANY quality beats a black screen */
      setTimeout(function(){
        if(v.readyState !== 0) return;
        if(!v.canPlayType('application/vnd.apple.mpegurl')) return;
        try{ h.destroy(); }catch(_){}
        v._hls = null;
        v.src = url;
        v.play().catch(function(){});
      }, mob ? 4000 : 10000);
    } else if(v.canPlayType('application/vnd.apple.mpegurl')){
      v.src = url;
    }
  });
}
function loadSlotMedia(v){
  if(v.src || v._hls) return;
  if(v.dataset.hls) wireHls(v, v.dataset.hls);
  else if(v.dataset.src) v.src = v.dataset.src;
}

var lazyIO = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if(!en.isIntersecting) return;
    var inner = en.target.querySelector('video,iframe');
    if(inner && !inner.src){
      if(inner.tagName === 'VIDEO') loadSlotMedia(inner);
      else if(inner.dataset.src) inner.src = inner.dataset.src;
    }
    if(inner && inner.tagName === 'VIDEO') inner.play().catch(function(){});
    lazyIO.unobserve(en.target);
  });
}, {threshold:.25, rootMargin:'160px 0px'});

/* TRUE full screen, whatever the device offers; the CSS class is the
   last-resort pseudo-fullscreen (e.g. images on iPhone). The native
   video UI is never used, films go through our own player below.   */
function forceFullscreen(el){
  var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if(fn){ try{ fn.call(el); return; }catch(_){} }
  el.classList.add('fs-fallback');
  document.body.style.overflow = 'hidden';   /* the page holds still behind */
}
/* leaving fullscreen (pdf flipbooks): HLS goes back to auto quality */
document.addEventListener('fullscreenchange', function(){
  if(document.fullscreenElement) return;
  document.querySelectorAll('video').forEach(function(v){
    if(v._hls){ try{ v._hls.currentLevel = -1; }catch(_){} }
  });
});

/* ═════ CUSTOM FULL-SCREEN FILM PLAYER ════════════════════════════════
   Enlarge on a film: the player DESCENDS from the top over the page, the same move as a work page opening, and lifts back up on BACK,
   leaving you exactly where you were. Real fullscreen is requested on
   the WRAPPER so the browser's native player UI can never appear.
   Our UI: BACK top left, client + title bottom left, time over a
   hairline bar whose played part runs in chrome. On desktop the
   play/pause chip rides the cursor; on touch it sits pinned top right
   and the UI never hides. Narrow/square films get the same film
   BEHIND them, fit to width, blurred + pixelated, so the sides never
   sit empty. BACK also takes the sound away again.                  ═ */
var vp = null, vpS = null;
var HOVERABLE = window.matchMedia('(hover: hover)').matches;
/* v3: a record DECODES onto the screen, the identity, the brief and
   the media info all evolve out of raw characters, like the works line */
function scrambleTo(el, txt){ VEA.scrambleTo(el, txt); }
function fmtT(s){
  s = Math.max(0, Math.floor(isFinite(s) ? s : 0));
  var m = Math.floor(s / 60);
  return ('0' + m).slice(-2) + ':' + ('0' + (s % 60)).slice(-2);
}
/* ── blurred / pixelated backdrop: the film drawn to a tiny canvas
      (the mosaic) stretched full screen behind the contained film ── */
var bgCv = null, bgCtx = null, bgRaf = null;
function bgLoop(){
  bgRaf = null;
  if(!vpS || !vp.classList.contains('bgon')) return;
  var v = vpS.v;
  if(v.videoWidth){
    var cw = bgCv.width, ch = bgCv.height;
    var dh = cw * v.videoHeight / v.videoWidth;      /* fit to width */
    try{ bgCtx.drawImage(v, 0, (ch - dh) / 2, cw, dh); }catch(_){}
  }
  bgRaf = requestAnimationFrame(bgLoop);
}
/* only films that leave side bars (portrait / square) need the backdrop;
   wide desktop formats don't */
function syncBg(){
  if(!vpS) return;
  var v = vpS.v;
  var needs = !!(v.videoWidth &&
    (v.videoWidth / v.videoHeight) < (window.innerWidth / window.innerHeight) - 0.01);
  vp.classList.toggle('bgon', needs);
  if(needs){
    var cols = 56;                                   /* tiny buffer = the mosaic */
    bgCv.width = cols;
    bgCv.height = Math.max(1, Math.round(cols * window.innerHeight / window.innerWidth));
    if(!bgRaf) bgRaf = requestAnimationFrame(bgLoop);
  }
}
window.addEventListener('resize', function(){ if(vpS) syncBg(); });
function buildPlayer(){
  vp = document.createElement('div');
  vp.className = 'vp';
  vp.hidden = true;
  vp.innerHTML =
    '<canvas class="vp-bg" aria-hidden="true"></canvas>' +
    '<button class="vp-back vp-ui" type="button">Back</button>' +
    '<button class="vp-menu vp-ui" type="button" aria-controls="menu">Menu</button>' +
    '<button class="vp-toggle vp-ui" type="button" aria-label="Play / pause">Pause</button>' +
    '<div class="vp-info vp-ui"><span class="vp-client"></span><h3 class="vp-title"></h3>' +
    '<p class="vp-desc"></p></div>' +
    '<span class="vp-time vp-ui">00:00 / 00:00</span>' +
    '<div class="vp-bar vp-ui" aria-label="Seek"><i class="vp-fill"></i><i class="vp-knob"></i></div>';
  document.body.appendChild(vp);
  var tog = vp.querySelector('.vp-toggle'),
      bar = vp.querySelector('.vp-bar'),
      fill = vp.querySelector('.vp-fill'),
      knob = vp.querySelector('.vp-knob'),
      time = vp.querySelector('.vp-time');
  bgCv = vp.querySelector('.vp-bg');
  bgCtx = bgCv.getContext('2d');

  /* the controls and the texts idle away after two seconds while the
     film runs, a pointer move (desktop) or a tap (touch) summons them
     back, and they slip away again; a pause always keeps them on */
  var idleT = null, wasIdle = false;
  function wake(){
    vp.classList.remove('idle');
    clearTimeout(idleT);
    idleT = setTimeout(function(){
      if(vpS && !vpS.v.paused) vp.classList.add('idle');
    }, 2000);
  }
  vp._wake = wake;
  /* remember whether the UI was hidden when the finger landed, that
     tap only summons it back, it must not also pause the film */
  vp.addEventListener('pointerdown', function(){
    wasIdle = vp.classList.contains('idle');
  }, true);
  vp.addEventListener('pointermove', wake);
  vp.addEventListener('pointerdown', wake);
  /* the play/pause chip follows the mouse, its clicks fall through to
     the film (pointer-events:none on desktop) */
  if(HOVERABLE){
    vp.addEventListener('pointermove', function(e){
      tog.style.left = e.clientX + 'px';
      tog.style.top  = e.clientY + 'px';
      /* over Back / Menu / the seek bar the chip steps aside so the
         invert ball can land the click (CSS hides it, data.js restores
         the ball) */
      var overCtrl = !!(e.target.closest &&
        e.target.closest('.vp-back, .vp-menu, .vp-bar'));
      vp.classList.toggle('on-ctrl', overCtrl);
    });
  }

  function togglePlay(){
    if(!vpS) return;
    var v = vpS.v;
    if(v.paused){ v._userPaused = false; v.play().catch(function(){}); }
    else { v._userPaused = true; v.pause(); }
  }
  /* touch: a double-tap on the side thirds hops the film ±10s, a lone
     tap still toggles play, it just waits a beat for its twin */
  var tapT = 0, tapTimer = null;
  function filmTap(e){
    if(wasIdle){ wasIdle = false; return; }   /* that touch only woke the UI */
    if(HOVERABLE){ togglePlay(); return; }
    var now = performance.now();
    if(now - tapT < 320 && tapTimer){
      clearTimeout(tapTimer); tapTimer = null; tapT = 0;
      if(!vpS) return;
      var v = vpS.v, x = e.clientX, w = window.innerWidth;
      if(x < w / 3){ try{ v.currentTime = Math.max(0, v.currentTime - 10); }catch(_){} }
      else if(x > w * 2 / 3){ try{ v.currentTime = Math.min(v.duration || 1e9, v.currentTime + 10); }catch(_){} }
      wake();
      return;
    }
    tapT = now;
    /* a lone tap on the film only tucks the UI away, pausing belongs
       to the Pause chip alone, a touch must never stop the film */
    tapTimer = setTimeout(function(){
      tapTimer = null;
      if(vpS && !vpS.v.paused) vp.classList.add('idle');
    }, 320);
  }
  vp.addEventListener('click', function(e){
    if(e.target.closest('.vp-back')){ closePlayer(); return; }
    if(e.target.closest('.vp-menu')){ menuSet(true); return; }
    if(e.target.closest('.vp-toggle')){ togglePlay(); return; }
    if(e.target.closest('.vp-bar')) return;
    if(e.target.tagName === 'VIDEO' || e.target === vp || e.target === bgCv) filmTap(e);
  });
  /* touch: a decisive downward swipe hands the page back, the same
     move as BACK, without reaching for the corner */
  var swY = null, swX = null;
  vp.addEventListener('touchstart', function(e){
    if(e.touches.length !== 1 || (e.target.closest && e.target.closest('.vp-bar'))){ swY = null; return; }
    swY = e.touches[0].clientY;
    swX = e.touches[0].clientX;
  }, {passive:true});
  vp.addEventListener('touchend', function(e){
    if(swY === null) return;
    var t = e.changedTouches[0];
    var dy = t.clientY - swY, dx = Math.abs(t.clientX - swX);
    swY = null;
    if(dy > 90 && dy > dx * 1.6) closePlayer();
  }, {passive:true});
  vp.addEventListener('play', function(){ tog.textContent = 'Pause'; wake(); }, true);
  vp.addEventListener('pause', function(){ tog.textContent = 'Play'; wake(); }, true);
  vp.addEventListener('timeupdate', function(){
    if(!vpS) return;
    var v = vpS.v;
    if(v.duration > 0){
      var pct = (v.currentTime / v.duration * 100) + '%';
      fill.style.width = pct;
      knob.style.left = pct;
    }
    time.textContent = fmtT(v.currentTime) + ' / ' + fmtT(v.duration);
  }, true);

  /* click / drag anywhere on the bar to seek */
  function seekTo(clientX){
    if(!vpS) return;
    var v = vpS.v, r = bar.getBoundingClientRect();
    var p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    if(v.duration > 0){ try{ v.currentTime = p * v.duration; }catch(_){} }
    fill.style.width = (p * 100) + '%';
    knob.style.left = (p * 100) + '%';
  }
  bar.addEventListener('pointerdown', function(e){
    e.preventDefault();
    try{ bar.setPointerCapture(e.pointerId); }catch(_){}
    seekTo(e.clientX);
    var move = function(ev){ seekTo(ev.clientX); };
    var up = function(){
      bar.removeEventListener('pointermove', move);
      bar.removeEventListener('pointerup', up);
      bar.removeEventListener('pointercancel', up);
    };
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', up);
    bar.addEventListener('pointercancel', up);
  });
}
var vpHeld = null;              /* what this player hushed, to wake on the way back */
function openPlayer(v){
  if(vpS) return;
  if(!vp) buildPlayer();
  loadSlotMedia(v);
  var r = v.getBoundingClientRect();
  vpS = {v: v, parent: v.parentNode, next: v.nextSibling, css: v.style.cssText, hid: v.hidden};
  v.hidden = false;
  /* a placeholder keeps the film's spot open for the return */
  var ph = document.createElement('span');
  ph.style.cssText = 'display:block;width:' + r.width + 'px;height:' + r.height + 'px;';
  vpS.ph = ph;
  vpS.parent.insertBefore(ph, vpS.next);
  vp.querySelector('.vp-client').textContent = v.dataset.pclient || '';
  vp.querySelector('.vp-title').textContent = v.dataset.ptitle || '';
  vp.querySelector('.vp-desc').textContent = v.dataset.pdesc || '';
  vp.hidden = false;
  /* the page behind holds still, otherwise scrolling under the film
     moves you somewhere else (even onto the works UI) before BACK */
  document.body.style.overflow = 'hidden';
  vp.appendChild(v);
  v.style.cssText = '';
  /* the player descends from the top, no scaling */
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    vp.classList.add('open');
    try{ VEA.fitFilmDesc(vp); }catch(_){}
  }); });
  /* fresh curtain, fresh UI: everything visible, the idle clock armed */
  if(vp._wake) vp._wake();
  /* ONE PICTURE AT A TIME. Muting the others was never enough, they went on
     decoding behind a film nobody could see through, and on a phone the page
     holds a hero slide and five index thumbnails on top of whatever the room
     is running. Everything but this film stops, and starts again on the way
     back. When a 3D room is up it owns the rule (its own curtains would
     restart themselves on the next frame otherwise); on the flat page the
     same sweep is done here. */
  if(window.__veaSolo){ try{ window.__veaSolo(true); }catch(_){} }
  else {
    vpHeld = [];
    try{
      document.querySelectorAll('video').forEach(function(o){
        if(o !== v && !o.paused){ vpHeld.push(o); o.pause(); }
      });
    }catch(_){}
  }
  document.querySelectorAll('#wkMedia video').forEach(function(o){ if(o !== v) o.muted = true; });
  document.querySelectorAll('#wkMedia .snd-chip.on').forEach(function(c){ c.classList.remove('on'); });
  v.muted = false;
  if(v._hls){ try{ v._hls.currentLevel = v._hls.levels.length - 1; }catch(_){} }
  v._userPaused = false;
  /* the film always starts from the very beginning in the player */
  try{ if(v.readyState > 0) v.currentTime = 0; }catch(_){}
  v.addEventListener('loadedmetadata', function once(){
    v.removeEventListener('loadedmetadata', once);
    if(vpS && vpS.v === v){ try{ v.currentTime = 0; }catch(_){} }
  });
  v.play().catch(function(){});
  /* portrait / square films get the blurred-mosaic backdrop */
  vpS.onMeta = syncBg;
  v.addEventListener('loadedmetadata', vpS.onMeta);
  syncBg();
  /* NO Fullscreen API here: the player is just a page like any other, no browser fullscreen toast can ever appear */
  vp._wake();
}
function closePlayer(){
  if(!vpS) return;
  var st = vpS; vpS = null;
  var v = st.v;
  if(window.__veaSolo){ try{ window.__veaSolo(false); }catch(_){} }
  else if(vpHeld){ vpHeld.forEach(function(o){ try{ o.play().catch(function(){}); }catch(_){} }); vpHeld = null; }
  /* the sound goes away again */
  v.muted = true;
  if(v._hls){ try{ v._hls.currentLevel = -1; }catch(_){} }
  v.removeEventListener('loadedmetadata', st.onMeta);
  /* the curtain rolls back up, the page below is exactly where you
     left it (or the media page, if the film was opened from there) */
  document.body.style.overflow =
    ((lov && lov.classList.contains('open')) ||
     menu.classList.contains('open')) ? 'hidden' : '';
  vp.classList.remove('open');
  setTimeout(function(){
    vp.classList.remove('bgon');
    v.style.cssText = st.css;
    st.parent.insertBefore(v, st.ph);
    st.ph.remove();
    vp.hidden = true;
    vp.classList.remove('idle');
    v._userPaused = false;
    if(st.hid){ v.hidden = true; v.pause(); }   /* hidden main films rest again */
    else v.play().catch(function(){});
  }, window.innerWidth > 760 ? 3300 : 380);
}

function initPdfReaders(host){
  host.querySelectorAll('.pdf-reader').forEach(function(reader){
    VEA.loadPdfJs().then(function(lib){ return lib.getDocument(reader.dataset.pdf).promise; })
      .then(function(pdf){
        reader.innerHTML = '';
        VEA.paintPdfPages(reader, pdf, function(){ return reader.clientWidth - 2; });
      }).catch(function(){
        reader.innerHTML = '<span class="pdf-loading">The document could not be displayed.</span>';
      });
  });
}

/* ═════ DESKTOP MEDIA EXPERIENCE, one media per screen ═══════════════
   Scrolling steps through the medias full screen; a fixed HUD carries
   the ACTIVE media's title + J-column description bottom left, an
   Enlarge (or Launch, for websites) button bottom centre, and square
   thumbnails bottom right, click one to jump there. After the last
   media the long text scrolls in, then the works UI as before.      ═ */
var hud = document.getElementById('wkHud'),
    hudInfoLayer = document.getElementById('wkHudInfo'),
    hudTitle = document.getElementById('hudTitle'),
    hudDesc = document.getElementById('hudDesc'),
    hudCta = document.getElementById('hudCta'),
    hudThumbs = document.getElementById('hudThumbs'),
    ihud = document.getElementById('wkIhud'),
    slideEls = [], slideData = [], activeSlide = -1,
    mediaHost = null;

/* a thumbnail can be ANY format the sheet holds: .m3u8 goes through
   hls.js, direct files play natively, stills are images, and anything
   else (an .html exhibit, a whole website) runs LIVE on the stage */
function isMediaVid(u){ return isVidUrl(u) || isHlsSrc(u); }
function isImgUrl(u){ return /\.(png|jpe?g|gif|webp|avif|svg|bmp)(\?|#|$)/i.test(String(u||'')); }
function thumbVideoTag(t, meta){
  var srcAttr = isHlsSrc(t)
    ? ' data-hls="' + esc(t) + '"'
    : ' src="' + esc(VEA.videoSrc(t)) + '"';
  return '<video class="thumb-media" muted loop autoplay playsinline preload="metadata"' +
         srcAttr + (meta || '') + '></video>';
}
/* a live page on the stage: lazy (data-src) so only the ACTIVE slide
   boots it; the fixed texts ride visually above but never block the
   mouse, the page underneath stays fully interactive */
function liveFrameTag(u, title){
  return '<iframe class="thumb-live" data-src="' + esc(u) + '" title="' + esc(title || 'Live page') +
         '" loading="lazy" allow="autoplay; fullscreen; encrypted-media" referrerpolicy="no-referrer"></iframe>';
}
/* whatever the sheet holds becomes the stage visual */
function stageThumb(t, w, meta){
  if(isMediaVid(t)) return thumbVideoTag(t, meta);
  if(isImgUrl(t)){
    return '<img class="thumb-media" src="' + esc(t) + '" alt="' + esc(w.title || '') +
           '" loading="lazy" onerror="this.src=\'' + POSTER + '\'"/>';
  }
  return liveFrameTag(t, w.title);
}
function slideMediaHtml(s){
  var m = s.m, w = s.w;
  var meta = ' data-pclient="' + esc(w.client) + '" data-ptitle="' + esc(w.title || '') +
             '" data-pdesc="' + esc(w.jinfo || w.desc || '') + '"';
  if(m.k === 'video'){
    var srcAttr = isHlsSrc(m.src)
      ? ' data-hls="' + esc(m.src) + '"'
      : ' data-src="' + esc(VEA.videoSrc(m.src)) + '"';
    /* the thumbnail, WHATEVER the sheet holds (film, gif, png, an html
       page, a website) and whichever column it sits in (I, else L), takes the stage until Play; the MAIN film waits hidden and is
       what the player actually opens. Only a work with no thumbnail at
       all previews its own film on the stage. */
    var tv = w.thumb || w.lprev || '';
    var mainTag = '<video class="main-media" hidden muted loop playsinline preload="none"' + srcAttr + meta + '></video>';
    if(tv) return stageThumb(tv, w, meta) + mainTag;
    return '<video muted loop playsinline preload="metadata" poster="' + POSTER + '"' + srcAttr + meta + '></video>';
  }
  if(m.k === 'image'){
    return '<img src="' + esc(m.src) + '" alt="' + esc(w.title || '') + '" loading="lazy"/>';
  }
  if(m.k === 'pdf'){
    /* the stage shows the work's own thumbnail (film / gif / still /
       live page), whatever its format, Investigate opens the pdf; the
       first page paints in only when the sheet has no thumbnail at all */
    var tp = w.thumb || w.lprev || '';
    if(tp) return stageThumb(tp, w, meta);
    return '<div class="pdf-still" data-pdf="' + esc(m.src) + '">' +
           '<img src="' + POSTER + '" alt="' + esc(w.title || 'PDF') + '"/></div>';
  }
  if(m.k === 'embed'){
    /* the thumbnail (I, else L column) runs on the stage; Play descends the film */
    var te = w.thumb || w.lprev || '';
    if(te) return stageThumb(te, w, meta);
    return '<img class="thumb-media" src="' + POSTER + '" alt="' + esc(w.title || '') + '" loading="lazy"/>';
  }
  /* website: the preview thumbnail runs on the stage whatever it is
     (film / still / live html). With no thumbnail, an M-column "yes"
     work runs the SITE ITSELF live right there; a launch-style work
     keeps its poster still. */
  var prev = w.lprev || w.thumb || '';
  if(prev) return stageThumb(prev, w, meta);
  if(w.wlive) return liveFrameTag(m.src, w.title);
  return '<img class="thumb-media" src="' + POSTER + '" alt="' + esc(w.title || '') + '" loading="lazy"/>';
}
/* the corner squares are STILLS: a film's FIRST FRAME, an image's small
   version, they never run; the stage is where thumbnails play */
function sqVideoTag(t){
  var srcAttr = isHlsSrc(t)
    ? ' data-hls="' + esc(t) + '"'
    : ' src="' + esc(VEA.videoSrc(t)) + '"';
  return '<video class="sq-still" muted playsinline preload="metadata"' + srcAttr + '></video>';
}
function thumbSq(s){
  var m = s.m, w = s.w;
  var t = w.thumb || w.lprev || '';
  if(t && isMediaVid(t)) return sqVideoTag(t);
  if(t && isImgUrl(t)) return '<img src="' + esc(t) + '" alt="" loading="lazy" onerror="this.src=\'' + POSTER + '\'"/>';
  /* live-page thumbs keep the wordmark still in the squares, a whole
     site never boots inside a 54px box */
  if(t) return '<img src="' + POSTER + '" alt=""/>';
  if(m.k === 'video') return sqVideoTag(m.src);
  if(m.k === 'image') return '<img src="' + esc(m.src) + '" alt="" loading="lazy"/>';
  return '<img src="' + POSTER + '" alt=""/>';   /* pdf: replaced by the cover paint */
}
function buildSlides(host, medias){
  mediaHost = host;
  slideData = medias;
  host.classList.add('slides');
  /* ONE fixed full-screen stage (sticky): nothing ever slides past, the medias cross-fade IN PLACE while the screen holds still. The
     wrapper's height gives each media one viewport of scroll; after
     the last one, normal scrolling resumes (long text → works UI). */
  host.innerHTML =
    '<div class="wk-stagewrap" id="wkStageWrap" style="height:' + (medias.length * 100) + 'svh">' +
      '<div class="wk-stage">' +
        medias.map(function(s, i){
          return '<div class="wk-frame' + (i === 0 ? ' on' : '') + '" data-i="' + i + '">' +
                 slideMediaHtml(s) + '</div>';
        }).join('') +
      '</div>' +
    '</div>';
  stageWrap = document.getElementById('wkStageWrap');
  slideEls = Array.prototype.slice.call(host.querySelectorAll('.wk-frame'));
  /* pdf frames get their real first page painted as the still cover */
  host.querySelectorAll('.pdf-still').forEach(function(el){
    VEA.paintPdfCover(el, el.dataset.pdf).catch(function(){});
  });
  if(!medias.length) return;
  hud.hidden = false;
  hudInfoLayer.hidden = false;
  hudThumbs.innerHTML = medias.map(function(s, i){
    return '<button type="button" data-i="' + i + '" aria-label="Media ' + (i + 1) + '">' + thumbSq(s) + '</button>';
  }).join('');
  medias.forEach(function(s, i){
    /* pdf squares get the real first page only when no thumb exists */
    if(s.m.k === 'pdf' && !(s.w.thumb || s.w.lprev))
      VEA.paintPdfCover(hudThumbs.children[i], s.m.src).catch(function(){});
  });
  /* square films freeze on their first frame (hls wired when needed) */
  hudThumbs.querySelectorAll('video.sq-still').forEach(function(v){
    if(v.dataset.hls) wireHls(v, v.dataset.hls);
    v.addEventListener('loadeddata', function(){
      try{ v.pause(); v.currentTime = 0.001; }catch(_){}
    }, {once: true});
  });
  hudThumbs.addEventListener('click', function(e){
    if(!hudLive()) return;
    var b = e.target.closest && e.target.closest('button[data-i]');
    if(!b) return;
    goSlide(+b.dataset.i);
  });
  hudCta.addEventListener('click', ctaAction);
  document.getElementById('hudPrev').addEventListener('click', function(){ if(hudLive()) goSlide(activeSlide - 1); });
  document.getElementById('hudNext').addEventListener('click', function(){ if(hudLive()) goSlide(activeSlide + 1); });
  window.addEventListener('scroll', onSlideScroll, {passive: true});
  window.addEventListener('resize', onSlideScroll);
  /* ONE wheel gesture = ONE media, no harsh half-states: while the
     stage is pinned the wheel steps cleanly; at either end it releases
     the page to normal scrolling (header above, long text below) */
  window.addEventListener('wheel', function(e){
    if(!stageWrap || !slideEls.length) return;
    if(vpS || (lov && lov.classList.contains('open'))) return;
    var r = stageWrap.getBoundingClientRect(), vh = window.innerHeight;
    if(!(r.top <= 1 && r.bottom >= vh - 1)) return;
    var dir = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
    if(!dir) return;
    var next = activeSlide + dir;
    if(next < 0 || next > slideData.length - 1) return;   /* release at the ends */
    e.preventDefault();
    var now = performance.now();
    if(now - stepAt < 650) return;
    stepAt = now;
    goSlide(next);
  }, {passive: false});
  /* ← → walk the square thumbnails, ENTER opens the current one, the
     flat stage answers the keyboard exactly like the immersive rotunda */
  window.addEventListener('keydown', function(e){
    if(!hudLive()) return;                                   /* stage not pinned */
    if(vpS || (lov && lov.classList.contains('open'))) return;   /* player / curtain up */
    var menuEl = document.getElementById('menu');
    if(menuEl && menuEl.classList.contains('open')) return;
    if(e.key === 'ArrowLeft'){ e.preventDefault(); goSlide(activeSlide - 1); }
    else if(e.key === 'ArrowRight'){ e.preventDefault(); goSlide(activeSlide + 1); }
    else if(e.key === 'Enter'){ e.preventDefault(); ctaAction(); }
  });
  activateFrame(0);
  onSlideScroll();
}
var stageWrap = null, stepAt = 0, stagePinned = false;
/* the HUD only acts while it is actually shown (stage pinned), a
   belt-and-braces guard on top of the CSS pointer gating, so a faded
   HUD can never fire actions over the works UI below the page */
function hudLive(){ return hud.classList.contains('on'); }
/* jump the runway to a media's band, the sticky stage never moves
   visually, so the cross-fade IS the whole transition */
function goSlide(i){
  if(!stageWrap) return;
  i = Math.max(0, Math.min(slideData.length - 1, i));
  var top = window.scrollY + stageWrap.getBoundingClientRect().top + i * window.innerHeight;
  window.scrollTo({top: top, behavior: 'instant'});
}
/* the one activation button, bottom centre, wears the right verb.
   Websites read the sheet's M column: "yes" explores IN PLACE (the
   curtain), empty launches the site in a new tab like before. */
var CTA_LABEL = {video:'Play ▶', embed:'Play ▶', pdf:'Investigate ⤢', image:'Enlarge ⤢'};
function webVerb(w){ return w.wlive ? 'Explore ⤢' : 'Launch ↗'; }
function activateFrame(idx){
  slideEls.forEach(function(f, j){
    f.classList.toggle('on', j === idx);
    /* only the VISIBLE film, the hidden main film must never load or
       run behind an image thumbnail; Play is what wakes it */
    var v = f.querySelector('video:not([hidden])');
    if(v){
      /* films only run while the stage itself is on screen */
      if(j === idx && stagePinned){ loadSlotMedia(v); v.play().catch(function(){}); }
      else v.pause();
    }
    /* a live page boots only when its slide takes the stage, and then
       stays warm so your place in it survives slide changes */
    var fr = f.querySelector('iframe.thumb-live[data-src]');
    if(fr && j === idx && !fr.getAttribute('src')) fr.src = fr.dataset.src;
  });
  var s = slideData[idx], w = s.w;
  scrambleTo(hudTitle, w.title || w.client);
  scrambleTo(hudDesc, w.jinfo || w.desc || '');
  /* column N ("activation button") says no → the centre verb is gone:
     only the thumbnail and the page itself show for this media */
  hudCta.hidden = !!w.noCta;
  hudCta.textContent = s.m.k === 'web' ? webVerb(w) : (CTA_LABEL[s.m.k] || 'Enlarge ⤢');
  Array.prototype.forEach.call(hudThumbs.children, function(b, i){
    b.classList.toggle('on', i === idx);
  });
  var hp = document.getElementById('hudPrev'), hn = document.getElementById('hudNext');
  if(hp) hp.disabled = idx <= 0;
  if(hn) hn.disabled = idx >= slideData.length - 1;
}
var slideTick = false;
function onSlideScroll(){
  if(slideTick || !slideEls.length || !stageWrap) return;
  slideTick = true;
  requestAnimationFrame(function(){
    slideTick = false;
    var r = stageWrap.getBoundingClientRect(), vh = window.innerHeight;
    /* the HUDs live while the stage is pinned to the screen */
    var pinned = r.top <= 1 && r.bottom >= vh - 1;
    hud.classList.toggle('on', pinned);
    hudInfoLayer.classList.toggle('on', pinned);
    ihud.classList.toggle('on', pinned);
    if(pinned !== stagePinned){
      stagePinned = pinned;
      /* off screen the stage rests: its films pause (nothing from the
         page keeps running under the works UI) and the active one
         picks itself back up the moment the stage is pinned again */
      slideEls.forEach(function(f, j){
        var v = f.querySelector('video:not([hidden])');
        if(!v) return;
        if(!pinned) v.pause();
        else if(j === activeSlide){ loadSlotMedia(v); v.play().catch(function(){}); }
      });
    }
    var idx = Math.max(0, Math.min(slideData.length - 1, Math.round(-r.top / vh)));
    if(idx === activeSlide) return;
    activeSlide = idx;
    activateFrame(idx);
  });
}
/* the non-film activations, shared by the desktop CTA and the mobile
   stage: pdfs read (the flipbook on desktop, the plain reader in the
   curtain on touch), embeds play, websites explore in place or launch
   by column M, stills enlarge */
function mediaOverlay(s, m){
  if(m.k === 'web'){
    if(s.w.wlive){
      /* M column says yes: the site descends over the page exactly like
         a pdf, no new tab; you explore it right here and BACK hands
         the work back */
      openLite('<iframe class="ov-doc" src="' + esc(m.src) + '" title="' + esc(s.w.title || 'Website') +
               '" allow="autoplay; fullscreen; encrypted-media" referrerpolicy="no-referrer"></iframe>');
    } else {
      /* M column empty: the classic Launch, the live site opens in its
         own tab */
      window.open(m.src, '_blank', 'noopener');
    }
    return;
  }
  if(m.k === 'pdf'){
    /* the page-curl flipbook reads EVERYWHERE, its canvas speaks
       pointer events with touch-action:none, so fingers turn the
       pages exactly like the mouse does */
    openLite('<iframe class="ov-doc" src="/flipbook.html?pdf=' + encodeURIComponent(m.src) +
             '" title="' + esc(s.w.title || 'PDF') + '"></iframe>');
    return;
  }
  if(m.k === 'embed'){
    openLite('<iframe class="ov-doc" src="' + esc(m.src) +
             '" allow="autoplay; fullscreen; encrypted-media" allowfullscreen referrerpolicy="no-referrer"></iframe>');
    return;
  }
  openLite('<img src="' + esc(m.src) + '" alt=""/>');
}
function ctaAction(){
  if(activeSlide < 0 || !hudLive() || hudCta.hidden) return;
  var s = slideData[activeSlide], m = s.m;
  if(m.k === 'video'){
    /* Play opens the MAIN film, not the stage thumbnail */
    var v = slideEls[activeSlide].querySelector('.main-media') ||
            slideEls[activeSlide].querySelector('video');
    if(v){ loadSlotMedia(v); openPlayer(v); }
    return;
  }
  mediaOverlay(s, m);
}

/* lite overlay (pdf / image / embed): the same curtain descend as the
   film player, a BACK, no Fullscreen API, so never a browser toast */
var lov = null;
function buildLite(){
  lov = document.createElement('div');
  lov.className = 'vp vp-lite';
  lov.hidden = true;
  /* an opaque TOP BAR of our own: BACK always on the left, the
     wordmark in the middle, MENU on the right, and the opened page
     starts BELOW it, so a site's own header can never collide with
     our controls */
  lov.innerHTML =
    '<header class="ov-bar">' +
      '<button class="ov-back" type="button">Back</button>' +
      '<img class="ov-mark" src="/assets/img/veacrop.webp" alt="Virtually Ever After"/>' +
      '<button class="ov-menu" type="button" aria-controls="menu">Menu</button>' +
    '</header>' +
    '<div class="ov-stage"></div>';
  document.body.appendChild(lov);
  lov.addEventListener('click', function(e){
    if(e.target.closest('.ov-back')){ closeLite(); return; }
    if(e.target.closest('.ov-menu')) menuSet(true);
  });
}
function openLite(html){
  if(!lov) buildLite();
  lov.querySelector('.ov-stage').innerHTML = html;
  lov.hidden = false;
  /* same stillness as the film player: the page can't drift underneath */
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ lov.classList.add('open'); }); });
}
function closeLite(){
  if(!lov || !lov.classList.contains('open')) return;
  document.body.style.overflow =
    ((typeof vpS !== 'undefined' && vpS) ||
     menu.classList.contains('open')) ? 'hidden' : '';
  lov.classList.remove('open');
  setTimeout(function(){
    lov.hidden = true;
    lov.querySelector('.ov-stage').innerHTML = '';
  }, window.innerWidth > 760 ? 3300 : 380);   /* desktop curtain needs its full roll-up */
}

/* ═════ MOBILE MEDIA STAGE ════════════════════════════════════════════
   The works-carousel language on the work page: every media is a
   FULL-SCREEN slide in a horizontal snap flow. The active media's name
   + description ride ON the footage (difference-inverted), the
   activation verb sits bottom centre (column N can hide it), dots
   track the swipe. Films run muted on stage, no sound chip here, a
   film only gets its voice inside the player, and the whole stage
   rests when it leaves the screen.                                  ═ */
var mbTrack = null, mbActive = -1;
function buildMediaMobileStage(host, medias){
  mediaHost = host;
  slideData = medias;
  host.classList.add('mb-host');
  host.innerHTML =
    '<div class="mb-stage" id="mbStage">' +
      '<div class="mb-track" id="mbTrack">' +
        medias.map(function(s, i){
          return '<div class="mb-slide" data-i="' + i + '">' + slideMediaHtml(s) + '</div>';
        }).join('') +
      '</div>' +
      '<div class="mb-cap" data-nodec><h3 id="mbTitle"></h3><p id="mbDesc"></p></div>' +
      '<button class="mb-cta" id="mbCta" type="button"></button>' +
      '<div class="sc-dots mb-dots" id="mbDots"></div>' +
    '</div>';
  mbTrack = document.getElementById('mbTrack');
  var mbCta = document.getElementById('mbCta'),
      mbDots = document.getElementById('mbDots');
  /* F13c · a LONE slide is not a carousel, drop the dots and the swipe
     hint so a single (or blocked-media placeholder) card reads as one clean
     piece, not an enormous empty stage begging for a swipe that goes nowhere */
  try{ if(medias.length <= 1) document.getElementById('mbStage').classList.add('mb-solo'); }catch(_){}
  if(!medias.length) return;
  /* pdf slides paint their real first page as the still cover */
  host.querySelectorAll('.pdf-still').forEach(function(el){
    VEA.paintPdfCover(el, el.dataset.pdf).catch(function(){});
  });
  mbDots.innerHTML = medias.map(function(_, i){
    return '<i' + (i === 0 ? ' class="on"' : '') + '></i>';
  }).join('');
  function slideEl(i){ return mbTrack.children[i]; }
  function activateMb(idx){
    idx = Math.max(0, Math.min(medias.length - 1, idx));
    if(idx === mbActive) return;
    mbActive = idx;
    VEA.tick();
    Array.prototype.forEach.call(mbTrack.children, function(f, j){
      var v = f.querySelector('video:not([hidden])');
      if(v){
        v.muted = true;                    /* swiping away takes the voice back */
        if(j === idx){ loadSlotMedia(v); v.play().catch(function(){}); }
        else v.pause();
      }
      var fr = f.querySelector('iframe.thumb-live[data-src]');
      if(fr && j === idx && !fr.getAttribute('src')) fr.src = fr.dataset.src;
    });
    var s = medias[idx], w = s.w;
    scrambleTo(document.getElementById('mbTitle'), w.title || w.client);
    /* (4) the swipeable media carousel, caption = the ARCHIVE's column
       P (this media's row); the player (6) keeps the archive's column J */
    scrambleTo(document.getElementById('mbDesc'), w.pinfo || '');
    mbCta.hidden = !!w.noCta;              /* column N: no button at all */
    mbCta.textContent = s.m.k === 'web' ? webVerb(w) : (CTA_LABEL[s.m.k] || 'Enlarge ⤢');
    Array.prototype.forEach.call(mbDots.children, function(d, j){
      d.classList.toggle('on', j === idx);
    });
  }
  mbTrack.addEventListener('scroll', function(){
    requestAnimationFrame(function(){
      activateMb(Math.round(mbTrack.scrollLeft / (mbTrack.clientWidth || 1)));
    });
  }, {passive:true});
  mbDots.addEventListener('click', function(e){
    var i = Array.prototype.indexOf.call(mbDots.children, e.target);
    if(i >= 0) mbTrack.scrollTo({left: i * mbTrack.clientWidth, behavior: 'smooth'});
  });
  mbCta.addEventListener('click', function(){
    if(mbActive < 0 || mbCta.hidden) return;
    var s = medias[mbActive], m = s.m;
    if(m.k === 'video'){
      /* Play opens the MAIN film in our player, from the very start */
      var v = slideEl(mbActive).querySelector('.main-media') ||
              slideEl(mbActive).querySelector('video');
      if(v){ loadSlotMedia(v); openPlayer(v); }
      return;
    }
    mediaOverlay(s, m);
  });
  /* the stage rests (and goes quiet) while it's off screen */
  new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        var f = slideEl(Math.max(0, mbActive));
        var v = f && f.querySelector('video:not([hidden])');
        if(v){ loadSlotMedia(v); v.play().catch(function(){}); }
      } else {
        host.querySelectorAll('video').forEach(function(o){ o.muted = true; o.pause(); });
      }
    });
  }, {threshold:.15}).observe(document.getElementById('mbStage'));
  /* swiping drifts the media gently against the motion, depth */
  VEA.initParallax(mbTrack, '.mb-slide',
    ':scope > video:not([hidden]), :scope > img, :scope > .thumb-media');
  activateMb(0);
}

/* ── the previous mobile figure layout, REPLACED by the mobile media
      stage above; kept for reference, no longer called ── */
function buildMediaMobile(host, it, works){
  var blocks = [];
  it.mediaCodes.forEach(function(code){
    var w = VEA.findByCode(works, code);
    if(!w) return;
    var head = [w.tags.join(', '), w.ftype].filter(Boolean).join(' · ');
    var descr = w.jinfo || w.desc || '';
    blocks.push('<figure>' +
      (w.title ? '<h3 class="wk-mtitle">' + esc(w.title) + '</h3>' : '') +
      '<div class="wk-mhead"><span>' + esc(head) + '</span><span>' + esc(code) + '</span></div>' +
      (descr ? '<p class="wk-mdesc">' + esc(descr) + '</p>' : '') +
      w.media.map(function(m){ return mediaSlot(m, w, w.client + ' · ' + w.title); }).join('') +
      '</figure>');
  });
  host.innerHTML = blocks.join('');
  host.querySelectorAll('.media-slot').forEach(function(el){ lazyIO.observe(el); });
  /* the descend curtain CLIPS the page while it drops, so slots the
     visitor reaches during those first seconds can read as "not on
     screen" and never load; once the curtain settles, every pending
     slot gets a fresh look */
  setTimeout(function(){
    host.querySelectorAll('.media-slot').forEach(function(el){
      lazyIO.unobserve(el);
      lazyIO.observe(el);
    });
  }, 3600);
  /* .m3u8 website previews wire immediately (they are tiny loops) */
  host.querySelectorAll('video.prev-hls[data-hls]').forEach(function(v){ wireHls(v, v.dataset.hls); });
  host.addEventListener('click', function(e){
    /* tapping a pseudo-fullscreened media closes it */
    if(e.target.classList && e.target.classList.contains('fs-fallback')){
      e.target.classList.remove('fs-fallback');
      document.body.style.overflow = '';
      return;
    }
    var chip = e.target.closest && e.target.closest('.snd-chip');
    if(chip){
      e.preventDefault(); e.stopPropagation();
      var cv = chip.parentElement.querySelector('video');
      loadSlotMedia(cv);
      if(cv.muted){
        /* one voice at a time: everyone else goes quiet */
        host.querySelectorAll('video').forEach(function(o){ if(o !== cv) o.muted = true; });
        host.querySelectorAll('.snd-chip.on').forEach(function(c){ c.classList.remove('on'); });
        cv.muted = false; chip.classList.add('on');
        cv.play().catch(function(){});
      } else {
        cv.muted = true; chip.classList.remove('on');
      }
      return;
    }
    /* Close on a full-page flipbook: back to its place in the page */
    var pclose = e.target.closest && e.target.closest('.pdf-close');
    if(pclose){
      e.preventDefault(); e.stopPropagation();
      if(document.fullscreenElement){ try{ document.exitFullscreen(); }catch(_){} }
      var fslot = pclose.closest('.pdf-flip');
      if(fslot && fslot.classList.contains('fs-fallback')){
        fslot.classList.remove('fs-fallback');
        document.body.style.overflow = '';
      }
      return;
    }
    /* Enlarge: films open in our own full-screen player (sound on) */
    var zoom = e.target.closest && e.target.closest('.chip-zoom');
    if(zoom){
      e.preventDefault(); e.stopPropagation();
      var flip = zoom.closest('.pdf-flip');
      if(flip){ forceFullscreen(flip); return; }
      var media = zoom.parentElement.querySelector('video,img');
      if(!media) return;
      if(media.tagName === 'VIDEO'){ openPlayer(media); return; }
      forceFullscreen(media);
      return;
    }
    var slot = e.target.closest && e.target.closest('.media-slot.fit');
    if(!slot) return;
    var v = slot.querySelector('video'); if(!v) return;
    if(v.paused){ v._userPaused = false; v.play().catch(function(){}); }
    else { v._userPaused = true; v.pause(); }
  });
  initPdfReaders(host);
}

function render(show, works){
  /* the work is named by the pretty path (…/work/<slug>), or by ?p=
     carrying either the classic code or a slug (the 404 bridge sends
     slugs through ?p= on hosts without rewrites) */
  var code = param(), slug = pathSlug();
  var idx = show.items.findIndex(function(it){
    return (slug && it.slug && it.slug === slug) ||
           (code && (it.code === code || (it.slug && it.slug === code)));
  });
  /* a PAGE NAME that slipped through the /work/ 404 bridge is a wish to
     LEAVE (about.html, works.html…), forward it to the real page
     instead of dressing the first work in its URL */
  var lost = code || slug;
  if(idx < 0 && lost && /\.html?$/i.test(lost)){
    location.replace(VEA.siteRoot() + lost.replace(/^\/+/, ''));
    return;
  }
  var missed = idx < 0;          /* asked for something we don't have */
  if(idx < 0) idx = 0;
  var it = show.items[idx], L = show.labels;

  /* the headline NEVER falls back to the studio name, client, else the
     work's own name, else an honest generic */
  var headline = it.client || it.name || 'Selected work';
  var subline  = it.client ? it.name : '';
  document.title = ([it.client, it.name].filter(Boolean).join(' · ') || 'Work') + ' | VEA';
  var mset = function(sel, val){
    var el = document.head.querySelector(sel); if(el) el.setAttribute('content', val);
  };
  var d = it.brief || (([it.client, it.name].filter(Boolean).join(' · ') || 'Selected work') + ' by Virtually Ever After.');
  mset('meta[name="description"]', d);
  mset('meta[property="og:title"]', document.title);
  mset('meta[property="og:description"]', d);
  mset('meta[name="twitter:title"]', document.title);
  mset('meta[name="twitter:description"]', d);
  /* per-project canonical + og:url, a project page must not tell search
     engines it is a duplicate of the works index */
  var canon = '/' +
    (it.slug ? 'work/' + encodeURIComponent(it.slug)
             : 'work.html?p=' + encodeURIComponent(it.code || ''));
  var canEl = document.head.querySelector('link[rel="canonical"]');
  if(canEl) canEl.setAttribute('href', canon);
  mset('meta[property="og:url"]', canon);

  document.getElementById('wkCat').textContent =
    [it.category, it.code].filter(Boolean).join(' · ');
  document.getElementById('wkClient').textContent = headline;
  document.getElementById('wkName').textContent = subline;

  /* left info: E, G, I, J, K, L with the sheet's own row-1 labels */
  var fields = [[4, it.date], [6, it.venue], [8, it.services],
                [9, it.products], [10, it.clientType], [11, it.medium]];
  var infoHtml = fields.map(function(f){
    if(!f[1]) return '';
    var lines = String(f[1]).split(/[,;|]+/).map(function(s){ return s.trim(); }).filter(Boolean);
    return '<div class="wk-row"><dt>' + esc(L[f[0]] || '') + ':</dt><dd>' +
      lines.map(function(s){ return '<span>' + esc(s) + '</span>'; }).join('') + '</dd></div>';
  }).join('');
  document.getElementById('wkInfo').innerHTML = infoHtml;

  document.getElementById('wkBrief').textContent = it.brief || '';

  /* desktop: the same identity + fields + brief ride FIXED on the
     media stage (the flow sections above are hidden there) */
  scrambleTo(document.getElementById('ihCat'),
    [it.category, it.code].filter(Boolean).join(' · '));
  scrambleTo(document.getElementById('ihClient'), headline);
  scrambleTo(document.getElementById('ihName'), subline);
  document.getElementById('ihInfo').innerHTML = infoHtml;
  document.getElementById('ihBrief').innerHTML = it.brief
    ? '<span class="label">Brief</span><p>' + esc(it.brief) + '</p>' : '';
  var briefP = document.getElementById('ihBrief').querySelector('p');
  if(briefP) scrambleTo(briefP, it.brief);
  ihud.hidden = false;

  /* medias: F codes → the archive sheet's column-A codes.
     DESKTOP: every media is its own FULL-SCREEN slide with a fixed HUD
     (title + J-column description bottom left, Enlarge/Launch bottom
     centre, square thumbnails bottom right). MOBILE keeps the previous
     figure layout untouched for now. */
  var host = document.getElementById('wkMedia');
  var medias = [];
  it.mediaCodes.forEach(function(code){
    var w = VEA.findByCode(works, code);
    if(!w) return;
    w.media.forEach(function(m){ medias.push({m: m, w: w, code: code}); });
  });
  if(window.innerWidth > 860) buildSlides(host, medias);
  else buildMediaMobileStage(host, medias);

  var long = document.getElementById('wkLong');
  if(it.longText){ long.hidden = false; long.textContent = it.longText; }

  var prev = show.items[(idx - 1 + show.items.length) % show.items.length];
  var next = show.items[(idx + 1) % show.items.length];
  document.getElementById('wkNav').innerHTML =
    '<a href="' + esc(VEA.workUrl(prev)) + '" rel="prev">' +
    '<span class="label">← Previous</span><span class="disp">' + esc(prev.client) + ' · ' + esc(prev.name) + '</span></a>' +
    '<a href="' + esc(VEA.workUrl(next)) + '" rel="next">' +
    '<span class="label">Next →</span><span class="disp">' + esc(next.client) + ' · ' + esc(next.name) + '</span></a>';

  dexState.code = it.code;
  dexState.cat  = it.category || null;
  dexState.url  = VEA.workUrl(it);

  /* the address bar always wears the pretty form (column O), however
     the visitor arrived (?p=code, ?p=slug, or the path itself).
     EXCEPT when the asked-for work wasn't found: the fallback render
     must never hijack the address with the first work's URL. */
  urlNow = dexState.url;
  if(!missed) try{
    /* the pretty swap keeps foreign params (force3d / no3d / g3…), the spatial layer reads them, sometimes after this line runs */
    var keepQ = new URLSearchParams(location.search), extraQ = [];
    keepQ.forEach(function(v, k){ if(/^(force3d|no3d|g3\w*)$/.test(k)) extraQ.push(k + '=' + encodeURIComponent(v)); });
    var urlGo = extraQ.length ? urlNow + (urlNow.indexOf('?') >= 0 ? '&' : '?') + extraQ.join('&') : urlNow;
    history.replaceState(null, '', urlGo);
  }catch(_){}

  /* BACK beside Menu, the href is only a no-JS fallback: clicking it
     never navigates, it glides down to the fixed works UI instead */
  wkBack.href = VEA.siteRoot() +
    'works.html' + (it.category ? '?cat=' + encodeURIComponent(it.category) : '');

  /* content is in, NOW the page descends from the top. The fixed works
     UI + its runway only start existing once the descend has SETTLED,
     so nothing can ever peek through the clip while the page drops. */
  document.body.classList.add('wk-reveal');
  setTimeout(function(){ document.body.classList.add('wk-settled'); }, 3400);

  /* v4 bridge: the spatial room (work3d.js) reads this page's record
     and drives its own machinery, overlays stay DOM, as they must */
  window.__wkItem = it;
  try{ document.dispatchEvent(new CustomEvent('wk:hydrated')); }catch(_){}
}

/* BACK = "take me to the works UI": scrolls to the bottom as if the
   visitor had swiped all the way down; no page change. It fades away
   while the works UI is on screen and returns when you scroll back up. */
var wkBack = document.getElementById('wkBack');
wkBack.addEventListener('click', function(e){
  e.preventDefault();
  document.body.classList.add('wk-settled');   /* the runway must exist */
  if(dexState.show) buildDex();
  requestAnimationFrame(function(){
    window.scrollTo({top: document.documentElement.scrollHeight, behavior:'smooth'});
  });
});

/* ═════ WORKS INDEX BELOW THE PIECE ═══════════════════════════════════
   The same selection interface as works.html, waiting under the work.
   Scroll down past the piece → the page "becomes" Works and the URL
   turns into works.html?cat=…; scroll back up without touching
   anything → the open work returns and the URL turns back into
   work.html?p=…. Clicking a piece navigates to that work.            ═ */
var dexEl    = document.getElementById('wkDex'),
    dexCats  = document.getElementById('dexCats'),
    dexStage = document.getElementById('dexStage'),
    dexState = {code:'', cat:null, url:'', built:false, show:null};

function isHlsUrl(u){ return /\.m3u8(\?|#|$)/i.test(u); }
function dexThumb(it){
  var src = it.thumb || POSTER;
  if(isVidUrl(src)){
    return '<video muted loop playsinline autoplay preload="auto" src="' + esc(VEA.videoSrc(src)) + '"></video>';
  }
  if(isHlsUrl(src)){
    return '<video muted loop playsinline autoplay preload="auto" data-hls="' + esc(src) + '"></video>';
  }
  return '<img src="' + esc(src) + '" alt="' + esc(it.client + ' · ' + it.name) +
         '" loading="lazy" onerror="this.src=\'' + POSTER + '\'"/>';
}
function initDexHls(){
  var vids = dexStage.querySelectorAll('video[data-hls]');
  if(window.innerWidth > 860){
    vids.forEach(function(v){ wireHls(v, v.dataset.hls); });
    return;
  }
  /* phone: only the opening slides load, many full-quality streams
     at once fight for the radio and the decoder, and it reads as lag */
  vids.forEach(function(v, i){ if(i < 2) wireHls(v, v.dataset.hls); });
}
/* phone: the slide on stage plays, its neighbours stand wired and
   ready, everything else rests (and stays resting through tap-wake) */
function dexSyncVids(i){
  if(window.innerWidth > 860) return;
  Array.prototype.forEach.call(dexStage.querySelectorAll('.sc-item'), function(it, j){
    var v = it.querySelector('video');
    if(!v) return;
    v.autoplay = false;
    if(Math.abs(j - i) <= 1 && v.dataset.hls && !v._hls && !v.src) wireHls(v, v.dataset.hls);
    if(j === i && dexVidsOn){
      v._userPaused = false;
      v.play().catch(function(){});
    } else {
      v._userPaused = true;
      v.pause();
    }
  });
}

/* sizing identical to works.html: ≤5 pieces = one bigger centred row */
var SZ_SINGLE = 42, SZ_DOUBLE = 72;
function dexItemHtml(it, sz){
  var meta = [it.venue, it.date].filter(Boolean).join(' · ');
  /* the caption is display:none on desktop and only surfaces on hover, so the
     link itself carried NO text: screen readers read the whole wall as
     "link, link, link", and every anchor pointing at a work page went out
     with empty text. The label is the same client + name already sitting in
     the data-* attributes, so nothing on screen changes. */
  return '<a class="sc-item" aria-label="' + esc([it.client, it.name].filter(Boolean).join(' · ') || 'Work') +
    '" href="' + esc(VEA.workUrl(it)) +
    '" data-client="' + esc(it.client) + '" data-name="' + esc(it.name) + '" data-meta="' + esc(meta) + '"' +
    ' style="--sz:' + sz + '">' +
    '<span class="sc-box"><span class="sc-thumb">' + dexThumb(it) + '</span>' +
    '<span class="sc-cap"><span class="cap-client">' + esc(it.client) + '</span>' +
    '<span class="cap-name">' + esc(it.name) + '</span>' +
    '<span class="cap-meta">' + esc(meta) + '</span>' +
    '</span></span></a>';
}

/* the fixed bottom line follows whichever piece the mouse is on */
var scInfo = document.getElementById('scInfo'),
    siClient = document.getElementById('siClient'),
    siName = document.getElementById('siName'),
    siMeta = document.getElementById('siMeta');
document.addEventListener('mouseover', function(e){
  var it = e.target.closest && e.target.closest('.sc-item');
  if(!it) return;
  scrambleTo(siClient, it.dataset.client || '');
  scrambleTo(siName, it.dataset.name || '');
  scrambleTo(siMeta, it.dataset.meta || '');
  scInfo.classList.add('show');
});
document.addEventListener('mouseout', function(e){
  var it = e.target.closest && e.target.closest('.sc-item');
  if(!it) return;
  var to = e.relatedTarget;
  if(to && to.closest && to.closest('.sc-item')) return;
  scInfo.classList.remove('show');
});

/* shrink a strip's pieces until they fit the width, never a scroller */
function fitDexRows(){
  if(window.innerWidth <= 860) return;
  dexStage.querySelectorAll('.sc-row').forEach(function(row){
    if(row.hidden) return;
    row.style.setProperty('--fit','1');
    for(var i = 0; i < 3; i++){
      var need = row.scrollWidth, have = row.clientWidth;
      if(need <= have + 1) break;
      var cur = parseFloat(getComputedStyle(row).getPropertyValue('--fit')) || 1;
      row.style.setProperty('--fit', Math.max(.3, cur * (have / need) * .98).toFixed(3));
    }
  });
}
window.addEventListener('resize', function(){ fitDexRows(); VEA.fitCats(dexCats); });

/* ── mobile carousel dots: one per piece, the active one is white ── */
var dexDots = document.getElementById('dexDots');
function renderDexDots(){
  var items = dexStage.querySelectorAll('.sc-item');
  dexDots.innerHTML = Array.prototype.map.call(items, function(_, i){
    return '<i' + (i === 0 ? ' class="on"' : '') + '></i>';
  }).join('');
}
var dexDotI = 0;
function updateDexDots(){
  var w = dexStage.clientWidth || 1;
  var i = Math.round(dexStage.scrollLeft / w);
  Array.prototype.forEach.call(dexDots.children, function(d, j){
    d.classList.toggle('on', j === i);
  });
  if(i !== dexDotI){ dexDotI = i; VEA.tick(); dexSyncVids(i); }
}
dexStage.addEventListener('scroll', function(){ requestAnimationFrame(updateDexDots); }, {passive:true});
VEA.initParallax(dexStage, '.sc-item', '.sc-thumb video, .sc-thumb img', true);

function renderDex(){
  var items = dexState.show.items.filter(function(it){ return it.category === dexState.cat; });
  var single = items.length <= 5;
  var top = single ? items : items.slice(0, Math.floor(items.length / 2));
  var bottom = single ? [] : items.slice(Math.floor(items.length / 2));
  var sz = single ? SZ_SINGLE : SZ_DOUBLE;
  dexStage.classList.toggle('single', single);
  dexStage.innerHTML =
    '<div class="sc-row">' +
      top.map(function(it){ return dexItemHtml(it, sz); }).join('') + '</div>' +
    '<div class="sc-row"' + (bottom.length ? '' : ' hidden') + '>' +
      bottom.map(function(it){ return dexItemHtml(it, sz); }).join('') + '</div>';
  /* pieces arrive exactly like the works page: from zero, staggered */
  dexStage.querySelectorAll('.sc-item').forEach(function(el){ el.classList.add('enter'); });
  if(!items.length) dexStage.innerHTML = '<p class="sc-status">Nothing here yet.</p>';
  initDexHls();
  /* fresh thumbs take the current state: running only if the works UI
     actually peeks out under the page right now */
  dexVidsOn = null;
  syncDexVideos();
  /* a fresh category ALWAYS opens on its first piece */
  dexStage.scrollLeft = 0;
  renderDexDots();
  requestAnimationFrame(fitDexRows);
  /* the bloom itself, the works page's stagger, verbatim */
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    dexStage.querySelectorAll('.sc-item.enter').forEach(function(el, i){
      setTimeout(function(){ el.classList.remove('enter'); }, i * 40);
    });
  }); });
}
function setDexCat(cat){
  var first = dexState.cat === null;
  var same = !first && dexState.cat === cat;
  dexState.cat = cat;
  dexCats.querySelectorAll('.sc-cat').forEach(function(b){
    b.setAttribute('aria-selected', String(b.dataset.cat === cat));
  });
  VEA.fitCats(dexCats);
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(first || same || calm){
    renderDex();
    urlNow = ''; syncScrollURL();
    return;
  }
  /* the exact ritual the works page performs: everything shrinks to
     its centre, one chromatic beat, the new room blooms from zero */
  dexStage.classList.add('closing');
  setTimeout(function(){
    dexStage.classList.remove('closing');
    dexStage.classList.add('rgb-pop');
    setTimeout(function(){ dexStage.classList.remove('rgb-pop'); }, 480);
    renderDex();
    urlNow = ''; syncScrollURL();
  }, 520);
}
function buildDex(){
  if(dexState.built || !dexState.show) return;
  dexState.built = true;
  var order = [];
  dexState.show.items.forEach(function(it){
    if(it.category && order.indexOf(it.category) < 0) order.push(it.category);
  });
  dexCats.innerHTML = order.map(function(c){
    return '<button class="sc-cat" type="button" role="tab" data-cat="' + esc(c) +
           '" aria-selected="false">' + esc(c) + '</button>';
  }).join('');
  dexCats.querySelectorAll('.sc-cat').forEach(function(b){
    b.addEventListener('click', function(){ setDexCat(b.dataset.cat); });
  });
  /* opens on the category the current work belongs to */
  setDexCat(dexState.cat && order.indexOf(dexState.cat) >= 0 ? dexState.cat : order[0]);
}
/* build one viewport ahead of the runway, so the fixed works UI is
   ready by the time the work lifts off it */
var dexSpace = document.getElementById('wkDexSpace');
var dexIO = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if(!en.isIntersecting || !dexState.show) return;
    buildDex();
    dexIO.unobserve(dexSpace);
  });
}, {rootMargin:'150% 0px'});

/* ── the URL mirrors what's on screen ──
   The dex is a fixed backdrop, so "being on it" means the page content
   (main) has scrolled up past half the viewport.
   works UI showing → works.html?cat=…
   the piece itself → work.html?p=…    */
var urlNow = '', mainEl = document.getElementById('main');
/* the dex thumbs rest while the page fully covers them and run whenever
   any part of the works UI peeks out at the bottom */
var dexVidsOn = null;
function syncDexVideos(){
  var show = mainEl.getBoundingClientRect().bottom < window.innerHeight - 1;
  if(show === dexVidsOn) return;
  dexVidsOn = show;
  if(show){
    /* the work hands the room over: any film left unmuted (the mobile
       sound chips) goes quiet the moment the works UI appears */
    document.querySelectorAll('#wkMedia video').forEach(function(v){ v.muted = true; });
    document.querySelectorAll('#wkMedia .snd-chip.on').forEach(function(c){ c.classList.remove('on'); });
  }
  if(window.innerWidth <= 860){
    dexSyncVids(Math.round(dexStage.scrollLeft / (dexStage.clientWidth || 1)));
    return;
  }
  dexStage.querySelectorAll('video').forEach(function(v){
    if(show) v.play().catch(function(){});
    else v.pause();
  });
}
function syncScrollURL(){
  var inDex = mainEl.getBoundingClientRect().bottom <= window.innerHeight * .5;
  /* BACK toggles off while the works UI is on screen, back on above it */
  wkBack.classList.toggle('off', inDex);
  syncDexVideos();
  if(!dexState.code || !dexState.built) return;
  var target = (inDex && dexState.cat)
    ? VEA.siteRoot() + 'works.html?cat=' + encodeURIComponent(dexState.cat)
    : (dexState.url || VEA.siteRoot() + 'work.html?p=' + encodeURIComponent(dexState.code));
  if(target === urlNow) return;
  urlNow = target;
  try{ history.replaceState(null, '', target); }catch(_){}
}
window.addEventListener('scroll', syncScrollURL, {passive:true});
window.addEventListener('resize', syncScrollURL);

/* both sheets must be in: the showcase drives the page, the archive
   resolves the media codes */
var show = null, works = null, done = false;
VEA.loadShowcase(function(d){ if(!show){ show = d; go(); } });
VEA.loadWorks(function(w){ if(!works){ works = w; go(); } });
function go(){
  if(show && works && !done){
    done = true;
    render(show, works);
    dexState.show = show;
    dexIO.observe(dexSpace);
  }
}

/* v4 bridge: the room calls the page's OWN slide/CTA machinery, so the
   film player and the pdf/site curtains behave exactly as on the flat
   site, one code path, no duplicates. Speaks BOTH stages: the desktop
   runway (goSlide/ctaAction) and the phone carousel (mbTrack/mbCta). */
window.__wk = {
  goSlide: function(i){
    try{
      if(mbTrack){ mbTrack.scrollTo({left: i * mbTrack.clientWidth, behavior: 'instant'}); return; }
      goSlide(i);
    }catch(_){}
  },
  cta: function(){
    try{
      if(mbTrack){
        var b = document.getElementById('mbCta');
        if(b && !b.hidden) b.click();
        return;
      }
      ctaAction();
    }catch(_){}
  },
  slides: function(){ return slideData || []; },
  active: function(){ return mbTrack ? mbActive : activeSlide; },
  /* the 3D room opens a media DIRECTLY, no dependence on scroll
     state, HUD classes or CTA visibility. Returns true if something
     visibly opened. Websites without the M column stay the room's own
     business (they need the click's own gesture for a new tab). */
  openMedia: function(i){
    try{
      var s = slideData && slideData[i];
      if(!s || (s.w && s.w.noCta)) return false;
      var m = s.m;
      if(m.k === 'web' && !(s.w && s.w.wlive)) return false;
      if(m.k === 'video'){
        var host = mbTrack ? mbTrack.children[i] : slideEls[i];
        var v = host && (host.querySelector('.main-media') || host.querySelector('video'));
        if(!v) return false;
        loadSlotMedia(v);
        openPlayer(v);
        return true;
      }
      mediaOverlay(s, m);
      return true;
    }catch(_){ return false; }
  },
};
})();
