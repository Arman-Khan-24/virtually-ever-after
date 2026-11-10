import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  copyFile,
  readdir,
  mkdir,
  link,
  stat,
  readFile,
} from "node:fs/promises";

async function bundleLocalAssets(source, destination) {
  await mkdir(destination, { recursive: true });
  for (const entry of await readdir(source, { withFileTypes: true })) {
    const from = `${source}/${entry.name}`,
      to = `${destination}/${entry.name}`;
    if (entry.isDirectory()) await bundleLocalAssets(from, to);
    else if ((await stat(from)).size > 1024 * 1024) {
      // Immutable films can share disk blocks with the development copy.
      // On another filesystem the build falls back to a normal copy.
      try {
        await link(from, to);
      } catch {
        await copyFile(from, to);
      }
    } else await copyFile(from, to);
  }
}

const pages = [
  "works",
  "archive",
  "about",
  "start",
  "book",
  "work",
  "legal",
  "preview",
  "flipbook",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "static-page-aliases",
      apply: "build",
      async closeBundle() {
        await bundleLocalAssets("public", "dist");
        await Promise.all(
          pages.map((page) => copyFile("dist/index.html", `dist/${page}.html`)),
        );
        const slugs = JSON.parse(await readFile("project-slugs.json", "utf8"));
        for (const slug of slugs) {
          await mkdir(`dist/work/${slug}`, { recursive: true });
          await copyFile("dist/index.html", `dist/work/${slug}/index.html`);
        }
      },
    },
  ],
  build: { copyPublicDir: false },
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
});
