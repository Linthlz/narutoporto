// Semua gambar di public/assets. Daftar ini juga dipakai layar muat untuk pramuat.
const base = import.meta.env.BASE_URL;
const k = (f) => `${base}assets/karakter/${f}`;
const l = (f) => `${base}assets/latar/${f}`;

export const IMG = {
  simbol: `${base}assets/simbol.jpg`,
  gerbang: l("gerbang.jpg"),
  konoha: l("konoha.jpg"),
  kurama: l("kurama.jpg"),
  painGedo: l("pain-gedo.jpg"),
  lembahAkhir: l("lembah-akhir.jpg"),
  narutoSage: k("naruto-sage.jpg"),
  narutoSegel: k("naruto-segel.jpg"),
  narutoJongkok: k("naruto-jongkok.jpg"),
  hokage: k("hokage.jpg"),
  itachi: k("itachi.jpg"),
  itachiTakhta: k("itachi-takhta.jpg"),
  itachiPotret: k("itachi-potret.jpg"),
};

export const PRELOAD = Object.values(IMG);
