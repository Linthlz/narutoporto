import { useCallback, useEffect, useRef, useState } from "react";
import Nav from "./components/Nav.jsx";
import NinjaCard from "./components/NinjaCard.jsx";
import MissionGrid from "./components/MissionGrid.jsx";
import MissionModal from "./components/MissionModal.jsx";
import JutsuTransition, { JUTSU_KINDS } from "./components/JutsuTransition.jsx";
import Jutsu from "./components/Jutsu.jsx";
import Scrolls from "./components/Scrolls.jsx";
import Contact from "./components/Contact.jsx";
import Gate from "./components/Gate.jsx";
import { MascotTop } from "./components/Mascot.jsx";
import Shunshin from "./components/Shunshin.jsx";
import { LeafField, InkClicks, SealBand } from "./components/Ambient.jsx";
import { reduceMotion } from "./components/Fx.jsx";
import { profile } from "./data/profile.js";
import { missions, jutsu, scrolls } from "./data/missions.js";

const OPEN_AT = 1250; // berkas dibuka di bawah lapisan jurus yang mulai memudar
const END_AT = 1800; // lapisan transisi dilepas
const JUMP_AT = 330; // pindah posisi saat asap shunshin paling tebal
const JUMP_END = 820;

/* Latar [data-par] bergeser lebih lambat dari gulir → kesan kedalaman. */
function useParallax() {
  useEffect(() => {
    if (reduceMotion()) return undefined;
    const els = [...document.querySelectorAll("[data-par]")];
    let raf = 0;
    const tick = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      els.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const k = parseFloat(el.dataset.par) || 0.2;
        el.style.transform = `translate3d(0, ${((r.top + r.height / 2 - mid) * -k).toFixed(1)}px, 0)`;
      });
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* Tandai elemen [data-reveal] saat masuk layar. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [casting, setCasting] = useState(null);
  const [open, setOpen] = useState(null);
  const [jump, setJump] = useState(null);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);
  useReveal();
  useParallax();

  const cast = useCallback((mission, index = 0) => {
    if (reduceMotion()) {
      setOpen(mission);
      return;
    }

    clearTimers();
    setOpen(null);
    setCasting({ mission, kind: JUTSU_KINDS[index % JUTSU_KINDS.length] });
    timers.current.push(setTimeout(() => setOpen(mission), OPEN_AT));
    timers.current.push(setTimeout(() => setCasting(null), END_AT));
  }, []);

  const onJump = useCallback((e, href, label = "") => {
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const go = () => {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      history.replaceState(null, "", href);
    };
    if (reduceMotion()) {
      go();
      return;
    }
    clearTimers();
    setJump({ id: Date.now(), label: label || "ATAS" });
    timers.current.push(setTimeout(go, JUMP_AT));
    timers.current.push(setTimeout(() => setJump(null), JUMP_END));
  }, []);

  const topIndex = Math.max(
    0,
    missions.findIndex((m) => m.rank === "S")
  );

  return (
    <>
      <Gate />
      <LeafField />
      <InkClicks />
      <Nav handle={profile.handle} onJump={onJump} />

      <main>
        <NinjaCard profile={profile} onCast={() => cast(missions[topIndex], 0)} onJump={onJump} />
        <SealBand />
        <MissionGrid missions={missions} onCast={cast} />
        <Jutsu groups={jutsu} />
        <SealBand
          reverse
          words={["螺旋丸 RASENGAN", "影分身の術 KAGE BUNSHIN", "月読 TSUKUYOMI", "瞬身の術 SHUNSHIN", "口寄せの術 KUCHIYOSE", "仙法 SENJUTSU"]}
        />
        <Scrolls items={scrolls} />
        <Contact profile={profile} />
      </main>

      <footer className="border-t-[3px] border-sumi py-9">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <p className="m-0 font-disp font-bold tracking-[0.16em] text-[13px]">
            {profile.handle} · 疾 風 の 記 録
          </p>
          <p className="m-0 text-[11.5px] text-kasumi max-w-[62ch]">
            Karya penggemar non-komersial. Naruto beserta seluruh karakter dan ilustrasinya © Masashi Kishimoto /
            Shueisha. Ilustrasi karakter dipakai sebagai tribut, bukan klaim kepemilikan.
          </p>
        </div>
      </footer>

      <JutsuTransition cast={casting} />
      <Shunshin jump={jump} />
      <MascotTop onJump={onJump} />
      <MissionModal mission={open} onClose={() => setOpen(null)} />
    </>
  );
}
