import { a as Bn } from "./chunk-FTHRROOF.js";
import {
  $ as wn,
  A as we,
  B as an,
  C as Xt,
  Ca as Tn,
  D as Qt,
  Da as Rn,
  E as Ee,
  Ea as be,
  Fa as Hn,
  G as rn,
  Ga as _n,
  Ha as xe,
  Ia as At,
  J as tt,
  Ja as ke,
  Ka as An,
  L as sn,
  La as Te,
  O as cn,
  Oa as Wt,
  P as ln,
  Q as dn,
  Qa as Re,
  R as hn,
  Ra as Sn,
  S as un,
  Sa as In,
  T as Me,
  Ta as Pn,
  U as fn,
  Ua as Ln,
  V as pn,
  Va as Cn,
  W as mn,
  Wa as On,
  X as ye,
  Y as Dt,
  Z as ve,
  _ as gn,
  a as pe,
  aa as En,
  ba as st,
  e as $e,
  f as Je,
  fa as Mn,
  ga as yn,
  h as _t,
  i as Ze,
  ia as vn,
  ja as O,
  k as Mt,
  ka as $t,
  la as bn,
  na as xn,
  oa as kn,
  q as tn,
  r as en,
  s as nn,
  t as on,
  u as me,
  v as rt,
  w as q,
  z as ge,
} from "./chunk-CT4AYSS2.js";
async function lo(_) {
  ((_ = _ || {}),
    ((t, n) => {
      try {
        window.__vlog
          ? window.__vlog(t, n)
          : console.log("[VEA] " + t + (n != null ? " \xB7 " + n : ""));
      } catch {}
    })("work3d(rotunda): build start"));
  let St = new URLSearchParams(location.search),
    It =
      St.has("force3d") ||
      (function () {
        try {
          var t = sessionStorage.getItem("g3lock");
          return t === "full" || t === "lite";
        } catch {
          return !1;
        }
      })(),
    Vn = St.has("g3t") ? parseFloat(St.get("g3t")) : null;
  if (
    (!It &&
      (window.innerWidth <= 860 ||
        (window.matchMedia && matchMedia("(pointer: coarse)").matches))) ||
    St.has("no3d") ||
    ye() === "flat" ||
    (!It && navigator.connection && navigator.connection.saveData)
  )
    return;
  let Jt = !1;
  try {
    Jt = !!sessionStorage.getItem("g3ok");
  } catch {}
  let N =
      window.innerWidth <= 860 ||
      (window.matchMedia && matchMedia("(pointer: coarse)").matches),
    yt = N || Dt() || (ye() === "auto" && gn()),
    Zt = wn(),
    te =
      (window.matchMedia && matchMedia("(pointer: coarse)").matches) ||
      window.innerWidth <= 860
        ? 0.8
        : 16 / 9,
    ct = Pn();
  if (!It) {
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
  if (!window.VEA) {
    At(!1);
    return;
  }
  let m, Pt;
  if (
    (_.bridge
      ? ((m = _.bridge.item), (Pt = _.bridge.slides || []))
      : (await new Promise((t) => {
          if (window.__wkItem) return t();
          (document.addEventListener("wk:hydrated", t, { once: !0 }),
            setTimeout(t, 2e4));
        }),
        (m = window.__wkItem),
        (Pt = (window.__wk && __wk.slides()) || [])),
    !m || !Pt.length)
  ) {
    At(!1);
    try {
      (document.documentElement.classList.remove("spaceboot"),
        document.body.classList.remove("g3"),
        (window.__g3on = !1),
        (window.__vflat = !0),
        document.body.classList.add("wk-reveal"));
    } catch {}
    return;
  }
  let P = Pt.length,
    A = (Math.PI * 2) / P,
    et = P <= 8 ? 2.7 : 2.2,
    U = et / 2 + 0.8,
    zn = et * te,
    D = Math.max(5.8, (P * (zn + 1.1)) / (Math.PI * 2)),
    j = D + 1.5,
    u = D + 3.2,
    Lt = st.colHeight,
    k = 7.6,
    p = new en();
  p.fog = new tn(0, 0.026);
  let b;
  try {
    b = new mn({ antialias: !yt, powerPreference: "high-performance" });
  } catch {
    At(!1);
    return;
  }
  (b.setSize(innerWidth, innerHeight),
    b.setPixelRatio(Dt() ? Zt.dprCap : Math.min(devicePixelRatio, 2)),
    (b.toneMapping = $e),
    (b.toneMappingExposure = 1.22),
    b.setClearColor(0));
  let g = b.domElement;
  ((g.className = "g3c"), document.body.appendChild(g));
  let h = new hn(N ? 64 : 56, innerWidth / innerHeight, 0.1, 120);
  h.position.set(0, st.eyeHeight, 0);
  let ee = P === 1 ? 0 : Math.round((Math.PI - A / 2) / A) % P,
    He = ee * A + A / 2;
  function qn(t, n, s, r, o) {
    let [e, a, i] = r,
      c = t / 2,
      l = s / 2,
      d = [
        [e - c, a, i - l],
        [e + c, a, i - l],
        [e + c, a, i + l],
        [e - c, a, i + l],
        [e - c, a + n, i - l],
        [e + c, a + n, i - l],
        [e + c, a + n, i + l],
        [e - c, a + n, i + l],
      ];
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ].forEach(([w, f]) => o.push(...d[w], ...d[f]));
  }
  let lt = [],
    Q = [],
    Gt = [],
    dt = [],
    ht = [],
    ne = [];
  {
    for (let o = 0; o < P; o++) {
      if (o === ee) continue;
      let e = o * A + A / 2;
      kn(Math.sin(e) * j, -Math.cos(e) * j, lt);
    }
    for (let o of [Lt, Lt + 0.22]) {
      let e = Math.round(j * 24);
      for (let a = 0; a <= e; a++) {
        let i = (a / e) * Math.PI * 2,
          c = ((a + 1) / e) * Math.PI * 2;
        Q.push(
          Math.sin(i) * j,
          o,
          -Math.cos(i) * j,
          Math.sin(c) * j,
          o,
          -Math.cos(c) * j,
        );
      }
    }
    for (let o = 0; o < 11; o++) {
      let e = 0.4 + o * 0.72;
      if (e > k - 0.3) break;
      let a = Math.round((u * Math.PI * 2) / 0.2);
      for (let c = 0; c < a; c++) {
        let l = (c / a) * Math.PI * 2;
        dt.push(Math.sin(l) * u, e + Math.sin(l * 9) * 0.006, -Math.cos(l) * u);
      }
      let i = Math.round((u * Math.PI * 2) / 1.7);
      for (let c = 0; c < i; c++) {
        let l = ((c + (o % 2) * 0.5) / i) * Math.PI * 2;
        for (let d = e + 0.08; d < e + 0.68 && d < k - 0.3; d += 0.1)
          dt.push(Math.sin(l) * u, d, -Math.cos(l) * u);
      }
    }
    {
      let o = Math.round((u * Math.PI * 2) / 1.75);
      for (let e = 0; e < o; e++) {
        let a = (e / o) * Math.PI * 2;
        for (let i = 1.15; i < k - 1; i += 1.35) {
          for (let c = 0; c < 10; c++) {
            let l = (c / 10) * Math.PI * 2;
            dt.push(
              Math.sin(a) * u + Math.cos(a) * Math.cos(l) * 0.055,
              i + Math.sin(l) * 0.055,
              -Math.cos(a) * u + Math.sin(a) * Math.cos(l) * 0.055,
            );
          }
          if (Math.sin(a * 7.3 + i * 3.1) > 0.3) {
            let c = 0.5 + Math.abs(Math.sin(a * 5 + i)) * 1.5;
            for (let l = 0; l < c; l += 0.042)
              Math.sin(l * 31 + i * 7) > -0.35 &&
                ne.push(Math.sin(a) * u, i - 0.06 - l, -Math.cos(a) * u);
          }
        }
      }
      for (let e = 0; e < 12; e++) {
        let a = (e / 12) * Math.PI * 2 + 0.26;
        for (let i = 0; i < 30; i++) {
          let c = ((Math.sin(i * 7.7 + e) + 1) / 2) * 0.5;
          ne.push(
            Math.sin(a + c * 0.1) * u,
            0.25 + Math.abs(Math.sin(i * 2.1 + e)) * 0.6,
            -Math.cos(a + c * 0.1) * u,
          );
        }
      }
    }
    let t = (o, e, a, i) => {
      let c = Math.round((e * Math.PI * 2) / (i || 0.5));
      for (let l = 0; l <= c; l++) {
        let d = (l / c) * Math.PI * 2,
          w = (((l + 1) % (c + 1)) / c) * Math.PI * 2;
        a.push(
          Math.sin(d) * e,
          o,
          -Math.cos(d) * e,
          Math.sin(w) * e,
          o,
          -Math.cos(w) * e,
        );
      }
    };
    (t(k - 0.34, u - 0.04, Q, 0.6),
      t(k - 0.18, u - 0.04, Q, 0.6),
      t(0.18, u - 0.04, Gt, 0.6),
      t(st.datumHeight, u - 0.05, ht, 0.8));
    for (let o = u; o > 1.1; o -= 1.15) {
      let e = k + Math.pow(1 - o / u, 1.25) * 1.9,
        a = Math.round((o * Math.PI * 2) / 0.5);
      for (let i = 0; i < a; i++) {
        let c = (i / a) * Math.PI * 2;
        lt.push(Math.sin(c) * o, e, -Math.cos(c) * o);
      }
    }
    for (let o = 0; o < 24; o++) {
      let e = (o / 24) * Math.PI * 2,
        a = u,
        i = k;
      for (let c = u - 1.15; c > 1.1; c -= 1.15) {
        let l = k + Math.pow(1 - c / u, 1.25) * 1.9;
        (Gt.push(
          Math.sin(e) * a,
          i,
          -Math.cos(e) * a,
          Math.sin(e) * c,
          l,
          -Math.cos(e) * c,
        ),
          (a = c),
          (i = l));
      }
    }
    for (let o = 0; o < P; o++) {
      if (o === ee) continue;
      let e = o * A + A / 2,
        a = Math.sin(e),
        i = -Math.cos(e),
        c = -i,
        l = a,
        d = a * (u - 0.09),
        w = i * (u - 0.09),
        f = 0.62,
        F = 2.55,
        V = 3.35;
      (Q.push(d - c * f, 0.55, w - l * f, d - c * f, F, w - l * f),
        Q.push(d + c * f, 0.55, w + l * f, d + c * f, F, w + l * f));
      for (let I = 0; I < 14; I++) {
        let z = (I / 14) * Math.PI,
          K = ((I + 1) / 14) * Math.PI;
        Q.push(
          d - Math.cos(z) * c * f,
          F + Math.sin(z) * (V - F),
          w - Math.cos(z) * l * f,
          d - Math.cos(K) * c * f,
          F + Math.sin(K) * (V - F),
          w - Math.cos(K) * l * f,
        );
      }
      (Gt.push(d - c * f, 0.55, w - l * f, d + c * f, 0.55, w + l * f),
        qn(0.52, 0.82, 0.4, [d, 0.55, w], Q));
      for (let I = 0; I < 60; I++) {
        let z = Math.random() * Math.PI * 2,
          K = Math.acos(2 * Math.random() - 1),
          it = 0.2 * (0.7 + Math.random() * 0.3);
        lt.push(
          d + Math.sin(K) * Math.cos(z) * it * 0.8,
          1.68 + Math.cos(K) * it * 1.15,
          w + Math.sin(K) * Math.sin(z) * it * 0.8,
        );
      }
      for (let I = 0; I < 26; I++) {
        let z = Math.random() * Math.PI * 2;
        lt.push(
          d + Math.cos(z) * 0.19,
          1.45 + Math.random() * 0.1,
          w + Math.sin(z) * 0.19,
        );
      }
    }
    {
      let o = Math.round((j * Math.PI * 2) / 0.34);
      for (let e = 0; e < o; e++) {
        let a = (e / o) * Math.PI * 2;
        lt.push(Math.sin(a) * j, Lt + 0.11, -Math.cos(a) * j);
      }
    }
    for (let o = u - 1.72; o > 2.2; o -= 1.15) {
      let e = k + Math.pow(1 - o / u, 1.25) * 1.9 + 0.1;
      for (let a = 0; a < 24; a++) {
        let i = ((a + 0.5) / 24) * Math.PI * 2,
          c = Math.sin(i) * o,
          l = -Math.cos(i) * o,
          d = 0.22;
        lt.push(c + d, e, l, c - d, e, l, c, e, l + d, c, e, l - d);
      }
    }
    for (let o = 0; o < 6; o++) {
      let e = (o / 6) * Math.PI * 2,
        a = Math.sin(e) * 2.1,
        i = -Math.cos(e) * 2.1;
      ht.push(a, k + 1.2, i, a, 4.35, i);
      let c = new q(new sn(0.05, 10, 8), O.glowMat);
      (c.position.set(a, 4.3, i), p.add(c));
    }
    (ht.push(0, k + 1.8, 0, 0, 5.1, 0), t(k + 1.9, 1.05, ht, 0.3));
    let n = new q(new Qt(0.92, 40), O.glowMat);
    ((n.rotation.x = Math.PI / 2), n.position.set(0, k + 1.92, 0), p.add(n));
    for (let [o, e] of [
      [1.15, 64],
      [1.9, 96],
    ])
      for (let a = 0; a < e; a++) {
        let i = (a / e) * Math.PI * 2;
        dt.push(Math.cos(i) * o, 0.018, Math.sin(i) * o);
      }
    for (let o = 0; o < 8; o++) {
      let e = (o / 8) * Math.PI * 2;
      for (let a = 0.25; a < 1.9; a += 0.28)
        dt.push(Math.cos(e) * a, 0.018, Math.sin(e) * a);
    }
    for (let o = 2.9; o < u; o += 1.35) {
      let e = Math.round((o * Math.PI * 2) / 0.34);
      for (let a = 0; a < e; a++) {
        let i = (a / e) * Math.PI * 2;
        dt.push(Math.sin(i) * o, 0.015, -Math.cos(i) * o);
      }
    }
    let s = new Ee(u + 0.25, u + 0.25, k + 4, 48, 1, !0),
      r = new q(s, O.solidMat);
    ((r.material.side = pe), (r.position.y = (k + 4) / 2 - 0.5), p.add(r));
  }
  let vt = null;
  {
    let t = Math.sin(He),
      n = -Math.cos(He),
      s = -n,
      r = t,
      o = t * (u - 0.12),
      e = n * (u - 0.12),
      a = 1.05,
      i = 3.1,
      c = [];
    (c.push(o - s * a, 0, e - r * a, o - s * a, i, e - r * a),
      c.push(o + s * a, 0, e + r * a, o + s * a, i, e + r * a),
      c.push(o - s * a, i, e - r * a, o + s * a, i, e + r * a),
      c.push(o, 0, e, o, i, e),
      c.forEach((l, d) => Q.push(l)));
    for (let l of [-1, 1]) {
      let d = new q(new tt(0.2, i), O.glowMat);
      (d.position.set(o + s * l * (a - 0.12), i / 2, e + r * l * (a - 0.12)),
        d.lookAt(0, i / 2, 0),
        p.add(d));
    }
    {
      let l = $t("WORKS HALL", { stroke: !1, px: 300 }),
        d = a * 2 - 0.16,
        w = d / l.aspect,
        f = new q(
          new tt(d, w),
          new rt({
            map: l.tex,
            transparent: !0,
            opacity: 0.92,
            toneMapped: !1,
          }),
        );
      (f.position.set(t * (u - 0.2), i * 0.62, n * (u - 0.2)),
        f.lookAt(0, i * 0.62, 0),
        p.add(f));
    }
    ((vt = new q(new tt(a * 2 + 0.6, i + 1), new rt({ visible: !1 }))),
      vt.position.set(o, i / 2, e),
      vt.lookAt(0, i / 2, 0),
      p.add(vt));
  }
  {
    let t = String(m.name || m.client || "VEA").toUpperCase(),
      n = $t(t, { stroke: !0, px: 380 }),
      s = u - 0.18,
      r = 1.22,
      o = 1.9,
      e = (o * n.aspect) / s;
    e > r && ((e = r), (o = Math.max(0.7, (e * s) / n.aspect)));
    let a = new Ee(s, s, o, 48, 1, !0, Math.PI - e / 2, e),
      i = n.tex;
    ((i.wrapS = Je), (i.repeat.x = -1));
    let c = new q(
      a,
      new rt({ map: i, transparent: !0, opacity: 0.85, side: pe }),
    );
    (c.position.set(0, 4.6, 0), p.add(c));
    let l = $t(
        (m.client || "").toUpperCase() + "  \xB7  VIRTUALLY EVER AFTER",
        { stroke: !1, px: 90 },
      ),
      d = 0.18,
      w = d * l.aspect,
      f = new q(new tt(w, d), new rt({ map: l.tex, transparent: !0 }));
    (f.position.set(
      Math.sin(Math.PI / 2) * (u - 0.15),
      st.datumHeight + 0.26,
      -Math.cos(Math.PI / 2) * (u - 0.15),
    ),
      f.lookAt(0, st.datumHeight + 0.26, 0),
      p.add(f));
  }
  let oe = {
      video: "PLAY",
      embed: "PLAY",
      pdf: "INVESTIGATE",
      image: "ENLARGE",
      web: "LAUNCH",
    },
    T = [],
    _e = [],
    Nn = (t) => /\.(png|jpe?g|webp|gif|avif)(\?|#|$)/i.test(t || ""),
    ae = (t) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(t || ""),
    ie = (t) => /\.m3u8(\?|#|$)/i.test(t || ""),
    Ae = new ln();
  Ae.setCrossOrigin("anonymous");
  function Ct(t, n) {
    t.face.scale.set(1, 1, 1);
    let s = t.face.material.map;
    if (!s || !n || !isFinite(n)) return;
    let r = te;
    (n > r ? s.repeat.set(r / n, 1) : s.repeat.set(1, n / r),
      s.offset.set((1 - s.repeat.x) / 2, (1 - s.repeat.y) / 2),
      (s.needsUpdate = !0));
  }
  let Ot = [],
    Ft = 0;
  for (let t = 0; t < P; t++) {
    let n = Pt[t],
      s = n.w || {},
      r = (n.m && n.m.k) || "image",
      o = t * A,
      e = new Mt(Math.sin(o), 0, -Math.cos(o)),
      a = e.clone().multiplyScalar(D),
      i = et * te,
      c = new q(new tt(i, et), new rt({ color: 0 })),
      l = e.clone().multiplyScalar(D + 0.015);
    (c.position.set(l.x, U, l.z), c.lookAt(0, U, 0), p.add(c));
    let d = new q(
      new tt(i, et),
      new rt({
        map: bn(
          {
            client: s.client || m.client,
            name: s.title || m.name,
            venue: (oe[r] || "").toLowerCase(),
            date: s.year || "",
          },
          t + 3,
        ),
      }),
    );
    (d.position.set(a.x, U, a.z),
      d.lookAt(0, U, 0),
      (d.userData.ci = t),
      p.add(d));
    let w = Mn(O.hairMat.clone());
    w.opacity = 0.45;
    let f = new ge(new rn(new tt(i + 0.08, et + 0.08)), w);
    (f.position.copy(d.position), f.rotation.copy(d.rotation), p.add(f));
    let F = U + et / 2,
      V = e.clone().multiplyScalar(D);
    (ht.push(
      V.x - e.z * 1.05,
      F,
      V.z + e.x * 1.05,
      V.x - e.z * 0.55,
      Lt,
      V.z + e.x * 0.55,
    ),
      ht.push(
        V.x + e.z * 1.05,
        F,
        V.z - e.x * 1.05,
        V.x + e.z * 0.55,
        Lt,
        V.z - e.x * 0.55,
      ));
    let I = (() => {
        let X = document.createElement("canvas");
        ((X.width = 512), (X.height = 330));
        let Et = X.getContext("2d"),
          Kt = (Xe, Qe, eo, no) => {
            ((Et.font = eo),
              (Et.lineWidth = 7),
              (Et.lineJoin = "round"),
              (Et.strokeStyle = "rgba(0,0,0,.9)"),
              Et.strokeText(Xe, 36, Qe),
              (Et.fillStyle = "rgba(255,255,255," + no + ")"),
              Et.fillText(Xe, 36, Qe));
          };
        Kt(
          String(s.title || m.name || "").slice(0, 22),
          88,
          "500 32px 'IBM Plex Mono', monospace",
          ".95",
        );
        let Ye = String(s.jinfo || s.desc || "").slice(0, 60);
        (Kt(Ye.slice(0, 30), 160, "24px 'IBM Plex Mono', monospace", ".6"),
          Kt(Ye.slice(30, 60), 200, "24px 'IBM Plex Mono', monospace", ".6"),
          Kt(
            t + 1 + " / " + P + "  \xB7  " + (oe[r] || ""),
            272,
            "26px 'IBM Plex Mono', monospace",
            ".45",
          ));
        let Ke = new Xt(X);
        return ((Ke.colorSpace = _t), Ke);
      })(),
      z = new q(
        new tt(0.4, 0.258),
        new rt({ map: I, transparent: !0, opacity: 0.92 }),
      ),
      K = e.clone().multiplyScalar(D - 0.02);
    (z.position.set(K.x, 0.62, K.z),
      z.lookAt(0, 0.62, 0),
      p.add(z),
      _e.push(d));
    let it = {
      i: t,
      s: n,
      kind: r,
      face: d,
      frame: f,
      dir: e,
      angle: o,
      poster: d.material.map,
      video: null,
      vtex: null,
      wired: !1,
      thumbVid: "",
      thumbTried: !1,
    };
    (T.push(it), Ct(it, 4 / 3));
    let Yt = [];
    ([s.thumb, s.lprev].forEach((X) => {
      X && Yt.push(X);
    }),
      n.m && n.m.src && (r === "image" || r === "video") && Yt.push(n.m.src),
      (it.thumbVid = Yt.find((X) => ae(X) || ie(X)) || ""),
      Se(it, Yt, 0));
  }
  function Se(t, n, s) {
    if (s >= n.length) {
      t.kind === "pdf" &&
        t.s.m &&
        t.s.m.src &&
        (Ot.push({ cur: t, pdf: t.s.m.src }), Bt());
      return;
    }
    let r = n[s],
      o = () => Se(t, n, s + 1);
    if (ae(r) || ie(r)) {
      (Ot.push({ cur: t, src: r, fail: o }), Bt());
      return;
    }
    xn(
      Ae,
      r,
      (e) => {
        ((e.colorSpace = _t),
          (e.anisotropy = 4),
          (t.face.material.map = e),
          (t.face.material.needsUpdate = !0),
          (t.poster = e),
          (t.hasImg = !0),
          Ct(t, (e.image.naturalWidth || 4) / (e.image.naturalHeight || 3)));
      },
      () => {
        Nn(r) ? o() : (Ot.push({ cur: t, src: r, fail: o }), Bt());
      },
    );
  }
  function Dn(t, n, s) {
    t.thumbTried = !0;
    let r = ke(420),
      o = !1,
      e = (a) => {
        if (!o) {
          o = !0;
          try {
            if (a && r.videoWidth) {
              let i = Math.min(640, r.videoWidth),
                c = Math.round((i * r.videoHeight) / r.videoWidth),
                l = document.createElement("canvas");
              ((l.width = i),
                (l.height = c),
                l.getContext("2d").drawImage(r, 0, 0, i, c));
              let d = new Xt(l);
              ((d.colorSpace = _t),
                (t.face.material.map = d),
                (t.face.material.needsUpdate = !0),
                (t.poster = d),
                Ct(t, r.videoWidth / r.videoHeight));
            }
          } catch {
            a = !1;
          }
          (Wt(r), s(a));
        }
      };
    (r.addEventListener("playing", () => {
      requestAnimationFrame(() => requestAnimationFrame(() => e(!0)));
    }),
      r.addEventListener("error", () => e(!1)),
      setTimeout(() => e(!1), 9e3));
    try {
      VEA.attachVideo(r, n, !1, !1);
    } catch {
      e(!1);
    }
    r.play().catch(() => {});
  }
  function Wn(t, n, s) {
    t.thumbTried = !0;
    let r = document.createElement("div");
    ((r.style.cssText =
      "position:fixed;left:-150vw;top:0;width:420px;pointer-events:none;"),
      document.body.appendChild(r),
      Promise.resolve()
        .then(() => VEA.paintPdfCover(r, n))
        .then(() => {
          let o = r.querySelector("canvas");
          if (!o) return;
          let e = new Xt(o);
          ((e.colorSpace = _t),
            (t.face.material.map = e),
            (t.face.material.needsUpdate = !0),
            (t.poster = e),
            Ct(t, o.width / o.height));
        })
        .catch(() => {})
        .then(() => {
          (r.remove(), s());
        }));
  }
  function Bt() {
    for (; Ft < 2 && Ot.length;) {
      let t = Ot.shift();
      (Ft++,
        t.pdf
          ? Wn(t.cur, t.pdf, () => {
              (Ft--, Bt());
            })
          : Dn(t.cur, t.src, (n) => {
              (Ft--, Bt(), !n && t.fail && t.fail());
            }));
    }
  }
  if (!yt) {
    let t = new Bn(new Qt(u + 0.2, 48), {
      textureWidth: 1024,
      textureHeight: 1024,
      color: 4802896,
    });
    ((t.rotation.x = -Math.PI / 2), p.add(t));
  }
  {
    let t = new q(
      new Qt(u + 0.2, 48),
      new cn({
        color: 328966,
        roughness: 0.42,
        transparent: !yt,
        opacity: yt ? 1 : 0.72,
      }),
    );
    ((t.rotation.x = -Math.PI / 2), (t.position.y = yt ? 0 : 0.012), p.add(t));
  }
  let re = yt ? Math.max(80, Math.round(300 * Zt.dustFrac)) : 900,
    Gn = (() => {
      let t = new Float32Array(re * 3);
      for (let r = 0; r < re; r++) {
        let o = Math.random() * Math.PI * 2,
          e = Math.random() * u;
        ((t[r * 3] = Math.sin(o) * e),
          (t[r * 3 + 1] = Math.random() * k),
          (t[r * 3 + 2] = -Math.cos(o) * e));
      }
      let n = new me();
      n.setAttribute("position", new nn(t, 3));
      let s = new we(n, vn(11187400, 0.015, 0.38));
      return (p.add(s), s);
    })();
  {
    let t = (n, s, r) => {
      if (!n.length) return;
      let o = new me();
      (o.setAttribute("position", new on(n, 3)),
        p.add(r ? new ge(o, s) : new we(o, s)));
    };
    (t(lt, O.ptsMat, !1),
      t(dt, O.wallDotMat, !1),
      t(ne, O.rustMat, !1),
      t(Q, O.lineMat, !0),
      t(Gt, O.dimLineMat, !0),
      t(ht, O.hairMat, !0));
  }
  (p.add(new fn(16777215, 0.1)), p.add(new dn(7173256, 0, 0.3)));
  {
    let t = new Me(15791103, 60, u * 2.2, 1.6);
    (t.position.set(0, k + 1.4, 0), p.add(t));
  }
  for (let t = 0; t < (N ? 2 : 3); t++) {
    let n = (t / (N ? 2 : 3)) * Math.PI * 2 + 0.5,
      s = new un(15265535, 150, 0, 0.8, 0.9, 1.6);
    (s.position.set(Math.sin(n) * D * 0.5, k + 0.8, -Math.cos(n) * D * 0.5),
      s.target.position.set(Math.sin(n) * D * 0.6, 0, -Math.cos(n) * D * 0.6),
      p.add(s, s.target));
  }
  let Ie = new Me(12568276, 7, 8, 1.8);
  p.add(Ie);
  let W = 0,
    S = 0,
    bt = 0,
    ut = 0,
    M = null,
    y = !1,
    ft = !1,
    Fn = null,
    B = null,
    pt = 0,
    $ = null,
    nt = !1,
    Vt = (t) => {
      if (!nt) {
        try {
          Tn("work", t);
        } catch {}
        try {
          ([".k", "h2", ".n", ".mt", ".md"].forEach((n) => {
            let s = v.querySelector(n);
            s && s.textContent && VEA.scrambleTo(s, "", 620);
          }),
            se());
        } catch {}
        if (Dt()) {
          if (_.go && _.go(t)) {
            nt = !0;
            return;
          }
          nt = !0;
          try {
            window.VEASND && VEASND.fadeOut(320);
          } catch {}
          try {
            Re(280);
          } catch {}
          try {
            xe(b, p, h);
          } catch {}
          try {
            location.href = t;
          } catch {}
          return;
        }
        if (_.go && _.go(t)) {
          nt = !0;
          return;
        }
        nt = !0;
        try {
          window.VEASND && VEASND.fadeOut(2400);
        } catch {}
        try {
          Re(1400);
        } catch {}
        Rn(p, () => {
          xe(b, p, h);
          try {
            location.href = t;
          } catch {}
        });
      }
    };
  (g.addEventListener(
    "wheel",
    (t) => {
      try {
        window.VEASND && !E.isOpen && VEASND.slide();
      } catch {}
      (t.preventDefault(),
        t.stopPropagation(),
        !(M || y || E.isOpen) && (S += t.deltaY * 0.0012));
    },
    { passive: !1 },
  ),
    g.addEventListener("pointerdown", (t) => {
      ((B = {
        x: t.clientX,
        y: t.clientY,
        t: t.timeStamp,
        touch: t.pointerType === "touch",
      }),
        (ut = 0),
        (bt = 0),
        (pt = 0),
        g.setPointerCapture(t.pointerId),
        T.forEach((n) => {
          n.video && n.video.paused && !Te() && n.video.play().catch(() => {});
        }));
    }),
    g.addEventListener("pointermove", (t) => {
      if (!B) return;
      let n = t.clientX - B.x,
        s = t.clientY - B.y;
      if (
        ((pt += Math.abs(n) + Math.abs(s)),
        !E.isOpen && !y && !M && ((S -= n * 0.0032), B.touch))
      ) {
        let r = Math.max(1, t.timeStamp - (B.t || t.timeStamp));
        bt = bt * 0.7 + ((-n * 0.0032) / r) * 0.3;
      }
      ((B.x = t.clientX), (B.y = t.clientY), (B.t = t.timeStamp));
    }));
  let Pe = () => {
    (B &&
      B.touch &&
      Math.abs(bt) > 4e-4 &&
      (ut = Math.max(-0.008, Math.min(0.008, bt))),
      (bt = 0),
      (B = null));
  };
  (g.addEventListener("pointerup", Pe),
    g.addEventListener("pointercancel", Pe),
    ct.on(window, "keydown", (t) => {
      if (t.key === "Escape" && E.isOpen) {
        ue();
        return;
      }
      if (!(M || y || E.isOpen)) {
        if (
          (t.key === "ArrowRight" && (S += A),
          t.key === "ArrowLeft" && (S -= A),
          t.key === "ArrowRight" || t.key === "ArrowLeft")
        )
          try {
            window.VEASND && VEASND.slide();
          } catch {}
        if (
          t.key === "Enter" &&
          !E.isOpen &&
          !Nt() &&
          (G || ((ot.x = 0), (ot.y = 0), (xt = !0), he()), G)
        ) {
          pt = 0;
          try {
            g.dispatchEvent(new MouseEvent("click", { bubbles: !0 }));
          } catch {}
        }
      }
    }));
  let zt = new pn(),
    ot = new Ze(),
    G = null,
    xt = !1,
    J = null,
    L = -1,
    kt = !1;
  (g.addEventListener("mousemove", (t) => {
    ((ot.x = (t.clientX / innerWidth) * 2 - 1),
      (ot.y = -(t.clientY / innerHeight) * 2 + 1),
      (xt = !0));
  }),
    g.addEventListener("mouseleave", () => {
      xt = !1;
    }));
  let Z = document.createElement("div");
  if (
    ((Z.id = "g3info"),
    (Z.dataset.nodec = ""),
    document.body.appendChild(Z),
    !document.getElementById("g3ihudCss"))
  ) {
    let t = document.createElement("style");
    ((t.id = "g3ihudCss"),
      (t.textContent =
        "body.g3{--g3u:calc(.5vw + .25vh);}#g3ihud{position:fixed;left:calc(var(--g3u)*2.9);top:calc(var(--g3u)*11.4);z-index:22;width:calc(var(--g3u)*30);font-family:var(--font-mono);mix-blend-mode:difference;pointer-events:none;color:#fff;transform-origin:top left;}#g3ihud .k{font-size:calc(var(--g3u)*1.0);letter-spacing:.24em;text-transform:uppercase;opacity:.55;}#g3ihud h2{font-size:calc(var(--g3u)*2.7);line-height:1.05;letter-spacing:.02em;margin:calc(var(--g3u)*.7) 0 calc(var(--g3u)*.25);text-transform:uppercase;}#g3ihud .n{font-size:calc(var(--g3u)*1.3);letter-spacing:.14em;text-transform:uppercase;opacity:.8;}#g3ihud dl{margin:calc(var(--g3u)*1.7) 0 0;display:grid;grid-template-columns:auto 1fr;gap:calc(var(--g3u)*.32) calc(var(--g3u)*1.1);}#g3ihud dt{font-size:calc(var(--g3u)*.95);letter-spacing:.2em;text-transform:uppercase;opacity:.45;margin:0;}#g3ihud dd{font-size:calc(var(--g3u)*1.05);letter-spacing:.06em;margin:0;opacity:.82;white-space:normal;}#g3ihud .mt{font-size:calc(var(--g3u)*1.05);letter-spacing:.18em;text-transform:uppercase;opacity:.9;margin-top:calc(var(--g3u)*1.9);}#g3ihud .md{font-size:calc(var(--g3u)*1.1);line-height:1.7;letter-spacing:.02em;opacity:.6;margin:calc(var(--g3u)*.7) 0 0;white-space:normal;}#g3ihud .h2,#g3ihud h2,#g3ihud .n,#g3ihud .k,#g3ihud dl,#g3ihud .mt,#g3ihud .md,#g3ihud .g3act{transition:opacity .35s ease;}#g3ihud.axoff h2,#g3ihud.axoff .n,#g3ihud.axoff .k,#g3ihud.axoff dl,#g3ihud.axoff .mt,#g3ihud.axoff .md,#g3ihud.axoff .g3act{opacity:0!important;pointer-events:none!important;}#g3desc{position:fixed;right:calc(var(--g3u)*2.9);top:calc(var(--g3u)*11.4);z-index:22;width:calc(var(--g3u)*34);font-family:var(--font-mono);mix-blend-mode:difference;pointer-events:auto;color:#fff;max-height:calc(100vh - var(--g3u)*25);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.3) transparent;}#g3desc::-webkit-scrollbar{width:3px;}#g3desc::-webkit-scrollbar-thumb{background:rgba(255,255,255,.3);}#g3desc p{font-size:calc(var(--g3u)*1.2);line-height:1.85;opacity:.72;margin:0;white-space:pre-line;text-align:justify;text-align-last:right;}.bar-tag.g3backtag{display:inline-block!important;visibility:visible!important;font-size:calc(var(--g3u)*2.6)!important;letter-spacing:.18em!important;cursor:pointer;pointer-events:auto!important;text-transform:uppercase;}.g3hudout{opacity:0!important;transition:opacity .7s ease;}#g3edgeL,#g3edgeR{position:fixed;top:0;bottom:0;width:25vw;z-index:5;pointer-events:none;}#g3edgeL{left:0;}#g3edgeR{right:0;}#g3edgeL i,#g3edgeR i{position:absolute;inset:0;display:block;}#g3edgeL i:nth-child(1){backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);mask-image:linear-gradient(to right,#000 0%,#000 40%,transparent 96%);-webkit-mask-image:linear-gradient(to right,#000 0%,#000 40%,transparent 96%);}#g3edgeL i:nth-child(2){backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);mask-image:linear-gradient(to right,#000 0%,#000 22%,transparent 62%);-webkit-mask-image:linear-gradient(to right,#000 0%,#000 22%,transparent 62%);}#g3edgeL i:nth-child(3){backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);mask-image:linear-gradient(to right,#000 0%,#000 7%,transparent 34%);-webkit-mask-image:linear-gradient(to right,#000 0%,#000 7%,transparent 34%);}#g3edgeR i:nth-child(1){backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);mask-image:linear-gradient(to left,#000 0%,#000 40%,transparent 96%);-webkit-mask-image:linear-gradient(to left,#000 0%,#000 40%,transparent 96%);}#g3edgeR i:nth-child(2){backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);mask-image:linear-gradient(to left,#000 0%,#000 22%,transparent 62%);-webkit-mask-image:linear-gradient(to left,#000 0%,#000 22%,transparent 62%);}#g3edgeR i:nth-child(3){backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);mask-image:linear-gradient(to left,#000 0%,#000 7%,transparent 34%);-webkit-mask-image:linear-gradient(to left,#000 0%,#000 7%,transparent 34%);}@media (max-width:860px){#g3desc{display:none;}body.g3{--g3u:calc(1.6vw + .5vh);}.bar-tag.g3backtag{position:fixed;left:calc(6px + env(safe-area-inset-left,0px));top:calc(4px + env(safe-area-inset-top,0px));z-index:64;margin:0;font-size:calc(var(--g3u)*1.5)!important;padding:12px;mix-blend-mode:difference;color:#fff;}#g3ihud{left:0;top:0;right:0;bottom:0;width:auto;display:flex;flex-direction:column;align-items:flex-start;padding:calc(54px + env(safe-area-inset-top,0px)) 18px calc(80px + env(safe-area-inset-bottom,0px)) 18px;transform:none!important;}#g3ihud h2{font-size:calc(var(--g3u)*2.1);}#g3ihud dl{margin-top:auto;max-width:100%;}#g3ihud dt{font-size:calc(var(--g3u)*.85*var(--g3fit,.85));}#g3ihud dd{font-size:calc(var(--g3u)*.95*var(--g3fit,.85));}#g3ihud .mt{font-size:calc(var(--g3u)*.95*var(--g3fit,.85));margin-top:calc(var(--g3u)*1.1);}#g3ihud .md{font-size:calc(var(--g3u)*1.0*var(--g3fit,.85));line-height:1.55;margin-top:calc(var(--g3u)*.5);}#g3ihud dl,#g3ihud .mt,#g3ihud .md{padding-right:calc(126px + env(safe-area-inset-right,0px));}#g3ihud h2,#g3ihud .n,#g3ihud .k,#g3ihud dl,#g3ihud .mt,#g3ihud .md,#g3ihud .g3act{transition:opacity .35s ease;}#g3ihud.axoff h2,#g3ihud.axoff .n,#g3ihud.axoff .k,#g3ihud.axoff dl,#g3ihud.axoff .mt,#g3ihud.axoff .md,#g3ihud.axoff .g3act{opacity:0;pointer-events:none;}.g3act{display:inline-block;margin-top:calc(var(--g3u)*1.0);background:none;color:#fff;font-family:var(--font-mono);font-size:calc(var(--g3u)*.95);letter-spacing:.22em;text-transform:uppercase;border:1px solid rgba(255,255,255,.55);padding:7px 10px;pointer-events:auto;cursor:pointer;opacity:.92;}#g3edgeL,#g3edgeR{display:none;}}"),
      document.body.appendChild(t));
  }
  let mt = document.createElement("div");
  ((mt.id = "g3edgeL"),
    (mt.dataset.nodec = ""),
    (mt.innerHTML = "<i></i><i></i><i></i>"));
  let gt = document.createElement("div");
  ((gt.id = "g3edgeR"),
    (gt.dataset.nodec = ""),
    (gt.innerHTML = "<i></i><i></i><i></i>"),
    document.body.appendChild(mt),
    document.body.appendChild(gt));
  let v = document.createElement("div");
  ((v.id = "g3ihud"),
    (v.dataset.nodec = ""),
    (v.innerHTML =
      '<span class="k"></span><h2></h2><div class="n"></div><dl></dl><div class="mt"></div><p class="md"></p>'),
    document.body.appendChild(v));
  let x =
    document.querySelector("header .bar-tag") ||
    document.querySelector(".bar-tag");
  x &&
    !x.dataset.g3tag0 &&
    !x.classList.contains("g3backtag") &&
    !/[\\\[\]{}<>^#*+=]/.test(x.textContent) &&
    (x.dataset.g3tag0 = x.textContent);
  let Le = x ? x.dataset.g3tag0 || x.textContent : "",
    Ce = () => {
      if (R !== "on") return;
      let t = document.getElementById("wkBack");
      Vt(
        (t && t.getAttribute("href")) ||
          "works.html" +
            (m.category ? "?cat=" + encodeURIComponent(m.category) : ""),
      );
    };
  function Un() {
    if (x) {
      (x.classList.add("g3backtag"),
        (x.dataset.nodec = ""),
        x.addEventListener("click", Ce));
      try {
        VEA.scrambleTo(x, "BACK", 700);
      } catch {
        x.textContent = "BACK";
      }
      try {
        let t = document.getElementById("wkBack");
        t && ((t.dataset.g3hid = "1"), (t.style.visibility = "hidden"));
      } catch {}
    }
  }
  function se() {
    if (x) {
      (x.classList.remove("g3backtag"), x.removeEventListener("click", Ce));
      try {
        VEA.scrambleTo(x, Le, 700);
      } catch {
        x.textContent = Le;
      }
      try {
        let t = document.getElementById("wkBack");
        t &&
          t.dataset.g3hid &&
          (delete t.dataset.g3hid, (t.style.visibility = ""));
      } catch {}
    }
  }
  let C = document.createElement("div");
  ((C.id = "g3desc"),
    (C.dataset.nodec = ""),
    (C.innerHTML = "<p></p>"),
    document.body.appendChild(C),
    C.addEventListener(
      "wheel",
      (t) => {
        let n = C.scrollHeight - C.clientHeight;
        if (
          !(
            n > 1 &&
            ((t.deltaY < 0 && C.scrollTop > 0) ||
              (t.deltaY > 0 && C.scrollTop < n - 1))
          ) &&
          (t.preventDefault(), !(M || y || E.isOpen))
        ) {
          try {
            window.VEASND && !E.isOpen && VEASND.slide();
          } catch {}
          S += t.deltaY * 0.0012;
        }
      },
      { passive: !1 },
    ));
  let Oe = (t) =>
    String(t ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;");
  try {
    (VEA.scrambleTo(
      v.querySelector(".k"),
      [m.category, m.code].filter(Boolean).join(" \xB7 "),
    ),
      VEA.scrambleTo(v.querySelector("h2"), m.client || ""),
      VEA.scrambleTo(v.querySelector(".n"), m.name || ""),
      VEA.loadShowcase((n) => {
        let s = (n && n.labels) || [],
          r = N
            ? [
                [4, m.date],
                [8, m.services],
                [9, m.products],
              ]
            : [
                [4, m.date],
                [6, m.venue],
                [8, m.services],
                [9, m.products],
                [10, m.clientType],
                [11, m.medium],
              ];
        ((v.querySelector("dl").innerHTML = r
          .filter((o) => o[1])
          .map(
            (o) =>
              "<dt>" + Oe(s[o[0]] || "") + "</dt><dd>" + Oe(o[1]) + "</dd>",
          )
          .join("")),
          Tt());
      }));
    let t = String(m.brief || "").trim();
    ((C.querySelector("p").textContent = t),
      (C.style.display = t ? "" : "none"));
  } catch {}
  function jn() {
    try {
      let t = T[L >= 0 ? L : 0];
      if (!t) return innerHeight * 0.56;
      let n = t.face.position.clone();
      return (
        (n.y += (t.face.geometry.parameters.height / 2) * -1),
        n.project(h),
        ((1 - n.y) / 2) * innerHeight
      );
    } catch {
      return innerHeight * 0.56;
    }
  }
  function Tt() {
    if (N) {
      v.style.setProperty("--g3fit", ".85");
      let s = v.querySelector("dl"),
        r = () => {
          try {
            return s.getBoundingClientRect().top >= jn() + 12;
          } catch {
            return !0;
          }
        },
        o = 0.85;
      for (
        let e = 0;
        e < 8 &&
        !r() &&
        ((o -= 0.05),
        v.style.setProperty("--g3fit", o.toFixed(2)),
        !(o <= 0.5));
        e++
      );
      Kn();
      return;
    }
    v.style.transform = "none";
    let t = innerHeight - 96 - 84,
      n = v.scrollHeight;
    n > t &&
      n > 0 &&
      (v.style.transform = "scale(" + Math.max(0.45, t / n) + ")");
  }
  let Yn = {
      web: "LAUNCH WEB",
      video: "PLAY",
      pdf: "OPEN",
      embed: "OPEN",
      image: "VIEW",
    },
    Y = null;
  function Be() {
    if (!N) return;
    if (!Y) {
      ((Y = document.createElement("button")),
        (Y.type = "button"),
        (Y.className = "g3act"),
        (Y.dataset.nodec = ""),
        Y.addEventListener("click", (s) => {
          (s.preventDefault(), s.stopPropagation());
          try {
            let r = T[L >= 0 ? L : 0];
            if (!r) return;
            ((pt = 0),
              wt(r),
              g.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
          } catch {}
        }));
      let n = v.querySelector(".n");
      n && n.parentNode && n.parentNode.insertBefore(Y, n.nextSibling);
    }
    let t = T[L >= 0 ? L : 0];
    t && (Y.textContent = Yn[t.kind] || "OPEN");
  }
  function Kn() {
    Be();
  }
  let ce = new Mt(),
    Ve = new Mt(),
    ze = (t) => t.face.geometry.parameters.width,
    qt = !0,
    le = !0,
    qe = 0;
  function Xn() {
    if (!N) return;
    let t = !1;
    try {
      let r = T[L >= 0 ? L : 0];
      if (
        r &&
        (h.getWorldDirection(Ve),
        ce.copy(r.face.position).sub(h.position).dot(Ve) > 0)
      ) {
        let e = r.face.localToWorld(ce.set(-ze(r) / 2, 0, 0)).project(h).x,
          a = r.face.localToWorld(ce.set(ze(r) / 2, 0, 0)).project(h).x,
          i = Math.min(0 - Math.min(e, a), Math.max(e, a) - 0);
        t = le ? i > -0.04 : i > 0.1;
      }
    } catch {
      t = !1;
    }
    let n = performance.now();
    t !== le && ((le = t), (qe = n));
    let s = t ? 300 : 240;
    if (t !== qt && n - qe >= s) {
      qt = t;
      try {
        v.classList.toggle("axoff", !qt);
      } catch {}
      try {
        window.__vlog &&
          window.__vlog(
            "rotunda axis " +
              (qt ? "ON, record shows" : "OFF, empty space, record hidden"),
            "facedI=" + L,
          );
      } catch {}
      try {
        typeof at == "function" && at(qt ? De(T[L >= 0 ? L : 0]) : de);
      } catch {}
    }
  }
  (setTimeout(Tt, 60),
    ct.on(window, "resize", () => {
      R !== "dead" && Tt();
    }));
  let de =
      window.matchMedia && matchMedia("(pointer: coarse)").matches
        ? "SWIPE TO TURN \xB7 TAP TO OPEN"
        : "TURN TO LOOK AROUND \xB7 CLICK A SCREEN TO OPEN \xB7 BACK TO THE GALLERY",
    Ne = "";
  function at(t, n) {
    if (t !== Ne) {
      Ne = t;
      try {
        VEA.scrambleTo(Z, t, n || 620);
      } catch {
        Z.textContent = t;
      }
    }
  }
  function De(t) {
    let n = t.s.w || {};
    return [t.i + 1 + "/" + P, n.title || m.name]
      .filter(Boolean)
      .join("  \xB7  ");
  }
  function wt(t) {
    try {
      t && t !== G && window.VEASND && VEASND.hover();
    } catch {}
    if (t === G) return;
    G = t;
    let n = t && (t.s.w || {}),
      s = t
        ? n.noCta
          ? ""
          : t.kind === "web" && !n.wlive
            ? "Launch"
            : oe[t.kind] === "PLAY"
              ? "Play"
              : "Open"
        : "",
      r = document.getElementById("cur");
    if (r) {
      r.className = s ? "big" : "";
      let o = r.querySelector("span");
      o && (o.textContent = s);
    }
    g.style.cursor = "none";
  }
  function he() {
    if (R !== "on" || M || y) {
      (wt(null), (J = null));
      return;
    }
    if (E.isOpen) {
      if ((wt(null), !xt)) {
        J = null;
        return;
      }
      zt.setFromCamera(ot, h);
      let n = zt.intersectObjects(E.targets, !1)[0];
      ((J = n ? n.object : null), E.setHover(J), (g.style.cursor = "none"));
      return;
    }
    if (((J = null), !xt)) {
      (wt(null), (kt = !1));
      return;
    }
    zt.setFromCamera(ot, h);
    let t = zt.intersectObjects(_e, !1)[0];
    if (t) {
      (wt(T[t.object.userData.ci]), (kt = !1));
      return;
    }
    if ((wt(null), (kt = vt && !!zt.intersectObject(vt, !1)[0]), kt)) {
      g.style.cursor = "none";
      let n = document.getElementById("cur");
      (n && (n.className = "mid"),
        at("THE GALLERY \xB7 BACK THROUGH THE DOOR", 500));
    }
  }
  function Nt() {
    return !!document.querySelector(".vp.open, .vp-lite.open");
  }
  g.addEventListener("click", (t) => {
    if (
      (t.isTrusted &&
        R === "on" &&
        !M &&
        !y &&
        ((ot.x = (t.clientX / innerWidth) * 2 - 1),
        (ot.y = -(t.clientY / innerHeight) * 2 + 1),
        (xt = !0),
        he()),
      pt > 7 || M || y)
    )
      return;
    try {
      window.VEASND && (E.isOpen ? J : kt || G) && VEASND.click();
    } catch {}
    if (E.isOpen) {
      J ? Vt(J.userData.href) : ue();
      return;
    }
    if (kt) {
      let o = document.getElementById("wkBack");
      Vt(
        (o && o.getAttribute("href")) ||
          "works.html" +
            (m.category ? "?cat=" + encodeURIComponent(m.category) : ""),
      );
      return;
    }
    if (!G) return;
    let n = G,
      s = n.s.w || {};
    if (s.noCta) return;
    if (n.kind === "web" && !s.wlive) {
      try {
        window.open(n.s.m.src, "_blank", "noopener");
      } catch {}
      at("LAUNCHED \u2197", 600);
      return;
    }
    wt(null);
    let r = (et / 2 / Math.tan((h.fov * Math.PI) / 360)) * 1.06;
    ((Fn = W),
      (M = {
        p0: h.position.clone(),
        p1: n.dir
          .clone()
          .multiplyScalar(Math.max(1.2, D - r))
          .setY(U),
        look1: new Mt(n.face.position.x, U, n.face.position.z),
        t0: performance.now(),
        dur: 800,
        home: !1,
        then() {
          ((y = !0), (ft = !1));
          let o = !1;
          if (_.bridge) {
            try {
              o = !!(_.bridge.openMedia && _.bridge.openMedia(n.i));
            } catch {}
            if (!o) {
              Rt();
              return;
            }
            setTimeout(() => {
              y && !ft && !Nt() && Rt();
            }, 4e3);
            return;
          }
          try {
            window.__wk.goSlide(n.i);
          } catch {}
          try {
            o = !!(window.__wk.openMedia && window.__wk.openMedia(n.i));
          } catch {}
          if (o) {
            setTimeout(() => {
              y && !ft && !Nt() && Rt();
            }, 4e3);
            return;
          }
          let e = performance.now();
          (function a() {
            if (!y) return;
            let i = !1;
            try {
              i = window.__wk.active() === n.i;
            } catch {}
            if (i) {
              try {
                window.__wk.cta();
              } catch {}
              setTimeout(() => {
                y && !ft && !Nt() && Rt();
              }, 4e3);
              return;
            }
            if (performance.now() - e > 6e3) {
              Rt();
              return;
            }
            setTimeout(a, 80);
          })();
        },
      }));
  });
  function Rt() {
    if (y) {
      ((y = !1), (ft = !1));
      for (let t of T) {
        let n = t.vtex && t.video && !t.video.error && t.video.readyState >= 2;
        ((t.face.material.map = n ? t.vtex : t.poster),
          (t.face.material.needsUpdate = !0));
      }
      M = {
        p0: h.position.clone(),
        p1: new Mt(0, st.eyeHeight, 0),
        look1: null,
        home: !0,
        t0: performance.now(),
        dur: 750,
        then() {},
      };
    }
  }
  let Ut = !1,
    We = setInterval(() => {
      if (!y) {
        Ut = !1;
        return;
      }
      ((Ut = Nt()), Ut ? (ft = !0) : ft && Rt());
    }, 300);
  ct.on(
    document,
    "click",
    (t) => {
      if (!window.__g3on || R !== "on") return;
      let n = t.target.closest && t.target.closest("#wkBack");
      n &&
        (t.preventDefault(),
        t.stopImmediatePropagation(),
        Vt(n.getAttribute("href") || "works.html"));
    },
    { capture: !0 },
  );
  let Ge = Array.from(document.querySelectorAll("#menu .menu-link")).map(
      (t) => ({
        label: Cn(t.getAttribute("href")),
        href: t.getAttribute("href"),
      }),
    ),
    E = On({
      scene: p,
      renderer: b,
      links: Ge.length
        ? Ge
        : [
            { label: "Home", href: "./" },
            { label: "Works", href: "works.html" },
            { label: "Archive", href: "archive.html" },
            { label: "About", href: "about.html" },
          ],
    });
  function Qn() {
    if (E.isOpen || M || y) return;
    (E.open(h),
      ($ = { from: S, to: S + Math.PI, t0: performance.now(), dur: 1050 }));
    let t = document.getElementById("menuBtn");
    (t && t.setAttribute("aria-expanded", "true"), at("ESC TO CLOSE", 520));
  }
  function ue() {
    if (!E.isOpen) return;
    (E.close(),
      ($ = { from: S, to: S - Math.PI, t0: performance.now(), dur: 950 }));
    let t = document.getElementById("menuBtn");
    (t && t.setAttribute("aria-expanded", "false"), at(de, 700));
  }
  Ln(Vt);
  try {
    window.VEASND && VEASND.room("work");
  } catch {}
  let R = "guard",
    Ht = 0;
  function jt(t) {
    ((R = "dead"), ct.offAll(), cancelAnimationFrame(Ht), clearInterval(We));
    try {
      (t && sessionStorage.setItem("g3off", "1"),
        sessionStorage.removeItem("g3ok"));
    } catch {}
    T.forEach((n) => Wt(n.video));
    try {
      b.dispose();
    } catch {}
    (g.remove(),
      Z.remove(),
      v.remove(),
      C.remove(),
      mt.remove(),
      gt.remove(),
      se(),
      _n(),
      At(!1),
      document.body.classList.remove("g3"),
      (window.__g3on = !1));
    try {
      An(!1);
    } catch {}
    if (t) {
      let n = new URL(location.href);
      (n.searchParams.set("no3d", "1"), location.replace(n.toString()));
    }
  }
  function Fe() {
    if (((R = "on"), N))
      try {
        Z.style.display = "none";
      } catch {}
    window.__g3on = !0;
    try {
      Sn("work", g);
    } catch {}
    try {
      In(
        matchMedia("(pointer: coarse)").matches
          ? "SWIPE TO TURN \xB7 TAP TO OPEN"
          : "TURN TO LOOK AROUND \xB7 CLICK A SCREEN TO OPEN",
      );
    } catch {}
    try {
      sessionStorage.setItem("g3ok", "1");
    } catch {}
    if (
      (Jt && (g.style.transition = "opacity .4s ease"),
      (() => {
        let n = document.getElementById("g3boot");
        return n && !n.hidden;
      })() && (g.style.transition = "none"),
      document.body.classList.add("g3"),
      Hn(),
      At(!0),
      _.hold ||
        be(
          p,
          null,
          (() => {
            try {
              let n = sessionStorage.getItem("g3seed");
              if (n != null)
                return (sessionStorage.removeItem("g3seed"), parseFloat(n));
            } catch {}
            return null;
          })(),
        ),
      _.onCommit)
    )
      try {
        _.onCommit();
      } catch {}
    (En({ renderer: b, die: jt }), Un(), at(de, 1200));
  }
  g.addEventListener("webglcontextlost", (t) => {
    (t.preventDefault(), R !== "dead" && jt(R === "on"));
  });
  function $n(t, n) {
    let s = (t - n) % (Math.PI * 2);
    return (
      s > Math.PI && (s -= Math.PI * 2),
      s < -Math.PI && (s += Math.PI * 2),
      Math.abs(s)
    );
  }
  function Jn() {
    for (let t of T) {
      let n = t.thumbVid || (t.s.m && t.s.m.src);
      if (!((t.kind === "video" || t.thumbVid) && (ae(n) || ie(n))) || t.hasImg)
        continue;
      let r = $n(W, t.angle);
      if (r < A * 0.62 && !t.wired) {
        t.wired = !0;
        let o = ke(innerWidth * 0.8);
        t.video = o;
        try {
          VEA.attachVideo(o, n, !0, !1);
        } catch {}
        o.addEventListener("playing", () => {
          (t.vtex || ((t.vtex = new an(o)), (t.vtex.colorSpace = _t)),
            (t.face.material.map = t.vtex),
            (t.face.material.needsUpdate = !0),
            Ct(t, (o.videoWidth || 16) / (o.videoHeight || 9)));
        });
      }
      t.wired &&
        t.video &&
        (r < A * 0.62 && !Te()
          ? t.video.paused && t.video.play().catch(() => {})
          : t.video.paused || t.video.pause(),
        r > A * 1.6 &&
          (Wt(t.video),
          t.vtex && (t.vtex.dispose(), (t.vtex = null)),
          (t.face.material.map = t.poster),
          (t.face.material.needsUpdate = !0),
          (t.video = null),
          (t.wired = !1)));
    }
  }
  let H = { last: 0, frames: 0, t0: 0, fpsBad: 0 },
    Zn = parseFloat(St.get("g3fps")) || 22,
    Ue = new Mt();
  function fe(t) {
    Ht = requestAnimationFrame(fe);
    let n = t - (H.last || t),
      s = Math.min(50, n);
    if (((H.last = t), nt)) {
      b.render(p, h);
      return;
    }
    if (R === "guard") {
      if (
        (H.t0 ? t - H.t0 > 350 && H.frames++ : (H.t0 = t),
        Jt && H.t0 && t > H.t0)
      )
        Fe();
      else if (t - H.t0 > 1750) {
        let e = H.frames / ((t - H.t0 - 350) / 1e3);
        if (It || e >= Zn) Fe();
        else {
          jt(!1);
          return;
        }
      }
    }
    if (R === "on" && !It && Vn == null && !y) {
      let e = Math.min(n, 250);
      if (
        (e > 83
          ? (H.fpsBad += e)
          : (H.fpsBad = Math.max(0, H.fpsBad - e * 0.5)),
        H.fpsBad > 4200)
      )
        if (Dt())
          if (
            (function () {
              try {
                return sessionStorage.getItem("veaMode") === "immersive";
              } catch {
                return !1;
              }
            })()
          )
            H.fpsBad = 0;
          else {
            (ve("flat"), jt(!0));
            return;
          }
        else {
          ve("lite");
          try {
            b.setPixelRatio(Zt.dprCap);
          } catch {}
          H.fpsBad = 0;
        }
    }
    if ($) {
      let e = Math.min(1, (t - $.t0) / $.dur),
        a = e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
      ((S = $.from + ($.to - $.from) * a), e >= 1 && ($ = null));
    }
    let r = 1 - Math.pow(0.915, s / 16.7);
    if (
      (ut &&
        !B &&
        !E.isOpen &&
        !y &&
        !M &&
        ((S += ut * s),
        (ut *= Math.pow(0.94, s / 16.7)),
        Math.abs(ut) < 2e-4 && (ut = 0)),
      (W += (S - W) * r),
      E.update(s),
      M)
    ) {
      let e = Math.min(1, (t - M.t0) / M.dur),
        a = e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
      if (
        (h.position.lerpVectors(M.p0, M.p1, a),
        M.look1
          ? h.lookAt(M.look1)
          : h.lookAt(Math.sin(W) * 10, U * 0.92, -Math.cos(W) * 10),
        e >= 1)
      ) {
        let i = M.then;
        ((M = null), i && i());
      }
    } else
      y ||
        (h.position.set(0, st.eyeHeight, 0),
        Ue.set(Math.sin(W) * 10, U * 0.92, -Math.cos(W) * 10),
        h.lookAt(Ue));
    if (R === "on" && !E.isOpen && !y && !M) {
      let e = ((Math.round(W / A) % P) + P) % P;
      if (e !== L) {
        ((L = e),
          T.forEach((a, i) => {
            yn(a.frame.material, i === e ? 1 : 0.45);
          }),
          Ie.position
            .copy(T[e].dir)
            .multiplyScalar(D - 0.8)
            .setY(U - 0.4),
          at(De(T[e])));
        try {
          let a = T[e],
            i = a.s.w || {};
          if (
            (VEA.scrambleTo(
              v.querySelector(".mt"),
              a.i + 1 + "/" + P + " \xB7 " + (i.title || m.name || ""),
              620,
            ),
            (v.querySelector(".md").textContent = N
              ? i.pinfo || i.jinfo || i.desc || ""
              : i.jinfo || i.desc || ""),
            N)
          )
            try {
              (Tt(), Be());
            } catch {}
          Tt();
        } catch {}
      }
      Jn();
    }
    if ((he(), y && Ut)) return;
    let o = Gn.geometry.attributes.position;
    for (let e = 0; e < re; e += 2)
      o.array[e * 3 + 1] += Math.sin(t * 3e-4 + e) * 0.0012;
    o.needsUpdate = !0;
    try {
      if (window.VEASND) {
        let e =
            g.__mv ||
            (g.__mv = { x: 0, y: 0, z: 0, qx: 0, qy: 0, qz: 0, qw: 1, t: 0 }),
          a = performance.now(),
          i = (a - (e.t || a)) / 1e3;
        if (i > 0.35 || i <= 0)
          ((e.t = a),
            (e.x = h.position.x),
            (e.y = h.position.y),
            (e.z = h.position.z),
            (e.qx = h.quaternion.x),
            (e.qy = h.quaternion.y),
            (e.qz = h.quaternion.z),
            (e.qw = h.quaternion.w));
        else {
          let c = Math.max(0.008, i),
            l = h.position.x - e.x,
            d = h.position.y - e.y,
            w = h.position.z - e.z,
            f = Math.sqrt(l * l + d * d + w * w) / c,
            F = Math.min(
              1,
              Math.abs(
                h.quaternion.x * e.qx +
                  h.quaternion.y * e.qy +
                  h.quaternion.z * e.qz +
                  h.quaternion.w * e.qw,
              ),
            ),
            V = (2 * Math.acos(F)) / c;
          ((e.t = a),
            (e.x = h.position.x),
            (e.y = h.position.y),
            (e.z = h.position.z),
            (e.qx = h.quaternion.x),
            (e.qy = h.quaternion.y),
            (e.qz = h.quaternion.z),
            (e.qw = h.quaternion.w));
          let I = Math.min(1, V / 1.4 + f / 16);
          I > 0.02 && VEASND.motion(I, !!(M || nt));
        }
      }
    } catch {}
    (N && Xn(), b.render(p, h), (window.__g3ready = !0));
  }
  ((Ht = requestAnimationFrame(fe)),
    ct.on(document, "visibilitychange", () => {
      R !== "dead" &&
        (cancelAnimationFrame(Ht),
        document.hidden || (Ht = requestAnimationFrame(fe)));
    }));
  let je = 0;
  (ct.on(window, "resize", () => {
    (clearTimeout(je),
      (je = setTimeout(() => {
        R !== "dead" &&
          ((h.aspect = innerWidth / innerHeight),
          h.updateProjectionMatrix(),
          b.setSize(innerWidth, innerHeight),
          Tt());
      }, 140)));
  }),
    (window.__g3 = {
      get state() {
        return R;
      },
      get A() {
        return W;
      },
      set A(t) {
        W = S = t;
      },
      get AT() {
        return S;
      },
      set AT(t) {
        S = t;
      },
      get faced() {
        return L;
      },
      get flying() {
        return !!M;
      },
      get holding() {
        return y;
      },
      get hover() {
        return G ? G.i : null;
      },
      get menuOpen() {
        return E.isOpen;
      },
      get exposure() {
        return b.toneMappingExposure;
      },
      get ashSeed() {
        return O.ptsMat.userData.uSeed.value;
      },
      get ashFly() {
        return O.ptsMat.userData.uFly.value;
      },
      curtains: T,
      cam: h,
      menu: E,
      openMenu: Qn,
      closeMenu: ue,
      clickCurtain(t) {
        let n = T[t];
        n &&
          ((G = n),
          (pt = 0),
          g.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
      },
      clickMenu(t) {
        !E.isOpen ||
          !E.targets[t] ||
          ((J = E.targets[t]),
          (pt = 0),
          g.dispatchEvent(new MouseEvent("click", { bubbles: !0 })));
      },
      back() {
        let t = document.getElementById("wkBack");
        t &&
          t.dispatchEvent(
            new MouseEvent("click", { bubbles: !0, cancelable: !0 }),
          );
      },
    }));
  function to() {
    ((R = "dead"),
      ct.offAll(),
      cancelAnimationFrame(Ht),
      clearInterval(We),
      T.forEach((t) => {
        try {
          Wt(t.video);
        } catch {}
      }));
    try {
      Y && Y.remove();
    } catch {}
    try {
      (b.dispose(), b.forceContextLoss());
    } catch {}
    (g.remove(),
      Z.remove(),
      v.remove(),
      C.remove(),
      mt.remove(),
      gt.remove(),
      se());
  }
  return {
    kind: "work",
    scene: p,
    renderer: b,
    cam: h,
    cv: g,
    hud: [Z, v, C, mt, gt],
    get dead() {
      return R === "dead";
    },
    setDeparted() {
      nt = !0;
    },
    startCondense() {
      be(p);
    },
    unmount: to,
  };
}
export { lo as boot };
