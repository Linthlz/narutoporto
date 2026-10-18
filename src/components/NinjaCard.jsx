import { useRef } from "react";
import { Rasengan } from "./Fx.jsx";
import { IMG } from "../data/assets.js";

// Hero: Naruto mode sage dengan bola pencari kebenaran mengorbit,
// pusaran rasengan dan garis kecepatan di belakang, semuanya ikut gerak kursor.
const ORBS = [0, 60, 120, 180, 240, 300];

export default function NinjaCard({ profile, onCast, onJump }) {
  const stage = useRef(null);

  const onMove = (e) => {
    const el = stage.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  const letters = profile.handle.split("");

  return (
    <section
      id="atas"
      ref={stage}
      onPointerMove={onMove}
      className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20"
    >
      {/* panorama desa Konoha dengan pahatan wajah Hokage */}
      <div className="absolute inset-x-0 bottom-0 h-[82%] pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          data-par="0.22"
          src={IMG.konoha}
          alt=""
          className="absolute inset-x-0 -bottom-[8%] w-full h-[108%] object-cover object-[50%_35%] opacity-[0.2] mix-blend-multiply fade-top"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-40 tone-lg pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -left-10 top-6 font-brush leading-none text-sumi/[0.05] pointer-events-none select-none par"
        style={{ fontSize: "clamp(220px,40vw,520px)", "--k": -30 }}
        aria-hidden="true"
      >
        忍
      </div>

      <div className="wrap relative grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
        <div className="min-w-0">
          <p className="flex items-center gap-3 m-0 mb-5 text-[11px] font-black tracking-label text-aka fade-up" style={{ "--d": "100ms" }}>
            <i className="block w-8 h-[2px] bg-aka not-italic" />
            登録証 · KARTU NINJA
          </p>

          <h1 className="font-disp font-extrabold m-0 leading-[0.92] text-[clamp(52px,13vw,116px)] text-balance">
            <span className="block font-brush text-aka text-[0.3em] tracking-kanji mb-3 fade-up" style={{ "--d": "160ms" }}>
              疾 風 の 記 録
            </span>
            <span className="sr-only">{profile.handle}</span>
            <span aria-hidden="true">
              {letters.map((c, i) => (
                <span key={i} className="letter-in" style={{ "--d": `${260 + i * 110}ms` }}>
                  {c}
                </span>
              ))}
            </span>
          </h1>

          <p className="font-disp m-0 mt-4 text-[clamp(16px,2.4vw,22px)] tracking-[0.06em] fade-up" style={{ "--d": "620ms" }}>
            {profile.role}
          </p>

          <p className="m-0 mt-5 max-w-[48ch] text-[15px] sm:text-base text-sumi2 fade-up" style={{ "--d": "720ms" }}>
            {profile.tagline}
          </p>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-sumi border-[3px] border-sumi fade-up" style={{ "--d": "820ms" }}>
            {profile.card.map((row) => (
              <div key={row.label} className="bg-kami px-4 py-3 min-w-0">
                <dt className="text-[10px] font-black tracking-label text-kasumi">{row.label}</dt>
                <dd className="m-0 font-disp text-[17px] leading-snug">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3 fade-up" style={{ "--d": "920ms" }}>
            <button
              type="button"
              onClick={onCast}
              className="rasen-btn flex items-center gap-3 font-black text-[12px] tracking-label px-6 py-3.5 bg-sumi text-kami border-[3px] border-sumi shadow-panelsm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Rasengan className="w-6 h-6 -my-2" glow={false} />
              RAPAL MISI PERINGKAT S
            </button>
            <a
              href="#misi"
              onClick={(e) => onJump(e, "#misi")}
              className="font-black text-[12px] tracking-label px-6 py-3.5 no-underline text-sumi border-[3px] border-sumi transition-colors duration-200 hover:bg-sumi hover:text-kami"
            >
              LIHAT SEMUA MISI
            </a>
          </div>
        </div>

        <div className="relative min-w-0 justify-self-center w-full max-w-[460px] aspect-square my-6">
          {/* garis kecepatan berputar */}
          <div className="absolute -inset-[22%] par" style={{ "--k": -12 }} aria-hidden="true">
            <div className="w-full h-full speed-radial opacity-[0.16] orbit" style={{ animationDuration: "60s" }} />
          </div>

          {/* pusaran tinta besar */}
          <div className="absolute -inset-[8%] par" style={{ "--k": -22 }} aria-hidden="true">
            <Rasengan className="w-full h-full opacity-[0.13]" ink="#0a0a0a" glow={false} />
          </div>

          {/* panel karakter */}
          <div className="absolute inset-[9%] par" style={{ "--k": 16 }}>
            <figure className="m-0 w-full h-full panel shadow-panel overflow-hidden hero-pop relative">
              <img
                src={IMG.narutoSage}
                alt="Naruto dalam mode Sage Enam Jalan, memanggul tongkat"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 tone pointer-events-none" aria-hidden="true" />
              <figcaption className="absolute left-0 top-0 bg-sumi text-kami font-brush text-[13px] tracking-[0.3em] px-3 py-1.5">
                六道仙人モード
              </figcaption>
            </figure>
          </div>

          {/* bola pencari kebenaran mengorbit */}
          <div className="absolute -inset-[13%] par pointer-events-none" style={{ "--k": 34 }} aria-hidden="true">
            <div className="w-full h-full orbit">
              {ORBS.map((a, i) => (
                <div key={a} className="absolute inset-0" style={{ transform: `rotate(${a}deg)` }}>
                  <span
                    className="orbit-bob absolute left-1/2 top-0 -ml-[3%] block w-[6%] aspect-square rounded-full bg-sumi border-[3px] border-kami shadow-[0_0_0_3px_#0a0a0a]"
                    style={{ "--d": `${-i * 0.3}s` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <span
            className="absolute -right-2 bottom-[4%] tategaki font-brush text-[clamp(22px,3.6vw,34px)] tracking-[0.3em] text-aka par"
            style={{ "--k": 26 }}
            aria-hidden="true"
          >
            火の意志
          </span>
        </div>
      </div>
    </section>
  );
}
