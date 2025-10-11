"use client";
import Navbar from "@/components/shared/Navbar";
import { motion as m } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Showcase() {
  const gear = [
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
    {
      id: 4,
      name: "KZ AM01",
      desc: "Dongle DAC & amplifier portable dengan dukungan decoding hingga 32-bit / 384 kHz, output 1 Vrms (≈ 30 mW @ 32Ω), dan SNR sekitar 110 dB. Didesain dengan arsitektur dual-chip (DAC + amplifier) agar bisa mendukung beban hingga 600 Ω dan meminimalkan distorsi.",
      img: "/product/kz-am01-dac.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>HikariSound - Showcase</title>
      </Head>
      <Navbar />

      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="/images/speaker-studio-reference.jpg"
          alt="Audio Showcase"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative text-center text-white px-6">
          <m.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Audio <span className="text-[#51FF76FF]">Showcase</span>
          </m.h1>
          <m.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Koleksi perangkat audio pilihan saya — hasil kombinasi detail,
            desain, dan karakter suara yang khas.
          </m.p>
        </div>
      </section>

      <section className="bg-white text-black py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <m.h2
            className="text-4xl font-bold text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#51FF76FF]">Setup</span>
          </m.h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {gear.map((item, idx) => (
              <m.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 text-center">
        <m.p
          className="text-lg text-gray-400 italic max-w-3xl mx-auto px-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          “Setiap perangkat memiliki karakternya sendiri. Tidak ada yang
          sempurna — yang penting adalah bagaimana kamu menikmatinya.”
        </m.p>
      </section>
    </>
  );
}
