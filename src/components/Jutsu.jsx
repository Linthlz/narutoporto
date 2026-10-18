import { SectionHead } from "./Bits.jsx";
import { Smoke } from "./Fx.jsx";
import { IMG } from "../data/assets.js";

const LEVEL_NOTE = {
  Mahir: "dipakai tiap hari",
  Praktik: "sudah dipakai di proyek nyata",
  Belajar: "sedang ditempa",
};

export default function Jutsu({ groups }) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 bg-kami2 border-y-[3px] border-sumi">
      {/* patung gedo dan pain: latar kanan yang ikut bergeser */}
      <div className="absolute inset-y-0 right-0 w-[70%] sm:w-[44%] pointer-events-none" aria-hidden="true">
        <img
          data-par="0.18"
          src={IMG.painGedo}
          alt=""
          className="absolute -top-[10%] left-0 w-full h-[120%] object-cover object-left opacity-[0.16] mix-blend-multiply fade-x"
        />
      </div>
      <div className="absolute inset-y-0 left-0 w-24 hatch opacity-[0.1] pointer-events-none" aria-hidden="true" />

      <div className="wrap relative">
        <SectionHead
          id="jutsu"
          kanji="術 の 覚 書"
          title="Daftar Jurus"
          note="Perkakas yang benar-benar dipakai, ditandai dengan tingkat latihan — bukan persentase karangan."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] items-start">
          <div data-reveal="zoom" className="panel shadow-panel p-4 bg-kami justify-self-center w-full max-w-[340px]">
            {/* kage bunshin: dua bayangan keluar dari kepulan asap, berulang */}
            <div className="relative aspect-square overflow-hidden bg-kami">
              <div className="absolute -inset-1/4 speed-radial opacity-[0.12] orbit" style={{ animationDuration: "40s" }} aria-hidden="true" />
              {["clone-l", "clone-r"].map((c) => (
                <img
                  key={c}
                  src={IMG.narutoSegel}
                  alt=""
                  aria-hidden="true"
                  className={`${c} absolute inset-0 w-full h-full object-cover mix-blend-multiply`}
                />
              ))}
              {[22, 78].map((x) => (
                <span key={x} className="clone-puff absolute block w-[46%] aspect-square" style={{ left: `${x}%`, top: "56%" }} aria-hidden="true">
                  <Smoke puffs={[[50, 50, 70, 0], [26, 64, 46, 0], [74, 38, 46, 0]]} unit="%" line={0.5} hold t="0.01s" />
                </span>
              ))}
              <img
                src={IMG.narutoSegel}
                alt="Naruto merapal segel tangan"
                className="relative w-full h-full object-cover mix-blend-multiply animate-breathe"
              />
              <b
                className="clone-word absolute right-2 top-2 font-brush text-aka text-[22px] leading-none tategaki bg-kami/80 px-1 py-2"
                aria-hidden="true"
              >
                影分身
              </b>
            </div>
            <p className="m-0 mt-3 border-t-[3px] border-sumi pt-3 text-[10px] font-black tracking-label text-kasumi text-center">
              印 · SEGEL TANGAN · KAGE BUNSHIN
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 min-w-0">
            {groups.map((g, gi) => (
              <div key={g.group} data-reveal="rise" style={{ "--d": `${gi * 120}ms` }} className="min-w-0">
                <h3 className="font-brush text-[15px] tracking-[0.2em] m-0 mb-4 pb-2 border-b-[3px] border-sumi">
                  {g.group}
                </h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-3">
                  {g.items.map((it) => (
                    <li key={it.name} className="min-w-0">
                      <div className="flex items-baseline gap-2 justify-between">
                        <span className="font-disp text-[15px] leading-snug min-w-0">{it.name}</span>
                        <span
                          className={`font-brush text-[15px] shrink-0 ${
                            it.levelId === "Mahir" ? "text-aka" : "text-sumi"
                          }`}
                          title={LEVEL_NOTE[it.levelId]}
                        >
                          {it.level}
                        </span>
                      </div>
                      <p className="m-0 text-[11px] text-kasumi">{LEVEL_NOTE[it.levelId]}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
