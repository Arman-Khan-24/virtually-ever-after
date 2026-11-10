import React from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { dressPage, startPage } from "./runtime.js";
import "./styles.css";

const pages = {
  index: () => import("./pages/Home.jsx"),
  works: () => import("./pages/Works.jsx"),
  archive: () => import("./pages/Archive.jsx"),
  about: () => import("./pages/About.jsx"),
  start: () => import("./pages/Start.jsx"),
  book: () => import("./pages/Book.jsx"),
  work: () => import("./pages/Work.jsx"),
  legal: () => import("./pages/Legal.jsx"),
  flipbook: () => import("./pages/PdfViewer.jsx"),
};
let route =
  location.pathname
    .split("/")
    .pop()
    .replace(/\.html$/, "") || "index";
if (/^\/work\//.test(location.pathname)) route = "work";
const root = createRoot(document.getElementById("root"));
if (route === "preview") {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/fonts/plex.css";
  document.head.append(link);
  const { default: Page } = await import("./pages/LocalPreview.jsx");
  root.render(<Page />);
} else {
  if (!pages[route]) route = "index";
  const { default: Page } = await pages[route]();
  await dressPage(route);
  flushSync(() => root.render(<Page />));
  await startPage(route);
}
