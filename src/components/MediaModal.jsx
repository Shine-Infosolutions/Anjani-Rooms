import { useEffect, useState } from "react";

export default function MediaModal({ media, startIndex = 0, title, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const isVideo = (src) => src.endsWith(".mp4") || src.endsWith(".webm");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % media.length);
      if (e.key === "ArrowLeft") setCurrent((i) => (i - 1 + media.length) % media.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [media.length, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-0 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111] w-full h-full md:h-auto md:max-h-[92vh] md:max-w-4xl md:rounded-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
          <span className="text-white text-sm font-semibold truncate">{title}</span>
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-white/50 text-xs">{current + 1} / {media.length}</span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 text-white text-sm flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Main media */}
        <div className="flex-1 relative flex items-center justify-center min-h-0 overflow-hidden">
          <button
            onClick={() => setCurrent((i) => (i - 1 + media.length) % media.length)}
            className="absolute left-2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl flex items-center justify-center transition-colors"
          >
            ‹
          </button>

          <div className="w-full h-full flex items-center justify-center px-14 py-3">
            {isVideo(media[current]) ? (
              <video
                key={media[current]}
                src={media[current]}
                className="max-w-full max-h-full rounded-lg object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                key={media[current]}
                src={media[current]}
                alt={`${title} ${current + 1}`}
                className="max-w-full max-h-full rounded-lg object-contain"
              />
            )}
          </div>

          <button
            onClick={() => setCurrent((i) => (i + 1) % media.length)}
            className="absolute right-2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl flex items-center justify-center transition-colors"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        {media.length > 1 && (
          <div className="flex gap-2 px-4 py-3 overflow-x-auto border-t border-white/10 flex-shrink-0 scrollbar-thin">
            {media.map((src, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-16 h-12 rounded-md overflow-hidden flex-shrink-0 cursor-pointer border-2 transition-all ${
                  i === current ? "border-red-500 opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                {isVideo(src) ? (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center text-white text-lg">▶</div>
                ) : (
                  <img src={src} alt="" className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
