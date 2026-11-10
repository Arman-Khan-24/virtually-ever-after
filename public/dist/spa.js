import {
  $,
  Ba as V,
  Da as K,
  Ha as q,
  Ma as P,
  Na as I,
  X as O,
  Y as A,
  _ as N,
  da as U,
  ea as j,
  ha as z,
} from "./chunk-CT4AYSS2.js";
var Q = {
    lobby: () => import("./hall-LLFDL2IH.js"),
    salon: () => import("./gallery-UWNHRWRQ.js"),
    work: () => import("./work3d-OUBLJAKG.js"),
    office: () => import("./office-NWFDXALE.js"),
  },
  D = {},
  h = (t, e) => {
    try {
      window.__vlog
        ? window.__vlog(t, e)
        : console.log("[VEA] " + t + (e != null ? " \xB7 " + e : ""));
    } catch {}
  };
async function Y(t) {
  if (!D[t]) {
    h("spa: import() room chunk", t);
    let e = await Q[t]();
    (h("spa: room chunk arrived", t), (D[t] = e.boot));
  }
  return D[t];
}
var X = !1;
function nt() {
  if (X || ((X = !0), (A() || (O() === "auto" && N())) && !$().preload)) return;
  (window.requestIdleCallback || ((e) => setTimeout(e, 1500)))(() => {
    Object.values(Q).forEach((e) => {
      try {
        e();
      } catch {}
    });
  });
}
if (!document.getElementById("g3spaCss")) {
  let t = document.createElement("style");
  ((t.id = "g3spaCss"),
    (t.textContent =
      "header.topbar,#scCats,footer,.foot,#g3info,#g3ihud,#g3desc,#g3card,#g3feat{transition:opacity .9s ease;}body.g3 header.topbar,body.g3 #scCats,body.g3 .w-foot,body.g3 footer{mix-blend-mode:difference;background:transparent!important;}body.g3turn header.topbar,body.g3turn #scCats,body.g3turn footer,body.g3turn .foot,body.g3turn #g3info,body.g3turn #g3ihud,body.g3turn #g3desc,body.g3turn #g3card.on,body.g3turn #g3feat.on{opacity:var(--g3fade,0)!important;transition:none!important;}#menu a.g3here{color:#666!important;-webkit-text-stroke:0!important;text-decoration:line-through;pointer-events:none!important;}"),
    document.head.appendChild(t));
}
var l = null,
  p = !1,
  R = null,
  L = null;
function S() {
  try {
    if (window.VEA && VEA.siteRoot) return VEA.siteRoot();
  } catch {}
  return location.pathname
    .replace(/work\/[^\/]*\/?$/, "")
    .replace(/[^\/]*$/, "");
}
function C(t) {
  let e;
  try {
    e = new URL(t, location.origin + S());
  } catch {
    return null;
  }
  if (
    e.origin !== location.origin ||
    e.pathname.replace(/work\/[^\/]*\/?$/, "").replace(/[^\/]*$/, "") !== S()
  )
    return null;
  let o = e.pathname.match(/\/work\/([^\/]+)\/?$/);
  if (o) return { kind: "work", key: decodeURIComponent(o[1]), url: e };
  let r = (e.pathname.split("/").pop() || "").toLowerCase();
  return r === "work.html" || r === "work"
    ? { kind: "work", key: e.searchParams.get("p") || "", url: e }
    : r === "works.html" || r === "works"
      ? { kind: "salon", key: "", url: e }
      : r === "about.html" || r === "about"
        ? { kind: "office", key: "", url: e }
        : r === "" ||
            r === "index.html" ||
            r === "index" ||
            r === "index-honors.html" ||
            r === "index-honors"
          ? { kind: "lobby", key: "", url: e }
          : null;
}
function ot() {
  return new Promise((t) => {
    try {
      VEA.loadShowcase((e) => t(e));
    } catch {
      t(null);
    }
  });
}
function at() {
  return new Promise((t) => {
    try {
      VEA.loadWorks((e) => t(e));
    } catch {
      t(null);
    }
  });
}
async function it(t) {
  let e = await ot();
  if (!e || !e.items || !e.items.length) return null;
  let n = String(t || "").toLowerCase(),
    o = null;
  (n &&
    (o =
      e.items.find(
        (i) =>
          (i.slug && String(i.slug).toLowerCase() === n) ||
          String(i.code || "").toLowerCase() === n,
      ) || null),
    o || (o = e.items[0]));
  let r = await at();
  if (!o || !r) return null;
  let c = [];
  return (
    (o.mediaCodes || []).forEach((i) => {
      let m = VEA.findByCode(r, i);
      m && (m.media || []).forEach((s) => c.push({ m: s, w: m, code: i }));
    }),
    c.length ? { item: o, slides: c } : null
  );
}
async function ct() {
  try {
    let t = await fetch(S() + "about.html", { credentials: "same-origin" });
    if (!t.ok) return null;
    let e = new DOMParser().parseFromString(await t.text(), "text/html"),
      n = [];
    return (
      e
        .querySelectorAll("main h1, main h2, main h3, main p, main .acc")
        .forEach((o) => {
          let r = (o.textContent || "")
            .trim()
            .replace(/\s+/g, " ")
            .replace(/[{}<>]/g, "");
          r && r.length > 2 && n.push(r);
        }),
      n.length ? n : null
    );
  } catch {
    return null;
  }
}
var d = null,
  a = null,
  u = null,
  T = null,
  F = null,
  st = matchMedia("(hover: hover)").matches,
  g = (t) =>
    String(t ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
function J() {
  setTimeout(() => {
    try {
      let t = document.getElementById("menuBtn");
      t && t.click();
    } catch {}
  }, 400);
}
function lt() {
  ((d = document.createElement("div")),
    (d.className = "vp vp-lite"),
    (d.hidden = !0),
    (d.dataset.nodec = ""),
    (d.innerHTML =
      '<header class="ov-bar"><button class="ov-back" type="button">Back</button><img class="ov-mark" src="' +
      g("/assets/img/veacrop.webp") +
      '" alt="Virtually Ever After"/><button class="ov-menu" type="button">Menu</button></header><div class="ov-stage"></div>'),
    document.body.appendChild(d),
    d.addEventListener("click", (t) => {
      if (t.target.closest(".ov-back")) {
        v();
        return;
      }
      t.target.closest(".ov-menu") && (v(), J());
    }));
}
function E(t, e) {
  d || lt();
  try {
    window.VEASND && VEASND.veil(!0, innerWidth > 760 ? 3300 : 380, e);
  } catch {}
  return (
    (d.querySelector(".ov-stage").innerHTML = t),
    (d.hidden = !1),
    (document.body.style.overflow = "hidden"),
    requestAnimationFrame(() =>
      requestAnimationFrame(() => d.classList.add("open")),
    ),
    !0
  );
}
function ut() {
  ((a = document.createElement("div")),
    (a.className = "vp"),
    (a.hidden = !0),
    (a.dataset.nodec = ""),
    (a.innerHTML =
      '<canvas class="vp-bg" aria-hidden="true"></canvas><button class="vp-back vp-ui" type="button">Back</button><button class="vp-menu vp-ui" type="button">Menu</button><button class="vp-toggle vp-ui" type="button" aria-label="Play / pause">Pause</button><div class="vp-info vp-ui"><span class="vp-client"></span><h3 class="vp-title"></h3><p class="vp-desc"></p></div><span class="vp-time vp-ui">00:00 / 00:00</span><div class="vp-bar vp-ui" aria-label="Seek"><i class="vp-fill"></i><i class="vp-knob"></i></div>'),
    document.body.appendChild(a),
    (F = a.querySelector(".vp-bg").getContext("2d")));
  let t = a.querySelector(".vp-toggle"),
    e = null,
    n = () => {
      (a.classList.remove("idle"),
        clearTimeout(e),
        (e = setTimeout(() => {
          u && !u.paused && a.classList.add("idle");
        }, 2e3)));
    };
  ((a._wake = n),
    a.addEventListener("pointermove", n),
    a.addEventListener("pointerdown", n),
    st &&
      a.addEventListener("pointermove", (r) => {
        ((t.style.left = r.clientX + "px"), (t.style.top = r.clientY + "px"));
      }),
    a.addEventListener("click", (r) => {
      if (r.target.closest(".vp-back")) {
        v();
        return;
      }
      if (r.target.closest(".vp-menu")) {
        (v(), J());
        return;
      }
      r.target.closest(".vp-bar") ||
        (u && (u.paused ? u.play().catch(() => {}) : u.pause()), n());
    }));
  let o = a.querySelector(".vp-bar");
  o.addEventListener("pointerdown", (r) => {
    if (!u || !isFinite(u.duration) || !u.duration) return;
    let c = o.getBoundingClientRect();
    u.currentTime =
      Math.max(0, Math.min(1, (r.clientX - c.left) / c.width)) * u.duration;
  });
}
function G(t) {
  return (
    (t = Math.max(0, Math.floor(isFinite(t) ? t : 0))),
    ("0" + Math.floor(t / 60)).slice(-2) + ":" + ("0" + (t % 60)).slice(-2)
  );
}
function Z() {
  if (((T = null), !a || a.hidden || !u)) return;
  let t = u;
  a.querySelector(".vp-time").textContent =
    G(t.currentTime) + " / " + G(t.duration);
  let e = isFinite(t.duration) && t.duration ? t.currentTime / t.duration : 0;
  ((a.querySelector(".vp-fill").style.width = e * 100 + "%"),
    (a.querySelector(".vp-knob").style.left = e * 100 + "%"),
    (a.querySelector(".vp-toggle").textContent = t.paused ? "Play" : "Pause"));
  let n = !!(
    t.videoWidth &&
    t.videoWidth / t.videoHeight < innerWidth / innerHeight - 0.01
  );
  if ((a.classList.toggle("bgon", n), n && t.videoWidth)) {
    let o = F.canvas,
      r = 56;
    o.width !== r && (o.width = r);
    let c = Math.max(1, Math.round((r * innerHeight) / innerWidth));
    o.height !== c && (o.height = c);
    let i = (o.width * t.videoHeight) / t.videoWidth;
    try {
      F.drawImage(t, 0, (o.height - i) / 2, o.width, i);
    } catch {}
  }
  T = requestAnimationFrame(Z);
}
function dt(t) {
  a || ut();
  try {
    window.VEASND && VEASND.veil(!0, innerWidth > 760 ? 3300 : 380);
  } catch {}
  let e = t.w || {};
  ((a.querySelector(".vp-client").textContent = e.client || ""),
    (a.querySelector(".vp-title").textContent = e.title || ""),
    (a.querySelector(".vp-desc").textContent = e.jinfo || e.desc || ""));
  let n = document.createElement("video");
  ((n.playsInline = !0), (n.autoplay = !1), (n.preload = "auto"));
  try {
    let r = (t.m && t.m.poster) || e.thumb || e.lprev || "";
    r && (n.poster = r);
  } catch {}
  (a.insertBefore(n, a.querySelector(".vp-back")), (u = n));
  try {
    VEA.attachVideo(n, t.m.src, !0, !0);
  } catch {
    try {
      n.src = t.m.src;
    } catch {}
  }
  n.muted = !1;
  try {
    n.pause();
  } catch {}
  let o = innerWidth > 760 ? 3300 : 380;
  (setTimeout(() => {
    u === n &&
      n.play().catch(() => {
        ((n.muted = !0), n.play().catch(() => {}));
      });
  }, o + 80),
    (a.hidden = !1));
  try {
    P(!0);
  } catch {}
  return (
    (document.body.style.overflow = "hidden"),
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        (a.classList.add("open"), a._wake());
        try {
          VEA.fitFilmDesc(a);
        } catch {}
      }),
    ),
    T || (T = requestAnimationFrame(Z)),
    !0
  );
}
function v() {
  let t = innerWidth > 760 ? 3300 : 380;
  try {
    P(!1);
  } catch {}
  try {
    window.VEASND && VEASND.veil(!1, t);
  } catch {}
  if (a && a.classList.contains("open")) {
    a.classList.remove("open");
    let e = u;
    ((u = null),
      e && (e.muted = !0),
      setTimeout(() => {
        if (((a.hidden = !0), a.classList.remove("bgon", "idle"), e)) {
          try {
            e._hls && e._hls.destroy();
          } catch {}
          try {
            (e.pause(), e.remove());
          } catch {}
        }
      }, t));
  }
  (d &&
    d.classList.contains("open") &&
    (d.classList.remove("open"),
    setTimeout(() => {
      ((d.hidden = !0), (d.querySelector(".ov-stage").innerHTML = ""));
    }, t)),
    (document.body.style.overflow = ""));
}
addEventListener("keydown", (t) => {
  t.key === "Escape" && v();
});
addEventListener("resize", () => {
  if (a && !a.hidden)
    try {
      VEA.fitFilmDesc(a);
    } catch {}
});
addEventListener("orientationchange", () => {
  setTimeout(() => {
    if (a && !a.hidden)
      try {
        VEA.fitFilmDesc(a);
      } catch {}
  }, 260);
});
window.__g3doc = (t, e) => {
  let n = /^https?:/.test(t) ? t : S() + t;
  return E(
    '<iframe class="ov-doc" src="' +
      g(n) +
      '" title="' +
      g(e || "") +
      '" referrerpolicy="no-referrer"></iframe>',
    0.3,
  );
};
function ft(t) {
  if (!t || (t.w && t.w.noCta)) return !1;
  let e = t.m,
    n = t.w || {};
  return e.k === "web"
    ? n.wlive
      ? E(
          '<iframe class="ov-doc" src="' +
            g(e.src) +
            '" allow="autoplay; fullscreen; encrypted-media" referrerpolicy="no-referrer"></iframe>',
        )
      : !1
    : e.k === "pdf"
      ? E(
          '<iframe class="ov-doc" src="' +
            g(S() + "flipbook.html?pdf=") +
            encodeURIComponent(e.src) +
            '"></iframe>',
          0.3,
        )
      : e.k === "embed"
        ? E(
            '<iframe class="ov-doc" src="' +
              g(e.src) +
              '" allow="autoplay; fullscreen; encrypted-media" allowfullscreen referrerpolicy="no-referrer"></iframe>',
          )
        : e.k === "video"
          ? dt(t)
          : E('<img src="' + g(e.src) + '" alt=""/>');
}
function W() {
  ["g3skip", "g3enter"].forEach((t) => {
    let e = document.getElementById(t);
    if (e)
      try {
        e.remove();
      } catch {}
  });
  try {
    window.VEASND && VEASND.entered && VEASND.entered();
  } catch {}
}
function x(t, e) {
  t.kind !== "lobby" && W();
  let n = document.getElementById("scCats");
  n && (n.style.display = t.kind === "salon" ? "" : "none");
  let o = {
    lobby: (r) => r === "./" || r === "/" || /index\.html/i.test(r),
    salon: (r) => /works\.html/i.test(r),
    office: (r) => /about\.html/i.test(r),
  }[t.kind];
  document.querySelectorAll("#menu .menu-link").forEach((r) => {
    let c = r.getAttribute("href") || "";
    r.classList.toggle("g3here", !!(o && o(c)));
  });
  try {
    let r =
      document.querySelector("header .bar-tag") ||
      document.querySelector(".bar-tag");
    if (
      r &&
      (!r.dataset.g3tag0 &&
        !r.classList.contains("g3backtag") &&
        !/[\\\[\]{}<>^#*+=]/.test(r.textContent) &&
        (r.dataset.g3tag0 = r.textContent),
      t.kind !== "work" &&
        r.dataset.g3tag0 &&
        (r.classList.remove("g3backtag"), r.textContent !== r.dataset.g3tag0))
    )
      try {
        VEA.scrambleTo(r, r.dataset.g3tag0, 700);
      } catch {
        r.textContent = r.dataset.g3tag0;
      }
  } catch {}
  try {
    t.kind === "work" && e && e.docTitle
      ? (document.title = e.docTitle)
      : (document.title =
          {
            lobby: "Virtually Ever After \xB7 architect-led creative studio",
            salon: "Works \xB7 Virtually Ever After",
            office: "About \xB7 Virtually Ever After",
          }[t.kind] || document.title);
  } catch {}
}
async function tt(t) {
  let e = null,
    n = new Promise((i) => {
      e = i;
    }),
    o = { spa: !0, hold: !0, go: B, onCommit: () => e(!0) };
  if (t.kind === "work") {
    let i = await it(t.key);
    if (!i) return null;
    o.bridge = {
      item: i.item,
      slides: i.slides,
      openMedia: (m) => ft(i.slides[m]),
    };
  }
  t.kind === "studio" && (o.texts = await ct());
  let r = null;
  try {
    (h("spa: building room (swap)", t.kind),
      (r = await (await Y(t.kind))(o)),
      h("spa: room build returned (swap)", t.kind + " handle=" + !!r));
  } catch (i) {
    r = null;
    try {
      console.error("[VEA] room boot FAILED (swap, " + t.kind + "):", i);
    } catch {}
    h(
      "spa: room boot THREW (swap)",
      t.kind + " \xB7 " + ((i && i.message) || i),
    );
  }
  if (!r) return null;
  if (
    ((r.cv.style.visibility = "hidden"),
    (r.hud || []).forEach((i) => {
      i.style.visibility = "hidden";
    }),
    o.bridge &&
      (r.docTitle =
        (o.bridge.item.client || "") +
        " \xB7 " +
        (o.bridge.item.name || "") +
        " | VEA"),
    h("spa: room mounted, awaiting commit", t.kind),
    !(await Promise.race([
      n,
      new Promise((i) => setTimeout(() => i(!1), 15e3)),
    ])))
  ) {
    h("spa: room did NOT commit in 15s \u2014 unmounting", t.kind);
    try {
      r.unmount();
    } catch {}
    return null;
  }
  return (h("spa: room COMMITTED (swap)", t.kind), r);
}
var mt = (() => {
    try {
      return (
        window.innerWidth <= 860 ||
        (window.matchMedia && matchMedia("(pointer: coarse)").matches)
      );
    } catch {
      return !1;
    }
  })(),
  ht = () => {
    try {
      return sessionStorage.getItem("g3lock") === "lite";
    } catch {
      return !1;
    }
  };
async function yt(t) {
  p = !0;
  let e = l;
  t.kind !== "lobby" && W();
  try {
    try {
      new URLSearchParams(location.search).forEach((c, i) => {
        /^(force3d|no3d|g3t|g3fps)$/.test(i) &&
          !t.url.searchParams.has(i) &&
          t.url.searchParams.set(i, c);
      });
      let r = t.url.searchParams.toString();
      history.pushState(null, "", t.url.pathname + (r ? "?" + r : ""));
    } catch {}
    try {
      v();
    } catch {}
    (await I(!0), e.setDeparted && e.setDeparted());
    let n = null;
    try {
      n = await tt(t);
    } catch {
      n = null;
    }
    if (!n) {
      try {
        q(e.renderer, e.scene, e.cam);
      } catch {}
      try {
        location.href = t.url.href;
      } catch {}
      return !0;
    }
    ((n.cv.style.visibility = ""),
      (n.hud || []).forEach((o) => {
        try {
          o.style.visibility = "";
        } catch {}
      }),
      (l = n));
    try {
      document
        .querySelectorAll(
          "header.topbar, .w-foot, #g3info, #scCats, #g3q, #sndT, #g3rooms, #g3ctl, #g3look",
        )
        .forEach((o) => {
          ((o.style.transition = ""), (o.style.opacity = ""));
        });
    } catch {}
    try {
      x(t, n);
    } catch {}
    try {
      e.unmount();
    } catch {}
    await new Promise((o) => setTimeout(o, 320));
  } finally {
    (I(!1), (p = !1));
  }
  return !0;
}
function B(t) {
  if (A() && mt && ht()) {
    if (p) return !0;
    if (!l || l.dead) return !1;
    let n = C(t);
    return n ? (yt(n), !0) : !1;
  }
  if (A()) return !1;
  if (p) return !0;
  if (!l || l.dead) return !1;
  let e = C(t);
  return e ? (et(e, { push: !0 }), !0) : !1;
}
async function et(t, e) {
  p = !0;
  let n = l;
  t.kind !== "lobby" && W();
  let o = !1,
    r = !1;
  try {
    if (e.push)
      try {
        new URLSearchParams(location.search).forEach((k, _) => {
          /^(force3d|no3d|g3t|g3fps)$/.test(_) &&
            !t.url.searchParams.has(_) &&
            t.url.searchParams.set(_, k);
        });
        let w = t.url.searchParams.toString();
        history.pushState(null, "", t.url.pathname + (w ? "?" + w : ""));
      } catch {}
    try {
      v();
    } catch {}
    try {
      (clearTimeout(R),
        clearInterval(L),
        document.documentElement.style.setProperty("--g3fade", "1"),
        document.body.classList.add("g3turn"));
    } catch {}
    n.setDeparted();
    let c = performance.now(),
      i = !1,
      m = (() => {
        try {
          return 10 / V();
        } catch {
          return 1;
        }
      })(),
      s = 1e3 * m,
      b = 3e3 * m,
      M = 4300 * m;
    ((r = !0),
      U(),
      K(n.scene, () => {
        i = !0;
      }));
    let rt = () => i || performance.now() - c > M,
      H = setInterval(() => {
        if (o) return;
        let f = performance.now() - c,
          w = Math.max(0, Math.min(1, (f - s) / b)),
          k = 1 - (1 - w) * (1 - w),
          _ = Math.max(0, (f - M) / 1e3) * 0.04;
        k > 0 && z(Math.min(1.15, k + _), performance.now() / 1e3);
        try {
          document.documentElement.style.setProperty(
            "--g3fade",
            String(Math.max(0, 1 - Math.min(1, k))),
          );
        } catch {}
      }, 120),
      y = null;
    try {
      y = await tt(t);
    } finally {
      y || clearInterval(H);
    }
    if (!y) {
      try {
        q(n.renderer, n.scene, n.cam);
      } catch {}
      try {
        location.href = t.url.href;
      } catch {}
      return;
    }
    for (; !rt();) await new Promise((f) => setTimeout(f, 120));
    (clearInterval(H), (o = !0));
    try {
      y.startCondense();
    } catch {}
    ((y.cv.style.visibility = ""),
      (y.hud || []).forEach((f) => {
        try {
          f.style.visibility = "";
        } catch {}
      }),
      (l = y),
      x(t, y));
    try {
      n.unmount();
    } catch {}
  } catch {
  } finally {
    if (r)
      try {
        j();
      } catch {}
    if (((p = !1), o))
      try {
        (clearTimeout(R), clearInterval(L));
        let c = (() => {
            try {
              return 10 / V();
            } catch {
              return 1;
            }
          })(),
          i = performance.now(),
          m = 2600 * c;
        ((L = setInterval(() => {
          let s = Math.min(1, (performance.now() - i) / m),
            b = s * s * (3 - 2 * s);
          try {
            document.documentElement.style.setProperty("--g3fade", String(b));
          } catch {}
          s >= 1 && clearInterval(L);
        }, 90)),
          (R = setTimeout(() => {
            try {
              document.body.classList.remove("g3turn");
            } catch {}
            try {
              let s =
                document.querySelector("header .bar-tag") ||
                document.querySelector(".bar-tag");
              if (
                s &&
                l &&
                l.kind !== "work" &&
                s.dataset.g3tag0 &&
                (s.classList.remove("g3backtag"),
                s.textContent !== s.dataset.g3tag0)
              )
                try {
                  VEA.scrambleTo(s, s.dataset.g3tag0, 700);
                } catch {
                  s.textContent = s.dataset.g3tag0;
                }
            } catch {}
          }, 4100 * c)),
          (l.cv.style.visibility = ""),
          (l.hud || []).forEach((s) => {
            try {
              s.style.visibility = "";
            } catch {}
          }),
          document.querySelectorAll("canvas.g3c").forEach((s) => {
            s !== l.cv && s.remove();
          }),
          x(t, l));
      } catch {}
  }
}
addEventListener("popstate", () => {
  if (!l || l.dead || p) return;
  let t = C(location.href);
  t && et(t, { push: !1 });
});
(async function () {
  let e = C(location.href);
  if (
    (h(
      "spa: start()",
      e ? "kind=" + e.kind : "no room for this url \xB7 nothing to mount",
    ),
    !!e)
  ) {
    try {
      ((l = (await (await Y(e.kind))({ go: B })) || null),
        h("spa: first mount " + (l ? "LIVE" : "returned null"), e.kind));
    } catch (n) {
      l = null;
      try {
        console.error("[VEA] first room boot FAILED (" + e.kind + "):", n);
      } catch {}
      h(
        "spa: first room boot THREW",
        e.kind + " \xB7 " + ((n && n.message) || n),
      );
    }
    (l && x(e, l), nt());
  }
})();
window.__g3go = B;
window.__spaState = () => ({
  swapping: p,
  kind: l && l.kind,
  dead: !!(l && l.dead),
});
