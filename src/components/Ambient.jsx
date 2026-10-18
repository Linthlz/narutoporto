import { useEffect, useState } from "react";
import { Leaf } from "./Fx.jsx";

// Latar bergerak yang menempel di seluruh halaman: daun Konoha berguguran
// dan percikan tinta di titik klik.

const LEAVES = Array.from({ length: 13 }, (_, i) => ({
  left: (i * 37 + 7) % 100,
  size: 16 + ((i * 7) % 16),
  t: 13 + ((i * 5) % 11),
  d: -((i * 2.3) % 20),
  s: 2.4 + ((i * 3) % 4) * 0.5,
  red: i % 4 === 1,
}));

export function LeafField() {
  return (
    <div className="leaf-layer fixed inset-0 z-[40] pointer-events-none overflow-hidden" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <span
          key={i}
          className="leaf-fall"
          style={{ left: `${l.left}%`, "--t": `${l.t}s`, "--d": `${l.d}s`, opacity: 0.75 }}
        >
          <span className="leaf-sway block" style={{ "--s": `${l.s}s` }}>
            <Leaf red={l.red} className="block" style={{ width: l.size }} />
          </span>
        </span>
      ))}
    </div>
  );
}

const RAYS = Array.from({ length: 10 }, (_, i) => i * 36);

export function InkClicks() {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    let n = 0;
    const onDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const id = ++n;
      setBursts((b) => [...b.slice(-5), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 520);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none" aria-hidden="true">
      {bursts.map((b) => (
        <span key={b.id} className="ink-burst absolute" style={{ left: b.x, top: b.y }}>
          {RAYS.map((a) => (
            <i key={a} style={{ "--a": `${a}deg` }} />
          ))}
        </span>
      ))}
    </div>
  );
}

const SEAL_TEXT = [
  "子 NE",
  "丑 USHI",
  "寅 TORA",
  "卯 U",
  "辰 TATSU",
  "巳 MI",
  "午 UMA",
  "未 HITSUJI",
  "申 SARU",
  "酉 TORI",
  "戌 INU",
  "亥 I",
];

/* Pita miring berisi dua belas segel tangan yang terus berjalan. */
export function SealBand({ reverse = false, words }) {
  const list = words || SEAL_TEXT;
  const row = (
    <div className="flex shrink-0 items-center">
      {list.map((w, i) => (
        <span key={i} className="flex items-center gap-5 px-5 whitespace-nowrap">
          <span className="font-brush text-[clamp(16px,2.4vw,22px)] tracking-[0.2em]">{w}</span>
          <svg viewBox="-10 -10 20 20" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
            <path d="M0 -9 L2 -2 L9 0 L2 2 L0 9 L-2 2 L-9 0 L-2 -2 Z" fill="#c8102e" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative py-6 overflow-hidden" aria-hidden="true">
      <div
        className={`relative bg-sumi text-kami border-y-[3px] border-sumi py-3 ${
          reverse ? "rotate-[1.4deg]" : "-rotate-[1.4deg]"
        } -mx-6`}
      >
        <div className={`marquee flex w-max ${reverse ? "rev" : ""}`}>
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
