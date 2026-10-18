import { SectionHead } from "./Bits.jsx";
import { IMG } from "../data/assets.js";

export default function Contact({ profile }) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* lembah akhir: patung dua pendiri desa sebagai latar penutup */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          data-par="0.2"
          src={IMG.lembahAkhir}
          alt=""
          className="absolute left-0 -top-[10%] w-full h-[120%] object-cover object-center opacity-[0.13] mix-blend-multiply fade-y"
        />
      </div>

      <div className="wrap relative">
        <SectionHead
          id="kontak"
          kanji="連 絡"
          title="Kontak"
          note="Isi nilainya di src/data/profile.js. Baris yang masih kosong tampil sebagai slot."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-center">
          <figure
            data-reveal="zoom"
            className="m-0 panel shadow-panel overflow-hidden justify-self-center w-full max-w-[360px]"
          >
            <div className="relative aspect-[736/900] overflow-hidden bg-kami">
              <img
                src={IMG.hokage}
                alt="Hokage Ketujuh membelakangi pembaca, menatap desa dari balkon"
                className="cape-sway w-full h-full object-cover object-top mix-blend-multiply"
                loading="lazy"
              />
            </div>
            <figcaption className="flex items-center justify-between border-t-[3px] border-sumi px-4 py-3">
              <span className="font-brush text-lg tracking-kanji">火 の 意 志</span>
              <span className="text-[10px] font-black tracking-label text-kasumi">TEKAD API</span>
            </figcaption>
          </figure>

          <div className="min-w-0">
            <p data-reveal="rise" className="m-0 mb-6 font-disp text-[clamp(20px,3vw,28px)] leading-snug max-w-[26ch] text-balance">
              Punya misi untuk dikerjakan bersama? Kirim gulungan lewat salah satu jalur di bawah.
            </p>
            <div data-reveal="rise" style={{ "--d": "120ms" }} className="grid gap-px bg-sumi border-[3px] border-sumi sm:grid-cols-2">
              {profile.contact.map((c) =>
                c.value ? (
                  <a
                    key={c.label}
                    href={c.label === "SUREL" ? `mailto:${c.value}` : c.value}
                    className="group bg-kami px-5 py-5 min-w-0 no-underline text-sumi transition-colors duration-200 hover:bg-sumi hover:text-kami"
                  >
                    <p className="m-0 text-[10px] font-black tracking-label text-kasumi group-hover:text-kami/70">
                      {c.label}
                    </p>
                    <p className="m-0 font-disp text-[17px] break-words">{c.value}</p>
                  </a>
                ) : (
                  <div key={c.label} className="bg-kami px-5 py-5 min-w-0">
                    <p className="m-0 text-[10px] font-black tracking-label text-kasumi">{c.label}</p>
                    <p className="m-0 font-disp text-[17px] text-kasumi/60 italic">— {c.hint}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
