import { useEffect, useRef } from "react";
import { RankStamp } from "./Bits.jsx";

export default function MissionModal({ mission, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!mission) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mission, onClose]);

  if (!mission) return null;

  return (
    <div
      className="fixed inset-0 z-[110] grid place-items-center overflow-y-auto bg-sumi/85 backdrop-blur-sm"
      style={{
        paddingTop: "calc(20px + env(safe-area-inset-top, 0px))",
        paddingBottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
        paddingLeft: "max(18px, env(safe-area-inset-left, 0px))",
        paddingRight: "max(18px, env(safe-area-inset-right, 0px))",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mission-title"
    >
      <article className="relative w-full max-w-[780px] panel shadow-panel animate-sheetin">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 w-10 h-10 grid place-items-center border-[3px] border-sumi bg-kami text-lg leading-none transition-transform duration-200 hover:rotate-90 hover:border-aka hover:text-aka"
          aria-label="Tutup berkas misi"
        >
          ✕
        </button>

        <div className="absolute inset-x-0 top-0 h-24 tone pointer-events-none" aria-hidden="true" />

        <div className="relative p-6 sm:p-9">
          <div className="flex items-start gap-4 flex-wrap pr-10 sm:pr-8">
            <span className="font-brush text-[clamp(52px,12vw,86px)] leading-none">{mission.kanji}</span>
            <div className="min-w-0 flex-1">
              <h2 id="mission-title" className="font-disp font-extrabold m-0 leading-[1.05] text-[clamp(26px,5vw,42px)] text-balance">
                {mission.title}
              </h2>
              <p className="m-0 mt-1.5 text-[13px] text-kasumi">{mission.sub}</p>
            </div>
            <RankStamp rank={mission.rank} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-[10px] font-black tracking-label bg-sumi text-kami px-2.5 py-1">
              {mission.status.toUpperCase()}
            </span>
            <span className="text-[10px] font-black tracking-label border-2 border-sumi px-2.5 py-1 tabular-nums">
              {mission.year}
            </span>
          </div>

          <p className="mt-6 m-0 text-[15px] leading-relaxed max-w-[64ch] text-sumi2">{mission.body}</p>
          <p className="mt-4 m-0 text-[15px] leading-relaxed max-w-[64ch] text-sumi2">{mission.body2}</p>

          <dl className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-px bg-sumi border-[3px] border-sumi">
            {mission.stats.map(([k, v]) => (
              <div key={k} className="bg-kami px-3.5 py-3 min-w-0">
                <dt className="text-[9.5px] font-black tracking-label text-kasumi">{k}</dt>
                <dd className="m-0 font-disp text-[17px] tabular-nums leading-snug">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            <p className="m-0 mb-2.5 text-[10px] font-black tracking-label text-kasumi">PERKAKAS</p>
            <div className="flex flex-wrap gap-1.5">
              {mission.tags.map((t) => (
                <span key={t} className="text-[11px] font-bold border-2 border-sumi px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
