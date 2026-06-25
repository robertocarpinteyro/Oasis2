"use client";

/**
 * Marco de media reutilizable. Si `video`/`src` están vacíos muestra un
 * placeholder con la paleta de marca; al pegar la URL de Cloudinary se
 * renderiza el video o la imagen real sin tocar el layout.
 */
export default function Media({
  video,
  src,
  poster,
  label,
  className = "",
  rounded = "rounded-card",
}: {
  video?: string;
  src?: string;
  poster?: string;
  label?: string;
  className?: string;
  rounded?: string;
}) {
  const hasVideo = Boolean(video);
  const hasImage = Boolean(src);

  return (
    <div
      className={`relative isolate overflow-hidden ${rounded} ${className}`}
    >
      {hasVideo ? (
        <video
          className="h-full w-full object-cover"
          src={video}
          poster={poster || undefined}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label || ""}
          className="h-full w-full object-cover"
        />
      ) : (
        <Placeholder label={label} />
      )}
    </div>
  );
}

function Placeholder({ label }: { label?: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ocean/30 via-ink to-poppy/25">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-snow/30 bg-snow/10 backdrop-blur">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7-11-7Z" fill="currentColor" />
          </svg>
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-snow/60">
          {label || "Media placeholder"}
        </span>
        <span className="text-[10px] text-snow/35">Reemplazar con Cloudinary</span>
      </div>
    </div>
  );
}
