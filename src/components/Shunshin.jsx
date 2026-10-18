import { Leaf, Smoke } from "./Fx.jsx";

// Shunshin no Jutsu: pusaran daun + kepulan asap saat berpindah seksi lewat navigasi.
const SWIRL = Array.from({ length: 18 }, (_, i) => ({ a: i * 20, d: (i % 6) * 22, red: i % 3 === 0 }));
const PUFFS = [
  [50, 50, 46, 0],
  [36, 44, 30, 40],
  [64, 46, 32, 60],
  [44, 62, 30, 80],
  [58, 60, 28, 90],
];

export default function Shunshin({ jump }) {
  if (!jump) return null;
  return (
    <div key={jump.id} className="fixed inset-0 z-[90] pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-kami shunshin-veil" />
      <Smoke puffs={PUFFS} t="0.75s" />
      <div className="absolute left-1/2 top-1/2">
        {SWIRL.map((l) => (
          <span key={l.a} className="swirl-leaf absolute" style={{ "--a": `${l.a}deg`, "--d": `${l.d}ms` }}>
            <Leaf red={l.red} className="block w-8" />
          </span>
        ))}
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center sfx-in" style={{ "--d": "60ms", "--r": "-4deg" }}>
          <b className="block font-brush leading-none text-sumi" style={{ fontSize: "clamp(56px,12vw,120px)" }}>
            瞬身
          </b>
          <span className="block mt-2 text-[11px] font-black tracking-label text-aka">{jump.label}</span>
        </div>
      </div>
    </div>
  );
}
