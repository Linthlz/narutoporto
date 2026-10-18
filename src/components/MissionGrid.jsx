import { SectionHead, RankStamp } from "./Bits.jsx";
import { JUTSU_KINDS } from "./JutsuTransition.jsx";
import { IMG } from "../data/assets.js";

const JUTSU_LABEL = { rasengan: "螺旋丸", bunshin: "影分身", tsukuyomi: "月読" };

export default function MissionGrid({ missions, onCast }) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* kurama mengintai dari balik catatan misi */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[62%] pointer-events-none" aria-hidden="true">
        <img
          data-par="0.14"
          src={IMG.kurama}
          alt=""
          className="absolute -top-[6%] left-0 w-full h-[112%] object-cover object-top opacity-[0.12] mix-blend-multiply fade-x"
        />
      </div>
      <div className="wrap relative">
        <SectionHead
          id="misi"
          kanji="任 務 記 録"
          title="Catatan Misi"
          note="Ketuk satu kartu. Tiap misi dirapal dengan jurusnya sendiri — Rasengan, Kage Bunshin, atau Tsukuyomi — lalu berkasnya terbuka."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((m, i) => (
            <div key={m.id} data-reveal={i % 2 ? "right" : "left"} className="min-w-0 flex" style={{ "--d": `${(i % 3) * 90}ms` }}>
            <button
              type="button"
              onClick={() => onCast(m, i)}
              className="group relative w-full text-left panel shadow-panelsm p-5 pt-6 min-w-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-panel focus-visible:-translate-y-1"
            >
              <div
                className="absolute inset-0 speed opacity-0 group-hover:opacity-[0.07] group-focus-visible:opacity-[0.07] transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative flex items-start gap-4">
                <span className="font-brush text-[42px] leading-none">{m.kanji}</span>
                <RankStamp rank={m.rank} size="sm" />
                <span className="ml-auto text-[10px] font-black tracking-label text-kasumi pt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative font-disp font-bold text-[20px] leading-tight m-0 mt-4">{m.title}</h3>
              <p className="relative m-0 mt-1 text-[12.5px] text-kasumi">{m.sub}</p>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {m.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-bold tracking-wide border-2 border-sumi px-2 py-0.5">
                    {t}
                  </span>
                ))}
                {m.tags.length > 3 ? (
                  <span className="text-[10px] font-bold tracking-wide px-1 py-0.5 text-kasumi">
                    +{m.tags.length - 3}
                  </span>
                ) : null}
              </div>

              <div className="relative mt-5 flex items-center justify-between border-t-[3px] border-sumi pt-3">
                <span className="text-[11px] font-black tracking-label tabular-nums">{m.year}</span>
                <span className="flex items-center gap-2 text-[11px] font-black tracking-label text-aka">
                  <span className="font-brush text-[13px] tracking-[0.2em] text-sumi opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {JUTSU_LABEL[JUTSU_KINDS[i % JUTSU_KINDS.length]]}
                  </span>
                  RAPAL
                  <span className="block h-[2px] w-4 bg-aka transition-all duration-300 group-hover:w-8" />
                </span>
              </div>
            </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
