export default function Home() {
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
      {"\n\n\n\n"}
      {"\n"}
      <section id={"seo-index"} className={"sr-only"} aria-hidden={"false"}>
        {"\n  "}
        <h1 id={"organization"}>
          {"Virtually Ever After, architect-led creative studio, Luxembourg"}
        </h1>
        {"\n  "}
        <p>
          {
            "Virtually Ever After (VEA) is an architect-led creative studio based in Luxembourg, working worldwide. We design and build interactive 3D websites, real-time WebGL and WebXR experiences, brand identity, films and motion, exhibitions and spatial design. Clients include brands, real estate, artists and cultural institutions."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Capabilities: interactive 3D websites, real-time WebGL and Three.js, WebXR and the spatial web, brand identity and logo design, creative and art direction, film and motion, graphic design, exhibition and spatial design, front-end development. Founders: "
          }
          <span id={"founder"}>{"Deniz Agaoglu Ozen"}</span>
          {" and "}
          <span id={"founder-2"}>{"Yigit Ozen"}</span>
          {
            ", architects. Contact: deniz@virtuallyeverafter.xyz, +352 661 953 108, Luxembourg."
          }
        </p>
        {"\n  "}
        <h2>{"Selected work"}</h2>
        {"\n  "}
        <ul>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Status Co"}</h3>
              {"\n      "}
              <p>
                {
                  "Interactive 3D website for Istanbul based concept store Status Co, a unified web environment where objects, narrative and interaction operate together. Also logo and identity, pop-up exhibition design, and video art direction."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/preview.html?id=faed99642daf"}>
                {"status-co.com"}
              </a>
              {"\n      "}
              <span>{"Website, Identity, Exhibition, Video, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Selin Gencoglu"}</h3>
              {"\n      "}
              <p>
                {
                  "Website for Istanbul based painter Selin Gencoglu, a digital presence shaped around her visual identity and artistic practice."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/preview.html?id=490f01db170b"}>
                {"selingencoglu.com"}
              </a>
              {"\n      "}
              <span>{"Website, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Laila"}</h3>
              {"\n      "}
              <p>
                {
                  "Landing page and short film for New York based dating app Laila, built around an action-first philosophy and the pulse of the city."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/preview.html?id=6188fbe1f502"}>
                {"laila.nyc"}
              </a>
              {"\n      "}
              <span>{"Website, Video, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"C2W2"}</h3>
              {"\n      "}
              <p>
                {
                  "Browser-based real-time 3D and WebXR runway experience for virtual fashion project C2W2, built with Three.js and WebGL, presenting the collection as a single navigable space, with an accompanying printed booklet."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/preview.html?id=dac610913065"}>
                {"c2w2.art"}
              </a>
              {"\n      "}
              <span>{"Spatial, Graphics, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"decentralize*"}</h3>
              {"\n      "}
              <p>
                {
                  "Website and digital identity for Milan based artist decentralize*, a spatial and graphical presence for a digital-first practice."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/preview.html?id=709aaccb1f03"}>
                {"de-centralize.com"}
              </a>
              {"\n      "}
              <span>{"Website, Identity, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Decentralize Design"}</h3>
              {"\n      "}
              <p>
                {
                  "Website, brand identity and films for Milan based design studio Decentralize Design, showing spatial expertise through a clockwork visual system."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/preview.html?id=84f19d715478"}>
                {"decentralize.design"}
              </a>
              {"\n      "}
              <span>{"Website, Identity, Video, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Novantatre"}</h3>
              {"\n      "}
              <p>
                {
                  "Brand strategy and architectural film for Luxembourg based architecture office Novantatre, translating design intent into a cinematic visual identity."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/about.html"}>
                {"novantatre.lu"}
              </a>
              {"\n      "}
              <span>{"Identity, Video, 2025 to 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Das Pieces"}</h3>
              {"\n      "}
              <p>
                {
                  "Product showcase film for Istanbul based industrial design brand Das Pieces, reinterpreting the lamp collection through a digital narrative."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/about.html"}>
                {"daspieces.com"}
              </a>
              {"\n      "}
              <span>{"Identity, Video, 2025"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"Edetri"}</h3>
              {"\n      "}
              <p>
                {
                  "Brand strategy presentation for edetri, developed as part of a cohesive identity and web system."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/assets/works/edetri/"}>
                {"virtuallyeverafter.xyz/assets/works/edetri"}
              </a>
              {"\n      "}
              <span>{"Identity, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n    "}
          <li>
            <article>
              {"\n      "}
              <h3>{"VEA studio films"}</h3>
              {"\n      "}
              <p>
                {
                  "In-house films exploring digital environments and the spatial web, including once upon a time in a virtual world, virtually grown, telephone booth and product design."
                }
              </p>
              {"\n      "}
              <a tabIndex={"-1"} href={"/"}>
                {"virtuallyeverafter.xyz"}
              </a>
              {"\n      "}
              <span>{"Video, 2026"}</span>
              {"\n    "}
            </article>
          </li>
          {"\n  "}
        </ul>
        {"\n"}
      </section>
      {"\n"}
      {"\n"}
      <div
        id={"loader"}
        role={"status"}
        aria-label={"Loading Virtually Ever After"}
      >
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
          <i id={"loaderFill"}></i>
        </div>
        {"\n  "}
        <span className={"loader-pct"} id={"loaderPct"}>
          {"00"}
        </span>
        {"\n  "}
        <span className={"loader-note"} id={"loaderNote"}>
          {"Preparing the films"}
        </span>
        {"\n"}
      </div>
      {"\n\n"}
      <a className={"sr-only"} href={"#main"}>
        {"Skip to main content"}
      </a>
      {"\n\n"}
      {"\n"}
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
      {"\n"}
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
        <section
          className={"hero"}
          id={"hero"}
          aria-label={"Virtually Ever After, introduction"}
        >
          {"\n  "}
          <div className={"hero-media"} aria-hidden={"true"}>
            {"\n    "}
            {"\n    "}
            <video
              id={"heroVideo"}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              preload={"auto"}
              poster={"/assets/img/example.png"}
            ></video>
            {"\n    "}
            <div className={"hero-shade"}></div>
            {"\n  "}
          </div>
          {"\n\n  "}
          <video
            className={"hero-mark"}
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
            <source
              data-src={"/assets/video/logo-anim.mp4"}
              type={"video/mp4"}
            />
            {"\n  "}
          </video>
          {"\n\n  "}
          {"\n\n  "}
          {"\n  "}
          <div className={"hero-line"} data-nodec={""}>
            {"\n    "}
            <span className={"v7-eyebrow"}>{"Architect-led · Luxembourg"}</span>
            {"\n    "}
            <p>
              <span className={"clip"}>
                <span>
                  {
                    "We build worlds for brands to live in. Digital or physical. Temporary or permanent. Always designed as one story."
                  }
                </span>
              </span>
            </p>
            {"\n  "}
          </div>
          {"\n\n  "}
          <p className={"hero-tag"}>
            {"\n    "}
            <span>{"Luxembourg · worldwide"}</span>
            {"\n  "}
          </p>
          {"\n\n  "}
          <span className={"hero-cue"} aria-hidden={"true"}>
            <i></i>
          </span>
          {"\n"}
        </section>
        {"\n\n"}
        {"\n"}
        <section
          className={"intro reveal"}
          data-v7r={""}
          aria-label={"About the studio"}
        >
          {"\n  "}
          <span className={"label"}>{"The studio"}</span>
          {"\n  "}
          {"\n  "}
          <p data-vea={"about"}>
            {
              "Virtually Ever After is an architect-led creative studio based in Luxembourg. We design how brands exist through story, space, technology and craft. Our work spans identities, websites, immersive 3D experiences, films and physical environments. Founded in 2025."
            }
          </p>
          {"\n"}
        </section>
        {"\n\n"}
        {"\n"}
        <div id={"featured"} aria-label={"Selected works"}></div>
        {"\n\n"}
        {"\n"}
        <section className={"allworks reveal"} data-v7r={""}>
          {"\n  "}
          <a href={"/works.html"}>
            {"\n    "}
            <span className={"disp metal"}>{"All works"}</span>
            {"\n    "}
            <span className={"label"}>{"Browse the full index →"}</span>
            {"\n  "}
          </a>
          {"\n"}
        </section>
        {"\n\n"}
        {"\n"}
        <section
          className={"v7cta"}
          data-v7r={""}
          aria-label={"Start a project"}
        >
          {"\n  "}
          <span className={"v7-eyebrow"}>{"Start a project"}</span>
          {"\n  "}
          <p className={"v7cta-line"}>{"Have a world that needs building?"}</p>
          {"\n  "}
          <div className={"v7cta-links"}>
            {"\n    "}
            <a href={"/start.html"}>{"Start a project →"}</a>
            {"\n    "}
            <a href={"/book.html"}>{"Book a call ↗"}</a>
            {"\n    "}
            <a className={"v7cta-mail"} href={"/start.html"}>
              {"deniz@virtuallyeverafter.xyz"}
            </a>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
      </main>
      {"\n\n"}
      {"\n"}
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
      {"\n\n"}
      {"\n"}
      {"\n"}
      {"\n"}
    </>
  );
}
