export default function Start() {
  return (
    <>
      {"\n\n"}
      {"\n"}
      <header className={"topbar"}>
        {"\n  "}
        <span className={"bar-tag"}>{"Architect-led creative studio"}</span>
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
        <a className={"menu-cta"} href={"/book.html"}>
          <em>{"05"}</em>
          {"Book a call ↗"}
          <span className={"menu-say"}>
            {"Prefer to talk? Fifteen minutes, no obligation."}
          </span>
        </a>
        {"\n  "}
      </nav>
      {"\n\n"}
      <main id={"main"}>
        {"\n"}
        <h1 className={"sr-only"}>
          {"Start a project with Virtually Ever After"}
        </h1>
        {"\n"}
        <section className={"wiz-wrap"}>
          {"\n  "}
          <div className={"wiz-top"} id={"wizTop"}>
            {"\n    "}
            <span className={"wiz-count"} id={"wizCount"}>
              {"Question 01 of 05"}
            </span>
            {"\n    "}
            <span className={"wiz-bar"}>
              <i id={"wizFill"}></i>
            </span>
            {"\n  "}
          </div>
          {"\n\n  "}
          <form
            className={"wiz"}
            id={"wiz"}
            action={"/about.html"}
            method={"POST"}
            noValidate={true}
          >
            {"\n    "}
            {"\n    "}
            {"\n    "}
            {"\n    "}
            {"\n    "}
            <input
              type={"checkbox"}
              name={"botcheck"}
              className={"wiz-hp"}
              tabIndex={"-1"}
              autoComplete={"off"}
            />
            {"\n\n    "}
            <div
              className={"wiz-step active"}
              data-step={"0"}
              data-field={"name"}
            >
              {"\n      "}
              <h2 className={"wiz-q"}>
                {"Hey. What should"}
                <br />
                {"we call you?"}
              </h2>
              {"\n      "}
              <p className={"wiz-hint"}>
                {"No pitch, no pressure. This takes a minute, honest."}
              </p>
              {"\n      "}
              <div className={"wiz-field"}>
                <input
                  id={"f-name"}
                  name={"name"}
                  type={"text"}
                  autoComplete={"name"}
                  placeholder={"Your name"}
                  required={true}
                />
              </div>
              {"\n      "}
              <p className={"wiz-err"} data-err={""}></p>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div className={"wiz-step"} data-step={"1"} data-field={"email"}>
              {"\n      "}
              <h2 className={"wiz-q"}>
                {"Nice one. Where"}
                <br />
                {"do we write back?"}
              </h2>
              {"\n      "}
              <p className={"wiz-hint"}>
                {"Your email, and only us at the other end."}
              </p>
              {"\n      "}
              <div className={"wiz-field"}>
                <input
                  id={"f-email"}
                  name={"email"}
                  type={"email"}
                  autoComplete={"email"}
                  placeholder={"you@example.com"}
                  required={true}
                />
              </div>
              {"\n      "}
              <p className={"wiz-err"} data-err={""}></p>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div
              className={"wiz-step"}
              data-step={"2"}
              data-field={"project_type"}
            >
              {"\n      "}
              <h2 className={"wiz-q"}>
                {"So, what are"}
                <br />
                {"we dreaming up?"}
              </h2>
              {"\n      "}
              <p className={"wiz-hint"}>
                {
                  "Not sure yet? Perfect. Pick whatever feels closest and we will shape it together."
                }
              </p>
              {"\n      "}
              <div className={"wiz-field"}>
                {"\n        "}
                <select id={"f-type"} name={"project_type"}>
                  {"\n          "}
                  <option value={"Not sure yet"}>{"Not sure yet"}</option>
                  {"\n          "}
                  <option value={"Website"}>{"Website"}</option>
                  {"\n          "}
                  <option value={"Interactive 3D & WebXR"}>
                    {"Interactive 3D & WebXR"}
                  </option>
                  {"\n          "}
                  <option value={"Brand identity"}>{"Brand identity"}</option>
                  {"\n          "}
                  <option value={"Film & motion"}>{"Film & motion"}</option>
                  {"\n          "}
                  <option value={"Graphics & print"}>
                    {"Graphics & print"}
                  </option>
                  {"\n          "}
                  <option value={"Exhibition & spatial"}>
                    {"Exhibition & spatial"}
                  </option>
                  {"\n          "}
                  <option value={"Something else"}>{"Something else"}</option>
                  {"\n        "}
                </select>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div className={"wiz-step"} data-step={"3"} data-field={"budget"}>
              {"\n      "}
              <h2 className={"wiz-q"}>
                {"Any ballpark"}
                <br />
                {"in mind?"}
              </h2>
              {"\n      "}
              <p className={"wiz-hint"}>
                {
                  "Totally optional, and just between us. It only helps us suggest the right scope. Skip it if you would rather."
                }
              </p>
              {"\n      "}
              <div className={"wiz-field"}>
                {"\n        "}
                <select id={"f-budget"} name={"budget"}>
                  {"\n          "}
                  <option value={"Rather not say"}>{"Rather not say"}</option>
                  {"\n          "}
                  <option value={"Under €5k"}>{"Under €5k"}</option>
                  {"\n          "}
                  <option value={"€5k to €15k"}>{"€5k to €15k"}</option>
                  {"\n          "}
                  <option value={"€15k to €40k"}>{"€15k to €40k"}</option>
                  {"\n          "}
                  <option value={"€40k and up"}>{"€40k and up"}</option>
                  {"\n        "}
                </select>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div className={"wiz-step"} data-step={"4"} data-field={"message"}>
              {"\n      "}
              <h2 className={"wiz-q"}>
                {"Last one."}
                <br />
                {"What is it, roughly?"}
              </h2>
              {"\n      "}
              <p className={"wiz-hint"}>
                {
                  "A messy sentence beats a blank page. Tell us the gist and we will take it from there."
                }
              </p>
              {"\n      "}
              <div className={"wiz-field"}>
                <textarea
                  id={"f-msg"}
                  name={"message"}
                  placeholder={"Even one line is enough to get us started…"}
                  required={true}
                  defaultValue={""}
                ></textarea>
              </div>
              {"\n      "}
              <p className={"wiz-err"} data-err={""}></p>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div className={"wiz-nav"}>
              {"\n      "}
              <button className={"wiz-btn"} type={"button"} id={"wizNext"}>
                {"Next →"}
              </button>
              {"\n      "}
              <button
                className={"wiz-back"}
                type={"button"}
                id={"wizBack"}
                hidden={true}
              >
                {"← Back"}
              </button>
              {"\n    "}
            </div>
            {"\n  "}
          </form>
          {"\n\n  "}
          <div
            className={"wiz-done"}
            id={"wizDone"}
            role={"status"}
            aria-live={"polite"}
          >
            {"\n    "}
            <h2>{"That was it. Thank you."}</h2>
            {"\n    "}
            <p id={"wizDoneMsg"}>
              {
                "Got it. We read every message ourselves, and you will hear back from us soon, usually within a day or two."
              }
            </p>
            {"\n    "}
            <p>
              <a href={"/"}>{"Back to home"}</a>
            </p>
            {"\n  "}
          </div>
          {"\n\n  "}
          <p className={"wiz-alt"}>
            {"Prefer email or a call? "}
            <a href={"/start.html"}>{"deniz@virtuallyeverafter.xyz"}</a>
            {", "}
            <a href={"/start.html"}>{"+352 661 953 108"}</a>
            {", or "}
            <a href={"/book.html"}>{"book a call ↗"}</a>
            {"."}
          </p>
          {"\n"}
        </section>
        {"\n"}
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
            href={"/about.html"}
            target={"_self"}
            rel={"noopener noreferrer"}
            aria-label={"LinkedIn"}
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
              <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"2"}></rect>
              <path d={"M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4"}></path>
            </svg>
            {"\n      "}
            <span className={"foot-txt"}>{"LinkedIn"}</span>
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
        {"\n  "}
        <div
          className={"foot-copy"}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: ".14em",
            color: "var(--ink-faint)",
            paddingTop: "8px",
          }}
        >
          {"© 2026 Virtually Ever After, Luxembourg"}
        </div>
        {"\n"}
      </div>
      {"\n\n"}
      {"\n"}
    </>
  );
}
