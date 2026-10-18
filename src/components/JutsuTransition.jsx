import { Rasengan, Sharingan, Smoke } from "./Fx.jsx";
import { IMG } from "../data/assets.js";

// Transisi layar penuh saat sebuah misi dibuka. Tiap kartu merapal satu dari
// tiga jurus bergiliran: Rasengan, Kage Bunshin, Tsukuyomi.
// Semua varian menutup layar di ~0,2 dtk, memuncak, lalu keluar di ~1,15 dtk.

export const JUTSU_KINDS = ["rasengan", "bunshin", "tsukuyomi"];

function TitlePlate({ mission, dark = true, delay = 380 }) {
  return (
    <div className="absolute inset-x-0 bottom-[9%] px-6 text-center fade-up" style={{ "--d": `${delay}ms` }}>
      <p
        className={`inline-block m-0 font-disp font-extrabold leading-none px-5 py-3 border-[3px] ${
          dark ? "bg-sumi text-kami border-kami" : "bg-kami text-sumi border-sumi shadow-panel"
        }`}
        style={{ fontSize: "clamp(26px,6vw,62px)" }}
      >
        {mission.title}
      </p>
      <p
        className={`m-0 mt-3 font-disp tracking-kanji ${dark ? "text-kami/90" : "text-sumi"}`}
        style={{ fontSize: "clamp(12px,2.2vw,18px)" }}
      >
        {mission.rank} 級 任 務 · {mission.kanji}
      </p>
    </div>
  );
}

function JutsuName({ jp, romaji, className = "", style }) {
  return (
    <div className={`absolute tategaki font-brush leading-none sfx-stay ${className}`} style={style}>
      <span style={{ fontSize: "clamp(44px,9vw,104px)" }}>{jp}</span>
      <span className="block font-body font-black text-[11px] tracking-label mt-3" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
        {romaji}
      </span>
    </div>
  );
}

function RasenganCast({ mission }) {
  return (
    <div className="absolute inset-0 bg-sumi jt-fade-in jt-exit-fade overflow-hidden">
      <img src={IMG.kurama} alt="" className="absolute inset-0 w-full h-full object-cover object-top invert opacity-[0.22] fade-up" />
      <div className="absolute -inset-1/4 speed-radial-inv opacity-70 animate-zoomlines" />
      <div className="absolute -inset-1/4 speed-radial-inv opacity-40 spin-c" style={{ "--t": "3s" }} />
      <div className="absolute inset-0 grid place-items-center shake">
        <div className="rz-grow w-[min(70vmin,560px)] h-[min(70vmin,560px)]">
          <Rasengan className="w-full h-full" />
        </div>
      </div>
      <JutsuName
        jp="螺旋丸"
        romaji="RASENGAN"
        className="left-[6%] top-[10%] text-kami"
        style={{ "--d": "180ms", "--r": "0deg" }}
      />
      <b
        className="absolute right-[7%] top-[14%] font-disp font-extrabold text-aka sfx-in"
        style={{ fontSize: "clamp(48px,10vw,120px)", "--d": "320ms", "--r": "12deg", WebkitTextStroke: "2px #fbfaf7" }}
      >
        ギュイイン
      </b>
      <TitlePlate mission={mission} />
      <div className="absolute inset-0 bg-kami rz-white" />
    </div>
  );
}

const CLONES = [
  [16, 26, 0],
  [84, 24, 70],
  [30, 70, 130],
  [70, 72, 190],
  [50, 22, 250],
  [8, 64, 310],
  [92, 66, 360],
];
const CLONE_PUFFS = CLONES.flatMap(([x, y, d]) => [
  [x, y, 22, d],
  [x - 5, y + 5, 14, d + 30],
  [x + 5, y - 4, 15, d + 40],
]);
const FINAL_PUFFS = [
  [50, 50, 90, 1020],
  [20, 30, 60, 1060],
  [80, 30, 60, 1060],
  [20, 76, 64, 1080],
  [80, 76, 64, 1080],
];

function BunshinCast({ mission }) {
  return (
    <div className="absolute inset-0 bg-kami jt-fade-in jt-exit-fade overflow-hidden">
      <div className="absolute -inset-1/4 speed-radial opacity-25 animate-zoomlines" />
      <div className="absolute inset-0 tone-lg" />
      {CLONES.map(([x, y, d], i) => (
        <img
          key={i}
          src={IMG.narutoSegel}
          alt=""
          className="clone-pop absolute w-[min(30vmin,240px)] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          style={{ left: `${x}%`, top: `${y}%`, "--d": `${d + 160}ms` }}
        />
      ))}
      <Smoke puffs={CLONE_PUFFS} t="0.6s" />
      <JutsuName
        jp="影分身の術"
        romaji="KAGE BUNSHIN NO JUTSU"
        className="right-[5%] top-[6%] text-sumi"
        style={{ "--d": "420ms", "--r": "0deg" }}
      />
      <b
        className="absolute left-[6%] top-[38%] font-disp font-extrabold text-aka sfx-in"
        style={{ fontSize: "clamp(52px,11vw,130px)", "--d": "120ms", "--r": "-14deg", WebkitTextStroke: "3px #0a0a0a" }}
      >
        ボボン!
      </b>
      <TitlePlate mission={mission} dark={false} delay={520} />
      <Smoke puffs={FINAL_PUFFS} hold t="0.4s" />
    </div>
  );
}

function TsukuyomiCast({ mission }) {
  return (
    <div className="absolute inset-0 jt-exit-iris">
      <div className="absolute inset-0 bg-aka jt-iris-in overflow-hidden">
        <div className="absolute inset-0 hatch-x" style={{ opacity: 0.35 }} />
        <div className="absolute right-[10%] top-[8%] w-[min(26vmin,200px)] h-[min(26vmin,200px)] rounded-full bg-sumi fade-up" />
        <img
          src={IMG.itachi}
          alt=""
          className="itachi-rise absolute bottom-0 left-1/2 -translate-x-1/2 h-[96vh] w-auto max-w-none mix-blend-multiply"
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="sh-grow w-[min(46vmin,380px)] h-[min(46vmin,380px)]">
            <Sharingan className="w-full h-full drop-shadow-[0_0_30px_rgba(0,0,0,.55)]" speed="0.9s" />
          </div>
        </div>
        <JutsuName
          jp="月読"
          romaji="TSUKUYOMI"
          className="left-[6%] top-[10%] text-sumi"
          style={{ "--d": "300ms", "--r": "0deg" }}
        />
        <TitlePlate mission={mission} delay={460} />
      </div>
    </div>
  );
}

export default function JutsuTransition({ cast }) {
  if (!cast) return null;
  const { mission, kind } = cast;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden" aria-hidden="true">
      {kind === "bunshin" ? (
        <BunshinCast mission={mission} />
      ) : kind === "tsukuyomi" ? (
        <TsukuyomiCast mission={mission} />
      ) : (
        <RasenganCast mission={mission} />
      )}
    </div>
  );
}
