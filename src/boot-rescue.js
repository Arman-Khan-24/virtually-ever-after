export function startBootRescue() {
  if (!document.getElementById("g3boot") || window.__veaBootProgress) return;

  let lastProgress = performance.now();
  window.__veaBootProgress = () => {
    lastProgress = performance.now();
  };

  const timer = setInterval(() => {
    const plate = document.getElementById("g3boot");
    const committed = window.__g3on && document.body.classList.contains("g3");
    if (committed || !plate || plate.hidden) {
      lastProgress = performance.now();
      if (committed) {
        try { sessionStorage.removeItem("__veaBootTry"); } catch {}
      }
      return;
    }
    // Slow downloads and room builds are healthy while they make progress.
    if (performance.now() - lastProgress < 30000) return;
    clearInterval(timer);

    try {
      const attempt = Number(sessionStorage.getItem("__veaBootTry")) || 0;
      if (attempt < 2) {
        sessionStorage.setItem("__veaBootTry", String(attempt + 1));
        if (attempt === 1) {
          sessionStorage.setItem("g3q", "lite");
          sessionStorage.setItem("g3lock", "lite");
          sessionStorage.setItem("veaMode", "immersive");
        }
        location.reload();
        return;
      }
    } catch {
      // Without persistent retry state, automatic reloads cannot be bounded.
    }

    const note = document.getElementById("g3note");
    if (note) note.textContent = "The virtual space could not load. Please retry.";
    plate.setAttribute("aria-hidden", "false");
    const retry = document.createElement("button");
    retry.type = "button";
    retry.textContent = "Retry";
    retry.style.cssText = "margin-top:16px;padding:10px 20px;background:transparent;color:inherit;border:1px solid currentColor;font:inherit;cursor:pointer";
    retry.addEventListener("click", () => {
      try { sessionStorage.removeItem("__veaBootTry"); } catch {}
      location.reload();
    });
    plate.append(retry);
  }, 3000);
}
