import assert from "node:assert/strict";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { chromium } from "playwright";

const origin = process.env.VEA_VERIFY_URL || "http://localhost:4173";
const artifacts = "artifacts";
await mkdir(artifacts, { recursive: true });
const report = { pages: [], checks: [], errors: [], outgoing: [], missing: [] };
const browser = await chromium.launch({
  headless: true,
  ...(process.env.VEA_BROWSER_PATH
    ? { executablePath: process.env.VEA_BROWSER_PATH }
    : {}),
  args: [
    "--disable-dev-shm-usage",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
  ],
});

async function context(viewport, mode, mobile = false) {
  const ctx = await browser.newContext({
    viewport,
    isMobile: mobile,
    hasTouch: mobile,
    acceptDownloads: true,
  });
  if (mode)
    await ctx.addInitScript((mode) => {
      if (window !== window.top) return;
      try {
        sessionStorage.setItem("g3q", mode);
        sessionStorage.setItem("g3lock", mode);
        sessionStorage.setItem(
          "veaMode",
          mode === "flat" ? "print" : "immersive",
        );
        sessionStorage.setItem("veaAsked", "1");
        if (mode !== "flat") sessionStorage.setItem("g3ok", "1");
      } catch {
        /* initial empty documents have no storage origin */
      }
    }, mode);
  await ctx.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.origin !== new URL(origin).origin) {
      report.outgoing.push(url.href);
      return route.abort();
    }
    return route.continue();
  });
  ctx.on("page", (page) => {
    page.on("pageerror", (error) => report.errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        report.missing.push(`${response.status()} ${response.url()}`);
    });
    page.on("console", (message) => {
      if (message.type() === "error") report.errors.push(message.text());
    });
  });
  return ctx;
}

async function visit(page, path, name) {
  await page.goto(origin + path, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => window.__localReady, null, {
    timeout: 60000,
  });
  await page.waitForTimeout(500);
  const links = await page
    .locator("a[href],form[action]")
    .evaluateAll((elements) => elements.map((el) => el.href || el.action));
  assert(
    links.every(
      (url) =>
        new URL(url, origin).origin === new URL(origin).origin ||
        url.startsWith("blob:"),
    ),
    `${name}: outgoing link`,
  );
  await page.screenshot({ path: `${artifacts}/${name}.png` });
  report.pages.push(name);
}

try {
  let ctx = await context({ width: 1440, height: 900 });
  let page = await ctx.newPage();
  await visit(page, "/", "entry-desktop");
  assert.equal(await page.locator("#veaAsk .va-opt").count(), 2);
  await page.locator("[data-va=page]").click();
  await page.waitForFunction(() =>
    document.documentElement.classList.contains("vflat"),
  );
  report.checks.push("Entry page selection");
  await ctx.close();

  ctx = await context({ width: 1440, height: 900 }, "flat");
  page = await ctx.newPage();
  for (const name of [
    "home",
    "works",
    "archive",
    "about",
    "start",
    "book",
    "work",
    "legal",
  ]) {
    await visit(
      page,
      name === "home" ? "/" : `/${name}.html`,
      `${name}-desktop`,
    );
    if (name === "home") {
      await page.locator("#menuBtn").click();
      assert.equal(
        await page.locator("#menuBtn").getAttribute("aria-expanded"),
        "true",
      );
      await page.keyboard.press("Escape");
      assert.equal(
        await page.locator("#menuBtn").getAttribute("aria-expanded"),
        "false",
      );
      for (const y of [1500, 3500, 5500, 7500]) {
        await page.evaluate((y) => scrollTo(0, y), y);
        await page.waitForTimeout(250);
      }
      assert.equal(await page.locator(".feat").count(), 5);
      report.checks.push(
        "Menu, scrolling and five featured rows after the hero",
      );
    }
    if (name === "archive") {
      await page.locator(".group-head").first().click();
      assert.equal(await page.locator(".group.open").count(), 1);
      await page.locator("#swCli").click();
      await page.locator(".group-head").first().click();
      assert((await page.locator(".card").count()) > 0);
      report.checks.push("Archive category/client grouping");
    }
    if (name === "about") {
      await page.locator(".acc-head").first().click();
      assert.equal(await page.locator(".acc.open").count(), 1);
      report.checks.push("Studio accordion");
    }
    if (name === "start") {
      for (const [field, value] of [
        ["name", "Offline Test"],
        ["email", "test@example.test"],
        ["project_type", null],
        ["budget", null],
        ["message", "Local project draft."],
      ]) {
        const input = page.locator(`[name=${field}]`);
        if (value) await input.fill(value);
        else await input.selectOption({ index: 1 });
        await page.locator("#wizNext").click();
      }
      assert.match(
        await page.locator("#wizDoneMsg").innerText(),
        /Saved on this device/,
      );
      assert.equal(
        await page.evaluate(
          () => JSON.parse(localStorage.getItem("vea-local-drafts")).length,
        ),
        1,
      );
      report.checks.push("Five-step project form and local draft storage");
    }
    if (
      name === "work" &&
      (await page.locator(".pdf-still,.pdf-reader").count())
    ) {
      await page
        .waitForFunction(
          () =>
            document.querySelectorAll(".pdf-still canvas,.pdf-reader canvas")
              .length > 0,
          null,
          { timeout: 60000 },
        )
        .catch(() => {});
    }
  }
  const slugs = JSON.parse(await readFile("project-slugs.json", "utf8"));
  await visit(
    page,
    `/work/${encodeURIComponent(slugs[0])}`,
    "pretty-project-route",
  );
  await ctx.close();
  for (const slug of slugs.slice(1)) {
    ctx = await context({ width: 1440, height: 900 }, "flat");
    page = await ctx.newPage();
    await visit(page, `/work/${encodeURIComponent(slug)}`, `project-${slug}`);
    await page.waitForFunction(() =>
      document.getElementById("wkClient")?.textContent.trim(),
    );
    await ctx.close();
  }
  report.checks.push("All nineteen project routes");
  ctx = await context({ width: 1440, height: 900 }, "flat");
  page = await ctx.newPage();
  const preview = JSON.parse(await readFile('public/preview-data.json', 'utf8'));
  await visit(
    page,
    `/preview.html?id=${Object.keys(preview)[0]}`,
    "local-client-preview",
  );
  assert((await page.locator("main video,main img,main iframe").count()) > 0);
  const pdf = Object.values(preview)
    .flatMap((item) => item.media)
    .find((media) => media.kind === "pdf");
  await page.goto(`${origin}/flipbook.html?pdf=${encodeURIComponent(pdf.src)}`);
  await page.waitForFunction(
    () => window.__localPdfReady,
    null,
    { timeout: 60000 },
  );
  const currentSpread = await page.evaluate(() => window.__fb.state().cur);
  await page.locator('#nextBtn').click();
  await page.waitForFunction(previous => window.__fb.state().cur > previous && !window.__fb.state().live, currentSpread);
  await page.screenshot({ path: `${artifacts}/pdf-viewer.png` });
  report.checks.push("Local client preview, PDF rendering and page navigation");
  await ctx.close();

  ctx = await context({ width: 390, height: 844 }, "flat", true);
  page = await ctx.newPage();
  for (const name of [
    "home",
    "works",
    "archive",
    "about",
    "start",
    "book",
    "work",
  ]) {
    await visit(
      page,
      name === "home" ? "/" : `/${name}.html`,
      `${name}-mobile`,
    );
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      `${name}: horizontal overflow`,
    );
    if (name === "book") {
      await page.locator(".calendar-day:not(.disabled)").first().click();
      await page.locator(".time-slot").first().click();
      await page.locator("#proceedBtn").click();
      await page.locator("#bookingForm input[name=name]").fill("Offline Test");
      await page
        .locator("#bookingForm input[name=email]")
        .fill("test@example.test");
      await page.locator("#bookingForm button[type=submit]").click();
      assert.match(
        await page.locator("#successOverlay").innerText(),
        /DRAFT SAVED/,
      );
      report.checks.push("Mobile calendar, time selection and booking draft");
    }
  }
  await ctx.close();

  ctx = await context({ width: 960, height: 600 }, "full");
  page = await ctx.newPage();
  await page.goto(`${origin}/?g3q=full`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(
    () => window.__g3on && document.body.classList.contains("g3"),
    null,
    { timeout: 60000 },
  );
  await page.evaluate(() => window.__g3?.skipIntro?.());
  await page.screenshot({ path: `${artifacts}/space-lobby.png` });
  for (const [kind, path] of [
    ["salon", "/works.html"],
    ["work", "/work.html?p=A18"],
    ["office", "/about.html"],
  ]) {
    assert.equal(
      await page.evaluate((path) => window.__g3go(path), path),
      true,
    );
    await page.waitForFunction(
      (kind) =>
        window.__spaState?.().kind === kind &&
        !window.__spaState?.().swapping &&
        !window.__spaState?.().dead,
      kind,
      { timeout: 90000 },
    );
    assert.equal(
      await page.evaluate(() => document.querySelectorAll("canvas.g3c").length),
      1,
    );
    await page.screenshot({ path: `${artifacts}/space-${kind}.png` });
    report.checks.push(`3D ${kind} room transition`);
  }
  await ctx.close();
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.outgoing, []);
  assert.deepEqual(report.missing, []);
  report.passed = true;
  console.log(
    `Passed: ${report.pages.length} page states and ${report.checks.length} interaction checks. No outgoing requests, missing responses or JavaScript errors.`,
  );
} catch (error) {
  report.passed = false;
  report.failure = error.stack;
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser.close();
  await writeFile(
    `${artifacts}/verification-report.json`,
    JSON.stringify(report, null, 2),
  );
}
