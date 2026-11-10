export default function About() {
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
      <section id={"seo-index"} className={"sr-only"} aria-hidden={"false"}>
        {"\n  "}
        <h1>{"About Virtually Ever After"}</h1>
        {"\n  "}
        <p>
          {
            "Virtually Ever After (VEA) is an architect-led creative studio based in Luxembourg, working worldwide. We design and build interactive 3D websites, real-time WebGL and WebXR experiences, brand identity, films and motion, exhibitions and spatial design. Clients include brands, real estate, artists and cultural institutions."
          }
        </p>
        {"\n  "}
        <h2>{"The studio"}</h2>
        {"\n  "}
        <p>
          {
            "Virtually Ever After is an architect-led design studio in Luxembourg. We build worlds for brands to live in. Sometimes that world is a website you can walk through, sometimes it is a film, an identity, an exhibition or an object. Whatever it is, we approach it the way architects approach a building, paying attention to light, proportion and how you move through a space."
          }
        </p>
        {"\n  "}
        <h2>{"Founders"}</h2>
        {"\n  "}
        <p>
          {
            "Deniz Agaoglu Ozen, architect and creative director, shapes brands through space, storytelling and design systems, working across architecture, visual identity and digital experiences with a focus on spatial branding, exhibition design and cultural projects. Yigit Ozen, architect and spatial web designer, works where architecture meets the web, building immersive digital environments with WebGL, Three.js and WebXR around spatial interaction and digital architecture. Both trained at Istanbul Bilgi University and at Politecnico di Milano, and both are based in Luxembourg."
          }
        </p>
        {"\n  "}
        <h2>{"Contact"}</h2>
        {"\n  "}
        <p>
          {
            "Email deniz@virtuallyeverafter.xyz, phone +352 661 953 108, Luxembourg, working worldwide. Instagram https://www.instagram.com/virtually.ever.after/ , LinkedIn https://www.linkedin.com/company/virtuallyeverafter/ ."
          }
        </p>
        {"\n"}
      </section>
      {"\n"}
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
        {"\n"}
      </nav>
      {"\n\n"}
      {"\n"}
      {"\n\n"}
      <main id={"main"}>
        {"\n\n"}
        {"\n"}
        <section className={"works-head"}>
          {"\n  "}
          <div
            className={"abt-tabs"}
            role={"tablist"}
            aria-label={"About and Services"}
          >
            {"\n    "}
            <button
              className={"abt-tab is-on"}
              id={"tab-about"}
              type={"button"}
              role={"tab"}
              aria-selected={"true"}
              aria-controls={"panel-about"}
            >
              <span className={"disp metal"}>{"About"}</span>
            </button>
            {"\n    "}
            <button
              className={"abt-tab"}
              id={"tab-services"}
              type={"button"}
              role={"tab"}
              aria-selected={"false"}
              aria-controls={"panel-services"}
            >
              <span className={"disp metal"}>{"Services"}</span>
            </button>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        {"\n"}
        <div
          id={"panel-about"}
          className={"abt-panel"}
          role={"tabpanel"}
          aria-labelledby={"tab-about"}
        >
          {"\n\n"}
          {"\n"}
          <section className={"acc"} id={"acc-about"}>
            {"\n  "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-about"}
              >
                {"\n    "}
                <span className={"acc-no"}>{"01"}</span>
                {"\n    "}
                <span className={"acc-title"}>
                  {"An architect-led creative studio"}
                </span>
                {"\n    "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n  "}
              </button>
            </h3>
            {"\n  "}
            <div className={"acc-body"} id={"body-about"}>
              {"\n    "}
              {"\n    "}
              <div className={"acc-inner"}>
                <p>
                  {
                    "Virtually Ever After is an architect-led creative studio based in Luxembourg, specializing in spatial storytelling, immersive websites, film, visual identities, exhibitions, and objects. We shape complete environments for brands, guided by strong concepts, clear narratives, and a precise focus on atmosphere, proportion, and experience."
                  }
                </p>
                {"\n"}
                <p>
                  {
                    "Founded by two architects, the studio brings together two distinct yet complementary disciplines: Deniz focuses on shaping brands through physical space, storytelling, and design systems. Working across architecture, visual identity, and digital experiences, her expertise centers on spatial branding, exhibition design, and cultural projects. Yigit operates at the intersection where architecture meets the web. Leveraging technologies such as WebGL, Three.js, and WebXR, he builds immersive digital environments with a strong emphasis on spatial interaction, digital architecture, and emerging tech. Together, we bridge abstract concept and technical execution, treating each project as a cohesive ecosystem rather than a collection of standalone outputs."
                  }
                </p>
                {"\n"}
                <p>
                  {
                    "Every project begins with a clear understanding of its character, goals, and context. Once we establish the creative direction, we translate it into the mediums best suited for it, whether that becomes an interactive 3D web experience, a film, a visual identity, an exhibition, or a physical object. From initial concept through final build, every detail is designed to tell the same unified story."
                  }
                </p>
                {"\n"}
                <p>
                  {
                    "We partner with brands, developers, studios, and cultural institutions across architecture, real estate, hospitality, fashion, design, and arts. Rather than simply delivering a logo, video, or landing page, we create spaces where ideas can take shape, evolve, and be experienced."
                  }
                </p>
                {"\n"}
                <p>{"Every project begins with a world yet to be built."}</p>
                {"\n"}
                <p>{"Have one in mind?"}</p>
              </div>
              {"\n  "}
            </div>
            {"\n"}
          </section>
          {"\n\n"}
          {"\n"}
          <section className={"acc"} id={"acc-story"}>
            {"\n  "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-story"}
              >
                {"\n    "}
                <span className={"acc-no"}>{"02"}</span>
                {"\n    "}
                <span className={"acc-title"}>
                  {"Virtually Ever After became real"}
                </span>
                {"\n    "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n  "}
              </button>
            </h3>
            {"\n  "}
            <div className={"acc-body"} id={"body-story"}>
              {"\n    "}
              <div className={"acc-inner acc-story"}>
                {"\n      "}
                {"\n      "}
                <div>
                  <p>
                    {
                      "Virtually Ever After began long before it became a studio."
                    }
                  </p>
                  {"\n"}
                  <p>
                    {
                      "It started with two architects imagining worlds together. Before there was a name, a website or a business, there were conversations about architecture, cinema, objects, exhibitions, digital environments and stories yet to be told."
                    }
                  </p>
                  {"\n"}
                  <p>
                    {
                      "What began as a shared way of seeing slowly became a shared way of creating. The conversations became projects, and the projects became Virtually Ever After."
                    }
                  </p>
                  {"\n"}
                  <p>
                    {
                      "When it came time to celebrate our marriage, we approached it in the same way we approach our work: as one complete world. Architecture became the canvas. Objects carried colour, memory and meaning. Every image, material and detail belonged to the same narrative."
                    }
                  </p>
                  {"\n"}
                  <p>
                    {
                      "We became our own creative directors, treating the wedding not as a collection of separate elements, but as a story that could be entered, experienced and remembered."
                    }
                  </p>
                  {"\n"}
                  <p>
                    {
                      "Looking back, it feels like more than a wedding. It was the moment our personal story and creative practice became inseparable. The moment Virtually Ever After became real."
                    }
                  </p>
                  {"\n        "}
                  <p className={"about-sig"}>{"Deniz & Yigit"}</p>
                  {"\n      "}
                </div>
                {"\n      "}
                <div className={"about-img"}>
                  {"\n        "}
                  <img
                    src={"/assets/offline/44f90600d185e4f5.jpg"}
                    alt={"Virtually Ever After, Deniz and Yigit"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
            {"\n"}
          </section>
          {"\n\n"}
          {"\n"}
          <section className={"acc"} id={"contact"}>
            {"\n  "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-contact"}
              >
                {"\n    "}
                <span className={"acc-no"}>{"03"}</span>
                {"\n    "}
                <span className={"acc-title"}>{"Contact"}</span>
                {"\n    "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n  "}
              </button>
            </h3>
            {"\n  "}
            <div className={"acc-body"} id={"body-contact"}>
              {"\n    "}
              <div className={"acc-inner"}>
                {"\n      "}
                <div className={"contact-list"}>
                  {"\n        "}
                  <a href={"/start.html"}>{"deniz@virtuallyeverafter.xyz"}</a>
                  {"\n        "}
                  <a href={"/start.html"}>{"+352 661 953 108"}</a>
                  {"\n        "}
                  <span className={"label"}>{"Elsewhere"}</span>
                  {"\n        "}
                  <a
                    href={"/about.html"}
                    target={"_self"}
                    rel={"noopener noreferrer"}
                  >
                    {"Instagram ↗"}
                  </a>
                  {"\n        "}
                  <a
                    href={"/about.html"}
                    target={"_self"}
                    rel={"noopener noreferrer"}
                  >
                    {"LinkedIn ↗"}
                  </a>
                  {"\n        "}
                  <a href={"/book.html"}>{"Book a call ↗"}</a>
                  {"\n        "}
                  <a className={"small-link"} href={"/legal.html"}>
                    {"Legal / Terms"}
                  </a>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
            {"\n"}
          </section>
          {"\n"}
        </div>
        {"\n\n"}
        {"\n"}
        <div
          id={"panel-services"}
          className={"abt-panel"}
          role={"tabpanel"}
          aria-labelledby={"tab-services"}
          hidden={true}
        >
          {"\n\n  "}
          {"\n  "}
          <section className={"acc"} id={"acc-svc-what"}>
            {"\n    "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-svc-what"}
              >
                {"\n      "}
                <span className={"acc-no"}>{"01"}</span>
                {"\n      "}
                <span className={"acc-title"}>{"What we do"}</span>
                {"\n      "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n    "}
              </button>
            </h3>
            {"\n    "}
            <div className={"acc-body"} id={"body-svc-what"}>
              {"\n      "}
              <div className={"acc-inner"}>
                <p className={"abs-lead"}>
                  {
                    "One studio, one narrative, many mediums. Everything below is designed under one roof and delivered under one direction: the people who imagine the world make every decision about how it is coded, filmed, printed or drawn for construction."
                  }
                </p>
                {"\n"}
                <div className={"abs-list"}>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"01"}</span>
                      {"Creative & Art Direction"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "The concept, the story and the visual voice of a project, decided once and then held across every medium it touches. We stay on it from first research to launch, so the film, the website and the printed piece all read as the same thought."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"02"}</span>
                      {"Brand Strategy & Identity"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Positioning a brand before styling it, then building the logo and the full identity system with architectural precision. We draw the marks, colours and rules that hold their shape in every format the brand will ever meet."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"03"}</span>
                      {"Websites"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "From a single landing page to a complete digital home, designed and built end to end. The build answers to the design at every step, so the live site is the design itself rather than an approximation of it."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"04"}</span>
                      {"Interactive 3D & Spatial Web"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Worldbuilding for the browser: real-time spaces a visitor can walk inside, interactive 3D that turns a design in every dimension, hybrid galleries and archives mapped into one navigable layout. We build them with Three.js, WebGL and WebXR."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"05"}</span>
                      {"Film & Motion"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Cinematic reels, short films and architectural films, with motion and sound design under the same roof. We make moving image that carries design intent, from a single launch film to ongoing content across drops and seasons."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"06"}</span>
                      {"Graphics & Print"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "The printed and pixel matter of a brand: posters, packaging and everyday graphics, plus booklets and catalogues designed as art objects. We make them to be kept on a shelf rather than skimmed and closed."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"07"}</span>
                      {"Exhibition & Spatial Design"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "The physical side of digital thinking. Pop-ups, installations, showrooms and event sets where a brand is met in person. We are architects, so the drawings leave the studio precise enough to build from."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"08"}</span>
                      {"Product Design"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Objects that sit between pure utility and human interaction, shaped through engineered form and intentional materiality. We take them from first concept through to production drawings."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          {"\n  "}
          <section className={"acc"} id={"acc-svc-who"}>
            {"\n    "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-svc-who"}
              >
                {"\n      "}
                <span className={"acc-no"}>{"02"}</span>
                {"\n      "}
                <span className={"acc-title"}>{"Who we work with"}</span>
                {"\n      "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n    "}
              </button>
            </h3>
            {"\n    "}
            <div className={"acc-body"} id={"body-svc-who"}>
              {"\n      "}
              <div className={"acc-inner"}>
                <p className={"abs-lead"}>
                  {
                    "Based in Luxembourg, working worldwide, with projects delivered for clients in Istanbul, New York, Milan and Luxembourg. If your field is missing below, that has never stopped a project before, so "
                  }
                  <a href={"/start.html"}>{"write to us anyway"}</a>
                  {"."}
                </p>
                {"\n"}
                <div className={"abs-list"}>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"01"}</span>
                      {"Architects & Studios"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "We are architects too, so nothing gets lost in translation. Send us drawings, models and renders and we work from them directly, turning a built or unbuilt scheme into brand strategy, a cinematic film, a portfolio site or a competition presentation. No translation layer, no explaining what a section drawing is."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"02"}</span>
                      {"Developers, Real Estate & Hospitality"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Bring us in before the sales phase. We make films that let a building be felt before it exists, navigable 3D previews of unbuilt space, landing pages that carry a launch, and the site and urban research that has to sit underneath all of it."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"03"}</span>
                      {"Galleries, Museums & Cultural Institutions"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Work with us on a single show or on a whole programme. Exhibition design in physical space, hybrid spatial galleries that open the show to anyone with a browser, digital archives of a collection, and printed catalogues to go beside them."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"04"}</span>
                      {"Artists & Creatives"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Painters, musicians, photographers and directors: we start from the practice, not from a layout. Show us the body of work and tell us how you want it met, and we build the digital home around it, then keep it alive as the work grows."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"05"}</span>
                      {"Designers & Design Studios"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "For studios who want identity, website and film developed as one piece of work. We can also take a system you have already designed and build the digital and moving-image side of it, either under your direction or with ours over your production."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"06"}</span>
                      {"Fashion, Retail & Concept Stores"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "From the logo to the shelf, or any single link in that chain. Identity, an interactive 3D store on the web, pop-up and retail space design, launch films and drop content, run season by season when that suits the calendar."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"07"}</span>
                      {"Events & Weddings"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Creative direction of the whole occasion. Concept, invitations, menus, objects and video projected onto the space itself, with one team from the first idea to the last night, so the whole thing reads as a single designed world."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"08"}</span>
                      {"Startups & Apps"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Fast, defined, and cheap to change later. A landing page and a launch film that give a young product a clear voice in weeks, built so the identity can grow with the next round and survive it."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          {"\n  "}
          <section className={"acc"} id={"acc-svc-how"}>
            {"\n    "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-svc-how"}
              >
                {"\n      "}
                <span className={"acc-no"}>{"03"}</span>
                {"\n      "}
                <span className={"acc-title"}>{"How we work"}</span>
                {"\n      "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n    "}
              </button>
            </h3>
            {"\n    "}
            <div className={"acc-body"} id={"body-svc-how"}>
              {"\n      "}
              <div className={"acc-inner"}>
                <p className={"abs-lead"}>
                  {
                    "Four steps, no mystery. The same people stay on the project from the first call to the last file."
                  }
                </p>
                {"\n"}
                <div className={"abs-list"}>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"01"}</span>
                      {"The conversation"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "A call or a coffee. You tell us what you are making, we ask about the world it should live in. No deck and no charge."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"02"}</span>
                      {"One direction"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "We come back with a single strong concept: the story, the look, the scope, the schedule and the price, in one document. No surprises later."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"03"}</span>
                      {"Design and build, together"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Design decisions and build decisions are made at the same desk, by the same people. You review the real thing early and often, not a mockup of it."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"04"}</span>
                      {"Launch and after"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "We ship it, watch it live and stay close. A world needs a caretaker, and we do not disappear at handover."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          {"\n  "}
          <section className={"acc"} id={"acc-svc-faq"}>
            {"\n    "}
            <h3 className={"acc-h"}>
              <button
                className={"acc-head"}
                type={"button"}
                aria-expanded={"false"}
                aria-controls={"body-svc-faq"}
              >
                {"\n      "}
                <span className={"acc-no"}>{"04"}</span>
                {"\n      "}
                <span className={"acc-title"}>
                  {"Questions, answered straight"}
                </span>
                {"\n      "}
                <span className={"g-ind"} aria-hidden={"true"}>
                  {"+"}
                </span>
                {"\n    "}
              </button>
            </h3>
            {"\n    "}
            <div className={"acc-body"} id={"body-svc-faq"}>
              {"\n      "}
              <div className={"acc-inner"}>
                <div className={"abs-list"}>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"Q1"}</span>
                      {"How long does a project take?"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "A landing page takes two to four weeks. A brand identity with a full website usually runs eight to twelve. Walkable 3D worlds depend on their size, so we scope them first. You get a real date after the first conversation, and we keep it."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"Q2"}</span>
                      {"What does it cost?"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Fixed price, agreed before we start, tied to scope rather than hours. A simple page and a navigable 3D space are different animals; tell us your range and we will say honestly what fits inside it."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"Q3"}</span>
                      {"Do you only work in Luxembourg?"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "No. The studio sits in Luxembourg and the work travels; recent projects shipped to Istanbul, New York and Milan. Calls, reviews and delivery all run remotely when needed."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"Q4"}</span>
                      {"Can you join an existing team or agency?"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "Yes. We slot in as creative direction over your production, as the builders of someone else's concept, or as both. The only requirement is one clear decision maker on your side."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"abs-item"}>
                    {"\n"}
                    <h4>
                      <span className={"no"}>{"Q5"}</span>
                      {"Who owns what we make?"}
                    </h4>
                    {"\n"}
                    <p>
                      {
                        "You do. Sources, files and code are delivered with the project, and the site runs on infrastructure you control. We keep the right to show the work in our portfolio, nothing more."
                      }
                    </p>
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          {"\n  "}
          <section className={"abs-start"} data-nodec={""}>
            {"\n    "}
            <span className={"label"}>{"Next"}</span>
            {"\n    "}
            <p>
              {
                "Tell us what you are making and where it should live. We answer from Luxembourg, wherever you\n    are."
              }
            </p>
            {"\n    "}
            <div className={"contact-list"}>
              {"\n      "}
              <a href={"/start.html"}>{"deniz@virtuallyeverafter.xyz"}</a>
              {"\n      "}
              <a href={"/start.html"}>{"+352 661 953 108"}</a>
              {"\n      "}
              <a href={"/book.html"}>{"Book a call ↗"}</a>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n"}
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
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n\n"}
      {"\n"}
      {"\n"}
      {"\n"}
    </>
  );
}
