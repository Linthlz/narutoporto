import { useEffect, useState } from "react";
import { IMG } from "../data/assets.js";
import { Shuriken } from "./Fx.jsx";

/* Simbol situs: wajah Naruto dalam lingkaran, dengan shuriken mengorbit. */
export function Emblem({ className = "", spinRef }) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <img
        src={IMG.simbol}
        alt=""
        className="block w-full h-full rounded-full border-[3px] border-sumi object-cover bg-kami"
      />
      <span ref={spinRef} className="absolute -right-1.5 -bottom-1.5 block w-[46%] h-[46%]">
        <Shuriken className="w-full h-full drop-shadow-[0_0_0_#fbfaf7]" />
      </span>
    </span>
  );
}

/* Maskot berjongkok di pojok layar; melompat dan kembali ke atas saat ditekan. */
export function MascotTop({ onJump }) {
  const [show, setShow] = useState(false);
  const [leap, setLeap] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#atas"
      onClick={(e) => {
        setLeap(true);
        setTimeout(() => setLeap(false), 700);
        onJump(e, "#atas", "ATAS");
      }}
      aria-label="Kembali ke atas"
      className={`mascot group fixed z-[45] right-3 sm:right-6 no-underline ${show ? "is-shown" : ""} ${
        leap ? "is-leap" : ""
      }`}
      style={{ bottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
    >
      <span className="mascot-bubble absolute right-full mr-1 top-2 whitespace-nowrap bg-kami border-[3px] border-sumi px-2.5 py-1 font-black text-[10px] tracking-label text-sumi">
        KE ATAS, DATTEBAYO!
      </span>
      <span className="mascot-panel block panel shadow-panelsm overflow-hidden bg-white transition-transform duration-200 group-hover:-translate-y-1">
        <img src={IMG.narutoJongkok} alt="" className="mascot-img block w-[64px] sm:w-[80px] h-auto" />
      </span>
    </a>
  );
}
