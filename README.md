# Virtually Ever After — local React edition

## Clone and run

The offline video library is stored with Git LFS. Install Git LFS before cloning so the actual media files are downloaded instead of pointer files.

```bash
git lfs install
git clone https://github.com/Arman-Khan-24/virtually-ever-after.git
cd virtually-ever-after
git lfs pull
npm ci
npm run dev
```

Open **http://localhost:5173**. Building and previewing uses the commands below. `node_modules`, generated `dist`, and verification screenshots are excluded from Git; the source and original offline assets are included.

React JavaScript, Vite and locally compiled Tailwind CSS. The page shells are editable JSX in `src/pages`. Reference component CSS is preserved in `public/style.css` and `public/runtime/*-style-*.css` to maintain its measured layout. The procedural Three.js rooms, camera motion, shaders and sound engine are served locally from `public/dist` and `public/sound.js`.

```bash
cd /home/aakaa/virtually-ever-after-clone
npm run dev
```

Open **http://localhost:5173**. Choose **Space** or **Page**. The bottom-right switch changes modes. Space includes a lighter option for slower devices.

```bash
npm run build
npm run preview
# In another terminal, with the preview server running:
npm run verify
```

The production preview runs at **http://localhost:4173**. Verification uses an isolated Chromium context with external requests blocked; screenshots and the report are written to `artifacts`. If Chromium is missing, install the development test browser with `npx playwright install chromium` while online. The website itself needs no internet access.

Home, Works, Archive, About, the project form, booking, legal, local client previews and the PDF viewer are included. Nineteen project routes are emitted during the build, alongside the `.html` page aliases.

Images, Plex and Telegrama fonts, audio samples, documents, logo animation and portfolio films are stored locally. HLS streams were remuxed into MP4 without re-encoding. The asset library is approximately **4 GB**. A production build uses hard links for large immutable assets on the same filesystem, falling back to copies elsewhere; the resulting `dist` directory is self-contained and can be copied to another machine.

All navigation remains local. Email, phone, social and award links open local studio/contact pages. Client websites open portfolio previews with their saved media. Project and booking forms save JSON drafts in this browser and download them; they do not send messages or reserve appointments. The original PDF page-curl renderer, controls and mobile zoom use the shared local PDF.js dependency. Live spreadsheets, trackers, external metadata and remote image fallback services are removed. A self-only Content Security Policy also blocks remote runtime dependencies.

This is a local replica of the reference, with its text and media preserved. Its original rendering modules are retained rather than represented as newly authored React code. Media and procedural animation phases vary with timing and hardware. The local client previews and form confirmations are deliberate offline adaptations. Exact visual equivalence across every animation phase has not been established.
