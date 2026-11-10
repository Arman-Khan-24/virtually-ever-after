import { useEffect, useState } from "react";

export default function LocalPreview() {
  const [project, setProject] = useState(null);
  const [index, setIndex] = useState(0);
  const embedded = window.self !== window.top;
  useEffect(() => {
    const id = new URLSearchParams(location.search).get("id");
    fetch("/preview-data.json")
      .then((r) => r.json())
      .then((data) => {
        const item = data[id] || Object.values(data)[0];
        setProject(item);
        document.title = `${item?.title || "Portfolio"} | Local preview`;
        window.__localReady = true;
      });
  }, []);
  const media = project?.media[index];
  return (
    <main
      className={`local-page flex flex-col gap-6 ${embedded ? "embedded" : ""}`}
    >
      <header className="preview-heading flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[.2em] opacity-50">
            Local portfolio preview
          </p>
          <h1 className="text-2xl font-normal">
            {project?.title || "Loading…"}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed opacity-70">
            {project?.description}
          </p>
        </div>
        <a className="text-xs uppercase tracking-widest" href="/archive.html">
          Archive ↗
        </a>
      </header>
      <section className="relative flex min-h-[65vh] flex-1 items-center justify-center overflow-hidden">
        {media?.kind === "video" && (
          <video
            key={media.src}
            className="preview-media absolute inset-0"
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        )}
        {media?.kind === "image" && (
          <img
            className="preview-media absolute inset-0"
            src={media.src}
            alt={project.title}
          />
        )}
        {media?.kind === "pdf" && (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`/flipbook.html?pdf=${encodeURIComponent(media.src)}`}
            title={project.title}
          />
        )}
      </section>
      {project?.media.length > 1 && (
        <nav
          aria-label="Portfolio media"
          className="flex items-center justify-center gap-6 p-3 text-xs uppercase tracking-widest"
        >
          <button
            className="px-3 py-2"
            onClick={() =>
              setIndex(
                (index - 1 + project.media.length) % project.media.length,
              )
            }
          >
            ← Previous
          </button>
          <span>
            {index + 1} / {project.media.length}
          </span>
          <button
            className="px-3 py-2"
            onClick={() => setIndex((index + 1) % project.media.length)}
          >
            Next →
          </button>
        </nav>
      )}
    </main>
  );
}
