import { useEffect, useRef } from "react";
import { Emblem } from "./Mascot.jsx";

const LINKS = [
  { href: "#misi", jp: "任務", id: "MISI" },
  { href: "#jutsu", jp: "術", id: "JUTSU" },
  { href: "#gulungan", jp: "巻物", id: "GULUNGAN" },
  { href: "#kontak", jp: "連絡", id: "KONTAK" },
];

export default function Nav({ handle, onJump }) {
  const bar = useRef(null);
  const star = useRef(null);

  // bilah chakra = kemajuan gulir; shuriken di logo berputar mengikuti gulir
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (star.current) star.current.style.transform = `rotate(${window.scrollY * 0.6}deg)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className="sticky z-50 bg-kami/90 backdrop-blur border-b-[3px] border-sumi"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="wrap flex items-center gap-4 py-2.5">
        <a href="#atas" onClick={(e) => onJump(e, "#atas")} className="flex items-center gap-2.5 no-underline text-sumi shrink-0">
          <Emblem className="w-9 h-9" spinRef={star} />
          <b className="font-disp tracking-[0.18em] text-[15px]">{handle}</b>
        </a>

        <nav className="ml-auto flex gap-0 sm:gap-0.5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => onJump(e, l.href, l.id)}
              className="group relative px-1.5 sm:px-2.5 py-2 no-underline text-sumi text-[11px] font-black tracking-label whitespace-nowrap"
            >
              <span className="font-brush sm:mr-1.5 text-[13px] align-middle">{l.jp}</span>
              <span className="align-middle hidden sm:inline">{l.id}</span>
              <span className="absolute left-2.5 right-2.5 bottom-1 h-[2px] bg-aka scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute left-0 right-0 -bottom-[3px] h-[3px]" aria-hidden="true">
        <div ref={bar} className="h-full bg-aka origin-left" style={{ transform: "scaleX(0)" }} />
      </div>
    </header>
  );
}
