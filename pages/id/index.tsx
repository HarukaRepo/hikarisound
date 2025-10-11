import Head from "next/head";
import { motion as m } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import ListeningRoom from "@/components/Home/ListeningRoom";
import FavoriteAlbums from "@/components/Home/FavTracks";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      id: 1,
      name: "Moondrop Chu II",
      desc: "10mm dynamic driver (aluminum-magnesium alloy diaphragm), low impedance (~18Ω) dan sensitivitas tinggi; suara jelas dengan bass punchy dan treble yang terperinci — IEM budget yang sangat impresif untuk harganya.",
      img: "/product/chu2.jpg",
    },
    {
      id: 2,
      name: "Nakamichi MV200",
      desc: "Hybrid IEM dengan konfigurasi 1 Dynamic Driver 9mm + 1 Balanced Armature. Menghasilkan suara kuat dengan bass presisi dan keseimbangan frekuensi tinggi–rendah yang alami. Dilengkapi kabel HIFI silver-plated berinti kevlar untuk transparansi dan ketahanan tinggi. Desain ergonomis mengikuti kontur telinga, nyaman dipakai lama dan stabil bahkan saat aktivitas berat.",
      img: "/product/nakamichi-mv200.png",
    },
    {
      id: 3,
      name: "JCALLY JM10 PRO",
      desc: "Portable DAC/AMP dongle berbasis chip CS43131 — menawarkan distorsi sangat rendah (0.0003 % @32 Ω), SNR tinggi > 120 dB, dan output hingga 0.95 Vrms pada 32 Ω (2 Vrms pada 600 Ω). Mendukung PCM native dan DSD64/128/256, dengan respons frekuensi 20 Hz–40 kHz. Cocok untuk IEM & headphone dengan kebutuhan audio berkualitas tinggi.",
      img: "/product/jcally-jm10.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Hikarisound</title>
      </Head>

      <Navbar />

      <m.div className="w-full h-[90vh] flex flex-col justify-center items-center text-center bg-white text-black px-6">
        <m.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          whileHover={{ color: "#51FF76FF" }}
          transition={{ duration: 0.3 }}
        >
          Experience True Sound.
        </m.h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Perjalanan pribadi saya dalam dunia audio murni — menjelajahi presisi,
          kehangatan, dan emosi.
        </p>

        <Link href="/id/showcase" passHref>
          <m.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#51FF76FF",
              color: "#000",
            }}
            transition={{ duration: 0.2 }}
            className="px-8 py-3 border border-black rounded-md font-medium hover:text-black"
          >
            Explore My Setup
          </m.button>
        </Link>
      </m.div>

      <section className="w-full bg-white text-black py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Pengaturan <span className="text-[#51FF76FF]">Audio Saya</span>
          </h2>
          <p className="text-gray-600">
            Koleksi terkurasi dari peralatan yang membentuk suara pribadi saya.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {items.map((item, i) => (
            <m.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-lg transition"
            >
              <div className="w-full h-64">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-5">
                  {item.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </section>
      <ListeningRoom />
      <FavoriteAlbums />
      <section
        id="philosophy"
        className="w-full bg-white text-black py-24 px-6 md:px-16 border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <m.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Filosofi <span className="text-[#51FF76FF]">Mendengar</span>
          </m.h2>

          <m.p
            className="text-gray-600 text-lg leading-relaxed mb-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Suara bukan sekadar apa yang kita dengar - tetapi apa yang kita
            rasakan. Setiap nada membawa emosi dan niat dari sang pencipta, dan
            tujuanku adalah merasakannya dalam bentuk yang paling murni dan
            jujur.
            <br />
            <br />
            Aku percaya bahwa definisi sejati dari hi-fi bukan tentang
            kesempurnaan, melainkan tentang koneksi - jembatan antara seni dan
            perasaan manusia.
          </m.p>

          <m.div
            className="text-sm text-gray-400 italic"
            whileHover={{ color: "#000" }}
            transition={{ duration: 0.3 }}
          >
            “Dengarkan bukan untuk memanjakan telinga, tapi untuk menyentuh
            jiwa.”
          </m.div>
        </div>
      </section>

      <section
        id="contact"
        className="w-full bg-black text-white py-24 px-6 md:px-16 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <m.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="text-[#51FF76FF]">/ Social</span>
          </m.h2>

          <m.p
            className="text-gray-400 text-lg leading-relaxed mb-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Punya pertanyaan, rekomendasi musik, atau sekadar ingin ngobrol soal
            gear?
            <br />
            Jangan ragu untuk menghubungi saya lewat platform di bawah ini.
          </m.p>

          <m.div
            className="flex justify-center gap-6 flex-wrap"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://instagram.com/fndy.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#51FF76FF] transition-colors duration-300 text-xl"
            >
              Instagram
            </a>
            <a
              href="https://x.com/FandyFrOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#51FF76FF] transition-colors duration-300 text-xl"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.reddit.com/user/FandyFafa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#51FF76FF] transition-colors duration-300 text-xl"
            >
              Reddit
            </a>
            <a
              href="mailto:mirai.studio365@gmail.com"
              className="text-gray-300 hover:text-[#51FF76FF] transition-colors duration-300 text-xl"
            >
              Email
            </a>
          </m.div>

          <m.div
            className="text-gray-600 text-sm mt-12"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            © {new Date().getFullYear()} — Built with Fandy Fathurrohman 🎧
          </m.div>
        </div>
      </section>
    </>
  );
}
