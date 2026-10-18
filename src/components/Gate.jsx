import { useEffect, useState } from "react";
import { IMG, PRELOAD } from "../data/assets.js";
import { Leaf, Rasengan, reduceMotion } from "./Fx.jsx";

// Layar muat: gerbang tinta yang sudah terbuka, lorongnya gelap.
// Selama aset dimuat, chakra berputar di dalam lorong. Setelah siap, cahaya
// membanjiri lorong dan memperlihatkan desa Konoha, kamera menerobos masuk,
// kilat putih, lalu halaman tampil.

const MIN_SHOW = 1800; // biar gerbang sempat terlihat walau aset sudah di cache
const OPEN_MS = 1800; // cahaya masuk + kamera menerobos
const FADE_MS = 450;

// Lorong gelap pada gambar gerbang 735×588: trapesium, atas x 262–478 (y 224),
// bawah x 246–492 (y 545). Disimpan sebagai kotak pembatas + clip-path.
const HOLE = { x: 246 / 735, y: 224 / 588, w: 246 / 735, h: 322 / 588 };
const HOLE_CLIP = "polygon(6.5% 0, 94.3% 0, 100% 100%, 0 100%)";

const pct = (v) => `${(v * 100).toFixed(3)}%`;

const STATUS = [
  "Penjaga gerbang memeriksa surat izin…",
  "Membuka gulungan misi…",
  "Mengumpulkan chakra…",
  "Gerbang siap dilewati",
];

const LEAVES = Array.from({ length: 9 }, (_, i) => ({
  left: (i * 41 + 9) % 100,
  t: 7 + (i % 4) * 1.5,
  d: -i * 0.9,
  red: i % 3 === 0,
}));

export default function Gate() {
  const [phase, setPhase] = useState("loading"); // loading → open → fade → done
  const [loaded, setLoaded] = useState(0);
  const total = PRELOAD.length + 1; // +1 untuk font

  useEffect(() => {
    let alive = true;
    const t0 = performance.now();
    const tick = () => alive && setLoaded((n) => n + 1);

    const jobs = PRELOAD.map(
      (src) =>
        new Promise((res) => {
          const im = new Image();
          im.onload = im.onerror = () => {
            tick();
            res();
          };
          im.src = src;
        })
    );
    const fonts = (document.fonts ? document.fonts.ready : Promise.resolve()).then(tick);

    document.body.classList.add("intro-on");
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timers = [];
    Promise.all([...jobs, fonts]).then(() => {
      const wait = Math.max(0, MIN_SHOW - (performance.now() - t0));
      timers.push(
        setTimeout(() => {
          if (!alive) return;
          if (reduceMotion()) {
            setPhase("fade");
            timers.push(setTimeout(() => alive && setPhase("done"), FADE_MS));
            return;
          }
          setPhase("open");
          timers.push(setTimeout(() => alive && setPhase("fade"), OPEN_MS));
          timers.push(setTimeout(() => alive && setPhase("done"), OPEN_MS + FADE_MS));
        }, wait)
      );
    });

    return () => {
      alive = false;
      timers.forEach(clearTimeout);
      document.body.classList.remove("intro-on");
      document.body.style.overflow = prev;
    };
  }, []);

  // pelepasan kunci halaman begitu gerbang selesai
  useEffect(() => {
    if (phase === "done") {
      document.body.classList.remove("intro-on");
      document.body.style.overflow = "";
    }
  }, [phase]);

  if (phase === "done") return null;

  const p = Math.min(1, loaded / total);
  const pctText = Math.round(p * 100);
  const status = STATUS[Math.min(STATUS.length - 1, Math.floor(p * (STATUS.length - 1)))];
  const opening = phase === "open" || phase === "fade";

  return (
    <div
      className={`gate fixed inset-0 z-[200] overflow-hidden select-none bg-kami ${opening ? "is-open" : ""} ${
        phase === "fade" ? "gate-fade" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Memuat halaman, ${pctText} persen`}
    >
      {/* garis kecepatan berputar pelan di belakang gerbang */}
      <div className="absolute -inset-1/2 speed-radial opacity-[0.12] orbit" style={{ animationDuration: "50s" }} aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-32 tone-lg" aria-hidden="true" />

      <div className="gate-scene">
        <div className="gate-drift absolute inset-0">
          <img src={IMG.gerbang} alt="" className="absolute inset-0 w-full h-full mix-blend-multiply" />

          {/* lorong gerbang: chakra saat memuat, desa Konoha saat dibuka */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: pct(HOLE.x),
              top: pct(HOLE.y),
              width: pct(HOLE.w),
              height: pct(HOLE.h),
              clipPath: HOLE_CLIP,
            }}
          >
            <div className="gate-chakra absolute inset-0 grid place-items-center">
              <Rasengan className="w-[78%] h-auto opacity-80" />
              <span className="absolute bottom-[9%] font-disp text-kami tabular-nums text-[clamp(14px,2.6vw,26px)]">
                {pctText}%
              </span>
            </div>
            <div className="gate-village absolute inset-0 bg-kami">
              <img src={IMG.konoha} alt="" className="w-full h-full object-cover object-[50%_30%]" />
              <div className="gate-light absolute inset-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {LEAVES.map((l, i) => (
          <span key={i} className="leaf-fall" style={{ left: `${l.left}%`, "--t": `${l.t}s`, "--d": `${l.d}s` }}>
            <span className="leaf-sway block" style={{ "--s": "2.6s" }}>
              <Leaf red={l.red} className="block w-6" />
            </span>
          </span>
        ))}
      </div>

      <div className="gate-flash absolute inset-0 bg-kami pointer-events-none" />

      {/* teks dan bilah muat */}
      <div className="gate-ui absolute inset-0 flex flex-col justify-between pointer-events-none">
        <div className="text-center pt-[max(22px,env(safe-area-inset-top))] px-4">
          <p className="m-0 font-brush text-sumi leading-none" style={{ fontSize: "clamp(30px,6vw,60px)" }}>
            木ノ葉隠れの里
          </p>
          <p className="m-0 mt-2 text-[11px] font-black tracking-label text-aka">KONOHAGAKURE · GERBANG DESA</p>
        </div>

        <div className="px-5 pb-[max(22px,env(safe-area-inset-bottom))]">
          <div className="mx-auto w-full max-w-[460px] bg-sumi border-[3px] border-sumi p-4 shadow-panel">
            <div className="flex items-baseline justify-between gap-3 text-kami">
              <span className="text-[12px] font-bold min-w-0 truncate">{status}</span>
              <span className="font-disp text-[18px] tabular-nums shrink-0">{pctText}%</span>
            </div>
            <div className="relative mt-3 h-3 border-2 border-kami/70 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-aka transition-[width] duration-300 ease-out"
                style={{ width: `${p * 100}%` }}
              />
            </div>
            <p className="m-0 mt-2.5 text-[10px] font-black tracking-label text-kami/60 text-center">
              {opening ? "門 · MEMASUKI DESA" : "門 · MENUNGGU IZIN MASUK"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
