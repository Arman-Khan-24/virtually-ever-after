export default function Works() {
  return (
    <>
      {"\n\n"}
      {"\n"}
      <div id={"g3boot"} hidden={true} aria-hidden={"true"}>
        {"\n  "}
        <video
          className={"loader-mark"}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          aria-hidden={"true"}
        >
          {"\n    "}
          <source
            data-src={"/assets/video/logo-anim.webm"}
            type={"video/webm"}
          />
          {"\n    "}
          <source data-src={"/assets/video/logo-anim.mp4"} type={"video/mp4"} />
          {"\n  "}
        </video>
        {"\n  "}
        <div className={"loader-bar"}>
          <i id={"g3fill"}></i>
        </div>
        {"\n  "}
        <span className={"loader-pct"} id={"g3pct"}>
          {"00"}
        </span>
        {"\n  "}
        {"\n  "}
        <span className={"loader-note"} id={"g3note"}>
          {"Building a virtual space"}
        </span>
        {"\n"}
      </div>
      {"\n\n"}
      {"\n"}
      {"\n\n\n"}
      <section id={"seo-index"} className={"sr-only"} aria-hidden={"false"}>
        {"\n  "}
        <h1>{"Works · Virtually Ever After"}</h1>
        {"\n  "}
        <p>
          {
            "Selected works by Virtually Ever After, organised by category: events, branding, print, web, motion and architectural projects. Architect-led creative studio in Luxembourg, working worldwide. The full year-by-year index lives on the archive page; each work opens on its own page with film, stills and a project brief."
          }
        </p>
        {"\n  "}
        <h2>{"Selected work, by client"}</h2>
        {"\n  "}
        <ul>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/preview.html?id=faed99642daf"}>
              {"Status Co"}
            </a>
            {
              " · interactive 3D website, identity, pop-up exhibition and video art direction for an Istanbul concept store, 2026."
            }
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/preview.html?id=490f01db170b"}>
              {"Selin Gencoglu"}
            </a>
            {" · website for an Istanbul based painter, 2026."}
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/preview.html?id=6188fbe1f502"}>
              {"Laila"}
            </a>
            {" · landing page and short film for a New York dating app, 2026."}
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/preview.html?id=dac610913065"}>
              {"C2W2"}
            </a>
            {
              " · browser-based real-time 3D and WebXR runway (Three.js, WebGL) with a printed booklet, 2026."
            }
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/preview.html?id=709aaccb1f03"}>
              {"decentralize*"}
            </a>
            {" · website and digital identity for a Milan based artist, 2026."}
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/preview.html?id=84f19d715478"}>
              {"Decentralize Design"}
            </a>
            {" · website, identity and films for a Milan design studio, 2026."}
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/about.html"}>
              {"Novantatre"}
            </a>
            {
              " · brand strategy and architectural film for a Luxembourg architecture office, 2025 to 2026."
            }
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/about.html"}>
              {"Das Pieces"}
            </a>
            {
              " · product showcase film for an Istanbul industrial design brand, 2025."
            }
          </li>
          {"\n    "}
          <li>
            <a tabIndex={"-1"} href={"/assets/works/edetri/"}>
              {"Edetri"}
            </a>
            {
              " · brand strategy presentation as part of an identity and web system, 2026."
            }
          </li>
          {"\n    "}
          <li>
            {
              "VEA studio films · in-house shorts on digital environments and the spatial web, 2024."
            }
          </li>
          {"\n  "}
        </ul>
        {"\n"}
      </section>
      {"\n\n"}
      <a className={"sr-only"} href={"#main"}>
        {"Skip to main content"}
      </a>
      {"\n\n"}
      <a className={"sr-only"} href={"?g3q=flat"}>
        {"Prefer the plain text version? Continue in 2D"}
      </a>
      {"\n"}
      <header className={"topbar"}>
        {"\n  "}
        <span
          className={"bar-tag"}
          data-g3tag0={"Architect-led creative studio"}
        >
          {"Architect-led creative studio"}
        </span>
        {"\n  "}
        <a className={"bar-logo"} href={"/"} aria-label={"VEA home"}>
          {"\n    "}
          <img
            src={"/assets/img/veacrop.webp"}
            alt={"Virtually Ever After"}
            width={"576"}
            height={"81"}
          />
          {"\n  "}
        </a>
        {"\n  "}
        <button
          id={"menuBtn"}
          type={"button"}
          aria-expanded={"false"}
          aria-controls={"menu"}
        >
          {"Menu"}
        </button>
        {"\n"}
      </header>
      {"\n\n"}
      <nav id={"menu"} aria-label={"Main menu"}>
        {"\n  "}
        <button className={"menu-close"} id={"menuClose"} type={"button"}>
          {"Close ✕"}
        </button>
        {"\n  "}
        <a className={"menu-link"} href={"/"}>
          <em>{"01"}</em>
          {"Home"}
          <span className={"menu-say"}>
            {"The way in: our films and a first look at the work."}
          </span>
        </a>
        {"\n  "}
        <a className={"menu-link"} href={"/works.html"}>
          <em>{"02"}</em>
          {"Works"}
          <span className={"menu-say"}>
            {"Selected projects, the curated showcase."}
          </span>
        </a>
        {"\n  "}
        <a className={"menu-link"} href={"/archive.html"}>
          <em>{"03"}</em>
          {"Archive"}
          <span className={"menu-say"}>
            {"Every project we have made, indexed in full."}
          </span>
        </a>
        {"\n  "}
        <a className={"menu-link"} href={"/about.html"}>
          <em>{"04"}</em>
          {"About"}
          <span className={"menu-say"}>
            {"The studio, our services, how we work, and how to reach us."}
          </span>
        </a>
        {"\n  "}
        <a className={"menu-cta"} href={"/start.html"}>
          <em>{"05"}</em>
          {"Start a project ↗"}
          <span className={"menu-say"}>
            {"Tell us what you are building, or book a call."}
          </span>
        </a>
        {"\n  "}
      </nav>
      {"\n\n"}
      {"\n"}
      {"\n"}
      <main id={"main"} className={"sc-main"}>
        {"\n\n"}
        {"\n"}
        <nav
          className={"sc-cats"}
          id={"scCats"}
          role={"tablist"}
          aria-label={"Work categories"}
        ></nav>
        {"\n\n"}
        {"\n"}
        <div id={"scStage"} className={"sc-stage"} aria-live={"polite"}>
          {"\n  "}
          <p className={"sc-status"} id={"scStatus"}>
            {"Loading the works…"}
          </p>
          {"\n"}
        </div>
        {"\n\n"}
        {"\n"}
        <div className={"sc-dots"} id={"scDots"} aria-hidden={"true"}></div>
        {"\n\n\n"}
        <div className={"sc-wait"} id={"scWait"} aria-hidden={"true"}>
          <i></i>
        </div>
        {"\n\n"}
        {"\n"}
        <div className={"sc-info"} id={"scInfo"} aria-live={"polite"}>
          {"\n  "}
          <span className={"si-client"} id={"siClient"}></span>
          {"\n  "}
          <span className={"si-name"} id={"siName"}></span>
          {"\n  "}
          <span className={"si-meta"} id={"siMeta"}></span>
          {"\n"}
        </div>
        {"\n\n"}
      </main>
      {"\n\n"}
      <div className={"w-foot"}>
        {"\n  "}
        <div className={"foot-left"}>
          {"\n    "}
          <img
            className={"foot-flag"}
            src={"/img/flag-lu.png"}
            alt={"Luxembourg"}
            loading={"lazy"}
            decoding={"async"}
          />
          {"\n    "}
          <a
            className={"foot-link"}
            href={"/about.html"}
            target={"_self"}
            rel={"noopener noreferrer"}
            aria-label={"Instagram"}
          >
            {"\n      "}
            <svg
              className={"foot-ico"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"1.8"}
              aria-hidden={"true"}
            >
              <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"5"}></rect>
              <circle cx={"12"} cy={"12"} r={"4"}></circle>
              <circle
                cx={"17.4"}
                cy={"6.6"}
                r={"1.1"}
                fill={"currentColor"}
                stroke={"none"}
              ></circle>
            </svg>
            {"\n      "}
            <span className={"foot-txt"}>{"Instagram"}</span>
            {"\n    "}
          </a>
          {"\n    "}
          <a
            className={"foot-link"}
            href={"/start.html"}
            rel={"noopener"}
            aria-label={"Mail"}
          >
            {"\n      "}
            <svg
              className={"foot-ico"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"1.8"}
              strokeLinejoin={"round"}
              aria-hidden={"true"}
            >
              <rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"}></rect>
              <path d={"M3.5 6.5L12 13l8.5-6.5"}></path>
            </svg>
            {"\n      "}
            <span className={"foot-txt"}>{"Mail"}</span>
            {"\n    "}
          </a>
          {"\n  "}
        </div>
        {"\n"}
      </div>
      {"\n\n"}
      {"\n"}
      {"\n"}
      {"\n"}
      <svg
        width={"0"}
        height={"0"}
        style={{ position: "absolute" }}
        aria-hidden={"true"}
      >
        {"\n  "}
        <filter
          id={"v3liq"}
          x={"-20%"}
          y={"-20%"}
          width={"140%"}
          height={"140%"}
        >
          {"\n    "}
          <feturbulence
            type={"fractalNoise"}
            baseFrequency={"0.012 0.02"}
            numOctaves={"1"}
            result={"n"}
          ></feturbulence>
          {"\n    "}
          <fedisplacementmap
            in={"SourceGraphic"}
            in2={"n"}
            scale={"0"}
            xChannelSelector={"R"}
            yChannelSelector={"G"}
          ></fedisplacementmap>
          {"\n  "}
        </filter>
        {"\n  "}
        <filter id={"v3chroma"}>
          {"\n    "}
          <feoffset
            in={"SourceGraphic"}
            dx={"7"}
            dy={"0"}
            result={"r"}
          ></feoffset>
          {"\n    "}
          <fecolormatrix
            in={"r"}
            type={"matrix"}
            values={"1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"}
            result={"rr"}
          ></fecolormatrix>
          {"\n    "}
          <feoffset
            in={"SourceGraphic"}
            dx={"-7"}
            dy={"0"}
            result={"b"}
          ></feoffset>
          {"\n    "}
          <fecolormatrix
            in={"b"}
            type={"matrix"}
            values={"0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"}
            result={"bb"}
          ></fecolormatrix>
          {"\n    "}
          <fecolormatrix
            in={"SourceGraphic"}
            type={"matrix"}
            values={"0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"}
            result={"gg"}
          ></fecolormatrix>
          {"\n    "}
          <feblend in={"rr"} in2={"gg"} mode={"screen"} result={"rg"}></feblend>
          {"\n    "}
          <feblend in={"rg"} in2={"bb"} mode={"screen"}></feblend>
          {"\n  "}
        </filter>
        {"\n"}
      </svg>
      {"\n\n"}
      {"\n\n"}
      {"\n\n"}
      {"\n"}
      {"\n"}
    </>
  );
}
