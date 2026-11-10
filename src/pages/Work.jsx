export default function Work() {
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
        <a id={"wkBack"} className={"bar-back"} href={"/works.html"}>
          {"Back"}
        </a>
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
        <span className={"bar-right"}>
          {"\n    "}
          <button
            id={"menuBtn"}
            type={"button"}
            aria-expanded={"false"}
            aria-controls={"menu"}
          >
            {"Menu"}
          </button>
          {"\n  "}
        </span>
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
      {"\n\n"}
      <main id={"main"}>
        {"\n\n"}
        {"\n"}
        <section className={"wk-head"}>
          {"\n  "}
          <span className={"label"} id={"wkCat"}></span>
          {"\n  "}
          <h1 className={"disp metal wk-title"} id={"wkClient"}>
            {"Virtually Ever After"}
          </h1>
          {"\n  "}
          <div className={"wk-sub"} id={"wkName"}></div>
          {"\n"}
        </section>
        {"\n\n"}
        {"\n"}
        <section className={"wk-grid"}>
          {"\n  "}
          <dl id={"wkInfo"}></dl>
          {"\n  "}
          <div>
            {"\n    "}
            <span
              className={"label"}
              style={{ display: "block", marginBottom: "18px" }}
            >
              {"Brief"}
            </span>
            {"\n    "}
            <p className={"wk-brief"} id={"wkBrief"}></p>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        {"\n"}
        <div className={"wk-media"} id={"wkMedia"}></div>
        {"\n\n"}
        {"\n"}
        <section className={"wk-long"} id={"wkLong"} hidden={true}></section>
        {"\n\n"}
        <nav
          className={"proj-nav"}
          id={"wkNav"}
          aria-label={"Neighbouring works"}
        ></nav>
        {"\n\n"}
      </main>
      {"\n\n"}
      {"\n"}
      <div
        className={"wk-dexspace"}
        id={"wkDexSpace"}
        aria-hidden={"true"}
      ></div>
      {"\n"}
      <section className={"wk-worksdex"} id={"wkDex"} aria-label={"All works"}>
        {"\n  "}
        <nav
          className={"sc-cats"}
          id={"dexCats"}
          role={"tablist"}
          aria-label={"Work categories"}
        ></nav>
        {"\n  "}
        <div id={"dexStage"} className={"sc-stage"} aria-live={"polite"}></div>
        {"\n  "}
        <div className={"sc-dots"} id={"dexDots"} aria-hidden={"true"}></div>
        {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <div className={"wk-ihud"} id={"wkIhud"} hidden={true}>
        {"\n  "}
        <div className={"ih-left"}>
          {"\n    "}
          <span className={"label"} id={"ihCat"}></span>
          {"\n    "}
          <h2 className={"ih-client"} id={"ihClient"}></h2>
          {"\n    "}
          <div className={"ih-name"} id={"ihName"}></div>
          {"\n    "}
          <dl className={"ih-info"} id={"ihInfo"}></dl>
          {"\n  "}
        </div>
        {"\n  "}
        <div className={"ih-brief"} id={"ihBrief"} data-nodec={""}></div>
        {"\n"}
      </div>
      {"\n\n"}
      {"\n"}
      <div
        className={"wk-hud-info"}
        id={"wkHudInfo"}
        data-nodec={""}
        hidden={true}
      >
        {"\n  "}
        <div className={"hud-info"}>
          {"\n    "}
          <h3 className={"hud-title"} id={"hudTitle"}></h3>
          {"\n    "}
          <p className={"hud-desc"} id={"hudDesc"}></p>
          {"\n  "}
        </div>
        {"\n"}
      </div>
      {"\n"}
      <div className={"wk-hud"} id={"wkHud"} hidden={true}>
        {"\n  "}
        <button className={"hud-cta"} id={"hudCta"} type={"button"}>
          {"Enlarge ⤢"}
        </button>
        {"\n  "}
        {"\n  "}
        <div className={"hud-strip"}>
          {"\n    "}
          <button
            className={"hud-nav hud-prev"}
            id={"hudPrev"}
            type={"button"}
            aria-label={"Previous media"}
          >
            {"‹"}
          </button>
          {"\n    "}
          <div
            className={"hud-thumbs"}
            id={"hudThumbs"}
            aria-label={"Medias"}
          ></div>
          {"\n    "}
          <button
            className={"hud-nav hud-next"}
            id={"hudNext"}
            type={"button"}
            aria-label={"Next media"}
          >
            {"›"}
          </button>
          {"\n  "}
        </div>
        {"\n"}
      </div>
      {"\n\n"}
      {"\n"}
      <div className={"sc-info"} id={"scInfo"} aria-live={"polite"}>
        {"\n  "}
        <span className={"si-client"} id={"siClient"} data-nodec={""}></span>
        {"\n  "}
        <span className={"si-name"} id={"siName"} data-nodec={""}></span>
        {"\n  "}
        <span className={"si-meta"} id={"siMeta"} data-nodec={""}></span>
        {"\n"}
      </div>
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
      {"\n"}
      {"\n"}
      {"\n\n"}
      {"\n"}
      {"\n"}
      {"\n"}
    </>
  );
}
