import { a as po } from "./chunk-FTHRROOF.js";
import {
  $ as jn,
  A as Qe,
  B as Fn,
  Ca as eo,
  Da as no,
  Ea as Re,
  Fa as oo,
  G as qn,
  Ga as ro,
  Ha as on,
  Ia as ee,
  J as B,
  Ja as so,
  Ka as ao,
  L as Ze,
  La as rn,
  Oa as io,
  Q as Gn,
  Qa as sn,
  R as Wn,
  Ra as co,
  S as Ae,
  Sa as an,
  Ta as lo,
  U as Je,
  Ua as fo,
  V as zn,
  Va as uo,
  W as Un,
  Wa as ho,
  X as $e,
  Y as pt,
  Z as tn,
  _ as Kn,
  aa as en,
  b as Ke,
  ba as Z,
  e as Cn,
  h as Nn,
  ha as Se,
  i as Bn,
  ia as Yn,
  ja as D,
  k as K,
  ka as Tt,
  o as je,
  oa as Bt,
  q as Ye,
  qa as nn,
  r as Xe,
  ra as Xn,
  sa as Qn,
  t as Me,
  ta as Zn,
  u as be,
  ua as Jn,
  v as Q,
  va as $n,
  w as P,
  wa as to,
  ya as Ft,
  z as Te,
} from "./chunk-CT4AYSS2.js";
async function Xo(st) {
  ((st = st || {}),
    ((t, e) => {
      try {
        window.__vlog
          ? window.__vlog(t, e)
          : console.log("[VEA] " + t + (e != null ? " \xB7 " + e : ""));
      } catch {}
    })("lobby(index): build start"));
  let J = new URLSearchParams(location.search),
    qt =
      J.has("force3d") ||
      (function () {
        try {
          var t = sessionStorage.getItem("g3lock");
          return t === "full" || t === "lite";
        } catch {
          return !1;
        }
      })(),
    ne = J.has("g3t") ? parseFloat(J.get("g3t")) : null;
  if (
    (!qt &&
      (window.innerWidth <= 860 ||
        (window.matchMedia && matchMedia("(pointer: coarse)").matches))) ||
    J.has("no3d") ||
    $e() === "flat" ||
    (!qt && navigator.connection && navigator.connection.saveData)
  )
    return;
  if (!qt) {
    try {
      if (sessionStorage.getItem("g3off")) return;
    } catch {}
    if (
      window.matchMedia &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
  }
  try {
    let t = document.createElement("canvas");
    if (!t.getContext("webgl2") && !t.getContext("webgl")) return;
  } catch {
    return;
  }
  if (!window.VEA || !VEA.loadShowcase) {
    ee(!1);
    return;
  }
  let oe = !1;
  try {
    oe = !!sessionStorage.getItem("g3ok");
  } catch {}
  let $ =
      window.innerWidth <= 860 ||
      (window.matchMedia && matchMedia("(pointer: coarse)").matches),
    mt = $ || pt() || ($e() === "auto" && Kn()),
    Et = jn(),
    At = lo(),
    St = await new Promise((t) => {
      try {
        VEA.loadShowcase((e) => t(e));
      } catch {
        t(null);
      }
    }),
    mo = (St && St.home) || [],
    _e =
      "/assets/offline/4ffd4941e270bddf.mp4",
    Eo = (t) => {
      if (!t) return _e;
      let e =
        t.mobile && String(t.mobile).toLowerCase() !== "null" ? t.mobile : "";
      return ($ && e) || t.media || _e;
    },
    F = mo.slice(0, 3);
  F.length || F.push({ media: _e });
  let k = 0,
    yo = () => {
      let t = F[k];
      return t && t.page
        ? (function () {
            try {
              return VEA.workUrl({ code: t.page });
            } catch {
              return "work.html?p=" + encodeURIComponent(t.page);
            }
          })()
        : "works.html";
    },
    wo = (t) => {
      if (!t || !t.page) return null;
      try {
        let e = VEA.norm(t.page);
        return (
          ((St && St.items) || []).find((o) => VEA.norm(o.code) === e) || null
        );
      } catch {
        return null;
      }
    },
    He = (t) => {
      let e = F[t] || {},
        o = wo(e),
        l = [e.client || (o && o.client), e.title || (o && o.name)]
          .filter(Boolean)
          .join(" \xB7 "),
        d = [e.date || (o && o.date), o && o.venue, o && o.medium]
          .filter(Boolean)
          .join(" \xB7 ");
      return { name: l || "THE FEATURED WORK", meta: d };
    },
    ve = [];
  ((St && St.items) || []).forEach((t) => {
    t.category && ve.indexOf(t.category) < 0 && ve.push(t.category);
  });
  let xe = Math.max(1, ve.length),
    Gt = 26,
    De = Gt,
    E = new Xe();
  E.fog = new Ye(0, $ ? 0.042 : 0.03);
  let w;
  try {
    w = new Un({ antialias: !mt, powerPreference: "high-performance" });
  } catch {
    ee(!1);
    return;
  }
  (w.setSize(innerWidth, innerHeight),
    w.setPixelRatio(pt() ? Et.dprCap : Math.min(devicePixelRatio, 2)),
    (w.toneMapping = Cn),
    (w.toneMappingExposure = 1.22),
    w.setClearColor(0));
  let M = w.domElement;
  ((M.className = "g3c"), document.body.appendChild(M));
  let f = new Wn($ ? 62 : 56, innerWidth / innerHeight, 0.1, 160),
    C = Qn(E, { z0: 0, L: Gt, word: "", end: "none", vitrine: !1 }),
    tt = -Gt,
    Go = Z.hallWidth / 2,
    re = Z.ceilH + 0.6,
    ct = 12,
    Rt = (ct * 9) / 16,
    lt = Rt / 2 + 0.55,
    cn = new P(new B(Z.hallWidth + 0.2, re), D.solidMat);
  (cn.position.set(0, re / 2, tt - 0.05), E.add(cn));
  let ln = Tt("VIRTUALLY EVER AFTER", { stroke: !0, px: 210 }),
    _t = new Q({ map: ln.tex, transparent: !1, color: 0 }),
    et = new P(new B(ct, Rt), _t);
  (et.position.set(0, lt, tt + 0.55), E.add(et));
  let Wt = new Te(new qn(new B(ct + 0.12, Rt + 0.12)), D.hairMat);
  (Wt.position.copy(et.position), E.add(Wt));
  {
    let t = [];
    for (let o of [-0.42, 0, 0.42])
      t.push(o * ct, lt + Rt / 2, tt + 0.55, o * ct * 0.7, re, tt + 0.2);
    let e = new be();
    (e.setAttribute("position", new Me(t, 3)), E.add(new Te(e, D.hairMat)));
  }
  let se = new je(),
    zt = -19.5,
    Ut = Z.wallX - 0.06,
    fn = 0.95,
    ae = 6;
  for (let t of [-fn + 0.1, fn - 0.1]) {
    let e = new P(new B(0.22, ae), D.glowMat);
    ((e.rotation.y = -Math.PI / 2),
      e.position.set(Ut, ae / 2, zt + t),
      se.add(e));
  }
  let dn = Tt("WORKS", { stroke: !1, px: 320 }),
    un = 0.72,
    go = un * dn.aspect,
    Oe = new P(
      new B(go, un),
      new Q({ map: dn.tex, transparent: !0, opacity: 0.92, toneMapped: !1 }),
    );
  ((Oe.rotation.y = -Math.PI / 2), Oe.position.set(Ut, 3.4, zt), se.add(Oe));
  let ie = new P(new B(2.2, ae), new Q({ visible: !1 }));
  ((ie.rotation.y = -Math.PI / 2),
    ie.position.set(Ut, ae / 2, zt),
    se.add(ie),
    E.add(se));
  let ce = new Ae(15791103, 90, 0, 0.55, 0.95, 1.7);
  (ce.position.set(Ut - 0.3, 4, zt),
    ce.target.position.set(Ut - 5, 0, zt),
    E.add(ce, ce.target));
  let Ht = null;
  {
    let t = -Z.wallX + 1.15,
      e = -8.2;
    for (let n = 0; n < 11; n++) {
      let i = n * 0.27,
        h = e - n * 0.42;
      (C.lines.push(t - 0.8, i, h, t + 0.8, i, h),
        C.lines.push(t - 0.8, i + 0.27, h, t + 0.8, i + 0.27, h),
        C.dimLines.push(t - 0.8, i + 0.27, h, t - 0.8, i + 0.27, h - 0.42),
        C.dimLines.push(t + 0.8, i + 0.27, h, t + 0.8, i + 0.27, h - 0.42));
    }
    (C.lines.push(
      t - 0.8,
      3,
      e - 4.65,
      t + 0.8,
      3,
      e - 4.65,
      t - 0.8,
      3,
      e - 6.4,
      t + 0.8,
      3,
      e - 6.4,
    ),
      C.hair.push(t + 0.85, 1, e, t + 0.85, 3.95, e - 4.65));
    let o = Tt("STUDIO", { stroke: !1, px: 300 }),
      l = 0.55,
      d = l * o.aspect,
      c = new P(
        new B(d, l),
        new Q({ map: o.tex, transparent: !0, opacity: 0.92, toneMapped: !1 }),
      );
    (c.position.set(t + 0.9, 3.7, e - 2.3),
      (c.rotation.y = Math.PI / 2),
      E.add(c),
      (Ht = new P(new B(2.4, 4.2), new Q({ visible: !1 }))),
      (Ht.rotation.y = Math.PI / 2),
      Ht.position.set(t + 0.9, 2.1, e - 2.3),
      E.add(Ht));
  }
  {
    let t = Z.hallWidth / 2 + 0.2,
      e = Z.ceilH + 2,
      o = new Q({ color: 197380, side: Ke }),
      l = (i, h, y, b) => {
        let R = new P(new B(i, h), o);
        (R.position.set(y, b, 0.15), E.add(R));
      };
    (l(t - 1.15, e, -(1.15 + (t - 1.15) / 2), e / 2),
      l(t - 1.15, e, 1.15 + (t - 1.15) / 2, e / 2),
      l(2.3, e - 3.45, 0, 3.45 + (e - 3.45) / 2),
      C.lines.push(
        -1.1,
        0,
        0.12,
        -1.1,
        3.4,
        0.12,
        1.1,
        0,
        0.12,
        1.1,
        3.4,
        0.12,
        -1.1,
        3.4,
        0.12,
        1.1,
        3.4,
        0.12,
      ));
    let d = new Q({ color: 15922687, side: Ke });
    for (let i of [-1, 1]) {
      let h = new P(new B(0.16, 3.4), d);
      (h.position.set(i * 0.98, 1.7, 0.2), E.add(h));
    }
    for (let i = 0; i < 6; i++) Bt(-6 + i * 2.4, 1.05, C.dots);
    C.lines.push(
      -7.6,
      7,
      1.05,
      7.6,
      7,
      1.05,
      -7.6,
      7.35,
      1.05,
      7.6,
      7.35,
      1.05,
    );
    for (let i = -6.8; i < 6.9; i += 0.3)
      C.dots.push(i, 7.55 + (1 - Math.abs(i) / 7.9) * 3.2 * 0.9, 1.1);
    C.hair.push(
      -7.9,
      7.5,
      1.1,
      0,
      10.7,
      1.1,
      0,
      10.7,
      1.1,
      7.9,
      7.5,
      1.1,
      -7.9,
      7.5,
      1.1,
      7.9,
      7.5,
      1.1,
    );
    for (let i = 0; i < 4; i++)
      C.lines.push(
        -8 + i * 0.3,
        0.42 - i * 0.14,
        1.6 + i * 0.55,
        8 - i * 0.3,
        0.42 - i * 0.14,
        1.6 + i * 0.55,
      );
    let c = [];
    for (let i = 0; i < 900; i++)
      c.push(-13 + Math.random() * 26, 0.02, 2 + Math.random() * 15);
    for (let [i, h] of [
      [-9.5, 10],
      [9.5, 10.5],
      [-12.5, 5.5],
      [12.5, 6],
    ])
      nn(i, h, c);
    let n = new be();
    (n.setAttribute("position", new Me(c, 3)),
      E.add(new Qe(n, D.outsideMat)),
      C.lines.push(-2, 0.02, 2.4, -2, 0.02, 15, 2, 0.02, 2.4, 2, 0.02, 15));
    for (let i of [-3.2, 3.2]) {
      C.hair.push(i, 0, 7.5, i, 3.4, 7.5);
      let h = new P(new Ze(0.07, 10, 8), D.glowMat);
      (h.position.set(i, 3.5, 7.5), E.add(h));
    }
  }
  (C.flush(), Zn(E, De, mt, po), Xn(E, De));
  let { dust: le, N: Mo } = Jn(E, De, mt, mt ? Et.dustFrac : 1);
  (E.add(new Je(16777215, 0.1)), E.add(new Gn(7173256, 0, 0.3)));
  for (let t = 0; t < ($ ? 2 : 3); t++) {
    let e = new Ae(15265535, 170, 0, 0.8, 0.9, 1.6),
      o = -(t + 0.5) * (Gt / 3);
    (e.position.set(0, Z.ceilH + 1.2, o),
      e.target.position.set(0, 0, o),
      E.add(e, e.target));
  }
  let hn = [];
  for (let t of [-ct / 3, ct / 3]) {
    let e = new Ae(15922687, 0, 0, 0.7, 0.8, 1.5);
    (e.position.set(t, re - 0.4, tt + 6),
      e.target.position.set(t * 0.6, lt, tt + 0.55),
      E.add(e, e.target),
      hn.push(e));
  }
  let pn = [],
    bo = mt ? Et.dens : 2.4,
    fe = $ ? [Ft.sitter] : [Ft.sitter, Ft.talkerA, Ft.talkerB, Ft.leaner],
    mn = mt ? Math.max(1, Math.round(fe.length * Et.figFrac)) : fe.length,
    To = fe.length / mn;
  for (let t = 0; t < mn; t++) pn.push($n(E, fe[Math.floor(t * To)], bo));
  let En = !1,
    nt = [],
    vt = [];
  F.forEach((t, e) => {
    let o = so(innerWidth);
    try {
      VEA.attachVideo(o, Eo(t), !0, !0);
    } catch {}
    (o.addEventListener("playing", () => {
      vt[e] || ((vt[e] = new Fn(o)), (vt[e].colorSpace = Nn));
      let l = vt[e],
        d = ct / Rt,
        c = (o.videoWidth || 16) / (o.videoHeight || 9);
      (l.repeat.set(1, 1),
        l.offset.set(0, 0),
        c > d
          ? ((l.repeat.x = d / c), (l.offset.x = (1 - l.repeat.x) / 2))
          : ((l.repeat.y = c / d), (l.offset.y = (1 - l.repeat.y) / 2)),
        e === k
          ? ((_t.map = l), (_t.needsUpdate = !0), (En = !0))
          : pt() && o.pause());
    }),
      nt.push(o));
  });
  let Wo = nt[0],
    Kt = [],
    de = new je();
  F.length > 1 &&
    (F.forEach((t, e) => {
      let o = Tt(String(e + 1), { stroke: !1, px: 220 }),
        l = 0.5,
        d = new P(
          new B(Math.max(0.3, l * o.aspect), l),
          new Q({
            map: o.tex,
            transparent: !0,
            opacity: e === 0 ? 0.95 : 0.38,
            toneMapped: !1,
          }),
        );
      (d.position.set((e - (F.length - 1) / 2) * 0.9, 0.27, tt + 0.7),
        (d.userData.fi = e),
        de.add(d),
        Kt.push(d));
    }),
    E.add(de));
  function Ie(t) {
    try {
      window.VEASND && A === "on" && VEASND.slide();
    } catch {}
    if (F.length < 2) return;
    let e = F.length,
      o = ((t % e) + e) % e;
    if (o === k) return;
    ((k = o),
      Kt.forEach((c) => {
        c.material.opacity = c.userData.fi === k ? 0.95 : 0.38;
      }));
    let l = vt[k];
    ((_t.map = l || ln.tex),
      (_t.needsUpdate = !0),
      (En = !!l),
      nt[k] && nt[k].paused && !rn() && nt[k].play().catch(() => {}),
      pt() &&
        nt.forEach((c, n) => {
          n !== k && !c.paused && c.pause();
        }));
    let d = He(k);
    try {
      VEA.scrambleTo(
        H,
        `FEATURED WORKS
` +
          d.name +
          (d.meta ? "  \xB7  " + d.meta : ""),
        620,
      );
    } catch {}
  }
  let xt = Gt - 8.5,
    Ve = -12.5,
    Le = Ve - 3,
    ot = Math.min(xt, Math.max(Ve, parseFloat(J.get("g3s")) || 0)),
    q = ot,
    _ = null,
    at = 0,
    jt = 0,
    Yt = 0,
    ue = 0,
    O = null,
    yt = 0,
    ke = !1,
    he = () => (Math.cos(Yt) < 0 ? -1 : 1),
    pe = (t) => {
      q = Math.min(xt, Math.max(Le, q + t));
    },
    Dt = 0,
    wt = 0,
    it = null,
    ft = !1,
    Xt = (t) => {
      if (!ft) {
        try {
          eo("hall", t);
        } catch {}
        if (pt()) {
          if (st.go && st.go(t)) {
            ft = !0;
            return;
          }
          ft = !0;
          try {
            window.VEASND && VEASND.fadeOut(320);
          } catch {}
          try {
            sn(280);
          } catch {}
          try {
            on(w, E, f);
          } catch {}
          try {
            location.href = t;
          } catch {}
          return;
        }
        if (st.go && st.go(t)) {
          ft = !0;
          return;
        }
        ft = !0;
        try {
          window.VEASND && VEASND.fadeOut(2400);
        } catch {}
        try {
          sn(1400);
        } catch {}
        no(E, () => {
          on(w, E, f);
          try {
            location.href = t;
          } catch {}
        });
      }
    },
    Ao = J.has("g3idle") ? parseFloat(J.get("g3idle")) : 15e3,
    Ot = performance.now();
  (At.on(
    window,
    "mousemove",
    () => {
      Ot = performance.now();
    },
    { passive: !0 },
  ),
    M.addEventListener(
      "wheel",
      (t) => {
        if (
          (t.preventDefault(), t.stopPropagation(), (Ot = performance.now()), s)
        ) {
          A === "on" &&
            t.deltaY > 0 &&
            (!s.grace || performance.now() > s.grace) &&
            Ge();
          return;
        }
        _ || T.isOpen || pe(t.deltaY * 0.012 * he());
      },
      { passive: !1 },
    ),
    M.addEventListener("pointerdown", (t) => {
      ((O = {
        x: t.clientX,
        y: t.clientY,
        t: t.timeStamp,
        t0: t.timeStamp,
        touch: t.pointerType === "touch",
      }),
        (wt = 0),
        (Dt = 0),
        (ke = !1),
        (yt = 0),
        M.setPointerCapture(t.pointerId),
        nt.forEach((e) => {
          e.paused && !rn() && e.play().catch(() => {});
        }));
    }),
    M.addEventListener("pointermove", (t) => {
      if (((Ot = performance.now()), !O)) return;
      let e = t.clientX - O.x,
        o = t.clientY - O.y;
      if (((yt += Math.abs(e) + Math.abs(o)), !T.isOpen))
        if (O.touch) {
          if (!_) {
            q = Math.min(xt, Math.max(Le, q + o * 0.04));
            let l = Math.max(1, t.timeStamp - (O.t || t.timeStamp));
            Dt = Dt * 0.7 + ((o * 0.04) / l) * 0.3;
          }
          at += e * 0.0026;
        } else at += e * 0.0038;
      ((O.x = t.clientX), (O.y = t.clientY), (O.t = t.timeStamp));
    }));
  let yn = () => {
    (O &&
      O.touch &&
      Math.abs(Dt) > 0.004 &&
      (wt = Math.max(-0.09, Math.min(0.09, Dt))),
      (Dt = 0),
      (O = null));
  };
  (M.addEventListener("pointerup", yn),
    M.addEventListener("pointercancel", yn),
    At.on(window, "keydown", (t) => {
      if (A !== "dead") {
        if (s && A === "on") {
          (t.key === "ArrowUp" || t.key === "w" || t.key === "Enter") && Ge();
          return;
        }
        if (t.key === "Escape" && T.isOpen) {
          Ce();
          return;
        }
        if (!(_ || T.isOpen)) {
          if (
            (t.key === "ArrowLeft" || t.key === "ArrowRight") &&
            N &&
            (N === "screen" || N.indexOf("feat") === 0)
          ) {
            Ie(k + (t.key === "ArrowRight" ? 1 : -1));
            return;
          }
          ((t.key === "ArrowUp" || t.key === "w") && pe(2.2 * he()),
            (t.key === "ArrowDown" || t.key === "s") && pe(-2.2 * he()));
        }
      }
    }));
  let dt = new zn(),
    gt = new Bn(),
    It = !1,
    N = null,
    ut = null;
  (M.addEventListener("mousemove", (t) => {
    ((gt.x = (t.clientX / innerWidth) * 2 - 1),
      (gt.y = -(t.clientY / innerHeight) * 2 + 1),
      (It = !0));
  }),
    M.addEventListener("mouseleave", () => {
      It = !1;
    }));
  let H = document.createElement("div");
  ((H.id = "g3info"), (H.dataset.nodec = ""), document.body.appendChild(H));
  let Pe =
    window.matchMedia && matchMedia("(pointer: coarse)").matches
      ? "SWIPE TO WALK \xB7 TAP TO OPEN"
      : "SCROLL TO APPROACH \xB7 DRAG TO LOOK \xB7 THE SCREEN TO ENTER";
  function Mt(t) {
    if (t === N) return;
    N = t;
    try {
      t && window.VEASND && VEASND.hover();
    } catch {}
    let e = document.getElementById("cur");
    if (e) {
      e.className = t === "screen" ? "big" : t ? "mid" : "";
      let l = e.querySelector("span");
      l && (l.textContent = t === "screen" ? "Open" : "");
    }
    M.style.cursor = "none";
    let o =
      t === "screen"
        ? `FEATURED WORKS
` +
          He(k).name +
          (F.length > 1 && !$ ? "  \xB7  \u2190 \u2192" : "")
        : t && t.indexOf("feat") === 0
          ? `FEATURED WORKS
` + He(+t.slice(4)).name
          : t === "portal"
            ? "WORKS \xB7 THE GALLERY"
            : t === "studio"
              ? "THE STUDIO \xB7 UP THE STAIR"
              : Pe;
    try {
      VEA.scrambleTo(H, o, 620);
    } catch {
      H.textContent = o;
    }
  }
  function wn() {
    if (A !== "on" || !It || _) {
      (Mt(null), (ut = null));
      return;
    }
    if ((dt.setFromCamera(gt, f), T.isOpen)) {
      Mt(null);
      let t = dt.intersectObjects(T.targets, !1)[0];
      ((ut = t ? t.object : null), T.setHover(ut), (M.style.cursor = "none"));
      return;
    }
    if (((ut = null), Kt.length)) {
      let t = dt.intersectObjects(Kt, !1)[0];
      if (t) return Mt("feat" + t.object.userData.fi);
    }
    if (dt.intersectObject(et, !1)[0]) return Mt("screen");
    if (dt.intersectObject(ie, !1)[0]) return Mt("portal");
    if (Ht && dt.intersectObject(Ht, !1)[0]) return Mt("studio");
    Mt(null);
  }
  M.addEventListener("click", (t) => {
    if (s) {
      if (A === "on") {
        try {
          window.VEASND && (VEASND.launch ? VEASND.launch() : VEASND.click());
        } catch {}
        try {
          window.VEASND && VEASND.room("lobby");
        } catch {}
        try {
          window.VEASND && VEASND.entered && VEASND.entered();
        } catch {}
        try {
          let o = document.getElementById("cur");
          if (o) {
            let l = o.querySelector("span");
            (l && (l.textContent = ""), (o.className = ""));
          }
        } catch {}
        Ge();
      }
      return;
    }
    if (
      (t.isTrusted &&
        A === "on" &&
        !_ &&
        ((gt.x = (t.clientX / innerWidth) * 2 - 1),
        (gt.y = -(t.clientY / innerHeight) * 2 + 1),
        (It = !0),
        wn()),
      yt > 7 || _)
    )
      return;
    try {
      window.VEASND && (T.isOpen ? ut : N) && VEASND.click();
    } catch {}
    if (T.isOpen) {
      ut ? Xt(ut.userData.href) : Ce();
      return;
    }
    if (N === "portal") {
      Xt("works.html");
      return;
    }
    if (N === "studio") {
      Xt("about.html");
      return;
    }
    if (N && N.indexOf("feat") === 0) {
      Ie(+N.slice(4));
      return;
    }
    if (N !== "screen") return;
    let e = (Rt / 2 / Math.tan((f.fov * Math.PI) / 360)) * 0.92;
    _ = {
      p0: f.position.clone(),
      p1: new K(0, lt, tt + 0.55 + e),
      look1: new K(0, lt, tt + 0.55),
      t0: performance.now(),
      dur: 1600,
    };
    try {
      sessionStorage.setItem("g3seam", (F[k] && F[k].page) || "");
    } catch {}
  });
  let gn = Array.from(document.querySelectorAll("#menu .menu-link")).map(
      (t) => ({
        label: uo(t.getAttribute("href")),
        href: t.getAttribute("href"),
      }),
    ),
    T = ho({
      scene: E,
      renderer: w,
      links: gn.length
        ? gn
        : [
            { label: "Home", href: "./" },
            { label: "Works", href: "works.html" },
            { label: "Archive", href: "archive.html" },
            { label: "About", href: "about.html" },
          ],
    });
  function So() {
    if (T.isOpen || _) return;
    (T.open(f),
      (jt = 0),
      (it = { from: at, to: Math.PI, t0: performance.now(), dur: 1050 }));
    let t = document.getElementById("menuBtn");
    t && t.setAttribute("aria-expanded", "true");
    try {
      VEA.scrambleTo(H, "ESC TO CLOSE", 520);
    } catch {}
  }
  function Ce() {
    if (!T.isOpen) return;
    (T.close(), (it = { from: at, to: 0, t0: performance.now(), dur: 950 }));
    let t = document.getElementById("menuBtn");
    t && t.setAttribute("aria-expanded", "false");
    try {
      VEA.scrambleTo(H, Pe, 700);
    } catch {}
  }
  fo(Xt);
  try {
    window.VEASND && VEASND.room("lobby");
  } catch {}
  let Ne = (() => {
    if (pt() || J.has("nointro")) return !1;
    if (J.has("g3intro")) return !0;
    if (ne != null || oe) return !1;
    try {
      if (sessionStorage.getItem("g3intro")) return !1;
    } catch {}
    return !0;
  })();
  try {
    window.__veaIntroPending = Ne;
  } catch {}
  let Ro = 3800,
    zo = 13e3,
    Be = 4200,
    s = null,
    rt = null;
  function _o(t) {
    let e = [],
      o = [],
      l = [],
      d = [],
      c = [],
      n = [],
      i = [],
      h = Math.max(48, xe * 24),
      y = -h / 2,
      b = h / 2,
      R = -30,
      j = -45,
      W = (R + j) / 2,
      v = { x: b + 7, z: W },
      X = 7,
      V = (r, a, p, m, u) => {
        let S = Math.hypot(p - r, m - a);
        for (let g = 0; g < 8; g++) {
          let z = 0.5 + (g * (u - 1)) / 7;
          for (let G = 0; G < S; G += 0.5) {
            let bt = G / S;
            e.push(r + (p - r) * bt, z, a + (m - a) * bt);
          }
        }
        (d.push(r, u, a, p, u, m), o.push(r, 0, a, r, u, a, p, 0, m, p, u, m));
      },
      Pn = (r, a, p, m, u, S, g) => {
        let z = Math.hypot(p - r, m - a),
          G = (p - r) / z,
          bt = (m - a) / z,
          Ct = -bt,
          Nt = G;
        d.push(r, S, a, p, S, m);
        for (let U of [-1, 1]) {
          d.push(
            r + Ct * u * U,
            g,
            a + Nt * u * U,
            p + Ct * u * U,
            g,
            m + Nt * u * U,
          );
          for (let L = 0; L <= z; L += 2.2)
            l.push(
              r + G * L,
              S,
              a + bt * L,
              r + G * L + Ct * u * U,
              g,
              a + bt * L + Nt * u * U,
            );
          for (let L = 0.25; L < 1; L += 0.25)
            for (let ge = 0.5; ge < z; ge += 0.8)
              e.push(
                r + G * ge + Ct * u * U * L,
                S - (S - g) * L,
                a + bt * ge + Nt * u * U * L,
              );
        }
        for (let [U, L] of [
          [r, a],
          [p, m],
        ])
          d.push(
            U + Ct * u,
            g,
            L + Nt * u,
            U,
            S,
            L,
            U,
            S,
            L,
            U - Ct * u,
            g,
            L - Nt * u,
          );
      };
    (V(-7.5, 0.4, -7.5, -26, 9),
      V(7.5, 0.4, 7.5, -26, 9),
      V(-7.5, -26, -1.6, -26, 9),
      V(1.6, -26, 7.5, -26, 9));
    for (let r = 0; r < 6; r++) {
      let a = -6 + r * 2.4;
      Bt(a, 0.9, e);
    }
    o.push(-7.6, 7, 0.9, 7.6, 7, 0.9, -7.6, 7.35, 0.9, 7.6, 7.35, 0.9);
    for (let r = -6.8; r < 6.9; r += 0.3)
      e.push(r, 9.15 + (1 - Math.abs(r) / 7.9) * 4 * 0.9, 0.95);
    for (let r = 0; r < 4; r++)
      o.push(
        -8 + r * 0.3,
        0.42 - r * 0.14,
        1.4 + r * 0.55,
        8 - r * 0.3,
        0.42 - r * 0.14,
        1.4 + r * 0.55,
      );
    o.push(
      -1.1,
      0,
      0.45,
      -1.1,
      3.4,
      0.45,
      1.1,
      0,
      0.45,
      1.1,
      3.4,
      0.45,
      -1.1,
      3.4,
      0.45,
      1.1,
      3.4,
      0.45,
      0,
      0,
      0.45,
      0,
      3.4,
      0.45,
    );
    for (let r of [-1, 1]) {
      let a = new P(new B(0.18, 3.4), D.glowMat);
      (a.position.set(r * 0.95, 1.7, 0.5), t.add(a));
    }
    Pn(0, 0.9, 0, -26, 7.9, 13, 9);
    {
      d.push(
        -7.5,
        8.6,
        0,
        -7.5,
        8.6,
        -10,
        -7.5,
        8.6,
        -10,
        7.5,
        8.6,
        -10,
        7.5,
        8.6,
        -10,
        7.5,
        8.6,
        0,
      );
      for (let a = -7; a < 7.5; a += 0.55)
        for (let p = -0.5; p > -9.6; p -= 1.6) e.push(a, 8.6, p);
      for (let a = -3; a <= 3; a += 0.3) e.push(a, 8.6 + 1.6, -7.6);
      o.push(
        -3.2,
        8.6 + 0.3,
        -7.6,
        3.2,
        8.6 + 0.3,
        -7.6,
        -3.2,
        8.6 + 2.4,
        -7.6,
        3.2,
        8.6 + 2.4,
        -7.6,
      );
    }
    (V(-1.6, -26, -1.6, -30, 6),
      V(1.6, -26, 1.6, -30, 6),
      d.push(-1.6, 6, -26, -1.6, 6, -30, 1.6, 6, -26, 1.6, 6, -30),
      V(y, R, -1.6, R, 9),
      V(1.6, R, b, R, 9),
      V(y, j, b, j, 9),
      V(y, R, y, j, 9),
      V(b, R, b, W + 2.2, 9),
      V(b, W - 2.2, b, j, 9));
    for (let r = 1; r < xe; r++) {
      let a = y + r * (h / xe);
      Math.abs(a) < 3 || (V(a, R, a, W + 2, 9), V(a, W - 2, a, j, 9));
    }
    for (let r = y + 4; r < b - 2; r += 6)
      (Bt(r, W + 3.9, e), Bt(r, W - 3.9, e));
    for (let r = y + 6; r < b - 3; r += 8)
      for (let a of [R - 0.4, j + 0.4])
        o.push(
          r - 1.5,
          1.4,
          a,
          r + 1.5,
          1.4,
          a,
          r + 1.5,
          1.4,
          a,
          r + 1.5,
          3.1,
          a,
          r + 1.5,
          3.1,
          a,
          r - 1.5,
          3.1,
          a,
          r - 1.5,
          3.1,
          a,
          r - 1.5,
          1.4,
          a,
        );
    Pn(y, W, b, W, 7.9, 12.4, 9);
    {
      for (let a = 0; a < 8; a++) {
        let p = 0.5 + a * 1;
        for (let m = 0; m < 64; m++) {
          let u = (m / 64) * Math.PI * 2;
          e.push(v.x + Math.sin(u) * X, p, v.z + Math.cos(u) * X);
        }
      }
      for (let a = 0; a < 8; a++) {
        let p = (a / 8) * Math.PI * 2 + 0.3;
        Bt(v.x + Math.sin(p) * (X - 1.6), v.z + Math.cos(p) * (X - 1.6), e);
      }
      for (let a = 0; a <= 5; a++) {
        let p = a / 5,
          m = X * Math.cos((p * Math.PI) / 2.15),
          u = 8 + 5.2 * Math.sin((p * Math.PI) / 2.15),
          S = Math.max(10, Math.round(m * 8));
        for (let g = 0; g <= S; g++) {
          let z = (g / S) * Math.PI * 2,
            G = ((g + 1) / S) * Math.PI * 2;
          d.push(
            v.x + Math.sin(z) * m,
            u,
            v.z + Math.cos(z) * m,
            v.x + Math.sin(G) * m,
            u,
            v.z + Math.cos(G) * m,
          );
        }
      }
      for (let a = 0; a < 12; a++) {
        let p = (a / 12) * Math.PI * 2,
          m = X,
          u = 8;
        for (let S = 1; S <= 5; S++) {
          let g = S / 5,
            z = X * Math.cos((g * Math.PI) / 2.15),
            G = 8 + 5.2 * Math.sin((g * Math.PI) / 2.15);
          (l.push(
            v.x + Math.sin(p) * m,
            u,
            v.z + Math.cos(p) * m,
            v.x + Math.sin(p) * z,
            G,
            v.z + Math.cos(p) * z,
          ),
            (m = z),
            (u = G));
        }
      }
    }
    let Ue = (r, a, p, m) => {
      let u = Math.hypot(p - r, m - a);
      for (let S = 1; S < u; S += 1.15) {
        let g = S / u;
        l.push(
          r + (p - r) * g,
          0.7,
          a + (m - a) * g,
          r + (p - r) * g,
          7.1,
          a + (m - a) * g,
        );
      }
      l.push(
        r + (p - r) * (1 / u),
        4.1,
        a + (m - a) * (1 / u),
        r + (p - r) * ((u - 1) / u),
        4.1,
        a + (m - a) * ((u - 1) / u),
      );
    };
    (Ue(-7.62, -2, -7.62, -24),
      Ue(y + 1, R + 0.12, -2.4, R + 0.12),
      Ue(2.4, R + 0.12, b - 1, R + 0.12));
    {
      let r = Tt("VIRTUALLY EVER AFTER", { stroke: !1, px: 240 }),
        a = 0.62,
        p = new P(
          new B(a * r.aspect, a),
          new Q({ map: r.tex, transparent: !0, opacity: 0.95, toneMapped: !1 }),
        );
      (p.position.set(0, 8.35, 1), t.add(p));
    }
    let we = (r, a, p, m, u) => {
      let S = Tt(r, { stroke: !1, px: 260 }),
        g = new P(
          new B(u * S.aspect, u),
          new Q({ map: S.tex, transparent: !0, opacity: 0.92, toneMapped: !1 }),
        );
      (g.position.set(a, p, m), t.add(g), i.push(g));
    };
    (we("LOBBY", 0, 14.8, -18, 1.8),
      we("THE STUDIO", 0, 16.9, -5, 1.4),
      we("THE GALLERY", 0, 14.6, W, 1.8),
      we("ROTUNDA", v.x, 15.4, v.z, 1.5));
    {
      let r = y - 18,
        a = Math.max(b + 24, v.x + 20),
        p = 16,
        m = j - 12;
      for (let u = r; u <= a; u += 8) l.push(u, 0.012, p, u, 0.012, m);
      for (let u = p; u >= m; u -= 8) l.push(r, 0.012, u, a, 0.012, u);
    }
    for (let r = 0; r < 1400; r++)
      c.push(
        y - 14 + Math.random() * (h + 44),
        0.02,
        16 - Math.random() * (16 - j + 22),
      );
    for (let [r, a] of [
      [-14, 6],
      [-19, -6],
      [13, 8],
      [18, 5],
      [y - 8, -20],
      [y - 10, -38],
      [b + 9, -18],
      [v.x + 12, W - 4],
      [-13, -50],
      [11, -51],
      [-11, 12],
    ])
      nn(r, a, c);
    for (let r = -9; r < 9; r += 0.2)
      c.push(
        r,
        0.3 + Math.abs(Math.sin(r * 4)) * 0.2,
        6.5 + Math.sin(r * 0.8) * 0.4,
      );
    o.push(-2, 0.02, 2.6, -2, 0.02, 16, 2, 0.02, 2.6, 2, 0.02, 16);
    for (let r of [-3.2, 3.2]) {
      d.push(r, 0, 8, r, 3.4, 8);
      let a = new P(new Ze(0.09, 10, 8), D.glowMat);
      (a.position.set(r, 3.5, 8), t.add(a), n.push(r, 3.3, 8));
    }
    let Pt = (r, a, p) => {
      if (!r.length) return;
      let m = new be();
      (m.setAttribute("position", new Me(r, 3)),
        t.add(p ? new Te(m, a) : new Qe(m, a)));
    };
    (Pt(e, D.ptsMat, !1),
      Pt(c, D.outsideMat, !1),
      Pt(n, Yn(16767392, 0.08, 0.6), !1),
      Pt(o, D.lineMat, !0),
      Pt(l, D.dimLineMat, !0),
      Pt(d, D.hairMat, !0),
      t.add(new Je(16777215, 0.5)));
    let No = (y + Math.max(b, v.x + X)) / 2,
      Bo = new K(No, 2.5, -19),
      Fo = Math.max(36, (Math.max(b, v.x + X) - y + 22) * 0.62);
    return { center: Bo, radius: Fo, labels: i };
  }
  if (Ne) {
    s = { ph: "wait", t0: 0, bb: Rn() };
    try {
      sessionStorage.setItem("g3intro", "1");
    } catch {}
    try {
      window.__veaIntro = !0;
    } catch {}
    try {
      window.VEASND && VEASND.room("intro");
    } catch {}
  }
  let Vt = new K(0, 4.4, 33),
    me = new K(0, 5, 0),
    Mn = (Math.PI * 2) / 20;
  if (!document.getElementById("g3cardCss")) {
    let t = document.createElement("style");
    ((t.id = "g3cardCss"),
      (t.textContent =
        "#g3card{position:fixed;left:24px;top:64px;z-index:22;width:min(320px,76vw);font-family:var(--font-mono);mix-blend-mode:difference;color:#fff;pointer-events:none;opacity:0;transition:opacity .9s ease;}#g3card.on{opacity:1;}#g3card img{height:30px;width:auto;display:block;margin-bottom:10px;filter:brightness(0) invert(1);}#g3card p{font-size:10.5px;line-height:1.75;letter-spacing:.04em;opacity:.85;margin:0;}"),
      document.body.appendChild(t));
  }
  let Y = document.getElementById("g3card") || document.createElement("div");
  (Y.classList.remove("on"), (Y.id = "g3card"), (Y.dataset.nodec = ""));
  {
    var bn =
      "Virtually Ever After is an architect-led creative studio based in Luxembourg. We design how brands exist through story, space, technology and craft. Our work spans identities, websites, immersive 3D experiences, films and physical environments. Founded in 2025.";
    try {
      if (window.__VEA && window.__VEA.about) {
        var Fe = window.__VEA.about;
        bn = Array.isArray(Fe) ? Fe.join(" ") : Fe;
      }
    } catch {}
    ((Y.innerHTML = '<img src="/assets/img/VEA-LOGO.png" alt="VEA"/><p></p>'),
      (Y.querySelector("p").textContent = bn));
  }
  Y.parentNode || document.body.appendChild(Y);
  let Qt = (t) => Y.classList.toggle("on", !!t),
    x = document.getElementById("g3skip") || document.createElement("button");
  ((x.id = "g3skip"),
    (x.type = "button"),
    (x.textContent = "Skip the intro"),
    x.classList.remove("on"),
    x.parentNode || document.body.appendChild(x),
    (x.onclick = (t) => {
      (t.stopPropagation(), Zt());
    }));
  let Tn = () => {
      ((x.style.transition = x.style.opacity = x.style.pointerEvents = ""),
        x.classList.add("on"));
    },
    Ho = () => {
      (x.classList.remove("on"),
        (x.style.transition = x.style.opacity = x.style.pointerEvents = ""));
    },
    An = (t) => {
      ((x.style.transition = "opacity " + Math.max(0.4, t / 1e3) + "s linear"),
        (x.style.opacity = "0"),
        (x.style.pointerEvents = "none"));
    },
    Sn = !1;
  function vo() {
    if (Sn) return;
    try {
      if (matchMedia("(pointer: coarse)").matches) return;
    } catch {}
    if (((Sn = !0), document.getElementById("g3enter"))) return;
    try {
      H &&
        ((H.style.transition = "opacity 1.1s ease"), (H.style.opacity = "0"));
    } catch {}
    try {
      let e = document.getElementById("g3skip");
      e &&
        ((e.style.transition = "opacity 18s linear"), (e.style.opacity = ".1"));
    } catch {}
    if (!document.getElementById("g3enterCss")) {
      let e = document.createElement("style");
      ((e.id = "g3enterCss"),
        (e.textContent =
          "#g3enter{position:fixed;left:50%;bottom:9vh;z-index:24;pointer-events:none;font-family:var(--font-mono);color:#fff;mix-blend-mode:difference;font-size:15px;letter-spacing:.6em;text-transform:uppercase;white-space:nowrap;padding-left:.6em;transform:translate(-50%,0) scale(.5);opacity:0;transition:bottom 18s cubic-bezier(.42,0,.2,1),transform 18s cubic-bezier(.42,0,.2,1),opacity 2.4s ease;}#g3enter.grow{bottom:50vh;transform:translate(-50%,50%) scale(1.9);opacity:.92;}#g3enter.bye{opacity:0!important;transition:opacity .6s ease;}"),
        document.head.appendChild(e));
    }
    let t = document.createElement("div");
    ((t.id = "g3enter"),
      (t.dataset.nodec = ""),
      (t.textContent = "STEP INSIDE"),
      document.body.appendChild(t),
      requestAnimationFrame(() =>
        requestAnimationFrame(() => t.classList.add("grow")),
      ));
  }
  function qe() {
    try {
      H && ((H.style.transition = "opacity .6s ease"), (H.style.opacity = ""));
    } catch {}
    let t = document.getElementById("g3enter");
    t &&
      (t.classList.add("bye"),
      setTimeout(() => {
        try {
          t.remove();
        } catch {}
      }, 700));
  }
  function Rn() {
    if (rt) return rt.userData.__bb;
    ((rt = new Xe()), (rt.fog = new Ye(0, 0.0085)));
    let t = _o(rt);
    return ((rt.userData.__bb = t), t);
  }
  function _n(t) {
    (en({ renderer: w, die: $t }),
      (s.ph = "orbit"),
      (s.t0 = t),
      (s.a0 = Math.atan2(Vt.x - s.bb.center.x, Vt.z - s.bb.center.z)),
      (s.r0 = Math.hypot(Vt.x - s.bb.center.x, Vt.z - s.bb.center.z)),
      (s.a = s.a0),
      (s.le = 0),
      Qt(!0));
  }
  function xo(t) {
    t = t || performance.now();
    let e = Math.PI * 2,
      o = (s.a0 - s.a) % e;
    (o < 0.001 && (o += e),
      (s.ph = "approach"),
      (s.t0 = t),
      (s.aFrom = s.a),
      (s.aDist = o),
      (s.leFrom = s.le),
      (s.dur = Math.max(500, (o / Mn) * 1e3 * 0.3)),
      Qt(!1),
      qe(),
      An(s.dur + Be),
      We());
  }
  function Ge() {
    s &&
      (s.ph === "wait" || s.ph === "facade" || s.ph === "rise"
        ? ((s.ph = "enter"),
          (s.t0 = performance.now()),
          (s.p0 = f.position.clone()),
          (s.lk0 = ht.clone()),
          Qt(!1),
          qe(),
          An(Be),
          We())
        : s.ph === "orbit"
          ? xo()
          : Zt());
  }
  function Do() {
    let t = Rn(),
      e = new K();
    (f.getWorldDirection(e),
      (s = {
        ph: "rise",
        re: !0,
        bb: t,
        t0: performance.now(),
        grace: performance.now() + 1600,
        p0: f.position.clone(),
        l0: f.position.clone().add(e.multiplyScalar(9)),
      }),
      Tn());
    try {
      window.__veaIntro = !0;
    } catch {}
    try {
      window.VEASND && VEASND.room("intro");
    } catch {}
    ot = q = 0;
    try {
      VEA.scrambleTo(
        H,
        $
          ? "THE BUILDING \xB7 TAP TO STEP BACK INSIDE"
          : "THE BUILDING \xB7 CLICK TO STEP BACK INSIDE",
        900,
      );
    } catch {}
  }
  function Hn(t) {
    let e = s.bb,
      o = (d) => d * d * (3 - 2 * d),
      l = (d, c) => {
        let n = s.r0 + (e.radius - s.r0) * c,
          i = 4.4 + (e.radius * 0.55 - 4.4) * c;
        (f.position.set(
          e.center.x + Math.sin(d) * n,
          i,
          e.center.z + Math.cos(d) * n,
        ),
          ht.lerpVectors(me, e.center, c),
          f.lookAt(ht));
      };
    if (
      (s.ph !== "enter" && (E.fog.density = 0.0085),
      s.ph === "wait" || s.ph === "facade")
    )
      (f.position.copy(Vt),
        f.lookAt(me),
        s.ph === "facade" && t - s.t0 >= Ro && _n(t));
    else if (s.ph === "rise") {
      let d = Math.min(1, (t - s.t0) / 1300),
        c = o(d);
      (f.position.lerpVectors(s.p0, Vt, c),
        ht.lerpVectors(s.l0, me, c),
        f.lookAt(ht),
        d >= 1 && _n(t));
    } else if (s.ph === "orbit") {
      let d = (t - s.t0) / 1e3,
        c = Mn * (d < 2.4 ? (d * d) / 4.8 : d - 1.2),
        n = Math.min(1, d / 3.4);
      ((s.a = s.a0 + c),
        (s.le = o(n)),
        l(s.a, s.le),
        !s.re && c >= Math.PI * 4 && vo());
    } else if (s.ph === "approach") {
      let d = Math.min(1, (t - s.t0) / s.dur),
        c = o(d);
      (l(s.aFrom + s.aDist * c, s.leFrom),
        d >= 1 &&
          ((s.ph = "enter"),
          (s.t0 = t),
          (s.p0 = f.position.clone()),
          (s.lk0 = ht.clone())));
    } else if (s.ph === "enter") {
      let d = Math.min(1, (t - s.t0) / Be),
        c = d < 0.5 ? 4 * d * d * d : 1 - Math.pow(-2 * d + 2, 3) / 2;
      E.fog.density = 0.0085 + (vn - 0.0085) * c;
      let n = new K(0, 1.72, 9),
        i = new K(0, Z.eyeHeight, -2.2);
      if (c < 0.55) {
        let h = c / 0.55;
        (f.position.lerpVectors(s.p0, n, h),
          ht.lerpVectors(s.lk0 || me, new K(0, 2.4, 0), h * h),
          f.lookAt(ht));
      } else {
        let h = (c - 0.55) / 0.45;
        if (
          (f.position.lerpVectors(n, i, h),
          f.lookAt(0, lt * 0.62, f.position.z - 9),
          f.position.z < -0.4)
        ) {
          Zt();
          return;
        }
      }
      d >= 1 && Zt();
    }
    {
      let d = s.bb.labels,
        c = [];
      (d.forEach((n) => {
        n.lookAt(f.position);
        let i = n.position.clone().project(f);
        c.push({
          m: n,
          x: i.x,
          y: i.y,
          d: f.position.distanceTo(n.position),
          behind: i.z > 1,
        });
      }),
        c.forEach((n) => {
          n.hide = n.behind;
        }));
      for (let n = 0; n < c.length; n++)
        for (let i = n + 1; i < c.length; i++) {
          let h = c[n],
            y = c[i];
          Math.abs(h.x - y.x) < 0.14 &&
            Math.abs(h.y - y.y) < 0.085 &&
            ((h.d > y.d ? h : y).hide = !0);
        }
      c.forEach((n) => {
        let i = n.m.material.opacity,
          h = n.hide ? 0.05 : 0.92;
        n.m.material.opacity = i + (h - i) * 0.12;
      });
    }
  }
  let ht = new K(),
    vn = E.fog.density;
  function xn() {
    w.render(rt, f);
    let t = D.ptsMat.userData.uFly.value,
      e = D.ptsMat.userData.uT.value;
    (t > 0 && Se(0, e),
      (w.autoClear = !1),
      w.render(E, f),
      (w.autoClear = !0),
      t > 0 && Se(t, e));
  }
  function Oo() {
    if (!rt) {
      w.render(E, f);
      return;
    }
    (w.render(rt, f), (w.autoClear = !1), w.render(E, f), (w.autoClear = !0));
  }
  function Zt() {
    if (!s) return;
    let t = s.re;
    s = null;
    try {
      Ho();
    } catch {}
    try {
      qe();
    } catch {}
    try {
      an(
        matchMedia("(pointer: coarse)").matches
          ? "SWIPE TO WALK \xB7 TAP TO OPEN"
          : "DRAG TO LOOK \xB7 SCROLL TO APPROACH",
      );
    } catch {}
    try {
      ((window.__veaIntro = !1), (window.__veaEntered = !0));
    } catch {}
    try {
      window.VEASND && VEASND.entered && VEASND.entered();
    } catch {}
    try {
      window.VEASND && VEASND.room("lobby");
    } catch {}
    (Qt(!1), (ot = q = 0));
    try {
      VEA.scrambleTo(H, Pe, 800);
    } catch {}
    try {
      sessionStorage.removeItem("g3seed");
    } catch {}
    ((E.fog.density = vn), !t && (Se(0, 0), We(), Io()));
  }
  let Jt = E.children.filter(
      (t) =>
        t.isMesh &&
        Math.abs(t.rotation.x + Math.PI / 2) < 0.001 &&
        Math.abs(t.position.x) < 3 &&
        t.position.y < 0.05,
    ),
    Dn = !1,
    On = !1;
  Ne &&
    (et.scale.set(1e-4, 1e-4, 1),
    Wt.scale.copy(et.scale),
    (le.visible = !1),
    Jt.forEach((t) => {
      t.visible = !1;
    }),
    (de.visible = !1));
  function We() {
    if (Dn) return;
    Dn = !0;
    let t = performance.now(),
      e = (l) => (l < 0 ? 0 : l > 1 ? 1 : l * l * (3 - 2 * l)),
      o = le.material;
    ((o.userData.uSeed.value = Math.random() * 100),
      (o.userData.uFly.value = 1.2),
      (le.visible = !0),
      (function l() {
        if (A === "dead") return;
        let d = performance.now(),
          c = d - t,
          n = e(c / 2200);
        ((o.userData.uFly.value = 1.2 * (1 - n) * (1 - n)),
          (o.userData.uT.value = d / 1e3),
          c < 2200 ? requestAnimationFrame(l) : (o.userData.uFly.value = 0));
      })());
  }
  function Io() {
    if (On) return;
    On = !0;
    let t = performance.now(),
      e = (c) => (c < 0 ? 0 : c > 1 ? 1 : c * c * (3 - 2 * c)),
      o = Jt.map((c) => c.position.y);
    Jt.forEach((c, n) => {
      ((c.visible = !0), (c.position.y = o[n] - 2.2));
    });
    try {
      window.VEASND && VEASND.condense(2e3);
    } catch {}
    let l = !1,
      d = !1;
    ((function c() {
      if (A === "dead") return;
      let i = performance.now() - t,
        h = e((i - 250) / 900);
      (et.scale.set(Math.max(1e-4, h), Math.max(1e-4, h), 1),
        Wt.scale.copy(et.scale));
      let y = e((i - 1100) / 800);
      if (
        (Jt.forEach((b, R) => {
          b.position.y = o[R] - 2.2 * (1 - y);
        }),
        !l && h >= 1)
      ) {
        l = !0;
        try {
          window.VEASND && VEASND.open();
        } catch {}
      }
      if (!d && y >= 1) {
        d = !0;
        try {
          window.VEASND && VEASND.settle(1100);
        } catch {}
      }
      i < 2200
        ? requestAnimationFrame(c)
        : (et.scale.set(1, 1, 1),
          Wt.scale.set(1, 1, 1),
          Jt.forEach((b, R) => {
            b.position.y = o[R];
          }));
    })(),
      (de.visible = !0));
  }
  let A = "guard",
    Lt = 0;
  function $t(t) {
    ((A = "dead"), At.offAll(), cancelAnimationFrame(Lt));
    try {
      (t && sessionStorage.setItem("g3off", "1"),
        sessionStorage.removeItem("g3ok"));
    } catch {}
    nt.forEach((e) => {
      try {
        e._hls && e._hls.destroy();
      } catch {}
      try {
        (e.pause(), e.removeAttribute("src"));
      } catch {}
    });
    try {
      w.dispose();
    } catch {}
    (M.remove(),
      H.remove(),
      Y.remove(),
      ro(),
      ee(!1),
      document.body.classList.remove("g3"),
      (window.__g3on = !1));
    try {
      ao(!1);
    } catch {}
    if (t) {
      let e = new URL(location.href);
      (e.searchParams.set("no3d", "1"), location.replace(e.toString()));
    }
  }
  function In() {
    ((A = "on"), (window.__g3on = !0));
    try {
      co("lobby", M);
    } catch {}
    try {
      s ||
        an(
          matchMedia("(pointer: coarse)").matches
            ? "SWIPE TO WALK \xB7 TAP TO OPEN"
            : "DRAG TO LOOK \xB7 SCROLL TO APPROACH",
        );
    } catch {}
    try {
      sessionStorage.setItem("g3ok", "1");
    } catch {}
    if (
      (oe && (M.style.transition = "opacity .4s ease"),
      (() => {
        let e = document.getElementById("g3boot");
        return e && !e.hidden;
      })() && (M.style.transition = "none"),
      document.body.classList.add("g3"),
      oo(),
      ee(!0),
      s)
    ) {
      ((s.ph = "facade"), (s.t0 = performance.now()), Re(rt), Qt(!0), Tn());
      try {
        VEA.scrambleTo(
          H,
          $
            ? "THE BUILDING \xB7 TAP TO STEP INSIDE"
            : "THE BUILDING \xB7 CLICK TO STEP INSIDE",
          900,
        );
      } catch {}
    } else
      st.hold ||
        Re(
          E,
          null,
          (() => {
            try {
              let e = sessionStorage.getItem("g3seed");
              if (e != null)
                return (sessionStorage.removeItem("g3seed"), parseFloat(e));
            } catch {}
            return null;
          })(),
        );
    if (st.onCommit)
      try {
        st.onCommit();
      } catch {}
    s || en({ renderer: w, die: $t });
  }
  M.addEventListener("webglcontextlost", (t) => {
    (t.preventDefault(), A !== "dead" && $t(A === "on"));
  });
  let te = !1,
    Ee = 0,
    kt = 0,
    Vn = !1;
  function Vo() {
    let t = document.getElementById("loader");
    return !t || t.classList.contains("fuse") || t.classList.contains("done");
  }
  function Lo() {
    if (Vn) return;
    Vn = !0;
    let t = document.getElementById("heroVideo");
    if (t) {
      try {
        (t.pause(), t._hls && t._hls.destroy());
      } catch {}
      try {
        (t.removeAttribute("src"), t.load());
      } catch {}
    }
    document.querySelectorAll("#featured video, #heroVideo").forEach((o) => {
      try {
        (o.pause(), (o.dataset.nowake = ""));
      } catch {}
    });
    let e = document.getElementById("vWake");
    e && e.remove();
  }
  let I = { last: 0, frames: 0, t0: 0, fpsBad: 0 },
    Ln = 0,
    ko = parseFloat(J.get("g3fps")) || 22,
    ye = new K(),
    Po = new K();
  function ze(t) {
    ((Lt = requestAnimationFrame(ze)), Ln++);
    let e = ne ?? t / 1e3,
      o = t - (I.last || t),
      l = Math.min(50, o);
    if (((I.last = t), ft)) {
      w.render(E, f);
      return;
    }
    if (A === "guard") {
      if (
        (I.t0 ? t - I.t0 > 350 && I.frames++ : (I.t0 = t),
        oe && I.t0 && t > I.t0)
      )
        In();
      else if (t - I.t0 > 1750) {
        let n = I.frames / ((t - I.t0 - 350) / 1e3);
        if (qt || n >= ko) In();
        else {
          $t(!1);
          return;
        }
      }
    }
    if (A === "on" && !qt && ne == null) {
      let n = Math.min(o, 250);
      if (
        (n > 83
          ? (I.fpsBad += n)
          : (I.fpsBad = Math.max(0, I.fpsBad - n * 0.5)),
        I.fpsBad > 4200)
      )
        if (pt())
          if (
            (function () {
              try {
                return sessionStorage.getItem("veaMode") === "immersive";
              } catch {
                return !1;
              }
            })()
          )
            I.fpsBad = 0;
          else {
            (tn("flat"), $t(!0));
            return;
          }
        else {
          tn("lite");
          try {
            w.setPixelRatio(Et.dprCap);
          } catch {}
          I.fpsBad = 0;
        }
    }
    if (s && (A !== "dead" && Hn(t), s)) {
      if ((xn(), It && (s.ph === "orbit" || s.ph === "facade"))) {
        dt.setFromCamera(gt, f);
        let n = s.bb,
          i =
            dt.ray.distanceToPoint(ye.set(n.center.x, 5, n.center.z)) <
            n.radius * 0.9,
          h = document.getElementById("cur");
        if (h) {
          h.className = i ? "big" : "";
          let y = h.querySelector("span");
          y && (y.textContent = i ? (s.re ? "Enter" : "Launch") : "");
        }
        M.style.cursor = "none";
      }
      window.__g3ready = !0;
      return;
    }
    if ((A === "on" && !te && Vo() && ((te = !0), (Ee = t), Lo()), te && Ee)) {
      kt = Math.min(1, (t - Ee) / 2100);
      let n = kt * kt * (3 - 2 * kt);
      (hn.forEach((i) => {
        i.intensity = 320 * n;
      }),
        _t.color.setRGB(n, n, n),
        kt >= 1 && (Ee = 0));
    }
    if (
      (!_ &&
        A === "on" &&
        !T.isOpen &&
        te &&
        performance.now() - Ot > Ao &&
        (q = Math.min(xt, q + l * 28e-5 * 1)),
      O &&
        O.touch &&
        yt < 12 &&
        !T.isOpen &&
        !_ &&
        t - O.t0 > 380 &&
        pe(l * 0.0045 * he()),
      wt &&
        !O &&
        !T.isOpen &&
        !_ &&
        ((q = Math.min(xt, Math.max(Le, q + wt * l))),
        (wt *= Math.pow(0.94, l / 16.7)),
        Math.abs(wt) < 0.002 && (wt = 0)),
      (ot += (q - ot) * (1 - Math.pow(0.9, l / 16.7))),
      A === "on" && !_ && !T.isOpen && !s && ot < Ve - 1.2)
    ) {
      (Do(), Hn(t), xn(), (window.__g3ready = !0));
      return;
    }
    if (it) {
      let n = Math.min(1, (t - it.t0) / it.dur),
        i = n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
      ((at = it.from + (it.to - it.from) * i), n >= 1 && (it = null));
    } else if (!O && !T.isOpen && ke) {
      let n = Math.pow(0.99, l / 16.7);
      ((at *= n),
        (jt *= n),
        Math.abs(at) < 0.01 &&
          Math.abs(jt) < 0.01 &&
          ((at = jt = 0), (ke = !1)));
    }
    let d = 1 - Math.pow(0.915, l / 16.7);
    if (((Yt += (at - Yt) * d), (ue += (jt - ue) * d), T.update(l), _)) {
      let n = Math.min(1, (t - _.t0) / _.dur),
        i = n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2;
      if ((f.position.lerpVectors(_.p0, _.p1, i), f.lookAt(_.look1), n >= 1)) {
        ((_ = null), Xt(yo()));
        return;
      }
    } else {
      let n = -2.2 - ot;
      (f.position.set(Math.sin(n * 0.11) * 0.45, Z.eyeHeight, n),
        ye.set(0, lt * 0.62, n - 9));
      let i = Math.max(0, Math.min(1, (ot - (xt - 9)) / 9));
      (i > 0 && ye.lerp(Po.set(0, lt, tt + 0.55), i * i * 0.8),
        f.lookAt(ye),
        (Yt || ue) && (f.rotateY(Yt), f.rotateX(ue)));
    }
    if (
      ($ && A === "on" && !T.isOpen && !_ && ((It = !0), gt.set(0, 0)),
      wn(),
      !(mt && Et.figEvery > 1 && Ln % Et.figEvery))
    )
      for (let n of pn) to(n, e, f.position.z);
    let c = le.geometry.attributes.position;
    for (let n = 0; n < Mo; n += 2)
      ((c.array[n * 3 + 1] += Math.sin(t * 3e-4 + n) * 0.0012),
        (c.array[n * 3] += Math.cos(t * 22e-5 + n * 2) * 9e-4));
    c.needsUpdate = !0;
    try {
      if (window.VEASND && !s) {
        let n =
            M.__mv ||
            (M.__mv = { x: 0, y: 0, z: 0, qx: 0, qy: 0, qz: 0, qw: 1, t: 0 }),
          i = performance.now(),
          h = (i - (n.t || i)) / 1e3;
        if (h > 0.35 || h <= 0)
          ((n.t = i),
            (n.x = f.position.x),
            (n.y = f.position.y),
            (n.z = f.position.z),
            (n.qx = f.quaternion.x),
            (n.qy = f.quaternion.y),
            (n.qz = f.quaternion.z),
            (n.qw = f.quaternion.w));
        else {
          let y = Math.max(0.008, h),
            b = f.position.x - n.x,
            R = f.position.y - n.y,
            j = f.position.z - n.z,
            W = Math.sqrt(b * b + R * R + j * j) / y,
            v = Math.min(
              1,
              Math.abs(
                f.quaternion.x * n.qx +
                  f.quaternion.y * n.qy +
                  f.quaternion.z * n.qz +
                  f.quaternion.w * n.qw,
              ),
            ),
            X = (2 * Math.acos(v)) / y;
          ((n.t = i),
            (n.x = f.position.x),
            (n.y = f.position.y),
            (n.z = f.position.z),
            (n.qx = f.quaternion.x),
            (n.qy = f.quaternion.y),
            (n.qz = f.quaternion.z),
            (n.qw = f.quaternion.w));
          let V = Math.min(1, X / 1.4 + W / 22);
          V > 0.02 && VEASND.motion(V, !!(_ || ft));
        }
      }
    } catch {}
    (Oo(), (window.__g3ready = !0));
  }
  ((Lt = requestAnimationFrame(ze)),
    At.on(document, "visibilitychange", () => {
      A !== "dead" &&
        (cancelAnimationFrame(Lt),
        document.hidden || (Lt = requestAnimationFrame(ze)));
    }));
  let kn = 0;
  (At.on(window, "resize", () => {
    (clearTimeout(kn),
      (kn = setTimeout(() => {
        A !== "dead" &&
          ((f.aspect = innerWidth / innerHeight),
          f.updateProjectionMatrix(),
          w.setSize(innerWidth, innerHeight));
      }, 140)));
  }),
    (window.__g3 = {
      get state() {
        return A;
      },
      get S() {
        return ot;
      },
      set S(t) {
        ot = q = t;
      },
      get targetS() {
        return q;
      },
      set targetS(t) {
        q = t;
      },
      get lit() {
        return kt;
      },
      get loaderDone() {
        return te;
      },
      get flying() {
        return !!_;
      },
      get hover() {
        return N;
      },
      get menuOpen() {
        return T.isOpen;
      },
      get exposure() {
        return w.toneMappingExposure;
      },
      get intro() {
        return s ? s.ph : null;
      },
      skipIntro() {
        Zt();
      },
      get ashSeed() {
        return D.ptsMat.userData.uSeed.value;
      },
      get ashFly() {
        return D.ptsMat.userData.uFly.value;
      },
      menu: T,
      openMenu: So,
      closeMenu: Ce,
      cam: f,
      screen: et,
      get feat() {
        return k;
      },
      get feats() {
        return F;
      },
      get vids() {
        return nt;
      },
      setFeat: Ie,
      featBtns: Kt,
      forceIdle() {
        Ot = -1e9;
      },
      touch() {
        Ot = performance.now();
      },
      clickScreen() {
        ((N = "screen"),
          (yt = 0),
          M.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
      },
      clickPortal() {
        ((N = "portal"),
          (yt = 0),
          M.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
      },
      clickMenu(t) {
        !T.isOpen ||
          !T.targets[t] ||
          ((ut = T.targets[t]),
          (yt = 0),
          M.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
      },
    }));
  function Co() {
    ((A = "dead"),
      At.offAll(),
      cancelAnimationFrame(Lt),
      nt.forEach((t) => {
        try {
          io(t);
        } catch {}
      }),
      vt.forEach((t) => {
        try {
          t && t.dispose();
        } catch {}
      }));
    try {
      (w.dispose(), w.forceContextLoss());
    } catch {}
    (M.remove(), H.remove(), Y.remove());
  }
  return {
    kind: "lobby",
    scene: E,
    renderer: w,
    cam: f,
    cv: M,
    hud: [H, Y],
    get dead() {
      return A === "dead";
    },
    setDeparted() {
      ft = !0;
    },
    startCondense() {
      Re(E);
    },
    unmount: Co,
  };
}
export { Xo as boot };
