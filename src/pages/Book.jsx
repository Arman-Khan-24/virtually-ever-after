export default function Book() {
  return (
    <>
      {"\n\n    "}
      {"\n    "}
      <nav
        aria-label={"Site"}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "50",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          padding: "14px 16px",
          fontFamily: "var(--font-main)",
          fontSize: "10px",
          letterSpacing: ".22em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        {"\n      "}
        <a
          href={"/"}
          style={{
            pointerEvents: "auto",
            color: "var(--ui-color)",
            opacity: ".55",
            textDecoration: "none",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {"← Virtually Ever After"}
        </a>
        {"\n      "}
        <a
          href={"/start.html"}
          style={{
            pointerEvents: "auto",
            color: "var(--ui-color)",
            opacity: ".55",
            textDecoration: "none",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {"Start a project →"}
        </a>
        {"\n    "}
      </nav>
      {"\n\n    "}
      <div
        className={
          "w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 h-full items-center"
        }
      >
        {"\n        "}
        {"\n        "}
        <div
          className={
            "md:col-span-4 flex flex-col justify-center info-section text-center md:text-left"
          }
        >
          {"\n            "}
          <div className={"mb-2"}>
            {"\n                "}
            <img
              src={"/assets/offline/7a36426ac73249c6.png"}
              className={"desktop-only desktop-logo mb-10"}
              alt={"VEA Logo"}
            />
            {"\n                "}
            <h1 className={"font-bold uppercase desktop-title"}>
              {"BOOK A "}
              <br className={"hidden md:block"} />
              {"SESSION"}
            </h1>
            {"\n                "}
            <p
              className={
                "text-[10px] md:text-xs opacity-60 leading-relaxed uppercase text-black mt-4"
              }
            >
              {
                "\n                    VEA craft environments where imagination, materiality, and motion converge into a new form of experience.\n\nEvery project becomes its own world. \n                    \n                "
              }
            </p>
            {"\n            "}
          </div>
          {"\n            "}
          <div className={"mt-1 md:mt-10"}>
            {"\n                "}
            <div
              className={
                "flex items-center justify-center md:justify-start gap-2"
              }
            >
              {"\n                    "}
              <span className={"w-1.5 h-1.5 rounded-full bg-green-500"}></span>
              {"\n                    "}
              <span
                className={
                  "text-[8px] md:text-[10px] uppercase font-bold tracking-widest"
                }
              >
                {"LUXEMBOURG (GMT+1)"}
              </span>
              {"\n                "}
            </div>
            {"\n            "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div
          className={
            "md:col-span-8 vea-panel p-6 md:p-10 shadow-2xl overflow-hidden"
          }
        >
          {"\n            "}
          <form id={"bookingForm"} className={"w-full h-full flex flex-col"}>
            {"\n                \n                "}
            {"\n                "}
            <div
              id={"step1"}
              className={"space-y-4 md:space-y-8 fade-in h-full flex flex-col"}
            >
              {"\n                    "}
              <div
                className={
                  "mobile-step1-slider md:grid md:grid-cols-2 gap-4 md:gap-8 flex-1 overflow-hidden"
                }
              >
                {"\n                        \n                        "}
                {"\n                        "}
                <div className={"w-full"}>
                  {"\n                            "}
                  <h3
                    className={
                      "text-[10px] font-bold uppercase mb-2 tracking-widest text-center md:text-left"
                    }
                  >
                    {"1. PICK DATE"}
                  </h3>
                  {"\n                            "}
                  <div className={"flex justify-between items-center mb-2"}>
                    {"\n                                "}
                    <span
                      className={"nav-btn text-[10px]"}
                      onClick={() => window.changeMonth(-1)}
                    >
                      {"◀"}
                    </span>
                    {"\n                                "}
                    <h3
                      id={"monthText"}
                      className={
                        "text-[9px] font-bold uppercase tracking-widest text-center flex-1"
                      }
                    ></h3>
                    {"\n                                "}
                    <span
                      className={"nav-btn text-[10px]"}
                      onClick={() => window.changeMonth(1)}
                    >
                      {"▶"}
                    </span>
                    {"\n                            "}
                  </div>
                  {"\n                            "}
                  <div
                    className={
                      "calendar-grid mb-1 opacity-30 text-[6px] uppercase font-bold text-center"
                    }
                  >
                    {"\n                                "}
                    <div>{"Mo"}</div>
                    <div>{"Tu"}</div>
                    <div>{"We"}</div>
                    <div>{"Th"}</div>
                    <div>{"Fr"}</div>
                    <div>{"Sa"}</div>
                    <div>{"Su"}</div>
                    {"\n                            "}
                  </div>
                  {"\n                            "}
                  <div
                    id={"calendarDays"}
                    className={"calendar-grid w-full"}
                  ></div>
                  {
                    "\n                            \n                            "
                  }
                  {"\n                            "}
                  <p
                    className={
                      "md:hidden text-[7px] opacity-40 text-center mt-3 uppercase tracking-widest"
                    }
                  >
                    {"Swipe right for time slots ⮕"}
                  </p>
                  {"\n                        "}
                </div>
                {"\n                        \n                        "}
                {"\n                        "}
                <div className={"w-full flex flex-col space-y-4"}>
                  {"\n                            "}
                  <h3
                    className={
                      "text-[10px] font-bold uppercase mb-2 tracking-widest text-center md:text-left"
                    }
                  >
                    {"2. PICK TIME"}
                  </h3>
                  {"\n                            "}
                  <div>
                    {"\n                                "}
                    <h3
                      className={
                        "text-[8px] font-bold uppercase mb-2 opacity-50"
                      }
                    >
                      {"DURATION"}
                    </h3>
                    {"\n                                "}
                    <div
                      className={"flex flex-wrap gap-2"}
                      id={"durationSelection"}
                    >
                      {"\n                                    "}
                      <div className={"option-chip active"} data-val={"15 min"}>
                        {"15 min"}
                      </div>
                      {"\n                                    "}
                      <div className={"option-chip"} data-val={"30 min"}>
                        {"30 min"}
                      </div>
                      {"\n                                    "}
                      <div className={"option-chip"} data-val={"45 min"}>
                        {"45 min"}
                      </div>
                      {"\n                                "}
                    </div>
                    {"\n                                "}
                    <input
                      type={"hidden"}
                      name={"duration"}
                      id={"durationInput"}
                      defaultValue={"15 min"}
                    />
                    {"\n                            "}
                  </div>
                  {"\n                            "}
                  <div className={"flex-1 overflow-hidden"}>
                    {"\n                                "}
                    <h3
                      className={
                        "text-[8px] font-bold uppercase mb-2 opacity-50"
                      }
                    >
                      {"SLOTS"}
                    </h3>
                    {"\n                                "}
                    <div
                      id={"timeSlots"}
                      className={
                        "time-slots-grid max-h-[160px] md:max-h-[220px] overflow-y-auto pr-1"
                      }
                    >
                      {"\n                                    "}
                      <p
                        className={
                          "text-[9px] opacity-40 uppercase italic w-full text-center"
                        }
                      >
                        {"Pick a date first..."}
                      </p>
                      {"\n                                "}
                    </div>
                    {"\n                            "}
                  </div>
                  {"\n                        "}
                </div>
                {"\n\n                    "}
              </div>
              {"\n\n                    "}
              {"\n                    "}
              <div
                id={"nextAction"}
                className={"mt-auto pt-2 flex justify-end"}
              >
                {"\n                        "}
                <button
                  type={"button"}
                  id={"proceedBtn"}

                  className={
                    "submit-btn max-w-[140px] md:max-w-[200px] opacity-30 cursor-not-allowed w-full md:w-auto"
                  }
                  disabled={true}
                >
                  {"NEXT STEP"}
                </button>
                {"\n                    "}
              </div>
              {"\n                "}
            </div>
            {"\n\n                "}
            {"\n                "}
            <div
              id={"step2"}
              className={
                "hidden space-y-3 md:space-y-6 pt-2 fade-in h-full flex flex-col"
              }
            >
              {"\n                    "}
              <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                {"\n                        "}
                <div className={"space-y-1"}>
                  {"\n                            "}
                  <label
                    className={"text-[7px] uppercase font-bold opacity-40"}
                  >
                    {"FULL NAME *"}
                  </label>
                  {"\n                            "}
                  <input
                    type={"text"}
                    name={"name"}
                    placeholder={"YOUR NAME"}
                    required={true}
                  />
                  {"\n                        "}
                </div>
                {"\n                        "}
                <div className={"space-y-1"}>
                  {"\n                            "}
                  <label
                    className={"text-[7px] uppercase font-bold opacity-40"}
                  >
                    {"EMAIL ADDRESS *"}
                  </label>
                  {"\n                            "}
                  <input
                    type={"email"}
                    name={"email"}
                    placeholder={"YOUR EMAIL"}
                    required={true}
                  />
                  {"\n                        "}
                </div>
                {"\n                    "}
              </div>
              {"\n                    \n                    "}
              <div className={"space-y-2"}>
                {"\n                        "}
                <p className={"text-[8px] uppercase font-bold tracking-widest"}>
                  {"SERVICES"}
                </p>
                {"\n                        "}
                <div
                  className={"chips-wrapper flex flex-wrap gap-1"}
                  id={"serviceSelection"}
                >
                  {"\n                            "}
                  <div className={"service-chip"} data-val={"Worldbuilding"}>
                    {"Worldbuilding"}
                  </div>
                  {"\n                            "}
                  <div
                    className={"service-chip"}
                    data-val={"Spatial Interfaces"}
                  >
                    {"Spatial"}
                  </div>
                  {"\n                            "}
                  <div
                    className={"service-chip"}
                    data-val={"Atmospheric Objects"}
                  >
                    {"Atmospheric"}
                  </div>
                  {"\n                            "}
                  <div
                    className={"service-chip"}
                    data-val={"Identity Building"}
                  >
                    {"Identity"}
                  </div>
                  {"\n                            "}
                  <div className={"service-chip"} data-val={"Logo Design"}>
                    {"Logo"}
                  </div>
                  {"\n                            "}
                  <div className={"service-chip"} data-val={"Website Design"}>
                    {"Website"}
                  </div>
                  {"\n                            "}
                  <div className={"service-chip"} data-val={"Cinematic Reels"}>
                    {"Reels"}
                  </div>
                  {"\n                            "}
                  <div
                    className={"service-chip"}
                    data-val={"Visual Storytelling"}
                  >
                    {"Storytelling"}
                  </div>
                  {"\n                        "}
                </div>
                {"\n                        "}
                <input type={"hidden"} name={"services"} id={"servicesInput"} />
                {"\n                    "}
              </div>
              {"\n\n                    "}
              <div className={"space-y-1"}>
                {"\n                        "}
                <p className={"text-[8px] uppercase font-bold tracking-widest"}>
                  {"MESSAGE"}
                </p>
                {"\n                        "}
                <textarea
                  name={"message"}
                  rows={"2"}
                  placeholder={"Your dreams..."}
                  defaultValue={""}
                ></textarea>
                {"\n                    "}
              </div>
              {"\n\n                    "}
              <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                {"\n                        "}
                <div className={"space-y-2"}>
                  {"\n                            "}
                  <div className={"flex justify-between items-center"}>
                    {"\n                                "}
                    <p
                      className={
                        "text-[8px] uppercase font-bold tracking-widest"
                      }
                    >
                      {"BUDGET"}
                    </p>
                    {"\n                                "}
                    <span id={"budgetVal"} className={"text-[8px] font-bold"}>
                      {"$1,000"}
                    </span>
                    {"\n                            "}
                  </div>
                  {"\n                            "}
                  <input
                    type={"range"}
                    name={"budget"}
                    id={"budgetSlider"}
                    min={"1000"}
                    max={"50000"}
                    step={"1000"}
                    defaultValue={"1000"}
                  />
                  {"\n                        "}
                </div>
                {"\n                        "}
                <div className={"space-y-2"}>
                  {"\n                            "}
                  <div className={"flex justify-between items-center"}>
                    {"\n                                "}
                    <p
                      className={
                        "text-[8px] uppercase font-bold tracking-widest"
                      }
                    >
                      {"TIMELINE"}
                    </p>
                    {"\n                                "}
                    <span id={"timeVal"} className={"text-[8px] font-bold"}>
                      {"1 Week"}
                    </span>
                    {"\n                            "}
                  </div>
                  {"\n                            "}
                  <input
                    type={"range"}
                    name={"timeline"}
                    id={"timeSlider"}
                    min={"1"}
                    max={"30"}
                    step={"1"}
                    defaultValue={"1"}
                  />
                  {"\n                        "}
                </div>
                {"\n                    "}
              </div>
              {"\n\n                    "}
              <input
                type={"hidden"}
                name={"appointment_date"}
                id={"finalDateInput"}
              />
              {"\n                    "}
              <input
                type={"hidden"}
                name={"appointment_time"}
                id={"finalTimeInput"}
              />
              {"\n\n                    "}
              <div className={"pt-2 mt-auto"}>
                {"\n                        "}
                <button type={"submit"} className={"submit-btn mb-2"}>
                  {"CONFIRM APPOINTMENT"}
                </button>
                {"\n                        "}
                <button
                  type={"button"}
                  onClick={() => window.goBack()}
                  className={
                    "text-[7px] uppercase underline opacity-40 w-full text-center"
                  }
                >
                  {"Back to Step 1"}
                </button>
                {"\n                    "}
              </div>
              {"\n                "}
            </div>
            {"\n            "}
          </form>
          {"\n        "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      {"\n    "}
      <div
        id={"successOverlay"}
        className={
          "fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center text-center p-6 hidden"
        }
      >
        {"\n        "}
        <h2 className={"text-2xl md:text-4xl font-bold uppercase mb-4"}>
          {"SUCCESS"}
        </h2>
        {"\n        "}
        <p
          className={
            "text-[10px] opacity-60 uppercase mb-8 leading-relaxed max-w-xs text-center"
          }
        >
          {"Request sent to Deniz."}
        </p>
        {"\n        "}
        <button
          onClick={() => location.reload()}
          className={"underline text-[10px] uppercase tracking-widest"}
        >
          {"BACK"}
        </button>
        {"\n    "}
      </div>
      {"\n\n    "}
      {"\n"}
    </>
  );
}
