import configs from "./page-config.json";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

let pdfLibrary;
window.__loadLocalPdfJs = () => {
  pdfLibrary ||= import("pdfjs-dist").then((lib) => {
    lib.GlobalWorkerOptions.workerSrc = workerUrl;
    return {
      ...lib,
      getDocument: (source) =>
        lib.getDocument(
          typeof source === "string"
            ? {
                url: source,
                standardFontDataUrl: "/pdf-fonts/",
                wasmUrl: "/pdf-wasm/",
              }
            : source,
        ),
    };
  });
  return pdfLibrary;
};

function script(src) {
  return new Promise((resolve, reject) => {
    const element = document.createElement("script");
    element.src = src;
    element.onload = resolve;
    element.onerror = () => reject(new Error(`Could not load ${src}`));
    document.body.append(element);
  });
}

export async function dressPage(name) {
  const config = configs[name];
  document.title = config.title;
  if (name === 'flipbook') document.querySelector('meta[name="viewport"]').content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  document.body.className =
    config.bodyClass + (name === "book" ? " book-page" : "");
  if (config.bodyStyle) document.body.setAttribute("style", config.bodyStyle);
  await Promise.all(
    config.styles.map(
      (href) =>
        new Promise((resolve) => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = href;
          link.onload = resolve;
          link.onerror = resolve;
          document.head.append(link);
        }),
    ),
  );
}

export async function startPage(name) {
  // The procedural renderer owns only the canvas and its HUD. React owns
  // the initial editorial shell; the reference controllers populate media.
  const callbacks = [];
  const originalAdd = document.addEventListener;
  document.addEventListener = function (event, callback, options) {
    if (event === "DOMContentLoaded") {
      callbacks.push(callback);
      return;
    }
    return originalAdd.call(this, event, callback, options);
  };
  try {
    for (const src of configs[name].scripts) await script(src);
  } finally {
    document.addEventListener = originalAdd;
    for (const callback of callbacks) {
      try {
        typeof callback === "function"
          ? callback.call(document, new Event("DOMContentLoaded"))
          : callback.handleEvent(new Event("DOMContentLoaded"));
      } catch (error) {
        console.error(error);
      }
    }
  }
  window.__localReady = true;
}

window.saveLocalDraft = (kind, data) => {
  const draft = { kind, createdAt: new Date().toISOString(), ...data };
  const previous = JSON.parse(localStorage.getItem("vea-local-drafts") || "[]");
  localStorage.setItem(
    "vea-local-drafts",
    JSON.stringify([...previous, draft]),
  );
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = `vea-${kind}-draft.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return draft;
};
