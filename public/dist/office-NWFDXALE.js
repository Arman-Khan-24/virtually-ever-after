import {
  A as _t,
  B as je,
  C as At,
  Ca as Do,
  Da as zo,
  Ea as No,
  F as Ho,
  G as Ae,
  H as Po,
  Ha as Vo,
  I as Ao,
  J as k,
  K as vo,
  L as ve,
  Ma as Ze,
  O as Io,
  Q as Oo,
  R as ko,
  Ra as Fo,
  S as Lo,
  Sa as qo,
  T as Ut,
  U as Bo,
  Ua as Yo,
  V as _o,
  W as Co,
  Y as Wo,
  b as fe,
  c as Mo,
  d as Ye,
  e as Ro,
  fa as ht,
  h as dt,
  i as Ue,
  j as go,
  ja as L,
  k as ot,
  ka as he,
  o as Ke,
  pa as mt,
  q as bo,
  r as So,
  t as Z,
  u as Q,
  v as B,
  va as Xe,
  w as O,
  wa as Go,
  y as de,
  z as nt,
} from "./chunk-CT4AYSS2.js";
var pt = (() => {
    try {
      return (
        window.innerWidth <= 860 ||
        (window.matchMedia && matchMedia("(pointer: coarse)").matches)
      );
    } catch {
      return !1;
    }
  })(),
  pe = (typeof window < "u" && window.__VEA) || {},
  ke = (g) => {
    let F = pe[g];
    return F && Array.isArray(F.items) ? F.items : [];
  },
  vt = ke("services").map((g) => [
    g.no,
    g.title,
    g.body,
    (g.links[0] || [])[0] || "",
    (g.links[0] || [])[1] || "",
  ]),
  Kt = ke("who").map((g) => [
    g.title,
    g.body,
    (g.links[0] || [])[0] || "",
    (g.links[0] || [])[1] || "",
  ]),
  It = ke("how").map((g) => [g.no, g.title, g.body]),
  jt = ke("faq").map((g) => [g.no, g.title, g.body]),
  Ie = Array.isArray(pe.studio) ? pe.studio : [],
  Xt = Array.isArray(pe.story) ? pe.story.concat(["\xB7 Deniz & Yigit"]) : [],
  Ot = [
    [
      "deniz@virtuallyeverafter.xyz",
      "/start.html",
    ],
    ["+352 661 953 108", "/start.html"],
    ["Instagram \u2197", "/about.html"],
    ["LinkedIn \u2197", "/about.html"],
    ["Start your project \u2192", "start.html"],
  ],
  En = {
    "founder-d": {
      role: "Architect \xB7 Creative Director",
      name: "Deniz Agaoglu Ozen",
      text: [
        "Works across architecture, visual identity and digital experiences.",
        "Shapes brands through space, storytelling and design systems.",
        "Interested in exhibitions, cultural projects and spatial branding.",
        "Co-founder of Virtually Ever After.",
      ],
      edu: [
        "Politecnico di Milano \xB7 MSc, Architecture & Urban Design \xB7 2017-2019",
        "Istanbul Bilgi University \xB7 Architectural Design \xB7 2013-2017",
      ],
      exp: [
        "Virtually Ever After \xB7 Luxembourg \xB7 2024-present",
        "Architect, dagli+ atelier d\u2019architecture \xB7 Luxembourg \xB7 2022-2024",
        "Architect, co.arch studio (part-time) \xB7 Milan \xB7 2019-2020",
      ],
    },
    "founder-y": {
      role: "Architect \xB7 Spatial Web Designer",
      name: "Yigit Ozen",
      text: [
        "Works where architecture meets the web.",
        "Designs immersive digital environments using WebGL, Three.js and WebXR.",
        "Interested in spatial interaction, digital architecture and emerging technologies.",
        "Founder of decentralize and co-founder of Virtually Ever After.",
      ],
      edu: [
        "Politecnico di Milano \xB7 MSc, Architecture & Urban Design \xB7 2018-2021",
        "Istanbul Bilgi University \xB7 Architectural Design \xB7 2013-2017",
      ],
      exp: [
        "Virtually Ever After \xB7 Luxembourg \xB7 2025-present",
        "Founder, decentralize \xB7 Milan \xB7 2020-present",
        "Architect, Deutsche Parken (DPG) \xB7 2018-2020",
        "Architect, SGM \xB7 2017-2018",
      ],
    },
  },
  mn =
    "/assets/offline/69ed6200f14d95e0.mp4",
  yn = {
    "founder-d":
      "/assets/offline/d5b53e291b1b6b0e.mp4",
    "founder-y":
      "/assets/offline/459ac9793731d9d1.mp4",
  },
  Qe = 960,
  Je = 720,
  Oe = null;
function wn() {
  return window.Hls
    ? Promise.resolve()
    : Oe ||
        ((Oe = new Promise((g) => {
          let F = document.createElement("script");
          ((F.src = "lib/hls.min.js"),
            (F.onload = g),
            (F.onerror = g),
            document.head.appendChild(F));
        })),
        Oe);
}
function Uo(g, F) {
  wn().then(() => {
    try {
      if (window.Hls && Hls.isSupported()) {
        try {
          g.disableRemotePlayback = !0;
        } catch {}
        let J = new Hls({ capLevelToPlayerSize: !0, maxBufferLength: 16 });
        ((g._hls = J),
          J.loadSource(F),
          J.attachMedia(g),
          J.on(Hls.Events.MANIFEST_PARSED, () => g.play().catch(() => {})));
      } else
        g.canPlayType("application/vnd.apple.mpegurl") &&
          ((g.src = F), g.play().catch(() => {}));
    } catch {}
  });
}
var Ko = "<>[]{}/\\|=+*#\xB7";
function $e(g, F) {
  g._dt && clearInterval(g._dt);
  let J = String(F),
    Ct = J.length,
    q = 0;
  g._dt = setInterval(() => {
    q++;
    let _ = "";
    for (let bt = 0; bt < Ct; bt++) {
      if (J[bt] === " ") {
        _ += " ";
        continue;
      }
      bt < q * 1.4 ? (_ += J[bt]) : (_ += Ko[(bt * 7 + q * 3) % Ko.length]);
    }
    ((g.textContent = _),
      q * 1.4 >= Ct &&
        (clearInterval(g._dt), (g._dt = null), (g.textContent = J)));
  }, 18);
}
async function gn(g) {
  g = g || {};
  let F = !1,
    J = (e, n) => {
      try {
        window.__vlog
          ? window.__vlog(e, n)
          : console.log("[VEA] " + e + (n != null ? " \xB7 " + n : ""));
      } catch {}
    };
  J("office: build start");
  let Ct = (e) => {
      try {
        let n = document.getElementById("boot");
        n && (n.textContent = e);
      } catch {}
    },
    q;
  try {
    q = new Co({ antialias: !0, powerPreference: "high-performance" });
  } catch (e) {
    throw (Ct("WebGL unavailable: " + e.message), e);
  }
  (q.setSize(innerWidth, innerHeight),
    q.setPixelRatio(Math.min(devicePixelRatio, 2)),
    (q.toneMapping = Ro),
    (q.toneMappingExposure = 1.22),
    q.setClearColor(0));
  try {
    q.outputColorSpace = dt;
  } catch {}
  let _ = q.domElement;
  ((_.id = "gc"), (_.className = "g3c"), document.body.appendChild(_));
  try {
    document.body.classList.add("g3");
  } catch {}
  try {
    window.VEASND && VEASND.room("office");
  } catch {}
  let bt = [".topbar", ".w-foot"]
    .map((e) => document.querySelector(e))
    .filter(Boolean);
  function ue(e, n) {
    for (let t of bt)
      ((t.style.transition = n ? "none" : "opacity .9s ease"),
        (t.style.opacity = String(e)));
  }
  try {
    location.search.indexOf("snap") < 0 && ue(0, !0);
  } catch {}
  let x = new So();
  x.fog = new bo(0, 0.05);
  let H = 5.6,
    T = 4,
    C = 3.6,
    b = new ko(
      (window.matchMedia && matchMedia("(pointer: coarse)").matches) ||
        innerWidth <= 860
        ? 60
        : 54,
      innerWidth / innerHeight,
      0.05,
      90,
    ),
    kt = new ot(0, 1.5, 2.35);
  b.position.copy(kt);
  let jo = [],
    St = [],
    Zt = [],
    Wt = [];
  {
    let e = [
        [
          [-H, -T],
          [H, -T],
        ],
        [
          [H, -T],
          [H, T],
        ],
        [
          [H, T],
          [-H, T],
        ],
        [
          [-H, T],
          [-H, -T],
        ],
      ],
      n = [];
    e.forEach(([i, c]) => {
      let f = Math.hypot(c[0] - i[0], c[1] - i[1]);
      for (let E = 0; E < 5; E++) {
        let u = 0.4 + E * 0.66;
        if (u > C - 0.3) break;
        for (let m = 0.25; m < f; m += 0.26) {
          let d = m / f;
          n.push(
            i[0] + (c[0] - i[0]) * d,
            u + Math.sin(m * 9) * 0.005,
            i[1] + (c[1] - i[1]) * d,
          );
        }
      }
    });
    let t = !Wo(),
      s = t ? T * 0.6 : 0,
      r = (i, c, f, E, u, m) => {
        let d = new O(new k(i, c), L.solidMat);
        (d.position.set(f, E, u), (d.rotation.y = m), x.add(d));
      };
    (r(H * 2 + 0.4, C + 2 + s, 0, C / 2 + s / 2, -T - 0.05, 0),
      r(T * 2 + 0.4, C + 2 + s, H + 0.05, C / 2 + s / 2, 0, -Math.PI / 2),
      r(T * 2 + 0.4, C + 2 + s, -H - 0.05, C / 2 + s / 2, 0, Math.PI / 2));
    let o = new O(new k(H * 2 + 0.4, T * 2 + 0.4), L.solidMat);
    ((o.rotation.x = Math.PI / 2), (o.position.y = C + 0.5 + s), x.add(o));
    for (let i = -H + 1; i < H; i += 1.4) Zt.push(i, C, -T, i, C, T);
    if (t) {
      let i = C + s;
      Wt.push(-H, i, 0, H, i, 0);
      for (let c = -H + 1; c < H; c += 1.4)
        (Zt.push(c, C, -T, c, i, 0), Zt.push(c, C, T, c, i, 0));
      for (let c of [-H, H])
        (Wt.push(c, C, -T, c, i, 0),
          Wt.push(c, C, T, c, i, 0),
          Wt.push(c, C, -T, c, C, T));
      for (let c of [-T / 2, T / 2]) Zt.push(-H, C + s / 2, c, H, C + s / 2, c);
    }
    {
      (St.push(
        1.4,
        1,
        T - 0.02,
        4.2,
        1,
        T - 0.02,
        1.4,
        2.3,
        T - 0.02,
        4.2,
        2.3,
        T - 0.02,
      ),
        St.push(
          1.4,
          1,
          T - 0.02,
          1.4,
          2.3,
          T - 0.02,
          4.2,
          1,
          T - 0.02,
          4.2,
          2.3,
          T - 0.02,
        ),
        St.push(2.8, 1, T - 0.02, 2.8, 2.3, T - 0.02),
        St.push(
          1.4 - 0.16,
          1 - 0.07,
          T - 0.05,
          4.2 + 0.16,
          1 - 0.07,
          T - 0.05,
        ));
      let m = [];
      for (let p = 0; p < 3; p++) {
        let M = T + 2.6 + p * 2.1,
          R = 1.2 + p * 0.6;
        for (let A of [-R, 0, R])
          for (let P = 0; P < 14; P++) {
            let I = (P / 14) * Math.PI * 2;
            for (let S = -3.4; S < 0.5; S += 0.24)
              m.push(2.8 + A + Math.cos(I) * 0.24, S, M + Math.sin(I) * 0.24);
          }
      }
      let d = new Q();
      (d.setAttribute("position", new Z(m, 3)), x.add(new _t(d, L.outsideMat)));
      for (let [p, M, R, A] of [
        [-1.5, -1.3, T + 3, 7303032],
        [1.6, -1.1, T + 3.4, 8020568],
        [0, -1.6, T + 5.2, 6447724],
      ]) {
        let P = new O(new k(0.82, 0.52), new B({ color: A, toneMapped: !1 }));
        (P.position.set(2.8 + p, M, R), x.add(P));
        let I = new Ut(A, 1.4, 3.5, 2);
        (I.position.set(2.8 + p, M + 0.7, R + 0.5), x.add(I));
      }
      for (let [p, M, R] of [
        [-1.4, -0.2, T + 3.2],
        [1.4, -0.1, T + 4.4],
        [0, 0.1, T + 6],
      ]) {
        let A = new O(new ve(0.045, 8, 6), L.glowMat);
        (A.position.set(2.8 + p, M, R), x.add(A));
      }
      let w = new Ut(16756832, 4, 16, 2);
      (w.position.set(2.8, -2.2, T + 6), x.add(w));
    }
    mt(2.4, 0.06, 1, [-0.1, 0.86, 0.15], St);
    for (let i of [-1.15, 1.05])
      (mt(0.1, 0.86, 0.1, [i, 0, -0.2], St),
        mt(0.1, 0.86, 0.1, [i, 0, 0.5], St));
    {
      let i = new O(
        new k(2.4, 1),
        new B({ color: 526344, transparent: !0, opacity: 0.92 }),
      );
      ((i.rotation.x = -Math.PI / 2),
        i.position.set(-0.1, 0.918, 0.15),
        x.add(i));
    }
    Wt.push(1.15, 0.9, 0.3, 1, 1.55, 0, 1, 1.55, 0, 0.55, 1.35, -0.1);
    let a = new O(new ve(0.045, 10, 8), L.glowMat);
    (a.position.set(0.55, 1.33, -0.1), x.add(a));
    let h = new Ut(16771528, 5, 5, 1.8);
    (h.position.set(0.35, 1.25, 0.1), x.add(h));
    let l = new Q();
    (l.setAttribute("position", new Z(n, 3)), x.add(new _t(l, L.wallDotMat)));
  }
  function Ee(e, n, t) {
    if (!e.length) return;
    let s = new Q();
    (s.setAttribute("position", new Z(e, 3)),
      x.add(t ? new nt(s, n) : new _t(s, n)));
  }
  (Ee(jo, L.ptsMat, !1),
    Ee(St, L.lineMat, !0),
    Ee(Zt, L.dimLineMat, !0),
    Ee(Wt, L.hairMat, !0));
  {
    let e = new O(
      new k(H * 2, T * 2),
      new Io({ color: 328966, roughness: 0.5 }),
    );
    ((e.rotation.x = -Math.PI / 2), x.add(e));
  }
  (x.add(new Bo(16777215, 0.13)), x.add(new Oo(7828590, 0, 0.34)));
  {
    let e = new Lo(16052714, 60, 0, 0.9, 0.85, 1.6);
    (e.position.set(0, C + 0.5, 0.5),
      e.target.position.set(0, 0.9, 0),
      x.add(e, e.target));
  }
  let Gt = [];
  try {
    let t = (a) => ({
        t: a,
        seed: 27,
        x: -3.75,
        z: 1.2,
        rotY: 2.36,
        phase: 0,
        speed: 0,
        sit: !0,
        sway: Math.sin(a * 0.61 + 2) * 0.012 + Math.sin(a * 1.13 + 4) * 0.008,
        armR: 0.5 + 0.11 * Math.sin(a * 0.85),
        armL: 0.14 + 0.03 * Math.sin(a * 0.5 + 1),
        headPitch: 0.22,
        headYaw: 0.12 * Math.sin(a * 0.85 + 0.6),
      }),
      s = (a) => ({
        t: a,
        seed: 9,
        x: 3.6,
        z: 0.45,
        rotY: -1.74,
        phase: 0,
        speed: 0,
        sway: Math.sin(a * 0.55 + 7) * 0.014 + Math.sin(a * 1.07 + 3) * 0.008,
        armsCrossed: !0,
        headYaw: 0.45 * Math.sin(a * 0.3),
        headPitch: 0.06 + 0.05 * Math.sin(a * 0.21),
      });
    Gt = [Xe(x, t, 3), Xe(x, s, 3)];
    for (let a of Gt)
      ((a.pts.material = ht(L.figureMat.clone())),
        a.pts.material.color.setHex(16777215),
        (a.pts.material.opacity = 0.5),
        (a.pts.material.size = 0.02));
    let r = [];
    mt(0.34, 0.03, 0.34, [-3.75, 0.5, 1.2], r);
    for (let [a, h] of [
      [-0.14, -0.14],
      [0.14, -0.14],
      [0.14, 0.14],
      [-0.14, 0.14],
    ])
      r.push(
        -3.75 + a * 0.85,
        0.5,
        1.2 + h * 0.85,
        -3.75 + a * 1.3,
        0.02,
        1.2 + h * 1.3,
      );
    for (let a = 0; a < 12; a++) {
      let h = (a / 12) * Math.PI * 2,
        l = ((a + 1) / 12) * Math.PI * 2,
        i = 0.17;
      r.push(
        -3.75 + Math.cos(h) * i,
        0.18,
        1.2 + Math.sin(h) * i,
        -3.75 + Math.cos(l) * i,
        0.18,
        1.2 + Math.sin(l) * i,
      );
    }
    let o = new Q();
    (o.setAttribute("position", new Z(r, 3)), x.add(new nt(o, L.lineMat)));
  } catch {
    Gt = [];
  }
  let Xo = { "founder-y": Gt[0] || null, "founder-d": Gt[1] || null },
    z = pt ? 724 : 1024,
    K = pt ? 1024 : 724,
    me = document.createElement("canvas");
  ((me.width = z), (me.height = K));
  let to = me.getContext("2d"),
    ye = [
      {
        key: "what",
        name: "THE PLAN \xB7 WHAT WE DO",
        box: [70, 150, 560, 470],
      },
      {
        key: "who",
        name: "THE LEGEND \xB7 WHO WE WORK WITH",
        box: [660, 60, 320, 300],
      },
      {
        key: "how",
        name: "REVISIONS \xB7 HOW WE WORK",
        box: [660, 380, 320, 200],
      },
      {
        key: "faq",
        name: "GENERAL NOTES \xB7 QUESTIONS",
        box: [70, 630, 560, 80],
      },
    ],
    Le = pt
      ? {
          what: [54, 202, 617, 243],
          who: [70, 518.5, 600, 200],
          how: [70, 795.9, 600, 104],
          faq: [54, 947.2, 630, 40],
        }
      : {
          what: [90, 190, 544, 264],
          who: [676, 107.3, 304, 216],
          how: [676, 414.9, 304, 136],
          faq: [90, 631.2, 560, 40],
        },
    $ = (e, n, t) => (e < n ? n : e > t ? t : e);
  function Zo(e, n) {
    let [t, s, r, o] = Le[e];
    n = Math.max(1, n);
    let a = pt ? 7 : 8,
      h = Math.min(4, n),
      l = Math.ceil(n / h),
      i = (r - a * (h - 1)) / h,
      c = (o - a * (l - 1)) / l;
    return {
      x: t,
      y: s,
      w: r,
      h: o,
      n,
      cols: h,
      rows: l,
      cw: i,
      ch: c,
      gap: a,
      cell: (f) => [
        t + (f % h) * (i + a),
        s + Math.floor(f / h) * (c + a),
        i,
        c,
      ],
    };
  }
  function eo(e, n) {
    let [t, s, r, o] = Le[e];
    n = Math.max(1, n);
    let a = o / n;
    return {
      x: t,
      y: s,
      w: r,
      h: o,
      n,
      step: a,
      mid: (h) => s + a * h + a * 0.62,
      cell: (h) => [t - 6, s + a * h, r + 12, a],
    };
  }
  function Qo(e, n) {
    let [t, s, r, o] = Le[e];
    n = Math.max(1, n);
    let a = r / n;
    return {
      x: t,
      y: s,
      w: r,
      h: o,
      n,
      step: a,
      at: (h) => t + a * h,
      cell: (h) => [t + a * h - 6, s, Math.min(a, 96), o],
    };
  }
  let yt = {
      what: Zo("what", vt.length),
      who: eo("who", Kt.length),
      how: eo("how", It.length),
      faq: Qo("faq", jt.length),
    },
    Ht = (e, n) => Math.max(4, Math.floor(e / (n * 0.62))),
    Dt = (e, n) =>
      (e || "").length > n ? (e || "").slice(0, n - 1) + "\u2026" : e || "";
  function oo(e, n) {
    if (pt) return null;
    let t = yt[e];
    return t && n >= 0 && n < t.n ? t.cell(n) : null;
  }
  let Jo = { what: vt.length, who: Kt.length, how: It.length, faq: jt.length };
  function $o(e, n) {
    let t = to;
    (t.clearRect(0, 0, z, K),
      (t.fillStyle = "#030303"),
      t.fillRect(0, 0, z, K));
    let s = (o) => "rgba(216,215,210," + o + ")",
      r = (o) => e && e === o;
    ((t.strokeStyle = s(0.5)),
      (t.lineWidth = 2),
      t.strokeRect(24, 24, z - 48, K - 48),
      (t.strokeStyle = s(0.09)),
      (t.lineWidth = 1));
    for (let o = 60; o < z - 40; o += 40)
      (t.beginPath(), t.moveTo(o, 28), t.lineTo(o, K - 28), t.stroke());
    for (let o = 60; o < K - 40; o += 40)
      (t.beginPath(), t.moveTo(28, o), t.lineTo(z - 28, o), t.stroke());
    if (
      ((t.textBaseline = "alphabetic"),
      (t.strokeStyle = s(0.55)),
      (t.lineWidth = 1.5),
      t.strokeRect(44, 44, z - 88, 84),
      (t.fillStyle = s(0.92)),
      (t.font = "700 22px 'IBM Plex Mono', monospace"),
      t.fillText("VIRTUALLY EVER AFTER", 60, 78),
      (t.fillStyle = s(0.6)),
      (t.font = "13px 'IBM Plex Mono', monospace"),
      t.fillText("OUR SERVICES \xB7 SCALE 1:1 \xB7 LUXEMBOURG", 60, 106),
      e)
    ) {
      let o = ye.find((a) => a.key === e);
      o &&
        ((t.fillStyle = "rgba(246,245,241,0.9)"),
        (t.font = "600 14px 'IBM Plex Mono', monospace"),
        t.fillText(o.name, 44, 152));
    }
    {
      let o = r("what");
      ((t.fillStyle = s(o ? 0.95 : 0.62)),
        (t.font = "600 17px 'IBM Plex Mono', monospace"),
        t.fillText("PLAN \xB7 WHAT WE DO", 54, 186),
        (t.strokeStyle = s(o ? 0.85 : 0.4)),
        (t.lineWidth = o ? 2 : 1.4));
      let a = yt.what,
        h = $(a.ch * 0.161, 10, 19),
        l = $(a.ch * 0.089, 7.5, 10.5),
        i = Ht(a.cw - 20, l);
      for (let c = 0; c < a.n; c++) {
        let [f, E, u, m] = a.cell(c);
        (t.strokeRect(f, E, u, m),
          (t.fillStyle = s(o ? 0.95 : 0.62)),
          (t.font = "600 " + h.toFixed(1) + "px 'IBM Plex Mono', monospace"),
          t.fillText(vt[c][0], f + 10, E + m * 0.254),
          (t.font = l.toFixed(1) + "px 'IBM Plex Mono', monospace"));
        let d = String(vt[c][1]).toUpperCase().split(" "),
          w = l * 1.33,
          p = E + m * 0.44,
          M = "";
        for (let R of d)
          (M + " " + R).length > i && M
            ? (p < E + m - 4 && (t.fillText(M, f + 10, p), (p += w)), (M = R))
            : (M = M ? M + " " + R : R);
        M && p < E + m - 4 && t.fillText(M, f + 10, p);
      }
    }
    {
      let o = r("who");
      ((t.strokeStyle = s(o ? 0.8 : 0.4)),
        (t.lineWidth = o ? 2 : 1.3),
        t.strokeRect(54, 478, z - 108, 252),
        (t.fillStyle = s(o ? 0.95 : 0.6)),
        (t.font = "600 17px 'IBM Plex Mono', monospace"),
        t.fillText("LEGEND \xB7 WHO WE WORK WITH", 70, 506));
      let a = yt.who,
        h = $(a.step * 0.5, 7, 12.5),
        l = $(a.step * 0.6, 8, 15);
      t.font = h.toFixed(1) + "px 'IBM Plex Mono', monospace";
      for (let i = 0; i < a.n; i++) {
        let c = a.mid(i);
        ((t.strokeStyle = s(o ? 0.7 : 0.35)),
          t.strokeRect(70, c - l * 0.73, l, l),
          t.beginPath());
        for (let f = 0; f < 3; f++)
          (t.moveTo(70, c - l * 0.73 + f * (l / 2.5) + (i % 2) * 2),
            t.lineTo(70 + l, c - l * 0.73 + f * (l / 2.5)));
        (t.stroke(),
          (t.fillStyle = s(o ? 0.9 : 0.55)),
          t.fillText(Dt(Kt[i][0], Ht(a.w - 32, h)), 96, c + 1));
      }
    }
    {
      let o = r("how");
      ((t.strokeStyle = s(o ? 0.8 : 0.4)),
        (t.lineWidth = o ? 2 : 1.3),
        t.strokeRect(54, 756, z - 108, 152),
        (t.fillStyle = s(o ? 0.95 : 0.6)),
        (t.font = "600 17px 'IBM Plex Mono', monospace"),
        t.fillText("REVISIONS \xB7 HOW WE WORK", 70, 784));
      let a = yt.how,
        h = $(a.step * 0.48, 7, 12.5);
      t.font = h.toFixed(1) + "px 'IBM Plex Mono', monospace";
      for (let l = 0; l < a.n; l++) {
        let i = a.mid(l);
        ((t.strokeStyle = s(o ? 0.7 : 0.35)),
          t.beginPath(),
          t.moveTo(76, i - 4),
          t.lineTo(70, i + 6),
          t.lineTo(82, i + 6),
          t.closePath(),
          t.stroke(),
          (t.fillStyle = s(o ? 0.85 : 0.5)),
          t.fillText(It[l][0], 94, i + 3),
          (t.fillStyle = s(o ? 0.95 : 0.62)),
          t.fillText(Dt(It[l][1], Ht(a.w - 104, h)), 168, i + 3));
      }
    }
    {
      let o = r("faq");
      ((t.fillStyle = s(o ? 0.95 : 0.55)),
        (t.font = "600 15px 'IBM Plex Mono', monospace"),
        t.fillText("GENERAL NOTES \xB7 QUESTIONS", 54, 946));
      let a = yt.faq,
        h = $(a.step * 0.09, 7, 11),
        l = $(a.step * 0.107, 7, 12);
      t.font = h.toFixed(1) + "px 'IBM Plex Mono', monospace";
      for (let i = 0; i < a.n; i++) {
        let c = a.at(i),
          f = a.y + a.h * 0.62;
        ((t.strokeStyle = s(o ? 0.7 : 0.32)),
          (t.lineWidth = 1.2),
          t.beginPath());
        for (let E = 0; E < 8; E++) {
          let u = (E / 8) * 7;
          t.lineTo(c + l * 0.85 + Math.cos(u) * l, f + Math.sin(u) * l * 0.68);
        }
        (t.closePath(),
          t.stroke(),
          (t.fillStyle = s(o ? 0.9 : 0.5)),
          t.fillText(Dt(jt[i][0], Ht(a.step - 8, h)), c + 4, f + 4));
      }
    }
    wt && (wt.needsUpdate = !0);
  }
  function zt(e, n) {
    if (pt) return $o(e, n);
    let t = to;
    (t.clearRect(0, 0, z, K),
      (t.fillStyle = "#030303"),
      t.fillRect(0, 0, z, K));
    let s = (o) => "rgba(216,215,210," + o + ")",
      r = (o) => e && e === o;
    ((t.strokeStyle = s(0.5)),
      (t.lineWidth = 2),
      t.strokeRect(24, 24, z - 48, K - 48),
      (t.strokeStyle = s(0.09)),
      (t.lineWidth = 1));
    for (let o = 60; o < z - 40; o += 40)
      (t.beginPath(), t.moveTo(o, 28), t.lineTo(o, K - 28), t.stroke());
    for (let o = 60; o < K - 40; o += 40)
      (t.beginPath(), t.moveTo(28, o), t.lineTo(z - 28, o), t.stroke());
    ((t.font = "600 22px 'IBM Plex Mono', monospace"),
      (t.textBaseline = "alphabetic"),
      (t.strokeStyle = s(0.55)),
      (t.lineWidth = 1.5),
      t.strokeRect(700, 600, 300, 100),
      (t.fillStyle = s(0.92)),
      (t.font = "700 18px 'IBM Plex Mono', monospace"),
      t.fillText("VIRTUALLY EVER AFTER", 714, 628),
      (t.fillStyle = s(0.6)),
      (t.font = "13px 'IBM Plex Mono', monospace"),
      t.fillText("OUR SERVICES", 714, 654),
      t.fillText("SCALE 1:1 \xB7 LUXEMBOURG", 714, 676));
    {
      let o = r("what");
      ((t.strokeStyle = s(o ? 0.85 : 0.4)),
        (t.lineWidth = o ? 2 : 1.4),
        (t.fillStyle = s(o ? 0.95 : 0.62)));
      let a = yt.what,
        h = $(a.ch * 0.156, 10, 20),
        l = $(a.ch * 0.086, 7.5, 11),
        i = Ht(a.cw - 24, l);
      for (let c = 0; c < a.n; c++) {
        let [f, E, u, m] = a.cell(c);
        (t.strokeRect(f, E, u, m),
          (t.font = "600 " + h.toFixed(1) + "px 'IBM Plex Mono', monospace"),
          t.fillText(vt[c][0], f + 12, E + m * 0.266),
          (t.font = l.toFixed(1) + "px 'IBM Plex Mono', monospace"));
        let d = String(vt[c][1]).toUpperCase().split(" "),
          w = l * 1.364,
          p = E + m * 0.453,
          M = "";
        for (let R of d)
          (M + " " + R).length > i && M
            ? (p < E + m - 4 && (t.fillText(M, f + 12, p), (p += w)), (M = R))
            : (M = M ? M + " " + R : R);
        M && p < E + m - 4 && t.fillText(M, f + 12, p);
      }
      ((t.fillStyle = s(0.5)),
        (t.font = "600 15px 'IBM Plex Mono', monospace"),
        t.fillText("PLAN", 92, 175));
    }
    {
      let o = r("who");
      ((t.strokeStyle = s(o ? 0.8 : 0.4)),
        (t.lineWidth = o ? 2 : 1.3),
        t.strokeRect(660, 70, 320, 280),
        (t.fillStyle = s(o ? 0.95 : 0.6)),
        (t.font = "600 15px 'IBM Plex Mono', monospace"),
        t.fillText("LEGEND \xB7 WHO", 676, 96));
      let a = yt.who,
        h = $(a.step * 0.444, 7, 12),
        l = $(a.step * 0.593, 8, 16);
      t.font = h.toFixed(1) + "px 'IBM Plex Mono', monospace";
      for (let i = 0; i < a.n; i++) {
        let c = a.mid(i);
        ((t.strokeStyle = s(o ? 0.7 : 0.35)),
          t.strokeRect(676, c - l * 0.75, l, l),
          t.beginPath());
        for (let f = 0; f < 3; f++)
          (t.moveTo(676, c - l * 0.75 + f * (l / 2.667) + (i % 2) * 2),
            t.lineTo(676 + l, c - l * 0.75 + f * (l / 2.667)));
        (t.stroke(), t.fillText(Dt(Kt[i][0], Ht(a.w - 42, h)), 702, c));
      }
    }
    {
      let o = r("how");
      ((t.strokeStyle = s(o ? 0.8 : 0.4)),
        (t.lineWidth = o ? 2 : 1.3),
        t.strokeRect(660, 380, 320, 200),
        (t.fillStyle = s(o ? 0.95 : 0.6)),
        (t.font = "600 15px 'IBM Plex Mono', monospace"),
        t.fillText("REVISIONS \xB7 HOW", 676, 406));
      let a = yt.how,
        h = $(a.step * 0.353, 7, 12);
      t.font = h.toFixed(1) + "px 'IBM Plex Mono', monospace";
      for (let l = 0; l < a.n; l++) {
        let i = a.mid(l);
        ((t.strokeStyle = s(o ? 0.7 : 0.35)),
          t.beginPath(),
          t.moveTo(682, i - 4),
          t.lineTo(676, i + 6),
          t.lineTo(688, i + 6),
          t.closePath(),
          t.stroke(),
          (t.fillStyle = s(o ? 0.85 : 0.5)),
          t.fillText(It[l][0], 700, i + 4),
          (t.fillStyle = s(o ? 0.95 : 0.62)),
          t.fillText(Dt(It[l][1], Ht(a.w - 82, h)), 758, i + 4));
      }
    }
    {
      let o = r("faq");
      ((t.fillStyle = s(o ? 0.95 : 0.55)),
        (t.font = "600 14px 'IBM Plex Mono', monospace"),
        t.fillText("GENERAL NOTES \xB7 QUESTIONS", 90, 626));
      let a = yt.faq,
        h = $(a.step * 0.098, 7, 11),
        l = $(a.step * 0.107, 7, 12);
      t.font = h.toFixed(1) + "px 'IBM Plex Mono', monospace";
      for (let i = 0; i < a.n; i++) {
        let c = a.at(i),
          f = a.y + a.h * 0.62;
        ((t.strokeStyle = s(o ? 0.7 : 0.32)),
          (t.lineWidth = 1.2),
          t.beginPath());
        for (let E = 0; E < 8; E++) {
          let u = (E / 8) * 7;
          t.lineTo(
            c + l * 0.667 + Math.cos(u) * l,
            f + Math.sin(u) * l * 0.667,
          );
        }
        (t.closePath(),
          t.stroke(),
          (t.fillStyle = s(o ? 0.9 : 0.5)),
          t.fillText(Dt(jt[i][0], Ht(a.step - 8, h)), c + 3, f + 4));
      }
    }
    if (e && n != null && n >= 0) {
      let o = oo(e, n);
      o &&
        ((t.strokeStyle = "rgba(246,245,241,0.95)"),
        (t.lineWidth = 2.5),
        t.strokeRect(o[0] - 3, o[1] - 3, o[2] + 6, o[3] + 6));
    }
    if (e) {
      let o = ye.find((a) => a.key === e);
      ((t.fillStyle = "rgba(246,245,241,0.9)"),
        (t.font = "600 13px 'IBM Plex Mono', monospace"),
        t.fillText(o.name, 30, 46));
    }
    wt && (wt.needsUpdate = !0);
  }
  let wt = null;
  (zt(null), (wt = new At(me)), (wt.anisotropy = 8));
  try {
    wt.colorSpace = dt;
  } catch {}
  let tt = new O(
    new k(pt ? 1.02 : 1.44, ((pt ? 1.02 : 1.44) * K) / z),
    new B({ map: wt, transparent: !0, toneMapped: !1 }),
  );
  (tt.position.set(-2.15, 1.56, -0.55), tt.rotation.set(0, 0.52, 0), x.add(tt));
  {
    let n = (1.44 * K) / z,
      t = new O(
        new k(1.44 + 0.12, n + 0.12),
        new B({ color: 0, toneMapped: !1 }),
      );
    (t.position.copy(tt.position),
      t.quaternion.copy(tt.quaternion),
      t.translateZ(-0.012),
      x.add(t));
    let s = new nt(
      new Ae(new k(1.44 + 0.12, n + 0.12)),
      ht(new de({ color: 11842220, transparent: !0, opacity: 0.5 })),
    );
    (s.position.copy(tt.position),
      s.quaternion.copy(tt.quaternion),
      s.translateZ(0.003),
      x.add(s));
    let r = tt.position.x,
      o = tt.position.y,
      a = tt.position.z,
      h = [
        r,
        o - n / 2 + 0.02,
        a,
        r,
        0.02,
        a + 0.16,
        r - 0.34,
        0.02,
        a + 0.16,
        r + 0.34,
        0.02,
        a + 0.16,
      ],
      l = new Q();
    (l.setAttribute("position", new Z(h, 3)), x.add(new nt(l, L.lineMat)));
  }
  function tn() {
    let t = document.createElement("canvas");
    ((t.width = 620), (t.height = 826));
    let s = t.getContext("2d");
    s.textAlign = "left";
    let r = 62,
      o = 620 - 2 * r,
      a = 1.34,
      h = 1.95,
      l = 0.72,
      i = (P, I) => {
        s.font = P + "px 'IBM Plex Mono', monospace";
        try {
          s.letterSpacing = ((I || 0) * P).toFixed(2) + "px";
        } catch {}
      },
      c = (P, I, S) => {
        i(I, S);
        let y = String(P).split(" "),
          v = "",
          G = 1;
        for (let V of y)
          s.measureText(v + " " + V).width > o && v
            ? (G++, (v = V))
            : (v = v ? v + " " + V : V);
        return G;
      },
      f = 826 - 2 * r,
      E = (P, I) => {
        let S = Math.min(P * 2, 46),
          y = S + S * 0.5,
          v = 0;
        for (let V of Ie) v += c(V, P, I);
        let G = v + l * Ie.length;
        return { lhR: (f - y) / (P * G), tSize: S, lines: v, boxes: G };
      },
      u = 30,
      m = 0,
      d = null;
    for (; u >= 6; u--) {
      let P = E(u, 0);
      if (P.lhR >= a) {
        d = P;
        break;
      }
    }
    if (!d)
      for (m of [-0.01, -0.02, -0.03]) {
        for (u = 12; u >= 6; u--) {
          let P = E(u, m);
          if (P.lhR >= a) {
            d = P;
            break;
          }
        }
        if (d) break;
      }
    if (!d) {
      ((u = 6), (m = -0.03), (d = E(u, m)));
      try {
        console.warn(
          "[VEA] office: the ABOUT copy outgrew the sheet even at its tightest: " +
            Math.round(u * d.boxes * a) +
            "px of text in " +
            f +
            "px of paper",
        );
      } catch {}
    }
    let w = Math.max(a, Math.min(h, d.lhR)),
      p = { lh: u * w, pgap: u * w * l, tSize: d.tSize, ls: m };
    ((s.fillStyle = "#e9e7df"),
      s.fillRect(0, 0, 620, 826),
      (s.fillStyle = "rgba(0,0,0,0.05)"),
      s.fillRect(0, 820, 620, 6),
      (s.fillStyle = "#1b1a15"));
    try {
      s.letterSpacing = "0px";
    } catch {}
    ((s.font = "600 " + p.tSize + "px 'IBM Plex Mono', monospace"),
      s.fillText("ABOUT", r, r + p.tSize),
      (s.strokeStyle = "rgba(27,26,21,0.35)"),
      (s.lineWidth = 1.5));
    let M = r + p.tSize + p.tSize * 0.22;
    (s.beginPath(), s.moveTo(r, M), s.lineTo(620 - r, M), s.stroke());
    let R = M + p.tSize * 0.3 + p.lh;
    s.fillStyle = "rgba(27,26,21,0.9)";
    for (let P of Ie) {
      i(u, p.ls);
      let I = P.split(" "),
        S = "";
      for (let y of I)
        s.measureText(S + " " + y).width > o && S
          ? (s.fillText(S, r, R), (R += p.lh), (S = y))
          : (S = S ? S + " " + y : y);
      (S && (s.fillText(S, r, R), (R += p.lh)), (R += p.pgap));
    }
    try {
      s.letterSpacing = "0px";
    } catch {}
    let A = new At(t);
    A.anisotropy = 8;
    try {
      A.colorSpace = dt;
    } catch {}
    return A;
  }
  let Nt = new O(
    new k(0.42, 0.56),
    new B({ map: tn(), transparent: !1, toneMapped: !1, side: fe }),
  );
  (Nt.position.set(-0.62, 0.926, 0.34),
    Nt.rotation.set(-Math.PI / 2, 0, 0),
    x.add(Nt));
  let we = new O(new k(0.62, 0.72), new B({ visible: !1 }));
  (we.position.set(-0.62, 1.1, 0.36), we.rotation.set(0, 0.3, 0), x.add(we));
  let Qt = 0.78,
    Jt = (Qt * Je) / Qe,
    Y = new O(new k(Qt, Jt), new B({ color: 592137, toneMapped: !1 }));
  (Y.position.set(0.05, 1.24, -0.18), Y.rotation.set(-0.08, 0, 0), x.add(Y));
  {
    let e = new nt(
      new Ae(new k(Qt + 0.04, Jt + 0.04)),
      ht(new de({ color: 11842220, transparent: !0, opacity: 0.55 })),
    );
    (e.position.copy(Y.position),
      e.quaternion.copy(Y.quaternion),
      e.translateZ(-0.004),
      x.add(e));
    let n = Y.position.x,
      t = Y.position.y - Jt / 2,
      s = Y.position.z,
      r = [
        n,
        t,
        s,
        n,
        0.92,
        s + 0.06,
        n - 0.13,
        0.92,
        s + 0.06,
        n + 0.13,
        0.92,
        s + 0.06,
      ],
      o = new Q();
    (o.setAttribute("position", new Z(r, 3)),
      x.add(new nt(o, ht(L.hairMat.clone()))));
  }
  let no = location.search.indexOf("novid") >= 0,
    $t = null;
  try {
    if (no) throw 0;
    let e = document.createElement("video");
    ((e.muted = !0),
      (e.loop = !0),
      (e.playsInline = !0),
      (e.crossOrigin = "anonymous"),
      e.setAttribute("playsinline", ""),
      (e.dataset.g3room = ""),
      (e.style.cssText =
        "position:fixed;left:-200vw;top:0;width:" +
        Qe / 2 +
        "px;height:" +
        Je / 2 +
        "px;"),
      document.body.appendChild(e));
    let n = new je(e);
    try {
      n.colorSpace = dt;
    } catch {}
    ((Y.material.map = n),
      Y.material.color.set(16777215),
      (Y.material.needsUpdate = !0),
      ($t = e),
      Uo(e, mn));
  } catch {}
  let so = (() => {
    let n = Math.round((1024 * Je) / Qe),
      t = document.createElement("canvas");
    ((t.width = 1024), (t.height = n));
    let s = t.getContext("2d");
    s.textAlign = "left";
    let r = 58,
      o = 1024 - 2 * r,
      a = Xt.slice(0, -1),
      h = Xt[Xt.length - 1],
      l = 1.34,
      i = 1.95,
      c = 0.6,
      f = (y, v, G) => {
        s.font = (G ? "italic " : "") + y + "px 'IBM Plex Mono', monospace";
        try {
          s.letterSpacing = ((v || 0) * y).toFixed(2) + "px";
        } catch {}
      },
      E = (y, v, G) => {
        f(v, G);
        let V = String(y).split(" "),
          D = "",
          Et = 1;
        for (let Yt of V)
          s.measureText(D + " " + Yt).width > o && D
            ? (Et++, (D = Yt))
            : (D = D ? D + " " + Yt : Yt);
        return Et;
      },
      u = n - 2 * r,
      m = (y, v) => {
        let G = Math.min(y * 2, 46),
          V = G + G * 1.1,
          D = 0;
        for (let Yt of a) D += E(Yt, y, v);
        D += 1;
        let Et = D + c * a.length + 0.5;
        return { lhR: (u - V) / (y * Et), tSize: G, boxes: Et };
      },
      d = 30,
      w = 0,
      p = null;
    for (; d >= 6; d--) {
      let y = m(d, 0);
      if (y.lhR >= l) {
        p = y;
        break;
      }
    }
    if (!p)
      for (w of [-0.01, -0.02, -0.03]) {
        for (d = 12; d >= 6; d--) {
          let y = m(d, w);
          if (y.lhR >= l) {
            p = y;
            break;
          }
        }
        if (p) break;
      }
    if (!p) {
      ((d = 6), (w = -0.03), (p = m(d, w)));
      try {
        console.warn(
          "[VEA] office: the STORY outgrew the screen even at its tightest: " +
            Math.round(d * p.boxes * l) +
            "px of text in " +
            u +
            "px",
        );
      } catch {}
    }
    let M = Math.max(l, Math.min(i, p.lhR)),
      R = { lh: d * M, pgap: d * M * c, tSize: p.tSize };
    ((s.fillStyle = "rgba(2,3,5,0.86)"),
      s.fillRect(0, 0, 1024, n),
      (s.strokeStyle = "rgba(235,240,250,0.35)"),
      (s.lineWidth = 2),
      s.strokeRect(16, 16, 992, n - 32),
      (s.fillStyle = "rgba(240,244,252,0.96)"));
    try {
      s.letterSpacing = "0px";
    } catch {}
    ((s.font = "600 " + R.tSize + "px 'IBM Plex Mono', monospace"),
      s.fillText("OUR STORY", r, r + R.tSize));
    let A = r + R.tSize + R.tSize * 1.1,
      P = (y, v, G) => {
        (f(d, w, v), (s.fillStyle = "rgba(238,242,250," + G + ")"));
        let V = String(y).split(" "),
          D = "";
        for (let Et of V)
          s.measureText(D + " " + Et).width > o && D
            ? (s.fillText(D, r, A), (A += R.lh), (D = Et))
            : (D = D ? D + " " + Et : Et);
        (D && (s.fillText(D, r, A), (A += R.lh)), (A += R.pgap));
      };
    (a.forEach((y, v) =>
      P(y, v === a.length - 1, v === a.length - 1 ? 0.74 : 0.9),
    ),
      (A += R.lh * 0.5));
    try {
      s.letterSpacing = "0px";
    } catch {}
    ((s.font = "600 " + Math.round(d * 1.05) + "px 'IBM Plex Mono', monospace"),
      (s.fillStyle = "rgba(240,244,252,0.92)"),
      s.fillText(h, r, A));
    let I = new At(t);
    I.anisotropy = 8;
    try {
      I.colorSpace = dt;
    } catch {}
    let S = new O(
      new k(Qt, Jt),
      new B({
        map: I,
        transparent: !0,
        opacity: 0,
        toneMapped: !1,
        depthWrite: !1,
      }),
    );
    return (
      S.position.copy(Y.position),
      S.quaternion.copy(Y.quaternion),
      S.translateZ(0.003),
      x.add(S),
      S
    );
  })();
  function en(e, n, t) {
    let s = new Po(),
      r = -e / 2,
      o = -n / 2;
    return (
      s.moveTo(r + t, o),
      s.lineTo(r + e - t, o),
      s.absarc(r + e - t, o + t, t, -Math.PI / 2, 0),
      s.lineTo(r + e, o + n - t),
      s.absarc(r + e - t, o + n - t, t, 0, Math.PI / 2),
      s.lineTo(r + t, o + n),
      s.absarc(r + t, o + n - t, t, Math.PI / 2, Math.PI),
      s.lineTo(r, o + t),
      s.absarc(r + t, o + t, t, Math.PI, Math.PI * 1.5),
      s
    );
  }
  let Te = [],
    Tt = 540,
    xt = 1160,
    io = [
      { key: "email", label: "EMAIL", val: Ot[0][0], href: Ot[0][1], y: 316 },
      { key: "phone", label: "PHONE", val: Ot[1][0], href: Ot[1][1], y: 436 },
      {
        key: "ig",
        label: "INSTAGRAM",
        val: "@virtually.ever.after",
        href: Ot[2][1],
        y: 556,
      },
      {
        key: "li",
        label: "LINKEDIN",
        val: "virtuallyeverafter",
        href: Ot[3][1],
        y: 676,
      },
    ],
    Be = xt - 262,
    ao = 108,
    on = Ot[4] ? Ot[4][1] : "start.html";
  function nn() {
    let e = document.createElement("canvas");
    ((e.width = Tt), (e.height = xt));
    let n = e.getContext("2d");
    ((n.textAlign = "left"),
      (n.fillStyle = "#f1f1f2"),
      n.fillRect(0, 0, Tt, xt));
    let t = (o) => "rgba(18,18,20," + o + ")",
      s = (o, a, h, l, i) => {
        (n.beginPath(),
          n.moveTo(o + i, a),
          n.arcTo(o + h, a, o + h, a + l, i),
          n.arcTo(o + h, a + l, o, a + l, i),
          n.arcTo(o, a + l, o, a, i),
          n.arcTo(o, a, o + h, a, i),
          n.closePath());
      };
    ((n.fillStyle = t(0.82)),
      s(Tt / 2 - 58, 30, 116, 30, 15),
      n.fill(),
      (n.fillStyle = t(0.95)),
      (n.font = "600 66px 'IBM Plex Mono', monospace"),
      n.fillText("Contact", 46, 206),
      (n.strokeStyle = t(0.14)),
      (n.lineWidth = 2),
      n.beginPath(),
      n.moveTo(46, 240),
      n.lineTo(Tt - 46, 240),
      n.stroke());
    for (let o of io) {
      ((n.fillStyle = t(0.42)),
        (n.font = "500 24px 'IBM Plex Mono', monospace"),
        n.fillText(o.label, 46, o.y),
        (n.fillStyle = t(0.9)));
      let a = 28;
      for (
        n.font = a + "px 'IBM Plex Mono', monospace";
        n.measureText(o.val).width > Tt - 92 && a > 16;
      )
        (a--, (n.font = a + "px 'IBM Plex Mono', monospace"));
      n.fillText(o.val, 46, o.y + 42);
    }
    ((n.fillStyle = t(0.9)),
      s(46, Be, Tt - 92, ao, 26),
      n.fill(),
      (n.fillStyle = "#f1f1f2"),
      (n.font = "600 30px 'IBM Plex Mono', monospace"),
      (n.textAlign = "center"),
      n.fillText("Start your project \u2192", Tt / 2, Be + 66),
      (n.fillStyle = t(0.5)),
      (n.font = "20px 'IBM Plex Mono', monospace"),
      n.fillText("tell us what to build a world for", Tt / 2, xt - 120),
      (n.textAlign = "left"));
    let r = new At(e);
    r.anisotropy = 8;
    try {
      r.colorSpace = dt;
    } catch {}
    return r;
  }
  let sn = nn(),
    _e = 0.156,
    ro = 0.318,
    Lt = new Ke();
  (Lt.position.set(0.86, 0.919, 0.34), (Lt.rotation.y = -0.3));
  let Mt = null;
  {
    let e = en(_e, ro, 0.024),
      n = new O(
        new Ao(e, { depth: 0.011, bevelEnabled: !1 }),
        new B({ color: 1118484, side: fe, toneMapped: !1 }),
      );
    ((n.rotation.x = -Math.PI / 2), (n.position.y = 0), Lt.add(n));
    let t = new nt(
      new Ae(new vo(e)),
      ht(new de({ color: 3815998, transparent: !0, opacity: 0.6 })),
    );
    ((t.rotation.x = -Math.PI / 2), (t.position.y = 0.0118), Lt.add(t));
    let s = _e - 0.018,
      r = (s * xt) / Tt,
      o = new O(
        new k(s, r),
        new B({ map: sn, color: 1118481, toneMapped: !1 }),
      );
    ((o.rotation.x = -Math.PI / 2),
      (o.position.y = 0.0125),
      Lt.add(o),
      (Mt = { screen: o, cur: 0 }));
  }
  (x.add(Lt), Lt.updateMatrixWorld(!0));
  let Ce = Mt.screen.getWorldQuaternion(new go()),
    We = Mt.screen.getWorldPosition(new ot()),
    an = new ot(0, 1, 0).applyQuaternion(Ce),
    rn = {
      pos: We.clone().addScaledVector(
        new ot(0, 0, 1).applyQuaternion(Ce),
        0.34,
      ),
      look: We.clone(),
    },
    xe = new O(new k(0.34, 0.52), new B({ visible: !1 }));
  (xe.position.set(0.86, 0.98, 0.34), xe.rotation.set(0, -0.3, 0), x.add(xe));
  let Me = [],
    Vt = null;
  {
    let t = function (i) {
        let c = new Ke(),
          f = [],
          E = 0,
          u = 0.26,
          m = 3 + (i % 3);
        for (let w = 0; w < m; w++) {
          let p = 0.12 + 0.05 * ((i * (w + 2)) % 3);
          (mt(u, p, u, [0, E, 0], f), (E += p), (u *= 0.74));
        }
        let d = new Q();
        return (
          d.setAttribute("position", new Z(f, 3)),
          c.add(new nt(d, ht(L.hairMat.clone()))),
          c
        );
      },
      e = [],
      n = [],
      s = 1.34,
      r = -T + 0.34;
    e.push(-4.3, s, r, -1.5, s, r, -4.3, s, r - 0.3, -1.5, s, r - 0.3);
    for (let i of [-4.1, -1.7])
      (e.push(i, s, r, i, s - 0.42, -T + 0.02),
        e.push(i, s, r - 0.3, i, s - 0.42, -T + 0.02));
    ([-3.6, -2.9, -2.2].forEach((i, c) => {
      let f = t(c * 3 + 2);
      (f.position.set(i, s, r - 0.15),
        (f.userData.spd = 0.12 + c * 0.05),
        x.add(f),
        Me.push(f),
        n.push(i, s - 0.01, r - 0.15));
    }),
      mt(0.98, 0.82, 0.66, [2.15, 0, 0.2], e));
    for (let i of [0.2, 0.4, 0.6])
      (e.push(1.68, i, 0.54, 2.62, i, 0.54), n.push(2.15, i + 0.02, 0.54));
    (e.push(
      1.8,
      0.86,
      0.35,
      2.5,
      0.86,
      0.05,
      1.82,
      0.83,
      0.36,
      2.52,
      0.83,
      0.06,
    ),
      mt(0.1, 0.12, 0.1, [0.55, 0.92, 0.55], e));
    for (let i = 0; i < 10; i++) {
      let c = (i / 10) * 6.283;
      n.push(0.55 + Math.cos(c) * 0.05, 1.04, 0.55 + Math.sin(c) * 0.05);
    }
    mt(0.08, 0.16, 0.08, [-0.95, 0.92, 0.5], e);
    for (let i = 0; i < 5; i++)
      e.push(-0.96 + i * 0.01, 0.92, 0.5, -0.99 + i * 0.02, 1.16, 0.5);
    e.push(
      -0.5,
      0.925,
      0.6,
      0.35,
      0.925,
      0.6,
      -0.5,
      0.925,
      0.63,
      0.35,
      0.925,
      0.63,
    );
    for (let i = 0; i <= 16; i++) {
      let c = -0.5 + i * 0.053;
      e.push(c, 0.925, 0.6, c, 0.925, 0.612);
    }
    mt(0.56, 0.02, 0.19, [0.05, 0.925, 0.3], e);
    {
      let i = new O(
        new k(0.552, 0.184),
        new B({
          color: 789516,
          transparent: !0,
          opacity: 0.95,
          toneMapped: !1,
        }),
      );
      ((i.rotation.x = -Math.PI / 2),
        i.position.set(0.05, 0.9365, 0.3),
        x.add(i));
      let c = [];
      for (let E = 0; E < 4; E++)
        for (let u = 0; u < 13; u++) {
          let m = -0.203 + u * 0.0405,
            d = 0.222 + E * 0.041,
            w = 0.032,
            p = 0.9385;
          c.push(
            m,
            p,
            d,
            m + w,
            p,
            d,
            m + w,
            p,
            d,
            m + w,
            p,
            d + w,
            m + w,
            p,
            d + w,
            m,
            p,
            d + w,
            m,
            p,
            d + w,
            m,
            p,
            d,
          );
        }
      c.push(
        -0.11,
        0.9385,
        0.388,
        0.21,
        0.9385,
        0.388,
        -0.11,
        0.9385,
        0.404,
        0.21,
        0.9385,
        0.404,
        -0.11,
        0.9385,
        0.388,
        -0.11,
        0.9385,
        0.404,
        0.21,
        0.9385,
        0.388,
        0.21,
        0.9385,
        0.404,
      );
      let f = new Q();
      (f.setAttribute("position", new Z(c, 3)),
        x.add(
          new nt(
            f,
            ht(new de({ color: 14145490, transparent: !0, opacity: 0.6 })),
          ),
        ));
    }
    let o = new Q();
    (o.setAttribute("position", new Z(e, 3)), x.add(new nt(o, L.lineMat)));
    let a = new Q();
    (a.setAttribute("position", new Z(n, 3)), x.add(new _t(a, L.ptsMat)));
    let h = [];
    for (let i = 0; i < 220; i++)
      h.push(
        Math.sin(i * 12.9) * 3,
        0.4 + (((i * 37) % 100) / 100) * 2.6,
        Math.cos(i * 7.7) * 2.6 - 0.4,
      );
    let l = new Q();
    (l.setAttribute("position", new Z(h, 3)),
      (Vt = new _t(l, ht(L.wallDotMat.clone()))),
      (Vt.material.opacity = 0.3),
      x.add(Vt));
  }
  {
    let o = function (l, i, c, f, E, u) {
        let m = Math.cos(u),
          d = Math.sin(u),
          w = (M, R) => [l + M * m, i + R, c + M * d],
          p = (M, R, A) => {
            let P = [w(-R, -A), w(R, -A), w(R, A), w(-R, A)];
            for (let I = 0; I < 4; I++) {
              let S = P[I],
                y = P[(I + 1) % 4];
              M.push(S[0], S[1], S[2], y[0], y[1], y[2]);
            }
          };
        (p(e, f / 2, E / 2), p(n, f / 2 - 0.06, E / 2 - 0.06));
        for (let M = 0; M < 5; M++) {
          let R = Math.sin(M * 9 + l) * (f / 2 - 0.15),
            A = Math.cos(M * 7) * (E / 2 - 0.15),
            P = Math.sin(M * 5 + 1) * (f / 2 - 0.15),
            I = Math.cos(M * 11) * (E / 2 - 0.15),
            S = w(R, A),
            y = w(P, I);
          n.push(S[0], S[1], S[2], y[0], y[1], y[2]);
        }
      },
      a = function (l, i, c) {
        e.push(
          l,
          0,
          i - 1 / 2,
          l,
          2.4,
          i - 1 / 2,
          l,
          2.4,
          i - 1 / 2,
          l,
          2.4,
          i + 1 / 2,
          l,
          2.4,
          i + 1 / 2,
          l,
          0,
          i + 1 / 2,
        );
        for (let u of [
          [0.2, 1.1],
          [1.25, 2.2],
        ]) {
          let m = [
            [u[0], i - 0.5 + 0.12],
            [u[1], i - 0.5 + 0.12],
            [u[1], i + 0.5 - 0.12],
            [u[0], i + 0.5 - 0.12],
          ];
          for (let d = 0; d < 4; d++) {
            let w = m[d],
              p = m[(d + 1) % 4];
            n.push(l - c * 0.005, w[0], w[1], l - c * 0.005, p[0], p[1]);
          }
        }
        s.push(l - c * 0.02, 1.2, i + 1 / 2 - 0.14);
      },
      e = [],
      n = [],
      t = [],
      s = [],
      r = (l, i) =>
        i.push(
          -H,
          l,
          -T,
          H,
          l,
          -T,
          H,
          l,
          -T,
          H,
          l,
          T,
          H,
          l,
          T,
          -H,
          l,
          T,
          -H,
          l,
          T,
          -H,
          l,
          -T,
        );
    (r(0.09, n), r(0.15, n), r(C - 0.14, n), r(C - 0.07, n));
    for (let l = -H + 0.4; l < H; l += 0.9)
      n.push(l, 0.012, -T + 0.2, l, 0.012, T - 0.2);
    {
      (e.push(
        -2.5,
        0.02,
        -0.7,
        1.7,
        0.02,
        -0.7,
        1.7,
        0.02,
        -0.7,
        1.7,
        0.02,
        1.9,
        1.7,
        0.02,
        1.9,
        -2.5,
        0.02,
        1.9,
        -2.5,
        0.02,
        1.9,
        -2.5,
        0.02,
        -0.7,
      ),
        e.push(
          -2.5 + 0.12,
          0.02,
          -0.7 + 0.12,
          1.7 - 0.12,
          0.02,
          -0.7 + 0.12,
          1.7 - 0.12,
          0.02,
          -0.7 + 0.12,
          1.7 - 0.12,
          0.02,
          1.9 - 0.12,
          1.7 - 0.12,
          0.02,
          1.9 - 0.12,
          -2.5 + 0.12,
          0.02,
          1.9 - 0.12,
          -2.5 + 0.12,
          0.02,
          1.9 - 0.12,
          -2.5 + 0.12,
          0.02,
          -0.7 + 0.12,
        ));
      for (let u = -0.7 + 0.26; u < 1.9 - 0.12; u += 0.17)
        n.push(-2.5 + 0.2, 0.02, u, 1.7 - 0.2, 0.02, u);
    }
    {
      let c = -T + 0.04,
        f = 0.26;
      for (let E = 0; E < 40; E++) {
        let u = (E / 40) * 6.283,
          m = ((E + 1) / 40) * 6.283;
        t.push(
          -3.7 + Math.cos(u) * f,
          2.7 + Math.sin(u) * f,
          c,
          -3.7 + Math.cos(m) * f,
          2.7 + Math.sin(m) * f,
          c,
        );
      }
      for (let E = 0; E < 12; E++) {
        let u = (E / 12) * 6.283;
        t.push(
          -3.7 + Math.cos(u) * f * 0.86,
          2.7 + Math.sin(u) * f * 0.86,
          c,
          -3.7 + Math.cos(u) * f,
          2.7 + Math.sin(u) * f,
          c,
        );
      }
      t.push(
        -3.7,
        2.7,
        c,
        -3.7 + 0.03,
        2.7 + f * 0.62,
        c,
        -3.7,
        2.7,
        c,
        -3.7 + f * 0.5,
        2.7 + 0.05,
        c,
      );
    }
    (o(-4.7, 2.2, -T + 0.04, 0.85, 1.05, 0),
      o(-2.5, 2.5, -T + 0.04, 1, 0.66, 0),
      o(H - 0.04, 1.85, -1.4, 0.85, 1.15, Math.PI / 2),
      o(H - 0.04, 1.95, 0.4, 0.66, 0.85, Math.PI / 2));
    {
      let l = -H + 0.04,
        i = 1.75,
        c = -1.3,
        f = 2.4,
        E = 1.5,
        u = [
          [-f / 2, -E / 2],
          [f / 2, -E / 2],
          [f / 2, E / 2],
          [-f / 2, E / 2],
        ].map(([m, d]) => [l, i + d, c + m]);
      for (let m = 0; m < 4; m++) {
        let d = u[m],
          w = u[(m + 1) % 4];
        e.push(d[0], d[1], d[2], w[0], w[1], w[2]);
      }
      for (let m = 0; m < 8; m++) {
        let d = c - f / 2 + 0.42 + (m % 4) * 0.52,
          w = i - E / 2 + 0.42 + ((m / 4) | 0) * 0.72,
          p = 0.3,
          M = 0.38,
          R = Math.sin(m * 3) * 0.09,
          A = Math.cos(R),
          P = Math.sin(R),
          I = [
            [-p / 2, -M / 2],
            [p / 2, -M / 2],
            [p / 2, M / 2],
            [-p / 2, M / 2],
          ].map(([S, y]) => [l + 0.01, w + y * A - S * P, d + S * A + y * P]);
        for (let S = 0; S < 4; S++) {
          let y = I[S],
            v = I[(S + 1) % 4];
          n.push(y[0], y[1], y[2], v[0], v[1], v[2]);
        }
        s.push(l + 0.02, w + (M / 2) * A, d - (M / 2) * P);
      }
    }
    (a(H - 0.03, 2.3, 1), a(-H + 0.03, 2.6, -1));
    {
      let l = he("LOBBY", { stroke: !1, px: 280 }),
        i = new O(
          new k(0.26 * l.aspect, 0.26),
          new B({ map: l.tex, transparent: !0, opacity: 0.9, toneMapped: !1 }),
        );
      ((i.rotation.y = -Math.PI / 2),
        i.position.set(H - 0.06, 2.66, 2.3),
        x.add(i));
      let c = he("GALLERY", { stroke: !1, px: 280 }),
        f = new O(
          new k(0.26 * c.aspect, 0.26),
          new B({ map: c.tex, transparent: !0, opacity: 0.9, toneMapped: !1 }),
        );
      ((f.rotation.y = Math.PI / 2),
        f.position.set(-H + 0.06, 2.66, 2.6),
        x.add(f));
    }
    let h = (l, i, c) => {
      if (!l.length) return;
      let f = new Q();
      (f.setAttribute("position", new Z(l, 3)),
        x.add(c ? new nt(f, i) : new _t(f, i)));
    };
    (h(e, L.lineMat, !0),
      h(n, L.dimLineMat, !0),
      h(t, L.hairMat, !0),
      h(s, L.ptsMat, !1));
    {
      let c = new Q();
      (c.setAttribute("position", new Z([-0.1, C, 0.1, -0.1, 2.42, 0.1], 3)),
        x.add(new nt(c, ht(L.hairMat.clone()))));
      let f = new O(
        new Ho(0.17, 0.19, 18, 1, !0),
        new B({ color: 1776411, side: fe, transparent: !0, opacity: 0.92 }),
      );
      (f.position.set(-0.1, 2.33, 0.1), x.add(f));
      let E = new O(new ve(0.04, 10, 8), L.glowMat);
      (E.position.set(-0.1, 2.27, 0.1), x.add(E));
      let u = new Ut(16769712, 5, 6, 1.7);
      (u.position.set(-0.1, 2.24, 0.1), x.add(u));
    }
    {
      let l = document.createElement("canvas");
      ((l.width = 512), (l.height = 320));
      let i = l.getContext("2d"),
        c = i.createLinearGradient(0, 0, 0, 320);
      (c.addColorStop(0, "#000000"),
        c.addColorStop(0.6, "#040302"),
        c.addColorStop(1, "#0a0705"),
        (i.fillStyle = c),
        i.fillRect(0, 0, 512, 320),
        (i.fillStyle = "#fff"));
      for (let y = 0; y < 80; y++) {
        let v = (Math.sin(y * 12.9) * 0.5 + 0.5) * 512,
          G = (Math.cos(y * 7.7) * 0.5 + 0.5) * 175;
        ((i.globalAlpha = 0.25 + ((y * 37) % 100) / 150),
          i.fillRect(v, G, 1.5, 1.5));
      }
      i.globalAlpha = 1;
      let f = i.createRadialGradient(402, 62, 2, 402, 62, 30);
      (f.addColorStop(0, "rgba(245,245,243,0.9)"),
        f.addColorStop(1, "rgba(245,245,243,0)"),
        (i.fillStyle = f),
        i.beginPath(),
        i.arc(402, 62, 30, 0, 7),
        i.fill(),
        (i.fillStyle = "rgba(244,244,242,0.95)"),
        i.beginPath(),
        i.arc(402, 62, 12, 0, 7),
        i.fill());
      for (let y = 0; y < 30; y++) {
        let v = y * 18 + ((y * 53) % 7),
          G = 12 + ((y * 29) % 8),
          V = 24 + ((y * 71) % 78);
        ((i.fillStyle = "rgba(0,0,0,0.97)"),
          i.fillRect(v, 230 - V, G, V + 92),
          (i.strokeStyle = "rgba(148,148,148,0.2)"),
          (i.lineWidth = 1),
          i.strokeRect(v + 0.5, 230.5 - V, G - 1, V + 91));
      }
      i.fillStyle = "rgba(255,255,255,0.85)";
      for (let y = 0; y < 150; y++) {
        let v = (y * 47) % 512,
          G = 214 - ((y * 17) % 76);
        (y * 13) % 3 === 0 && i.fillRect(v, G, 2, 3);
      }
      let E = new At(l);
      try {
        E.colorSpace = dt;
      } catch {}
      let u = 2.8,
        m = 1.3,
        d = 3.3,
        w = 2.4,
        p = -T + 0.05,
        M = new O(new k(u, m), new B({ map: E, toneMapped: !1 }));
      (M.position.set(d, w, p), x.add(M));
      let R = u / 2 + 0.05,
        A = m / 2 + 0.05,
        P = [];
      (P.push(
        d - R,
        w - A,
        p + 0.01,
        d + R,
        w - A,
        p + 0.01,
        d + R,
        w - A,
        p + 0.01,
        d + R,
        w + A,
        p + 0.01,
        d + R,
        w + A,
        p + 0.01,
        d - R,
        w + A,
        p + 0.01,
        d - R,
        w + A,
        p + 0.01,
        d - R,
        w - A,
        p + 0.01,
      ),
        P.push(
          d,
          w - A,
          p + 0.01,
          d,
          w + A,
          p + 0.01,
          d - R,
          w,
          p + 0.01,
          d + R,
          w,
          p + 0.01,
        ));
      let I = new Q();
      (I.setAttribute("position", new Z(P, 3)),
        x.add(new nt(I, ht(L.hairMat.clone()))));
      let S = new Ut(14209732, 1.8, 8, 1.6);
      (S.position.set(d, w, p + 1.4), x.add(S));
    }
  }
  {
    let e = !1,
      n = (s, r, o) => {
        if (e) return;
        e = !0;
        let a = new B({
          map: s,
          transparent: !0,
          toneMapped: !1,
          depthWrite: !1,
          blending: o ? Ye : Mo,
        });
        o &&
          (a.onBeforeCompile = (i) => {
            i.fragmentShader = i.fragmentShader.replace(
              "#include <map_fragment>",
              `#include <map_fragment>
  diffuseColor.rgb = vec3(1.0) - diffuseColor.rgb;`,
            );
          });
        let h = 0.95 * 0.7,
          l = new O(new k(h, h / r), a);
        (l.position.set(0.05, 2.85, -T + 0.07), x.add(l));
      },
      t = () => {
        let s = new Image();
        ((s.onload = () => {
          try {
            let r = document.createElement("canvas");
            ((r.width = s.naturalWidth), (r.height = s.naturalHeight));
            let o = r.getContext("2d");
            ((o.filter = "invert(1)"), o.drawImage(s, 0, 0));
            let a = new At(r);
            try {
              a.colorSpace = dt;
            } catch {}
            n(a, r.width / r.height, !1);
          } catch {}
        }),
          (s.onerror = () => {
            let r = he("VEA", { stroke: !1, px: 320 });
            n(r.tex, r.aspect, !1);
          }),
          (s.src = "/assets/img/veacrop.webp"));
      };
    try {
      if (location.search.indexOf("novid") >= 0) throw (t(), 0);
      let s = document.createElement("video");
      ((s.muted = !0),
        (s.loop = !0),
        (s.playsInline = !0),
        (s.autoplay = !0),
        s.setAttribute("playsinline", ""),
        (s.dataset.g3room = ""),
        (s.style.cssText =
          "position:fixed;left:-200vw;top:0;width:240px;height:240px;"));
      let r = document.createElement("source");
      ((r.src = "/assets/video/logo-anim.webm"), (r.type = "video/webm"));
      let o = document.createElement("source");
      ((o.src = "/assets/video/logo-anim.mp4"),
        (o.type = "video/mp4"),
        s.appendChild(r),
        s.appendChild(o),
        document.body.appendChild(s),
        s
          .play()
          .then(() => {
            let a = new je(s);
            try {
              a.colorSpace = dt;
            } catch {}
            n(a, 1, !0);
          })
          .catch(t),
        setTimeout(() => {
          e || t();
        }, 4e3));
    } catch {
      t();
    }
  }
  function te(e, n, t) {
    let s = new ot(0, 0, 1).applyQuaternion(e.quaternion).normalize(),
      r = e.position.clone().add(s.multiplyScalar(n));
    return ((r.y += t || 0), { pos: r, look: e.position.clone() });
  }
  let ee = new O(new k(1.15, 2.5), new B({ visible: !1 }));
  (ee.position.set(H - 0.1, 1.25, 2.3),
    (ee.rotation.y = -Math.PI / 2),
    x.add(ee));
  let oe = new O(new k(1.15, 2.5), new B({ visible: !1 }));
  (oe.position.set(-H + 0.1, 1.25, 2.6),
    (oe.rotation.y = Math.PI / 2),
    x.add(oe));
  let ne = new O(new k(0.9, 1.5), new B({ visible: !1 }));
  (ne.position.set(-3.55, 1.15, 1.35), (ne.rotation.y = 1.28), x.add(ne));
  let se = new O(new k(0.9, 1.7), new B({ visible: !1 }));
  (se.position.set(3.45, 1.35, 0.6), (se.rotation.y = -1.09), x.add(se));
  let Rt = [
      {
        kind: "services",
        mesh: tt,
        name: "THE BOARD",
        label: "SERVICES",
        focus: te(tt, 1.35, 0.02),
        shift: 0.16,
      },
      {
        kind: "about",
        mesh: we,
        name: "THE PAPER",
        label: "ABOUT",
        focus: te(Nt, 0.6, 0),
        up: new ot(0, 1, 0).applyQuaternion(Nt.quaternion),
        shift: 0,
      },
      {
        kind: "story",
        mesh: Y,
        name: "THE SCREEN",
        label: "STORY",
        focus: te(Y, 0.6, 0),
        shift: 0,
      },
      {
        kind: "contact",
        mesh: xe,
        name: "THE PHONE",
        label: "CONTACT",
        focus: rn,
        up: an,
        shift: 0,
      },
      {
        kind: "founder-y",
        mesh: ne,
        name: "YIGIT OZEN \xB7 SPATIAL WEB DESIGNER",
        label: "YIGIT",
        focus: te(ne, 1.5, 0.15),
        shift: 0,
      },
      {
        kind: "founder-d",
        mesh: se,
        name: "DENIZ AGAOGLU OZEN \xB7 CREATIVE DIRECTOR",
        label: "DENIZ",
        focus: te(se, 1.6, 0.2),
        shift: 0,
      },
      {
        kind: "lobby",
        mesh: ee,
        name: "THE DOOR \xB7 LOBBY",
        href: "index.html",
      },
      {
        kind: "gallery",
        mesh: oe,
        name: "THE DOOR \xB7 GALLERY",
        href: "works.html",
      },
    ],
    Re = Rt.map((e) => e.mesh);
  function co(e, n, t) {
    let s = e + 2 * t,
      r = n + 2 * t,
      o = 420 / s,
      a = Math.round(s * o),
      h = Math.round(r * o),
      l = document.createElement("canvas");
    ((l.width = a), (l.height = h));
    let i = l.getContext("2d");
    i.lineJoin = "round";
    let c = t * o,
      f = e * o,
      E = n * o,
      u = 12,
      m = () => {
        (i.beginPath(),
          i.moveTo(c + u, c),
          i.arcTo(c + f, c, c + f, c + E, u),
          i.arcTo(c + f, c + E, c, c + E, u),
          i.arcTo(c, c + E, c, c, u),
          i.arcTo(c, c, c + f, c, u),
          i.closePath(),
          i.stroke());
      };
    ((i.strokeStyle = "#fff"), (i.shadowColor = "#fff"));
    for (let [w, p, M] of [
      [t * o * 1.1, 0.28, 3],
      [t * o * 0.7, 0.48, 2.5],
      [t * o * 0.38, 0.72, 2],
      [t * o * 0.14, 1, 1.4],
    ])
      ((i.shadowBlur = w), (i.globalAlpha = p), (i.lineWidth = M), m());
    let d = new At(l);
    d.anisotropy = 4;
    try {
      d.colorSpace = dt;
    } catch {}
    return new O(
      new k(s, r),
      new B({
        map: d,
        transparent: !0,
        opacity: 0,
        blending: Ye,
        depthWrite: !1,
        side: fe,
        toneMapped: !1,
      }),
    );
  }
  function ie(e, n, t, s, r, o) {
    let a = co(n, t, o || 0.045);
    (s.updateWorldMatrix(!0, !1),
      a.position.setFromMatrixPosition(s.matrixWorld),
      a.quaternion.setFromRotationMatrix(s.matrixWorld),
      r && a.translateZ(r),
      (a.renderOrder = 6),
      x.add(a),
      Te.push({ kind: e, m: a, t: 0 }));
  }
  {
    let e = ((pt ? 1.02 : 1.44) * K) / z;
    (ie("about", 0.44, 0.58, Nt, 0.006, 0.05),
      ie("story", Qt + 0.05, Jt + 0.05, Y, 0.016, 0.055),
      ie("services", 1.48, e + 0.04, tt, 0.016, 0.07),
      ie("lobby", 1.16, 2.52, ee, 0.02, 0.07),
      ie("gallery", 1.16, 2.52, oe, 0.02, 0.07));
    let n = co(_e + 0.016, ro + 0.016, 0.03);
    (n.position.copy(We),
      n.quaternion.copy(Ce),
      n.translateZ(0.004),
      (n.renderOrder = 6),
      x.add(n),
      Te.push({ kind: "contact", m: n, t: 0 }));
  }
  let Ge = [];
  {
    let n = (s, r, o, a, h, l) => {
      let i = he(r, { stroke: !1, px: 220 }),
        c = new O(
          new k(h * i.aspect, h),
          new B({
            map: i.tex,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
            toneMapped: !1,
          }),
        );
      (c.position.set(o[0], o[1], o[2]),
        (c.rotation.y = a),
        x.add(c),
        Ge.push({ kind: s, mesh: c, founder: !!l }));
    };
    (n("about", "ABOUT", [-0.62, 1.12, 0.34], 0.3, 0.119),
      n("story", "STORY", [0.05, 1.64, -0.18], -0.02, 0.119),
      n("services", "SERVICES", [-2.15, 2.36, -0.55], 0.64, 0.119),
      n("contact", "CONTACT", [0.86, 1.12, 0.34], -0.4, 0.119),
      n("founder-y", "YIGIT", [-3.73, 1.66, 1.18], 1.27, 0.17, !0),
      n("founder-d", "DENIZ", [3.6, 2, 0.47], -1.09, 0.17, !0));
  }
  let et = {};
  ([...Te, ...Ge].forEach((e) => {
    et[e.kind] = 0;
  }),
    (et["founder-y"] = 0),
    (et["founder-d"] = 0));
  let ct = pt,
    Pt = document.createElement("div");
  ((Pt.id = "info"),
    (Pt.textContent = ct
      ? "THE OFFICE \xB7 SWIPE TO LOOK \xB7 TAP A PROP TO READ"
      : "THE OFFICE \xB7 DRAG / SCROLL / ARROWS TO LOOK \xB7 CLICK A PROP TO READ"),
    document.body.appendChild(Pt));
  let N = document.createElement("div");
  ((N.id = "reader"), document.body.appendChild(N));
  let Bt = document.createElement("div");
  Bt.id = "film";
  let st = document.createElement("video");
  ((st.loop = !0),
    (st.playsInline = !0),
    st.setAttribute("playsinline", ""),
    (st.dataset.g3room = ""),
    Bt.appendChild(st),
    document.body.appendChild(Bt));
  function cn(e) {
    Bt.classList.add("on");
    try {
      Ze(!0);
    } catch {}
    no || ((st.muted = !1), Uo(st, e));
  }
  function ln() {
    Bt.classList.remove("on");
    try {
      Ze(!1);
    } catch {}
    try {
      (st.pause(),
        st._hls && (st._hls.destroy(), (st._hls = null)),
        st.removeAttribute("src"),
        st.load());
    } catch {}
  }
  let lt = document.createElement("div");
  lt.id = "phonelinks";
  {
    let e = (n, t, s) => {
      let r = document.createElement("a");
      ((r.href = s),
        (r.target = "_blank"),
        (r.rel = "noopener noreferrer"),
        (r.style.cssText =
          "position:absolute;left:4%;width:92%;top:" +
          n +
          "%;height:" +
          t +
          "%;display:block;"),
        lt.appendChild(r));
    };
    for (let n of io) e(((n.y - 42) / xt) * 100, (108 / xt) * 100, n.href);
    e((Be / xt) * 100, (ao / xt) * 100, on);
  }
  document.body.appendChild(lt);
  function lo() {
    let e = Mt.screen;
    e.updateWorldMatrix(!0, !1);
    let n = e.geometry.parameters.width,
      t = e.geometry.parameters.height,
      s = 1e9,
      r = 1e9,
      o = -1e9,
      a = -1e9;
    for (let [h, l] of [
      [-n / 2, -t / 2],
      [n / 2, -t / 2],
      [n / 2, t / 2],
      [-n / 2, t / 2],
    ]) {
      let i = new ot(h, l, 0).applyMatrix4(e.matrixWorld).project(b),
        c = (i.x * 0.5 + 0.5) * innerWidth,
        f = (-i.y * 0.5 + 0.5) * innerHeight;
      ((s = Math.min(s, c)),
        (r = Math.min(r, f)),
        (o = Math.max(o, c)),
        (a = Math.max(a, f)));
    }
    ((lt.style.left = s + "px"),
      (lt.style.top = r + "px"),
      (lt.style.width = o - s + "px"),
      (lt.style.height = a - r + "px"));
  }
  N.addEventListener("click", (e) => {
    let n = e.target.closest("[data-act]");
    if (!n) return;
    e.preventDefault();
    let t = n.getAttribute("data-act");
    t === "back"
      ? ze()
      : t === "region"
        ? ce(n.getAttribute("data-key"))
        : t === "item"
          ? Se(parseInt(n.getAttribute("data-i"), 10))
          : t === "close" && po();
  });
  let W = null,
    j = null,
    ft = -1;
  function X(e, n, t) {
    return "<" + e + (n ? ' class="' + n + '"' : "") + ">" + t + "</" + e + ">";
  }
  function ae() {
    if (!W || W === "contact" || W === "about" || W === "story") {
      (N.classList.remove("on"), document.body.classList.remove("rsheet"));
      return;
    }
    N.classList.add("on");
    let e = "",
      n = "",
      t = "";
    if (W === "founder-y" || W === "founder-d") {
      let r = En[W];
      e = r.name;
      let o = (a, h) =>
        h && h.length
          ? X("p", "meta-h", a) + h.map((l) => X("p", "meta", l)).join("")
          : "";
      n =
        X("p", "lead", r.role) +
        r.text.map((a) => X("p", "", a)).join("") +
        o("Education", r.edu) +
        o("Experience", r.exp);
    } else if (W === "about")
      ((e = "ABOUT"), (n = Ie.map((r) => X("p", "", r)).join("")));
    else if (W === "story")
      ((e = "OUR STORY"),
        (n =
          Xt.slice(0, -1)
            .map((r) => X("p", "", r))
            .join("") + X("p", "sig", Xt[Xt.length - 1])));
    else if (W === "services")
      if (ft >= 0 && j) {
        t =
          '<button data-act="back" class="crumb">\u2039 ' +
          j.toUpperCase() +
          "</button>";
        let r = (o, a) =>
          a
            ? '<a class="proof" href="' +
              a +
              '" target="_blank" rel="noopener noreferrer">Proof \xB7 ' +
              o +
              "  \u2197</a>"
            : o
              ? X("div", "proof", o)
              : "";
        if (j === "what") {
          let o = vt[ft];
          ((e = o[0] + " \xB7 " + o[1]), (n = X("p", "", o[2])));
        } else if (j === "who") {
          let o = Kt[ft];
          ((e = o[0]), (n = X("p", "", o[1])));
        } else if (j === "how") {
          let o = It[ft];
          ((e = o[0] + " \xB7 " + o[1]), (n = X("p", "", o[2])));
        } else if (j === "faq") {
          let o = jt[ft];
          ((e = o[1]), (n = X("p", "", o[2])));
        }
      } else if (j) {
        t = '<button data-act="back" class="crumb">\u2039 SERVICES</button>';
        let r = {
          what: ["WHAT WE DO", vt.map((o) => o[0] + " \xB7 " + o[1])],
          who: ["WHO WE WORK WITH", Kt.map((o) => o[0])],
          how: ["HOW WE WORK", It.map((o) => o[0] + " \xB7 " + o[1])],
          faq: ["QUESTIONS", jt.map((o) => o[1])],
        };
        ((e = r[j][0]),
          (n = r[j][1]
            .map(
              (o, a) =>
                '<button class="row" data-act="item" data-i="' +
                a +
                '">' +
                o +
                "</button>",
            )
            .join("")));
      } else
        ((e = "SERVICES"),
          (n =
            X(
              "p",
              "lead",
              "Everything the studio makes, drawn as one architect\u2019s sheet: the plan of our services, its legend, its revisions, its notes. Read a region:",
            ) +
            ye
              .map(
                (r) =>
                  '<button class="row" data-act="region" data-key="' +
                  r.key +
                  '">' +
                  r.name.split(" \xB7 ")[1] +
                  "<em>" +
                  r.name.split(" \xB7 ")[0] +
                  "</em></button>",
              )
              .join("")));
    N.innerHTML =
      '<button class="x" data-act="close" aria-label="Close">\u2715</button>' +
      t +
      X("h3", "", "") +
      X("div", "rb", n) +
      '<button class="hint" data-act="back" type="button">' +
      (ct ? "TAP AWAY TO GO BACK" : "ESC TO GO BACK") +
      "</button>";
    let s = N.querySelector("h3");
    ($e(s, e), document.body.classList.add("rsheet"));
    try {
      requestAnimationFrame(fo);
    } catch {}
  }
  function fo() {
    try {
      if (pt) {
        N.style.removeProperty("--rfit");
        return;
      }
      N.style.setProperty("--rfit", "1");
      let e = N.getBoundingClientRect().top,
        n = N.scrollHeight || N.offsetHeight,
        t = innerHeight - e - 88,
        s = n > t ? Math.max(0.5, t / n) : 1;
      N.style.setProperty("--rfit", String(Math.round(s * 1e3) / 1e3));
    } catch {}
  }
  try {
    addEventListener("resize", () => {
      N.classList.contains("on") && fo();
    });
  } catch {}
  let U = "seated",
    ge = 0,
    gt = 0,
    re = new ot(),
    it = null,
    ho = () => new ot(kt.x + Math.sin(ge) * 6, 1.25, kt.z - Math.cos(ge) * 6);
  function De(e, n, t, s) {
    if (location.search.indexOf("snap") >= 0) {
      (b.position.copy(e),
        re.copy(n),
        b.up.copy(s || new ot(0, 1, 0)),
        (U = t),
        (it = null));
      return;
    }
    ((it = {
      t0: performance.now(),
      dur: 900,
      p0: b.position.clone(),
      p1: e.clone(),
      l0: re.clone(),
      l1: n.clone(),
      to: t,
      u0: b.up.clone(),
      u1: (s || new ot(0, 1, 0)).clone(),
    }),
      (U = "moving"));
  }
  function be(e) {
    try {
      window.VEASND && VEASND.open();
    } catch {}
    try {
      if (window.VEASND) {
        var n = { "founder-d": "deniz", "founder-y": "yigit", story: "story" }[
          e
        ];
        n && VEASND.theme(n);
      }
    } catch {}
    let t = Rt.find((f) => f.kind === e);
    if (!t || t.href) return;
    ((W = e),
      (j = null),
      (ft = -1),
      document.body.classList.add("focused"),
      e === "services" && zt(null));
    let s = (
        t.up ? t.up.clone() : new ot(0, 1, 0).applyQuaternion(t.mesh.quaternion)
      ).normalize(),
      r = t.focus.pos.clone(),
      o = t.focus.look.clone(),
      a = r.distanceTo(o),
      h = o.clone().sub(r).normalize(),
      l = 2 * a * Math.tan((b.fov * Math.PI) / 360) * b.aspect,
      i = h.clone().cross(s).normalize(),
      c = ct ? 0 : l * (t.shift != null ? t.shift : 0.12);
    (r.addScaledVector(i, -c), o.addScaledVector(i, -c), De(r, o, "focus", s));
    try {
      b.clearViewOffset();
    } catch {}
    (ct &&
      (e === "services" || e === "about" || e === "story") &&
      requestAnimationFrame(() => {
        if (W !== e) return;
        let f = 0.9;
        if (e === "services") {
          f = 0.5;
          try {
            f = Math.max(
              0.34,
              1 - N.getBoundingClientRect().height / innerHeight - 0.04,
            );
          } catch {}
        }
        let E =
            e === "about"
              ? { width: 0.42, height: 0.56 }
              : t.mesh.geometry.parameters,
          u = t.focus.look.clone(),
          m = t.focus.pos.clone().sub(t.focus.look).normalize(),
          d = 2 * Math.tan((b.fov * Math.PI) / 360),
          w = Math.max(E.width / (d * b.aspect), E.height / (d * f)) * 1.06,
          p = u.clone().addScaledVector(m, w);
        De(p, u, "focus", s);
        let M = Math.round(
          e === "services" ? (0.5 - f / 2) * innerHeight : -0.02 * innerHeight,
        );
        (b.setViewOffset(
          innerWidth,
          innerHeight,
          0,
          M,
          innerWidth,
          innerHeight,
        ),
          b.updateProjectionMatrix());
      }),
      e === "contact" && (lo(), lt.classList.add("on")),
      (e === "founder-y" || e === "founder-d") && cn(yn[e]),
      $e(
        Pt,
        t.name +
          (ct
            ? "  \xB7  TAP AWAY TO GO BACK"
            : "  \xB7  ESC / CLICK AWAY TO GO BACK"),
      ),
      ae());
  }
  function po() {
    try {
      (b.clearViewOffset(), b.updateProjectionMatrix());
    } catch {}
    try {
      window.VEASND && VEASND.close();
    } catch {}
    try {
      window.VEASND && VEASND.theme(null);
    } catch {}
    ((W = null),
      (j = null),
      (ft = -1),
      document.body.classList.remove("focused"),
      N.classList.remove("on"),
      ln(),
      lt.classList.remove("on"),
      wt && zt(null),
      De(kt, ho(), "seated", new ot(0, 1, 0)));
  }
  function ce(e) {
    try {
      window.VEASND && VEASND.slide();
    } catch {}
    ((j = e), (ft = -1), W === "services" && zt(e, -1), ae());
  }
  function Se(e) {
    try {
      window.VEASND && VEASND.slide();
    } catch {}
    ((ft = e), W === "services" && zt(j, e), ae());
  }
  function ze() {
    if (W === "services") {
      if (ft >= 0) {
        ((ft = -1), ae());
        return;
      }
      if (j) {
        ((j = null), zt(null), ae());
        return;
      }
    }
    po();
  }
  let Ft = new _o(),
    He = new Ue(),
    Ne = !1,
    rt = null,
    ut = null,
    le = !1;
  function Ve(e) {
    if (!le) {
      if (((le = !0), ct && g && g.go))
        try {
          if (g.go(e)) return;
        } catch {}
      try {
        Do("office", e);
      } catch {}
      try {
        if (g.go && g.go(e)) return;
      } catch {}
      try {
        window.VEASND && VEASND.fadeOut(2100);
      } catch {}
      try {
        ue(0);
      } catch {}
      try {
        document.getElementById("menu").classList.remove("open");
      } catch {}
      try {
        zo(
          x,
          () => {
            try {
              Vo(q, x, b);
            } catch {}
            location.href = e;
          },
          { scale: 620, fly: 1500 },
        );
      } catch {
        location.href = e;
      }
      setTimeout(() => {
        le && (location.href = e);
      }, 2600);
    }
  }
  window.__g3on = !0;
  try {
    Fo("office", _);
  } catch {}
  try {
    qo(
      ct
        ? "SWIPE TO LOOK \xB7 TAP A PROP TO READ"
        : "DRAG / SCROLL TO LOOK \xB7 CLICK A PROP TO READ",
    );
  } catch {}
  Yo(Ve);
  let qt = null,
    Fe = 0;
  (_.addEventListener("pointerdown", (e) => {
    ((qt = { x: e.clientX }), (Fe = 0), _.setPointerCapture(e.pointerId));
  }),
    _.addEventListener("pointermove", (e) => {
      ((He.x = (e.clientX / innerWidth) * 2 - 1),
        (He.y = -(e.clientY / innerHeight) * 2 + 1),
        (Ne = !0),
        qt &&
          ((Fe += Math.abs(e.clientX - qt.x)),
          U === "seated" && (gt -= (e.clientX - qt.x) * 0.004),
          (qt.x = e.clientX)));
    }));
  let uo = () => {
    qt = null;
  };
  (_.addEventListener("pointerup", uo),
    _.addEventListener("pointercancel", uo),
    _.addEventListener("mouseleave", () => {
      Ne = !1;
    }),
    _.addEventListener(
      "wheel",
      (e) => {
        (e.preventDefault(), U === "seated" && (gt += e.deltaY * 0.0014));
      },
      { passive: !1 },
    ));
  function fn(e) {
    return Math.atan2(e.position.x - kt.x, kt.z - e.position.z);
  }
  function Eo(e) {
    let n = null;
    for (let t of Rt) {
      if (!t.mesh) continue;
      let s =
        (((fn(t.mesh) - gt) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      (e < 0 && (s = (2 * Math.PI - s) % (2 * Math.PI)),
        s > 0.08 && (n == null || s < n) && (n = s));
    }
    n != null && (gt += e > 0 ? n : -n);
  }
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      W && ze();
      return;
    }
    if (U === "seated") {
      if (e.key === "ArrowRight") {
        (e.preventDefault(), Eo(1));
        return;
      }
      if (e.key === "ArrowLeft") {
        (e.preventDefault(), Eo(-1));
        return;
      }
      if (e.key === "Enter") {
        let n = rt || ut;
        if (!n) return;
        let t = Rt.find((s) => s.kind === n);
        t && t.href ? Ve(t.href) : be(n);
      }
    }
  });
  function dn(e, n) {
    for (let s of ["what", "who", "how", "faq"])
      for (let r = 0; r < Jo[s]; r++) {
        let o = oo(s, r);
        if (o && e >= o[0] && e <= o[0] + o[2] && n >= o[1] && n <= o[1] + o[3])
          return { region: s, item: r };
      }
    let t = ye.find(
      (s) =>
        e >= s.box[0] &&
        e <= s.box[0] + s.box[2] &&
        n >= s.box[1] &&
        n <= s.box[1] + s.box[3],
    );
    return t ? { region: t.key, item: -1 } : null;
  }
  _.addEventListener("click", () => {
    if (!(Fe > 6) && U !== "moving") {
      try {
        window.VEASND && (rt || ut || W) && VEASND.click();
      } catch {}
      if (U === "seated") {
        let e = rt || ut;
        if (e) {
          let n = Rt.find((t) => t.kind === e);
          if (n && n.href) {
            Ve(n.href);
            return;
          }
          be(e);
        }
        return;
      }
      if (W === "services") {
        Ft.setFromCamera(He, b);
        let e = Ft.intersectObject(tt, !1)[0];
        if (e) {
          if (e.uv) {
            let n = e.uv.x * z,
              t = (1 - e.uv.y) * K,
              s = dn(n, t);
            s && (s.item >= 0 ? (ce(s.region), Se(s.item)) : ce(s.region));
          }
          return;
        }
      }
      ze();
    }
  });
  function hn() {
    if (U !== "seated") {
      rt = null;
      return;
    }
    if (!Ne) {
      (rt && ((rt = null), Pe()), (_.style.cursor = ""));
      return;
    }
    Ft.setFromCamera(He, b);
    let e = Ft.intersectObjects(Re, !1)[0],
      n = e ? Rt[Re.indexOf(e.object)].kind : null;
    (n !== rt && ((rt = n), Pe()), (_.style.cursor = n ? "pointer" : ""));
  }
  function Pe() {
    if (U !== "seated") return;
    let e = rt || ut,
      n = e && Rt.find((t) => t.kind === e);
    $e(
      Pt,
      n
        ? n.name +
            (ct ? "  \xB7  TAP TO OPEN" : "  \xB7  CLICK / ENTER TO OPEN")
        : ct
          ? "THE OFFICE \xB7 SWIPE TO LOOK \xB7 TAP A PROP TO READ"
          : "THE OFFICE \xB7 DRAG / SCROLL / ARROWS TO LOOK \xB7 CLICK A PROP TO READ",
    );
  }
  let mo = new Ue();
  function pn() {
    if (U !== "seated") {
      ut && (ut = null);
      return;
    }
    let e = null;
    for (let n of [0, 0.22, -0.22, 0.42]) {
      (mo.set(0, n), Ft.setFromCamera(mo, b));
      let t = Ft.intersectObjects(Re, !1)[0];
      if (t) {
        e = Rt[Re.indexOf(t.object)].kind;
        break;
      }
    }
    if (e !== ut) {
      ut = e;
      try {
        e && window.VEASND && VEASND.hover();
      } catch {}
      Pe();
    }
  }
  let at = document.getElementById("cur");
  at ||
    ((at = document.createElement("div")),
    (at.id = "cur"),
    (at.innerHTML = "<span></span>"),
    document.body.appendChild(at));
  try {
    document.documentElement.classList.add("hascur");
  } catch {}
  let qe = null,
    yo = !1;
  if (
    at &&
    window.matchMedia &&
    matchMedia("(hover:hover) and (pointer:fine)").matches
  ) {
    qe = at.querySelector("span");
    let e = innerWidth / 2,
      n = innerHeight / 2,
      t = e,
      s = n;
    (addEventListener(
      "mousemove",
      (r) => {
        ((e = r.clientX), (n = r.clientY));
      },
      { passive: !0 },
    ),
      addEventListener("mouseover", (r) => {
        yo = !!(r.target.closest && r.target.closest("a,button"));
      }),
      (function r() {
        ((t += (e - t) * 0.22),
          (s += (n - s) * 0.22),
          (at.style.left = t.toFixed(1) + "px"),
          (at.style.top = s.toFixed(1) + "px"),
          requestAnimationFrame(r));
      })());
  } else at && (at.style.display = "none");
  function un() {
    if (!qe) return;
    let e = U === "seated" && rt ? "big" : yo ? "mid" : "";
    at.className !== e &&
      ((at.className = e), (qe.textContent = e === "big" ? "OPEN" : ""));
  }
  let wo = 0;
  function To(e) {
    if (F) return;
    requestAnimationFrame(To);
    let n = e / 1e3,
      t = Math.min(50, e - (wo || e));
    if (((wo = e), it)) {
      let o = Math.min(1, (e - it.t0) / it.dur),
        a = o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2;
      (b.position.lerpVectors(it.p0, it.p1, a),
        re.lerpVectors(it.l0, it.l1, a),
        b.up.copy(it.u0).lerp(it.u1, a).normalize(),
        o >= 1 &&
          ((U = it.to),
          U === "seated" && (b.up.set(0, 1, 0), Pt.classList && Pe()),
          (it = null)));
    } else if (U === "seated") {
      let o = 1 - Math.pow(0.9, t / 16.7);
      ((ge += (gt - ge) * o),
        b.up.set(0, 1, 0),
        b.position.copy(kt),
        re.copy(ho()));
    }
    (b.lookAt(re), hn(), pn(), un());
    for (let o of Gt)
      try {
        Go(o, n);
      } catch {}
    for (let o = 0; o < Me.length; o++)
      Me[o].rotation.y = n * (Me[o].userData.spd || 0.15);
    if (
      (Vt &&
        ((Vt.rotation.y = n * 0.03),
        (Vt.position.y = Math.sin(n * 0.25) * 0.05)),
      Mt)
    ) {
      let o = W === "contact" || rt === "contact" || ut === "contact" ? 1 : 0;
      (ct && (o = Math.max(o, 0.42)),
        (Mt.cur += (o - Mt.cur) * (1 - Math.pow(0.8, t / 16.7))),
        Mt.screen.material.color.setScalar(0.06 + Mt.cur * 0.94));
    }
    W === "contact" && lo();
    let s = U === "seated" ? rt || ut : null;
    for (let o in et)
      et[o] = Math.max(0, Math.min(1, et[o] + ((o === s ? 1 : -1) * t) / 300));
    let r = (o) => o * o * (3 - 2 * o);
    for (let o of Te) o.m.material.opacity = r(et[o.kind]);
    for (let o of Ge) {
      let a = ct ? Math.max(0.5, r(et[o.kind])) : r(et[o.kind]);
      if (((o.mesh.material.opacity = a), o.founder)) {
        let h = 1 + a * 0.2;
        o.mesh.scale.set(h, h, h);
      }
    }
    try {
      if (window.VEASND) {
        let o = Math.max(et["founder-y"] || 0, et["founder-d"] || 0);
        o > 0.06 &&
          VEASND.presence(
            o * 0.7,
            (et["founder-y"] || 0) > (et["founder-d"] || 0) ? -0.4 : 0.4,
          );
      }
    } catch {}
    for (let o of ["founder-y", "founder-d"]) {
      let a = Xo[o];
      a && (a.pts.material.opacity = 0.5 + r(et[o]) * 0.5);
    }
    so.material.opacity +=
      ((W === "story" ? 1 : 0) - so.material.opacity) *
      (1 - Math.pow(0.9, t / 16.7));
    try {
      if (window.VEASND) {
        let o =
            _.__mv ||
            (_.__mv = { x: 0, y: 0, z: 0, qx: 0, qy: 0, qz: 0, qw: 1, t: 0 }),
          a = performance.now(),
          h = (a - (o.t || a)) / 1e3;
        if (h > 0.35 || h <= 0)
          ((o.t = a),
            (o.x = b.position.x),
            (o.y = b.position.y),
            (o.z = b.position.z),
            (o.qx = b.quaternion.x),
            (o.qy = b.quaternion.y),
            (o.qz = b.quaternion.z),
            (o.qw = b.quaternion.w));
        else {
          let l = Math.max(0.008, h),
            i = b.position.x - o.x,
            c = b.position.y - o.y,
            f = b.position.z - o.z,
            E = Math.sqrt(i * i + c * c + f * f) / l,
            u = Math.min(
              1,
              Math.abs(
                b.quaternion.x * o.qx +
                  b.quaternion.y * o.qy +
                  b.quaternion.z * o.qz +
                  b.quaternion.w * o.qw,
              ),
            ),
            m = (2 * Math.acos(u)) / l;
          ((o.t = a),
            (o.x = b.position.x),
            (o.y = b.position.y),
            (o.z = b.position.z),
            (o.qx = b.quaternion.x),
            (o.qy = b.quaternion.y),
            (o.qz = b.quaternion.z),
            (o.qw = b.quaternion.w));
          let d = Math.min(1, m / 1.4 + E / 10);
          d > 0.02 && VEASND.motion(d, le);
        }
      }
    } catch {}
    q.render(x, b);
  }
  if (
    (requestAnimationFrame(To),
    J("office: frame loop started \xB7 committing"),
    g.onCommit)
  )
    try {
      g.onCommit();
    } catch {}
  Ct("");
  try {
    let e = document.getElementById("boot");
    e && (e.style.display = "none");
  } catch {}
  try {
    (document.documentElement.classList.remove("spaceboot"),
      document.documentElement.classList.remove("veaask"));
  } catch {}
  try {
    let e = document.getElementById("g3boot");
    e &&
      (clearTimeout(window.__g3bootT),
      e.classList.add("lift"),
      setTimeout(() => {
        e.hidden = !0;
      }, 700));
  } catch {}
  J("office: veil lifted \xB7 ROOM LIVE \u2713");
  try {
    location.search.indexOf("snap") < 0 &&
      setTimeout(() => {
        try {
          ue(1);
        } catch {}
      }, 3e3);
  } catch {}
  function xo() {
    try {
      location.search.indexOf("snap") < 0 && No(x);
    } catch {}
  }
  (g.hold || xo(),
    addEventListener("resize", () => {
      F ||
        ((b.aspect = innerWidth / innerHeight),
        b.updateProjectionMatrix(),
        q.setSize(innerWidth, innerHeight));
    }),
    (gt = -0.6),
    setTimeout(() => {
      gt = -0.2;
    }, 2200));
  try {
    let e = new URLSearchParams(location.search).get("yaw");
    if (e != null) {
      let n = parseFloat(e);
      ((gt = n),
        setTimeout(() => {
          gt = n;
        }, 2300));
    }
  } catch {}
  return (
    (window.__office = {
      PROPS: Rt,
      focusProp: be,
      selectRegion: ce,
      selectItem: Se,
      get mode() {
        return U;
      },
      get focusKind() {
        return W;
      },
    }),
    (function () {
      let n = (location.hash || "").replace("#", "");
      [
        "services",
        "about",
        "story",
        "contact",
        "founder-y",
        "founder-d",
      ].indexOf(n) < 0 ||
        setTimeout(() => {
          be(n);
          let t = new URLSearchParams(location.search),
            s = t.get("r"),
            r = t.get("i");
          n === "services" &&
            s &&
            setTimeout(() => {
              (ce(s), r != null && setTimeout(() => Se(parseInt(r, 10)), 500));
            }, 1100);
        }, 700);
    })(),
    {
      cv: _,
      scene: x,
      renderer: q,
      cam: b,
      hud: [Pt, N, Bt, lt],
      kind: "office",
      setDeparted() {
        le = !0;
      },
      startCondense: xo,
      unmount() {
        F = !0;
        try {
          window.VEASND && VEASND.theme(null);
        } catch {}
        try {
          _.remove();
        } catch {}
        [Pt, N, Bt, lt].forEach(function (e) {
          try {
            e.remove();
          } catch {}
        });
        try {
          $t && ($t.pause(), $t._hls && $t._hls.destroy());
        } catch {}
        try {
          ue(1, !0);
        } catch {}
      },
    }
  );
}
export { gn as boot };
