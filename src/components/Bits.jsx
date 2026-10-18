// Potongan kecil yang dipakai berulang: kepala seksi, stempel peringkat, pita arsir.

export function SectionHead({ kanji, title, note, id }) {
  return (
    <div
      id={id}
      data-reveal="rise"
      className="scroll-mt-24 mb-8 sm:mb-12 flex flex-wrap items-end gap-x-6 gap-y-3 border-b-[3px] border-sumi pb-4"
    >
      <div className="min-w-0">
        <h2 className="font-disp font-extrabold leading-[1.08] m-0 text-[clamp(28px,5vw,46px)] text-balance">
          <span data-reveal="slash" className="inline-block" style={{ "--d": "120ms" }}>
            {title}
          </span>
        </h2>
        {note ? <p className="m-0 mt-2 text-sm text-kasumi max-w-[46ch]">{note}</p> : null}
      </div>
      <span className="relative ml-auto shrink-0 px-3 py-1">
        <span className="brush-bar absolute inset-0 bg-sumi" aria-hidden="true" />
        <span className="relative font-brush text-[clamp(20px,3.4vw,30px)] tracking-kanji text-kami">{kanji}</span>
      </span>
    </div>
  );
}

export function RankStamp({ rank, size = "md" }) {
  const red = rank === "S" || rank === "A";
  const dim = size === "sm" ? "w-10 h-10 text-base" : "w-14 h-14 text-2xl";
  return (
    <span
      className={`${dim} shrink-0 grid place-items-center rounded-full font-disp font-extrabold border-[3px] rotate-[-9deg] ${
        red ? "border-aka text-aka" : "border-sumi text-sumi"
      }`}
      aria-label={`Peringkat ${rank}`}
    >
      {rank}
    </span>
  );
}

export function Hatch({ className = "" }) {
  return <div className={`hatch-x pointer-events-none ${className}`} aria-hidden="true" />;
}

export function ToneBand({ className = "" }) {
  return <div className={`tone pointer-events-none ${className}`} aria-hidden="true" />;
}
