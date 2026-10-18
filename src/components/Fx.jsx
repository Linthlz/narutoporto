// Potongan efek jurus yang dipakai berulang: rasengan, sharingan, asap, daun, gagak.

const INK = "#0a0a0a";
const PAPER = "#fbfaf7";
const AKA = "#c8102e";

export const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Busur-busur pusaran yang berputar dengan kecepatan berbeda. */
function arcs(n, r0, step, sweep, offset) {
  return Array.from({ length: n }, (_, k) => {
    const r = r0 + k * step;
    const a = ((k * 67 + offset) * Math.PI) / 180;
    const b = a + (sweep * Math.PI) / 180;
    return `M${(r * Math.cos(a)).toFixed(1)} ${(r * Math.sin(a)).toFixed(1)} A${r} ${r} 0 0 1 ${(
      r * Math.cos(b)
    ).toFixed(1)} ${(r * Math.sin(b)).toFixed(1)}`;
  });
}
const ARCS_A = arcs(7, 14, 7, 150, 0);
const ARCS_B = arcs(6, 18, 8, 110, 40);

export function Rasengan({ className = "", ink = PAPER, glow = true }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      {glow ? (
        <>
          <defs>
            <radialGradient id={`rz-${ink.slice(1)}`}>
              <stop offset="0" stopColor={ink} stopOpacity="1" />
              <stop offset="0.3" stopColor={ink} stopOpacity="0.7" />
              <stop offset="1" stopColor={ink} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle r="80" fill={`url(#rz-${ink.slice(1)})`} opacity="0.4" />
        </>
      ) : null}
      <g className="spin-c" style={{ "--t": "0.7s" }}>
        <circle r="70" fill="none" />
        {ARCS_A.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={ink} strokeWidth={3.4 - i * 0.3} strokeLinecap="round" />
        ))}
      </g>
      <g className="spin-c rev" style={{ "--t": "1.1s" }}>
        <circle r="70" fill="none" />
        {ARCS_B.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
        ))}
      </g>
      <g className="spin-c" style={{ "--t": "2.4s" }}>
        <circle r="66" fill="none" stroke={ink} strokeWidth="1.4" strokeDasharray="2 7" opacity="0.6" />
      </g>
      <circle r="9" fill={ink} />
    </svg>
  );
}

export function Sharingan({ className = "", speed = "2.4s" }) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true">
      <circle r="47" fill={AKA} stroke={INK} strokeWidth="3.5" />
      <circle r="47" fill="url(#sh-shade)" />
      <defs>
        <radialGradient id="sh-shade">
          <stop offset="0.55" stopColor={INK} stopOpacity="0" />
          <stop offset="1" stopColor={INK} stopOpacity="0.45" />
        </radialGradient>
      </defs>
      <circle r="28" fill="none" stroke={INK} strokeWidth="1.4" opacity="0.75" />
      <g className="spin-c" style={{ "--t": speed }}>
        <circle r="47" fill="none" />
        {[0, 120, 240].map((a) => (
          <g key={a} transform={`rotate(${a}) translate(0 -28)`}>
            <circle r="6.6" fill={INK} />
            <path d="M-2 -6.3 C9 -9.5 16 -1 13 9 C11 2 6 -1.5 3 -1.5 Z" fill={INK} />
          </g>
        ))}
      </g>
      <circle r="10.5" fill={INK} />
      <circle cx="-14" cy="-18" r="5" fill={PAPER} opacity="0.55" />
    </svg>
  );
}

/* Asap manga: lapisan garis hitam di bawah, isian kertas di atas,
   sehingga gumpalan yang tumpang-tindih menyatu dengan satu garis luar. */
export function Smoke({ puffs, unit = "vmin", line = 0.9, hold = false, t }) {
  const cls = `puff${hold ? " hold" : ""}`;
  return (
    <>
      {puffs.map(([x, y, s, d], i) => (
        <i
          key={`o${i}`}
          className={cls}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `calc(${s}${unit} + ${line * 2}vmin)`,
            height: `calc(${s}${unit} + ${line * 2}vmin)`,
            background: INK,
            "--d": `${d}ms`,
            "--t": t,
          }}
        />
      ))}
      {puffs.map(([x, y, s, d], i) => (
        <i
          key={`f${i}`}
          className={cls}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${s}${unit}`,
            height: `${s}${unit}`,
            background: PAPER,
            "--d": `${d}ms`,
            "--t": t,
          }}
        />
      ))}
    </>
  );
}

export function Leaf({ className = "", red = false, style }) {
  return (
    <svg viewBox="0 0 40 24" className={className} style={style} aria-hidden="true">
      <path
        d="M2 12 C10 1 26 0 38 12 C26 24 10 23 2 12 Z"
        fill={red ? AKA : PAPER}
        stroke={INK}
        strokeWidth="2"
      />
      <path d="M2 12 L36 12 M14 12 L20 6 M22 12 L28 7 M14 12 L20 18 M22 12 L28 17" stroke={INK} strokeWidth="1.3" />
    </svg>
  );
}

export function Crow({ className = "" }) {
  return (
    <svg viewBox="0 0 48 26" className={className} aria-hidden="true">
      <path
        fill={INK}
        d="M24 14 C21 8 15 2 2 1 C9 6 12 10 14 14 C8 14 4 16 1 20 C8 19 14 19 19 18 L21 24 L24 19 L27 24 L29 18 C34 19 40 19 47 20 C44 16 40 14 34 14 C36 10 39 6 46 1 C33 2 27 8 24 14 Z"
      />
    </svg>
  );
}

export function Shuriken({ className = "", style }) {
  return (
    <svg viewBox="-20 -20 40 40" className={className} style={style} aria-hidden="true">
      <path
        d="M0 -19 L4 -4 L19 0 L4 4 L0 19 L-4 4 L-19 0 L-4 -4 Z"
        fill={INK}
      />
      <circle r="3.4" fill={PAPER} />
    </svg>
  );
}
