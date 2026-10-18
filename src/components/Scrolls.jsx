import { SectionHead } from "./Bits.jsx";
import { Crow, Sharingan } from "./Fx.jsx";
import { IMG } from "../data/assets.js";

// Gagak berhamburan dari panel Itachi: posisi awal, arah terbang, durasi, jeda.
const CROWS = [
  [46, 40, 260, -260, 4.6, 0],
  [52, 50, -280, -200, 5.2, 0.8],
  [40, 56, -220, -320, 4.2, 1.6],
  [56, 36, 300, -120, 5.6, 2.3],
  [48, 62, 200, -360, 4.8, 3.1],
  [44, 46, -320, -80, 5.4, 3.8],
  [54, 58, 340, -260, 4.4, 4.5],
];

export default function Scrolls({ items }) {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      <div className="wrap relative">
        <SectionHead
          id="gulungan"
          kanji="巻 物"
          title="Gulungan"
          note="Konferensi, kompetisi, dan kemitraan yang sedang berjalan."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start">
          <figure
            data-reveal="left"
            tabIndex={0}
            className="tsuku group relative m-0 panel shadow-panel overflow-visible lg:sticky lg:top-24 justify-self-center w-full max-w-[400px] outline-none"
          >
            <div className="relative overflow-hidden aspect-[590/900] bg-kami">
              <img
                src={IMG.itachiTakhta}
                alt="Itachi duduk di takhta batu di bawah lambang 孤"
                className="relative w-full h-full object-cover object-top mix-blend-multiply"
              />
              {/* genjutsu: potret itachi menggantikan takhta */}
              <img
                src={IMG.itachiPotret}
                alt=""
                aria-hidden="true"
                className="tsuku-alt absolute inset-0 w-full h-full object-cover object-top bg-kami"
              />
              {/* tsukuyomi: langit merah saat panel disentuh */}
              <div className="tsuku-red absolute inset-0 bg-aka mix-blend-multiply" aria-hidden="true" />
              <div className="tsuku-red absolute inset-0 hatch-x" aria-hidden="true" />
              <div
                className="tsuku-red absolute right-[8%] top-[5%] w-[22%] aspect-square rounded-full bg-sumi"
                aria-hidden="true"
              />
            </div>

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {CROWS.map(([x, y, tx, ty, t, d], i) => (
                <span
                  key={i}
                  className="crow"
                  style={{
                    "--x": `${x}%`,
                    "--y": `${y}%`,
                    "--tx": `${tx}px`,
                    "--ty": `${ty}px`,
                    "--t": `${t}s`,
                    "--d": `${d}s`,
                  }}
                >
                  <Crow className="block w-9" />
                </span>
              ))}
            </div>

            <div className="absolute -left-6 -bottom-6 w-20 h-20 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-180" aria-hidden="true">
              <Sharingan className="w-full h-full" />
            </div>

            <figcaption className="flex items-center justify-between border-t-[3px] border-sumi px-4 py-3 pl-20">
              <span className="font-brush text-lg tracking-kanji">月 読</span>
              <span className="text-[10px] font-black tracking-label text-kasumi">SENTUH UNTUK GENJUTSU</span>
            </figcaption>
          </figure>

          <ol className="list-none p-0 m-0 min-w-0">
            {items.map((s, i) => (
              <li
                key={s.title}
                data-reveal="right"
                style={{ "--d": `${i * 90}ms` }}
                className="group grid gap-x-6 gap-y-1 sm:grid-cols-[130px_minmax(0,1fr)] border-t-[3px] border-sumi py-5"
              >
                <time className="flex items-center gap-2 font-disp text-[15px] text-aka tracking-[0.1em] tabular-nums">
                  <span className="block w-2.5 h-2.5 rounded-full bg-aka transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                  {s.date}
                </time>
                <div className="min-w-0">
                  <h3 className="font-disp font-bold text-[18px] m-0">{s.title}</h3>
                  <p className="m-0 text-[12.5px] font-bold tracking-wide text-kasumi">{s.place}</p>
                  <p className="m-0 mt-1.5 text-[14px] text-sumi2 max-w-[62ch]">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
