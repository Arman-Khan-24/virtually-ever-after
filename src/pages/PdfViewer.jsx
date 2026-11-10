export default function PdfViewer() {
  return <>
    <canvas id="gl" />
    <footer>
      <div id="counter" />
      <div className="nav-arrows">
        <button id="prevBtn" aria-label="Previous page">←</button>
        <button id="nextBtn" aria-label="Next page">→</button>
      </div>
    </footer>
    <div id="zoombar">
      <span className="zmk" aria-hidden="true">−</span>
      <input id="zoom" type="range" min="1" max="3" step="0.01" defaultValue="1" aria-label="Zoom the page" />
      <span className="zmk" aria-hidden="true">+</span>
    </div>
    <div id="loading"><span>LOADING PDF…</span></div>
    <div id="error"><div>COULD NOT LOAD PDF</div><small id="errorSrc" /></div>
  </>;
}
