import { a as kn } from "./chunk-FTHRROOF.js";
import {
  $ as an,
  Aa as yn,
  B as Qt,
  Ca as En,
  Da as Tt,
  Ea as Je,
  Fa as wn,
  G as Et,
  Ga as Mn,
  Ha as _t,
  Ia as he,
  J as _e,
  Ja as vn,
  Ka as bn,
  La as zt,
  Na as Ze,
  Oa as et,
  P as $t,
  Pa as xn,
  Q as Jt,
  Qa as Lt,
  R as Zt,
  Ra as Tn,
  S as wt,
  Sa as _n,
  T as Mt,
  Ta as zn,
  U as en,
  Ua as Ln,
  V as tn,
  Va as Sn,
  W as nn,
  Wa as An,
  X as vt,
  Y as ze,
  Z as bt,
  _ as on,
  aa as rn,
  ba as W,
  ca as $e,
  e as Ut,
  h as gt,
  i as Yt,
  ja as de,
  k as Te,
  la as sn,
  ma as cn,
  na as ln,
  o as jt,
  q as Xt,
  r as Kt,
  ra as un,
  sa as fn,
  ta as dn,
  ua as hn,
  v as Ke,
  va as mn,
  w as Qe,
  wa as pn,
  xa as xt,
  ya as E,
  z as yt,
  za as gn,
} from "./chunk-CT4AYSS2.js";
async function eo(j) {
  j = j || {};
  let x = (e, t) => {
    try {
      window.__vlog
        ? window.__vlog(e, t)
        : console.log("[VEA] " + e + (t != null ? " \xB7 " + t : ""));
    } catch {}
  };
  x("gallery(works): build start");
  let te = new URLSearchParams(location.search),
    Le =
      te.has("force3d") ||
      (function () {
        try {
          var e = sessionStorage.getItem("g3lock");
          return e === "full" || e === "lite";
        } catch {
          return !1;
        }
      })(),
    tt = te.has("g3t") ? parseFloat(te.get("g3t")) : null;
  if (
    !Le &&
    (window.innerWidth <= 860 ||
      (window.matchMedia && matchMedia("(pointer: coarse)").matches))
  ) {
    x("gallery: DECLINED \xB7 phone/narrow, not forced");
    return;
  }
  if (te.has("no3d")) {
    x("gallery: DECLINED \xB7 ?no3d");
    return;
  }
  if (vt() === "flat") {
    x("gallery: DECLINED \xB7 quality=flat");
    return;
  }
  if (!Le && navigator.connection && navigator.connection.saveData) {
    x("gallery: DECLINED \xB7 saveData");
    return;
  }
  if (!Le) {
    try {
      if (sessionStorage.getItem("g3off")) {
        x("gallery: DECLINED \xB7 g3off set");
        return;
      }
    } catch {}
    if (
      window.matchMedia &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      x("gallery: DECLINED \xB7 reduced-motion");
      return;
    }
  }
  try {
    let e = document.createElement("canvas");
    if (!e.getContext("webgl2") && !e.getContext("webgl")) {
      x("gallery: DECLINED \xB7 no WebGL context");
      return;
    }
  } catch {
    x("gallery: DECLINED \xB7 WebGL probe threw");
    return;
  }
  if (!window.VEA || !VEA.loadShowcase) {
    (x("gallery: DECLINED \xB7 data.js not loaded"), he(!1));
    return;
  }
  x("gallery: gates passed \xB7 awaiting showcase data");
  let Oe = !1;
  try {
    Oe = !!sessionStorage.getItem("g3ok");
  } catch {}
  let V =
      window.innerWidth <= 860 ||
      (window.matchMedia && matchMedia("(pointer: coarse)").matches),
    G = V || ze() || (vt() === "auto" && on()),
    X = an(),
    me = zn(),
    ne = await new Promise((e) => {
      try {
        VEA.loadShowcase((t) => e(t));
      } catch {
        e(null);
      }
    });
  if (
    (x(
      "gallery: showcase data",
      ne && ne.items ? ne.items.length + " items" : "NULL/empty",
    ),
    !ne || !ne.items || !ne.items.length)
  ) {
    (x("gallery: DECLINED \xB7 no showcase items"), he(!1));
    return;
  }
  let A = [];
  if (
    (ne.items.forEach((e) => {
      e.category && A.indexOf(e.category) < 0 && A.push(e.category);
    }),
    !A.length)
  ) {
    (x("gallery: DECLINED \xB7 no categories"), he(!1));
    return;
  }
  x("gallery: building " + A.length + " halls");
  let nt = {};
  A.forEach((e) => {
    nt[e] = ne.items.filter((t) => t.category === e);
  });
  let k = A.length,
    Hn = (e) => {
      let t = e + 3;
      return Math.max(W.hallLength, 4.3 + (t - 1) * W.colEvery + 1.2);
    },
    S = [];
  {
    let e = 0;
    A.forEach((t) => {
      let o = Hn(nt[t].length);
      (S.push({ z0: e, L: o }), (e -= o));
    });
  }
  let De = S.reduce((e, t) => e + t.L, 0),
    y = new Kt();
  y.fog = new Xt(0, V ? 0.04 : 0.027);
  let w;
  try {
    w = new nn({ antialias: !G, powerPreference: "high-performance" });
  } catch {
    he(!1);
    return;
  }
  (w.setSize(innerWidth, innerHeight),
    w.setPixelRatio(ze() ? X.dprCap : Math.min(devicePixelRatio, 2)),
    (w.toneMapping = Ut),
    (w.toneMappingExposure = 1.22),
    w.setClearColor(0));
  let p = w.domElement;
  ((p.className = "g3c"), document.body.appendChild(p));
  let s = new Zt(V ? 62 : 56, innerWidth / innerHeight, 0.1, 220),
    T = [],
    ot = [],
    St = [];
  function Cn(e, t, o) {
    let { z0: r, L: i } = S[e],
      g = fn(y, {
        z0: r,
        L: i,
        word: t,
        end: e < k - 1 ? "slit" : "wall",
        vitrine: e === 0,
      }),
      { hall: n, hair: a, dots: c } = g,
      u = W.naveHalf;
    St[e] = n;
    let f = 2,
      b = (f * 16) / 9,
      h = [];
    for (let M = 0; M < g.bays.length - 1; M++)
      h.push((g.bays[M] + g.bays[M + 1]) / 2);
    let B = h.length > 4 ? 1 : 0,
      O = h.length > 4 ? h.length - 2 : h.length - 1,
      $ = o.length;
    for (let M = 0; M < $; M++) {
      let ae = o[M],
        J = M % 2 === 0,
        je = $ > 1 ? B + (M / ($ - 1)) * (O - B) : (B + O) / 2,
        re = h[Math.max(0, Math.min(h.length - 1, Math.round(je)))],
        be = J ? -u + 0.55 : u - 0.55,
        Z = J ? Math.PI / 10 : -Math.PI / 10,
        F = new jt(),
        Y = new Qe(new _e(b, f), new Ke({ color: 0 }));
      Y.position.z = -0.012;
      let fe = new Qe(new _e(b, f), new Ke({ map: sn(ae, M + e * 7) }));
      ((fe.userData.pi = T.length), (Y.userData.pi = T.length));
      let ie = new yt(new Et(new _e(b + 0.07, f + 0.07)), de.hairMat);
      (F.add(Y, fe, ie),
        F.position.set(be, W.panelCenterY, re),
        (F.rotation.y = Z),
        n.add(F));
      let Xe = W.panelCenterY + f / 2,
        Re = Math.cos(Z),
        ee = Math.sin(Z);
      for (let Wt of [-0.4, 0.4]) {
        let Xn = be + Wt * b * Re,
          Gt = re - Wt * b * ee;
        a.push(Xn, Xe, Gt, J ? -u : u, W.colHeight, re + (Gt - re) * 0.3);
      }
      let xe = new Qe(
          new _e(0.44, 0.284),
          new Ke({ map: cn(ae), transparent: !0, opacity: 0.92 }),
        ),
        Yn = be + Re * (b / 2 + 0.62),
        jn = re - ee * (b / 2 + 0.62);
      (xe.position.set(Yn, 1.48, jn), (xe.rotation.y = Z), n.add(xe));
      let pt = new yt(new Et(new _e(0.48, 0.32)), de.hairMat);
      (pt.position.copy(xe.position),
        (pt.rotation.y = Z),
        n.add(pt),
        ot.push(fe),
        ot.push(Y),
        T.push({
          item: ae,
          group: F,
          face: fe,
          frame: ie,
          hallIdx: e,
          center: new Te(be, W.panelCenterY, re),
          normal: new Te(Math.sin(Z), 0, Math.cos(Z)),
          video: null,
          vtex: null,
          poster: fe.material.map,
          wired: !1,
        }),
        Ve(T[T.length - 1], 4 / 3));
    }
    g.flush();
  }
  function Ve(e, t) {
    if (!t || !isFinite(t)) return;
    let o = t / (16 / 9);
    o <= 1
      ? e.face.scale.set(Math.max(0.24, o), 1, 1)
      : e.face.scale.set(1, Math.max(0.5, 1 / o), 1);
  }
  let D = { pools: [], works: [], pendants: [], spill: null };
  {
    let e = V ? 3 : 5,
      t = V ? 3 : 6,
      o = V ? 1 : 3;
    for (let r = 0; r < e; r++) {
      let i = new wt(15265535, 220, 0, 0.8, 0.9, 1.6);
      (y.add(i, i.target), D.pools.push(i));
    }
    for (let r = 0; r < t; r++) {
      let i = new Mt(12568276, 5, 6.5, 1.8);
      (y.add(i), D.works.push(i));
    }
    for (let r = 0; r < o; r++) {
      let i = new Mt(14278378, 3.5, 4.5, 1.8);
      (y.add(i), D.pendants.push(i));
    }
    if (!V) {
      let r = new wt(15791103, 130, 0, 0.5, 0.95, 1.7);
      (y.add(r, r.target), (D.spill = r));
    }
    (y.add(new en(16777215, 0.1)), y.add(new Jt(7173256, 0, 0.3)));
  }
  let at = -1;
  function Ie(e) {
    if (e === at) return;
    at = e;
    let { z0: t, L: o } = S[e];
    D.pools.forEach((i, g) => {
      let n = t - (g + 0.5) * (o / D.pools.length);
      (i.position.set(0, W.ceilH + 1.2, n), i.target.position.set(0, 0, n));
    });
    let r = [
      [0.2, t - 12],
      [-0.3, t - 23.5],
      [0.3, t - 35],
    ];
    if (
      (D.pendants.forEach((i, g) => {
        let [n, a] = r[g % 3];
        i.position.set(n, 2.6, a);
      }),
      D.spill)
    ) {
      let i = e < k - 1 ? t - o : t;
      (D.spill.position.set($e, 4, i + 0.4),
        D.spill.target.position.set($e + 1.4, 0, i + 6.5));
    }
  }
  function Rn(e) {
    T.map((o) => ({ p: o, d: Math.abs(o.center.z - e) }))
      .sort((o, r) => o.d - r.d)
      .slice(0, D.works.length)
      .forEach(({ p: o }, r) => {
        D.works[r].position.set(o.center.x, o.center.y - 0.5, o.center.z + 0.5);
      });
  }
  let At = [];
  {
    let e = (a) => {
        let c = E.strollState(a, 19, -0.95, 0.45),
          u = (a + 3) % 30,
          f = xt((u - 16) / 1) * (1 - xt((u - 19) / 1.2));
        return (
          f > 0 &&
            ((c.phone = f), (c.headPitch = (c.headPitch || 0) + f * 0.25)),
          c
        );
      },
      t = [
        E.guard,
        E.talkerA,
        E.talkerB,
        E.inspector,
        E.sitter,
        (a) => E.strollState(a, 15, -1.75, 0),
        e,
        E.leaner,
        E.photog,
        E.docent,
        E.stretcher,
        E.reader,
      ],
      o = [
        E.wanderer,
        E.pacer,
        E.slowWalker,
        E.gazer,
        E.drifter,
        E.sketcher,
        E.watcher,
        E.phoneTalker,
      ],
      r = G ? X.dens : 2.4,
      i = t.slice();
    k > 1 &&
      o.forEach((a, c) => {
        let u = 1 + (c % (k - 1));
        i.push(gn(a, 1, -S[u].z0));
      });
    let g = G ? Math.max(1, Math.round(i.length * X.figFrac)) : i.length,
      n = i.length / g;
    for (let a = 0; a < g; a++) At.push(mn(y, i[Math.floor(a * n)], r));
  }
  (dn(y, De, G, kn), un(y, De), A.forEach((e, t) => Cn(t, e, nt[e])));
  let { dust: On, N: Dn } = hn(y, De, G, G ? X.dustFrac : 1),
    kt = new $t();
  kt.setCrossOrigin("anonymous");
  let rt = (e) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(e || ""),
    it = (e) => /\.m3u8(\?|#|$)/i.test(e || "");
  T.forEach((e) => {
    let t = e.item.thumb;
    !t ||
      rt(t) ||
      it(t) ||
      ln(kt, t, (o) => {
        ((o.colorSpace = gt), (o.anisotropy = 4));
        let r = o.image.naturalWidth || o.image.width,
          i = o.image.naturalHeight || o.image.height;
        (Ve(e, r / i),
          (e.face.material.map = o),
          (e.face.material.needsUpdate = !0));
      });
  });
  let Se = !G,
    pe = null,
    Ht = G ? X.maxVid : 4,
    Vn = G && X.freezeWall;
  function Ct(e) {
    if (e.wired || e.frozen) return;
    let t = e.item.thumb;
    {
      e.wired = !0;
      let o = vn(innerWidth * 0.6);
      e.video = o;
      try {
        VEA.attachVideo(o, t, !0, !1);
      } catch {}
      o.addEventListener(
        "playing",
        () => {
          (e.vtex ||
            ((e.vtex = new Qt(o)),
            (e.vtex.colorSpace = gt),
            Ve(e, (o.videoWidth || 4) / (o.videoHeight || 3))),
            (e.face.material.map = e.vtex),
            (e.face.material.needsUpdate = !0),
            (e.painted = !0),
            Vn &&
              !e._freezeT &&
              (e._freezeT = setTimeout(() => {
                if (e === pe) {
                  e._freezeT = null;
                  return;
                }
                if (!e.video) return;
                let r = xn(e.video);
                if (r) {
                  if (e.vtex) {
                    try {
                      e.vtex.dispose();
                    } catch {}
                    e.vtex = null;
                  }
                  ((e.face.material.map = r),
                    (e.face.material.needsUpdate = !0),
                    (e.frozen = !0));
                  try {
                    et(e.video);
                  } catch {}
                  ((e.video = null), (e.wired = !1));
                } else e._freezeT = null;
              }, 4200)));
        },
        { once: !1 },
      );
    }
  }
  function In(e, t) {
    let o = e.video && e.video._hls;
    if (!o || !o.levels || o.levels.length < 2) return;
    let r = o.levels.length - 1,
      i = t < 20 ? r : t < 34 ? Math.max(0, r - 1) : -1;
    if (e._lvl !== i) {
      e._lvl = i;
      try {
        o.currentLevel = i;
      } catch {}
    }
  }
  function Nn(e) {
    for (let t = 0; t < k; t++) if (e > S[t].z0 - S[t].L) return t;
    return k - 1;
  }
  function Pn(e, t) {
    let { z0: o, L: r } = S[e];
    return t > o ? t - o : t < o - r ? o - r - t : 0;
  }
  let Rt = 1,
    Ne = null;
  function Ot(e) {
    if (e.wired) {
      try {
        clearTimeout(e._freezeT);
      } catch {}
      ((e._freezeT = null),
        et(e.video),
        e.vtex && (e.vtex.dispose(), (e.vtex = null)),
        (e.face.material.map = e.poster),
        Ve(e, 4 / 3),
        (e.face.material.needsUpdate = !0),
        (e.video = null),
        (e.wired = !1),
        (e.painted = !1),
        (e._lvl = void 0));
    }
  }
  function qn(e) {
    if (Se) {
      (Ne !== null && Math.abs(e - Ne) > 0.04 && (Rt = e < Ne ? 1 : -1),
        (Ne = e));
      let a = Nn(e),
        c = Math.max(0, Math.min(k - 1, a + Rt)),
        u = 0;
      for (let f of T) {
        let b = f.item.thumb;
        (!rt(b) && !it(b)) ||
          f.frozen ||
          (f.hallIdx === a || f.hallIdx === c
            ? !f.wired && u < 2 && (Ct(f), u++)
            : f.wired && Pn(f.hallIdx, e) > 10 && Ot(f));
      }
    }
    let t = s.matrixWorld.elements,
      o = -t[10],
      r = d && d.item,
      i = (a) =>
        a === pe || a === C || (r && a.item === r)
          ? !1
          : (a.center.z - e) * o < -0.5,
      g = T.map((a) => ({
        p: a,
        d: a === pe ? -1 : Math.abs(a.center.z - e),
        back: i(a),
      })).sort((a, c) => a.back - c.back || a.d - c.d),
      n = 0;
    for (let { p: a, d: c, back: u } of g) {
      let f = a.item.thumb;
      !(rt(f) || it(f)) ||
        a.frozen ||
        (!Se && c < 26 && !a.wired && n < Ht && Ct(a),
        a.wired &&
          a.video &&
          (c < 20 && !u && n < Ht
            ? (n++, a.video.paused && !zt() && a.video.play().catch(() => {}))
            : !a.video.paused && (u || !Se || a.painted) && a.video.pause(),
          Se && In(a, c),
          !Se && c > 40 && Ot(a)));
    }
  }
  let Bn = (e) => (e < 0 ? 0 : e > 1 ? 1 : e * e * (3 - 2 * e)),
    K = De - 9,
    _ = Math.min(K, Math.max(0, parseFloat(te.get("g3s")) || 0)),
    z = _,
    H = null,
    I = !1,
    d = null,
    N = 0,
    Ae = 0,
    oe = 0,
    Pe = 0,
    l = null,
    se = 0,
    ke = !1,
    qe = () => (Math.cos(oe) < 0 ? -1 : 1),
    Be = (e) => {
      z = Math.min(K, Math.max(0, z + e));
    },
    ce = !1,
    ge = 0,
    le = 0,
    ye = new Te(),
    P = 0,
    st = 0,
    Dt = () => {
      ((N += P), (oe += P), (P = 0), (st = 0));
    },
    Ee = 0,
    Fe = null,
    Q = null,
    q = !1,
    ct = (e) => {
      if (!q) {
        try {
          En("gallery", e);
        } catch {}
        if (ze()) {
          if (j.go && j.go(e)) {
            q = !0;
            return;
          }
          q = !0;
          try {
            window.VEASND && VEASND.fadeOut(320);
          } catch {}
          try {
            Lt(280);
          } catch {}
          try {
            _t(w, y, s);
          } catch {}
          try {
            location.href = e;
          } catch {}
          return;
        }
        if (j.go && j.go(e)) {
          q = !0;
          return;
        }
        q = !0;
        try {
          window.VEASND && VEASND.fadeOut(2400);
        } catch {}
        try {
          Lt(1400);
        } catch {}
        Tt(y, () => {
          _t(w, y, s);
          try {
            location.href = e;
          } catch {}
        });
      }
    },
    Fn = (e) => {
      let t = 1e9;
      for (let o = 1; o < k; o++) t = Math.min(t, Math.abs(e - S[o].z0));
      return t;
    },
    lt = (e) => {
      let t = 0;
      for (let o = 1; o < k; o++) {
        let r = Math.max(0, 1 - Math.abs(e - S[o].z0) / 8),
          i = Bn(Math.min(1, r * 1.25));
        t = t * (1 - i) + $e * i;
      }
      return t;
    },
    Vt = (e) => {
      let t = -2.2 - e;
      return { x: lt(t), z: t };
    },
    It = (e) => 3.5 + Math.min(1, Fn(e) / 7) * 5.5;
  (p.addEventListener(
    "wheel",
    (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        !(d || m.isOpen || I || q) &&
          ((H = null), (ce = !0), Be(e.deltaY * 0.016 * qe())));
    },
    { passive: !1 },
  ),
    p.addEventListener("pointerdown", (e) => {
      ((l = {
        x: e.clientX,
        y: e.clientY,
        t: e.timeStamp,
        t0: e.timeStamp,
        touch: e.pointerType === "touch",
        lx: 0,
        ly: 0,
        lookHold: e.pointerType !== "touch",
      }),
        l.lookHold && Dt(),
        (le = 0),
        (ge = 0),
        (ke = !1),
        (se = 0),
        p.setPointerCapture(e.pointerId),
        T.forEach((t) => {
          t.video && t.video.paused && !zt() && t.video.play().catch(() => {});
        }));
    }),
    p.addEventListener("pointermove", (e) => {
      if (!l) return;
      let t = e.clientX - l.x,
        o = e.clientY - l.y;
      if (((se += Math.abs(t) + Math.abs(o)), !m.isOpen))
        if (
          ((l.lx += Math.abs(t)),
          (l.ly += Math.abs(o)),
          !l.lookHold &&
            l.lx > 14 &&
            l.lx > l.ly * 0.6 &&
            ((l.lookHold = !0), Dt()),
          !l.walkIntent && l.ly > 16 && l.ly > l.lx && (l.walkIntent = !0),
          l.touch)
        ) {
          if (!d) {
            ((H = null),
              (ce = !0),
              (z = Math.min(K, Math.max(0, z + o * 0.05))));
            let r = Math.max(1, e.timeStamp - (l.t || e.timeStamp));
            ge = ge * 0.7 + ((o * 0.05) / r) * 0.3;
          }
          N += t * 0.0026;
        } else N += t * 0.0038;
      ((l.x = e.clientX), (l.y = e.clientY), (l.t = e.timeStamp));
    }));
  let Nt = () => {
    (l &&
      l.touch &&
      Math.abs(ge) > 0.004 &&
      (le = Math.max(-0.11, Math.min(0.11, ge))),
      (ge = 0),
      (l = null));
  };
  (p.addEventListener("pointerup", Nt),
    p.addEventListener("pointercancel", Nt),
    me.on(window, "keydown", (e) => {
      if (v !== "dead") {
        if (e.key === "Escape" && m.isOpen) {
          Ge();
          return;
        }
        d ||
          m.isOpen ||
          ((e.key === "ArrowUp" || e.key === "w") &&
            ((H = null), (ce = !0), Be(2.4 * qe())),
          (e.key === "ArrowDown" || e.key === "s") &&
            ((H = null), (ce = !0), Be(-2.4 * qe())));
      }
    }));
  let ut = new tn(),
    we = new Yt(),
    C = null,
    He = !1,
    U = null;
  (p.addEventListener("mousemove", (e) => {
    ((we.x = (e.clientX / innerWidth) * 2 - 1),
      (we.y = -(e.clientY / innerHeight) * 2 + 1),
      (He = !0));
  }),
    p.addEventListener("mouseleave", () => {
      He = !1;
    }));
  let R = document.createElement("div");
  ((R.id = "g3info"), (R.dataset.nodec = ""), document.body.appendChild(R));
  let We =
    window.matchMedia && matchMedia("(pointer: coarse)").matches
      ? "SWIPE TO WALK \xB7 TAP TO OPEN"
      : "SCROLL TO WALK \xB7 DRAG TO LOOK \xB7 CLICK A SCREEN TO ENTER";
  function Ce(e) {
    if (window.__veaHoldInfo) return;
    try {
      e && e !== C && window.VEASND && VEASND.hover();
    } catch {}
    if (e === C) return;
    C = e;
    let t = document.getElementById("cur");
    if (t) {
      t.className = e ? "big" : "";
      let r = t.querySelector("span");
      r && (r.textContent = e ? "Open" : "");
    }
    p.style.cursor = "none";
    let o = e
      ? [
          e.item.client,
          e.item.name,
          [e.item.venue, e.item.date].filter(Boolean).join(", "),
        ]
          .filter(Boolean)
          .join("  \xB7  ")
      : We;
    try {
      VEA.scrambleTo(R, o, 620);
    } catch {
      R.textContent = o;
    }
  }
  function ft() {
    if (d) {
      U = null;
      return;
    }
    if (v !== "on" || !He) {
      (Ce(null), (U = null));
      return;
    }
    if ((ut.setFromCamera(we, s), m.isOpen)) {
      Ce(null);
      let t = ut.intersectObjects(m.targets, !1)[0];
      ((U = t ? t.object : null), m.setHover(U));
      let o = document.getElementById("cur");
      (o && !C && (o.className = U ? "mid" : ""), (p.style.cursor = "none"));
      return;
    }
    U = null;
    let e = ut.intersectObjects(ot, !1)[0];
    Ce(e ? T[e.object.userData.pi] : null);
  }
  (p.addEventListener("click", (e) => {
    if (
      (e.isTrusted &&
        v === "on" &&
        !d &&
        ((we.x = (e.clientX / innerWidth) * 2 - 1),
        (we.y = -(e.clientY / innerHeight) * 2 + 1),
        (He = !0),
        ft()),
      se > 7 || d)
    )
      return;
    try {
      window.VEASND && (m.isOpen ? U : C) && VEASND.click();
    } catch {}
    if (m.isOpen) {
      U ? ct(U.userData.href) : Ge();
      return;
    }
    if (!C) return;
    let t = C;
    Ce(null);
    try {
      if (!window.__veaHoldInfo) {
        let i = [t.item.client, t.item.name].filter(Boolean).join("  \xB7  ");
        i && VEA.scrambleTo(R, i, 520);
      }
    } catch {}
    let r = t.center.clone().add(t.normal.clone().multiplyScalar(1.6));
    d = {
      p0: s.position.clone(),
      p1: r,
      look0: null,
      look1: t.center.clone(),
      t0: performance.now(),
      dur: 1500,
      item: t.item,
    };
    try {
      sessionStorage.setItem("g3seam", t.item.code || "");
    } catch {}
  }),
    window.addEventListener("keydown", (e) => {
      e.key === "Enter" &&
        (v !== "on" ||
          d ||
          m.isOpen ||
          (we.set(0, 0),
          (He = !0),
          (se = 0),
          ft(),
          C && p.dispatchEvent(new MouseEvent("click"))));
    }));
  let Pt = Array.from(document.querySelectorAll("#menu .menu-link")).map(
      (e) => ({
        label: Sn(e.getAttribute("href")),
        href: e.getAttribute("href"),
      }),
    ),
    m = An({
      scene: y,
      renderer: w,
      links: Pt.length
        ? Pt
        : [
            { label: "Home", href: "./" },
            { label: "Works", href: "works.html" },
            { label: "Archive", href: "archive.html" },
            { label: "About", href: "about.html" },
          ],
    });
  function Wn() {
    if (m.isOpen || d) return;
    (m.open(s),
      (Ae = 0),
      (Q = { from: N, to: Math.PI, t0: performance.now(), dur: 1050 }));
    let e = document.getElementById("menuBtn");
    e && e.setAttribute("aria-expanded", "true");
    try {
      VEA.scrambleTo(R, "ESC TO CLOSE", 520);
    } catch {}
  }
  function Ge() {
    if (!m.isOpen) return;
    (m.close(), (Q = { from: N, to: 0, t0: performance.now(), dur: 950 }));
    let e = document.getElementById("menuBtn");
    e && e.setAttribute("aria-expanded", "false");
    try {
      VEA.scrambleTo(R, We, 700);
    } catch {}
  }
  Ln(ct);
  try {
    window.VEASND && VEASND.room("salon");
  } catch {}
  let ue = -1,
    dt = [];
  function Me(e) {
    if (
      (dt.forEach((t) =>
        t.setAttribute("aria-selected", String(t.dataset.cat === A[e])),
      ),
      ce)
    )
      try {
        let t = new URL(location.href);
        (t.searchParams.set("cat", A[e]),
          history.replaceState(
            null,
            "",
            t.pathname + "?" + t.searchParams.toString(),
          ));
      } catch {}
  }
  function qt() {
    let e = document.getElementById("scCats");
    if (
      (e ||
        ((e = document.createElement("nav")),
        (e.id = "scCats"),
        (e.className = "sc-cats"),
        e.setAttribute("role", "tablist"),
        e.setAttribute("aria-label", "Work categories"),
        (e.dataset.nodec = ""),
        (e.style.cssText =
          "position:fixed;top:0;left:0;right:0;z-index:20;pointer-events:auto;"),
        A.forEach((o) => {
          let r = document.createElement("button");
          ((r.type = "button"),
            (r.className = "sc-cat"),
            (r.dataset.cat = o),
            (r.textContent = o),
            e.appendChild(r));
        }),
        document.body.appendChild(e)),
      !e.querySelector(".sc-cat"))
    )
      return !1;
    let t = e.cloneNode(!0);
    (e.parentNode.replaceChild(t, e),
      (dt = Array.from(t.querySelectorAll(".sc-cat"))));
    try {
      window.VEA && VEA.fitCats && VEA.fitCats(t);
    } catch {}
    return (
      me.on(window, "resize", () => {
        try {
          window.VEA && VEA.fitCats && VEA.fitCats(t);
        } catch {}
      }),
      dt.forEach((o) =>
        o.addEventListener("click", () => {
          let r = A.indexOf(o.dataset.cat);
          if (r < 0 || d || q || I) return;
          ((ce = !0), m.isOpen && Ge());
          let i = Math.min(K, -S[r].z0 + 2);
          if (Math.abs(i - _) < 0.5) {
            Me(r);
            return;
          }
          if (ze()) {
            ((I = !0), Me(r), t.classList.add("sc-busy"));
            let n = setTimeout(() => {
              ((I = !1), t.classList.remove("sc-busy"));
              try {
                Ze(!1);
              } catch {}
            }, 6e3);
            Ze(!0)
              .then(() => ((_ = z = i), (ue = r), Ie(r), Me(r), Ze(!1)))
              .then(() => {
                (clearTimeout(n), (I = !1), t.classList.remove("sc-busy"));
              });
            return;
          }
          try {
            yn(10);
          } catch {}
          ((I = !0), Me(r), t.classList.add("sc-busy"));
          let g = setTimeout(() => {
            ((I = !1), t.classList.remove("sc-busy"));
          }, 14e3);
          Tt(y, () => {
            ((_ = z = i),
              (ue = r),
              Ie(r),
              Me(r),
              Je(
                y,
                null,
                (() => {
                  try {
                    let n = sessionStorage.getItem("g3seed");
                    if (n != null)
                      return (
                        sessionStorage.removeItem("g3seed"),
                        parseFloat(n)
                      );
                  } catch {}
                  return null;
                })(),
              ),
              setTimeout(() => {
                (clearTimeout(g), (I = !1), t.classList.remove("sc-busy"));
              }, 4100));
          });
        }),
      ),
      !0
    );
  }
  let v = "guard",
    ve = 0;
  function Ue(e) {
    (x("gallery: DIE \u2192 flat" + (e ? " (remembered/g3off)" : "")),
      (v = "dead"),
      me.offAll(),
      cancelAnimationFrame(ve));
    try {
      (e && sessionStorage.setItem("g3off", "1"),
        sessionStorage.removeItem("g3ok"));
    } catch {}
    T.forEach((t) => {
      try {
        (clearTimeout(t._freezeT), (t._freezeT = null));
      } catch {}
      try {
        t.video && t.video._hls && t.video._hls.destroy();
      } catch {}
      try {
        t.video && (t.video.pause(), t.video.removeAttribute("src"));
      } catch {}
    });
    try {
      w.dispose();
    } catch {}
    (p.remove(),
      R.remove(),
      Mn(),
      he(!1),
      document.body.classList.remove("g3"),
      (window.__g3on = !1));
    try {
      bn(!1);
    } catch {}
    if (e) {
      let t = new URL(location.href);
      (t.searchParams.set("no3d", "1"),
        ue >= 0 && t.searchParams.set("cat", A[Math.min(ue, k - 1)]),
        location.replace(t.toString()));
    }
  }
  function Bt() {
    ((v = "on"),
      (window.__g3on = !0),
      x(
        "gallery: COMMIT \xB7 ROOM LIVE \u2713" +
          (Oe ? " (warm)" : " (guarded)"),
      ));
    try {
      Tn("salon", p);
    } catch {}
    try {
      _n(
        matchMedia("(pointer: coarse)").matches
          ? "SWIPE TO WALK \xB7 TAP TO OPEN"
          : "DRAG TO LOOK \xB7 SCROLL TO WALK",
      );
    } catch {}
    try {
      sessionStorage.setItem("g3ok", "1");
    } catch {}
    if (
      (Oe && (p.style.transition = "opacity .4s ease"),
      (() => {
        let o = document.getElementById("g3boot");
        return o && !o.hidden;
      })() && (p.style.transition = "none"),
      document.body.classList.add("g3"),
      wn(),
      he(!0),
      j.hold ||
        Je(
          y,
          null,
          (() => {
            try {
              let o = sessionStorage.getItem("g3seed");
              if (o != null)
                return (sessionStorage.removeItem("g3seed"), parseFloat(o));
            } catch {}
            return null;
          })(),
        ),
      j.onCommit)
    )
      try {
        j.onCommit();
      } catch {}
    rn({ renderer: w, die: Ue });
    let t = document.getElementById("scStage");
    if ((t && (t.innerHTML = ""), !qt())) {
      let o = 0,
        r = setInterval(() => {
          (qt() || ++o > 25) && clearInterval(r);
        }, 240);
    }
    try {
      VEA.scrambleTo(R, We, 1200);
    } catch {
      R.textContent = We;
    }
  }
  p.addEventListener("webglcontextlost", (e) => {
    (e.preventDefault(), v !== "dead" && Ue(v === "on"));
  });
  let L = { last: 0, frames: 0, t0: 0, fpsBad: 0 },
    Gn = parseFloat(te.get("g3fps")) || 22,
    Ye = new Te(),
    ht = 0;
  function mt(e) {
    ((ve = requestAnimationFrame(mt)), ht++);
    let t = tt ?? e / 1e3,
      o = e - (L.last || e),
      r = Math.min(50, o);
    if (((L.last = e), q)) {
      w.render(y, s);
      return;
    }
    if (v === "guard") {
      if (
        (L.t0 ? e - L.t0 > 350 && L.frames++ : (L.t0 = e),
        Oe && L.t0 && e > L.t0)
      )
        Bt();
      else if (e - L.t0 > 1750) {
        let n = L.frames / ((e - L.t0 - 350) / 1e3);
        if (Le || n >= Gn) Bt();
        else {
          Ue(!1);
          return;
        }
      }
    }
    if (v === "on" && !Le && tt == null) {
      let n = Math.min(o, 250);
      if (
        (n > 83
          ? (L.fpsBad += n)
          : (L.fpsBad = Math.max(0, L.fpsBad - n * 0.5)),
        L.fpsBad > 4200)
      )
        if (ze())
          if (
            (function () {
              try {
                return sessionStorage.getItem("veaMode") === "immersive";
              } catch {
                return !1;
              }
            })()
          )
            L.fpsBad = 0;
          else {
            (bt("flat"), Ue(!0));
            return;
          }
        else {
          bt("lite");
          try {
            w.setPixelRatio(X.dprCap);
          } catch {}
          L.fpsBad = 0;
        }
    }
    if (H) {
      let n = Math.min(1, (e - H.t0) / H.dur),
        a = n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
      ((z = _ = H.from + (H.to - H.from) * a), n >= 1 && (H = null));
    } else {
      if (
        (l &&
          l.touch &&
          se < 12 &&
          !m.isOpen &&
          !d &&
          !I &&
          e - l.t0 > 380 &&
          ((ce = !0), Be(r * 0.0045 * qe())),
        le &&
          !l &&
          !m.isOpen &&
          !d &&
          !I &&
          ((z = Math.min(K, Math.max(0, z + le * r))),
          (le *= Math.pow(0.94, r / 16.7)),
          Math.abs(le) < 0.002))
      ) {
        le = 0;
        let n = -1,
          a = 2.4;
        for (let c = 0; c < k; c++) {
          let u = Math.abs(z - Math.min(K, -S[c].z0 + 2));
          u < a && ((a = u), (n = c));
        }
        n >= 0 && (z = Math.min(K, -S[n].z0 + 2));
      }
      _ += (z - _) * (1 - Math.pow(0.9, r / 16.7));
    }
    if (
      (Fe === null && (Fe = _),
      (Ee +=
        (((_ - Fe) * 1e3) / Math.max(1, r) - Ee) *
        (1 - Math.pow(0.85, r / 16.7))),
      (Fe = _),
      !window.__veaStraight &&
        Math.abs(Ee) > 0.3 &&
        Math.cos(oe) > 0 &&
        (!l || !l.lookHold) &&
        (ke = !0),
      Q)
    ) {
      let n = Math.min(1, (e - Q.t0) / Q.dur),
        a = n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
      ((N = Q.from + (Q.to - Q.from) * a), n >= 1 && (Q = null));
    } else if (
      (!l || (l.touch && !l.lookHold)) &&
      !m.isOpen &&
      ke &&
      !window.__veaStraight
    ) {
      let n = Math.min(1, Math.max(0, (Math.abs(Ee) - 0.1) / 0.3));
      if (((n = n * n * (3 - 2 * n)), n > 0)) {
        let a = 1 - (1 - Math.pow(0.982, r / 16.7)) * n;
        ((N *= a),
          (Ae *= a),
          Math.abs(N) < 0.01 &&
            Math.abs(Ae) < 0.01 &&
            ((N = Ae = 0), (ke = !1)));
      }
    }
    let i = 1 - Math.pow(0.915, r / 16.7);
    if (((oe += (N - oe) * i), (Pe += (Ae - Pe) * i), m.update(r), d)) {
      let n = Math.min(1, (e - d.t0) / d.dur),
        a = n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
      if (!d.look0) {
        let c = Vt(_),
          u = It(c.z);
        d.look0 = new Te(lt(c.z - u), 2.1, c.z - u);
      }
      if (
        (s.position.lerpVectors(d.p0, d.p1, a),
        Ye.lerpVectors(d.look0, d.look1, Math.min(1, a * 1.35)),
        s.lookAt(Ye),
        n >= 1)
      ) {
        let c = d.item;
        d = null;
        let u = "work.html?p=" + encodeURIComponent(c.code);
        try {
          u = VEA.workUrl(c);
        } catch {}
        ct(u);
        return;
      }
    } else {
      let n = Vt(_);
      s.position.set(n.x, W.eyeHeight, n.z);
      let a = It(n.z);
      Ye.set(lt(n.z - a), 2.1, n.z - a);
      let c = Ye.x - n.x,
        u = 2.1 - W.eyeHeight,
        f = -a,
        b = Math.hypot(c, u, f) || 1,
        h = Math.asin(u / b),
        B = Math.atan2(-c, -f),
        O = 0;
      if (!(window.__veaStraight || (l && l.lookHold) || m.isOpen || I)) {
        let ae = V ? 0.8 : 0.48,
          J = V ? 0.6 : 0.42,
          je = 0,
          re = Math.min(K, Math.max(0, _ + (z - _) * 0.6)),
          be = s.position.x,
          Z = -2.2 - re;
        for (let Xe of T) {
          let Re = Z - Xe.center.z,
            ee = (Re - 5) / 5;
          if (ee <= -1 || ee >= 1) continue;
          let xe = (1 - ee * ee) * (1 - ee * ee);
          je += Math.atan2(be - Xe.center.x, Re) * xe;
        }
        let F = Math.min(1, Math.max(0, (Ee + 0.4) / 0.3));
        F = F * F * (3 - 2 * F);
        let Y = Math.min(1, Math.max(0, (Math.cos(oe) - 0.34) / 0.3));
        Y = Y * Y * (3 - 2 * Y);
        let fe = Math.max(-J, Math.min(J, je * ae)) * F * Y,
          ie = Math.min(1, Math.max(0, (Math.abs(Ee) - 0.05) / 0.3));
        ((ie = ie * ie * (3 - 2 * ie)),
          (O = P + (fe - P) * ie),
          l && l.touch && !l.walkIntent && (O = P));
      }
      (!V && C && (O = P),
        (st = O),
        (P += (O - P) * (1 - Math.exp(-r / 160))),
        s.rotation.set(h + Pe, B + oe + P, 0, "YXZ"));
    }
    let g = k - 1;
    for (let n = 0; n < k; n++)
      if (s.position.z > S[n].z0 - S[n].L) {
        g = n;
        break;
      }
    if (
      (g !== ue && v === "on"
        ? ((ue = g), Ie(g), Me(g))
        : v !== "on" && at < 0 && Ie(0),
      Rn(s.position.z),
      v === "on" && qn(s.position.z),
      V && v === "on" && !d && !m.isOpen && !q)
    ) {
      let n = null,
        a = 1e9,
        c = s.matrixWorld.elements,
        u = -c[8],
        f = -c[9],
        b = -c[10];
      for (let h of T) {
        let B = Math.abs(h.center.z - s.position.z);
        if (
          B > 14 ||
          B >= a ||
          (h.center.x - s.position.x) * u +
            (h.center.y - s.position.y) * f +
            (h.center.z - s.position.z) * b <
            0.3
        )
          continue;
        let O = h.normal.z,
          $ = -h.normal.x,
          M = 1.78;
        if ((ye.copy(h.center).project(s), Math.abs(ye.y) > 1.35)) continue;
        ye.set(h.center.x + O * M, h.center.y, h.center.z + $ * M).project(s);
        let ae = ye.x;
        ye.set(h.center.x - O * M, h.center.y, h.center.z - $ * M).project(s);
        let J = ye.x;
        Math.min(ae, J) > 0 || Math.max(ae, J) < 0 || ((a = B), (n = h));
      }
      if (n !== pe) {
        if (n) {
          try {
            clearTimeout(n._freezeT);
          } catch {}
          ((n._freezeT = null), n.frozen && ((n.frozen = !1), (n.wired = !1)));
        }
        pe = n;
      }
      Ce(n);
    } else ((pe = null), ft());
    if (
      (St.forEach((n, a) => {
        n && (n.visible = Math.abs(a - g) <= 1);
      }),
      !(G && X.figEvery > 1 && ht % X.figEvery))
    )
      for (let n of At) pn(n, t, s.position.z);
    if (!(ht & 1)) {
      let n = On.geometry.attributes.position;
      for (let a = 0; a < Dn; a += 2)
        ((n.array[a * 3 + 1] += Math.sin(e * 3e-4 + a) * 0.0024),
          (n.array[a * 3] += Math.cos(e * 22e-5 + a * 2) * 0.0018));
      n.needsUpdate = !0;
    }
    try {
      if (window.VEASND) {
        let n =
            p.__mv ||
            (p.__mv = { x: 0, y: 0, z: 0, qx: 0, qy: 0, qz: 0, qw: 1, t: 0 }),
          a = performance.now(),
          c = (a - (n.t || a)) / 1e3;
        if (c > 0.35 || c <= 0)
          ((n.t = a),
            (n.x = s.position.x),
            (n.y = s.position.y),
            (n.z = s.position.z),
            (n.qx = s.quaternion.x),
            (n.qy = s.quaternion.y),
            (n.qz = s.quaternion.z),
            (n.qw = s.quaternion.w));
        else {
          let u = Math.max(0.008, c),
            f = s.position.x - n.x,
            b = s.position.y - n.y,
            h = s.position.z - n.z,
            B = Math.sqrt(f * f + b * b + h * h) / u,
            O = Math.min(
              1,
              Math.abs(
                s.quaternion.x * n.qx +
                  s.quaternion.y * n.qy +
                  s.quaternion.z * n.qz +
                  s.quaternion.w * n.qw,
              ),
            ),
            $ = (2 * Math.acos(O)) / u;
          ((n.t = a),
            (n.x = s.position.x),
            (n.y = s.position.y),
            (n.z = s.position.z),
            (n.qx = s.quaternion.x),
            (n.qy = s.quaternion.y),
            (n.qz = s.quaternion.z),
            (n.qw = s.quaternion.w));
          let M = Math.min(1, $ / 1.4 + B / 22);
          M > 0.02 && VEASND.motion(M, !!(d || q));
        }
      }
    } catch {}
    (w.render(y, s), (window.__g3ready = !0));
  }
  ((ve = requestAnimationFrame(mt)),
    me.on(document, "visibilitychange", () => {
      v !== "dead" &&
        (cancelAnimationFrame(ve),
        document.hidden || (ve = requestAnimationFrame(mt)));
    }));
  let Ft = 0;
  me.on(window, "resize", () => {
    (clearTimeout(Ft),
      (Ft = setTimeout(() => {
        v !== "dead" &&
          ((s.aspect = innerWidth / innerHeight),
          s.updateProjectionMatrix(),
          w.setSize(innerWidth, innerHeight));
      }, 140)));
  });
  {
    let e = te.get("cat"),
      t = A.indexOf(e);
    t > 0 && !te.has("g3s") && (_ = z = Math.min(K, -S[t].z0 + 2));
  }
  window.__g3 = {
    get state() {
      return v;
    },
    get S() {
      return _;
    },
    set S(e) {
      ((_ = z = e), (H = null));
    },
    get targetS() {
      return z;
    },
    set targetS(e) {
      ((z = e), (H = null));
    },
    get hall() {
      return ue;
    },
    get flying() {
      return !!d;
    },
    get hover() {
      return C ? C.item.code : null;
    },
    get menuOpen() {
      return m.isOpen;
    },
    get exposure() {
      return w.toneMappingExposure;
    },
    get autoYaw() {
      return P;
    },
    get lookState() {
      return { yawT: N, yaw: oe, pit: Pe, homing: ke };
    },
    get autoYawT() {
      return st;
    },
    get ashFly() {
      return de.ptsMat.userData.uFly.value;
    },
    get ashSeed() {
      return de.ptsMat.userData.uSeed.value;
    },
    get dotSize() {
      return de.ptsMat.size;
    },
    get dotOp() {
      return de.ptsMat.opacity;
    },
    menu: m,
    openMenu: Wn,
    closeMenu: Ge,
    cats: A,
    panels: T,
    cam: s,
    flyToPanel(e) {
      let t = T[e];
      t &&
        ((C = t),
        (se = 0),
        p.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
    },
    clickMenu(e) {
      !m.isOpen ||
        !m.targets[e] ||
        ((U = m.targets[e]),
        (se = 0),
        p.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
    },
  };
  function Un() {
    ((v = "dead"),
      me.offAll(),
      cancelAnimationFrame(ve),
      T.forEach((e) => {
        try {
          (clearTimeout(e._freezeT), (e._freezeT = null));
        } catch {}
        try {
          e.video && et(e.video);
        } catch {}
        try {
          e.vtex && e.vtex.dispose();
        } catch {}
      }));
    try {
      (w.dispose(), w.forceContextLoss());
    } catch {}
    (p.remove(), R.remove());
  }
  return {
    kind: "salon",
    scene: y,
    renderer: w,
    cam: s,
    cv: p,
    hud: [R],
    get dead() {
      return v === "dead";
    },
    setDeparted() {
      q = !0;
    },
    startCondense() {
      Je(y);
    },
    unmount: Un,
  };
}
export { eo as boot };
