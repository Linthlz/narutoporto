/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kami: "#fbfaf7", // kertas
        kami2: "#f1ede4", // kertas tua
        sumi: "#0a0a0a", // tinta
        sumi2: "#232020", // tinta encer
        tone: "#c6c1b9", // screentone
        kasumi: "#6d6862", // abu hangat
        aka: "#c8102e", // merah stempel — satu-satunya warna
      },
      fontFamily: {
        disp: ['"Shippori Mincho B1"', "Georgia", "serif"],
        brush: ['"Yuji Syuku"', '"Shippori Mincho B1"', "serif"],
        body: ['"Zen Kaku Gothic New"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kanji: "0.42em",
        label: "0.22em",
      },
      boxShadow: {
        panel: "6px 6px 0 0 #0a0a0a",
        panelsm: "4px 4px 0 0 #0a0a0a",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        flash: {
          "0%": { opacity: "0" },
          "18%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        blob: {
          "0%": { transform: "scale(0) rotate(0deg)" },
          "70%": { transform: "scale(1.28) rotate(12deg)" },
          "100%": { transform: "scale(1.2) rotate(16deg)" },
        },
        zoomlines: {
          "0%": { opacity: "0", transform: "scale(.28)" },
          "30%": { opacity: ".95" },
          "100%": { opacity: "0", transform: "scale(2)" },
        },
        signflash: {
          "0%": { opacity: "0", transform: "scale(1.7)" },
          "40%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(.86)" },
        },
        ringin: {
          "0%": { opacity: "0", transform: "scale(.3) rotate(-40deg)" },
          "55%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1.7) rotate(26deg)" },
        },
        platein: {
          "0%": { opacity: "0", transform: "scale(.82)" },
          "32%": { opacity: "1", transform: "scale(1)" },
          "78%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1.06)" },
        },
        shardL: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-105%)" },
        },
        shardR: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(105%)" },
        },
        sheetin: {
          "0%": { opacity: "0", transform: "translateY(26px) scale(.97)" },
          "100%": { opacity: "1", transform: "none" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
        breathe: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
      },
      animation: {
        rise: "rise .8s cubic-bezier(.2,.8,.2,1) both",
        flash: "flash .5s ease-out both",
        blob: "blob .62s cubic-bezier(.2,.9,.25,1) both",
        zoomlines: "zoomlines .85s .12s ease-out both",
        signflash: "signflash .34s ease-out both",
        ringin: "ringin .9s .3s cubic-bezier(.2,.8,.2,1) both",
        platein: "platein .6s .6s cubic-bezier(.2,.8,.2,1) both",
        shardL: "shardL .55s .9s cubic-bezier(.65,0,.35,1) both",
        shardR: "shardR .55s .9s cubic-bezier(.65,0,.35,1) both",
        sheetin: "sheetin .5s cubic-bezier(.2,.8,.2,1) both",
        spinslow: "spin 26s linear infinite",
        spinfast: "spin 11s linear infinite reverse",
        breathe: "breathe 4.4s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
