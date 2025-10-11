"use client";
import Navbar from "@/components/shared/Navbar";
import { motion as m } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>HikariSound - About</title>
      </Head>
      <Navbar />

      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src="/images/amp-image.jpg"
          alt="Studio setup"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <m.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-[#51FF76FF]">HikariSound</span>
          </m.h1>
          <m.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Sebuah perjalanan melalui suara, emosi, dan keahlian — di mana
            teknologi bertemu dengan seni.
          </m.p>
        </div>
      </section>

      <section className="bg-white text-black py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#51FF76FF]">Story</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              HikariSound dimulai dari satu hal sederhana: keinginan untuk
              mendengarkan musik seperti sang artis mendengarnya di ruang
              rekaman. Kami menggabungkan teknologi audio terkini dengan
              pendekatan yang penuh rasa untuk menghadirkan pengalaman mendengar
              yang jujur, alami, dan menggetarkan hati.
              <br />
              <br />
              Dari ruang kamar kecil dengan sepasang speaker tua, kini kami
              berevolusi menjadi komunitas pecinta suara yang menghargai detail
              dan emosi di setiap nada. Kami percaya, setiap sistem audio harus
              membawa kehangatan dan keaslian — bukan hanya angka spesifikasi.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/speaker-monitor.jpg"
              alt="Audio setup"
              fill
              className="object-cover"
            />
          </m.div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-24 px-6 md:px-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <m.h2
            className="text-4xl font-bold mb-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Vision & <span className="text-[#51FF76FF]">Mission</span>
          </m.h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <m.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi jembatan antara teknologi audio modern dan keindahan
                emosi manusia — menghadirkan suara yang bukan hanya terdengar,
                tapi juga terasa.
              </p>
            </m.div>

            <m.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Mendorong batas pengalaman audio dengan desain inovatif, riset
                mendalam, dan dedikasi penuh terhadap keaslian suara yang
                menyentuh hati setiap pendengarnya.
              </p>
            </m.div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <m.h2
            className="text-4xl font-bold mb-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[#51FF76FF]">Philosophy</span>
          </m.h2>
          <m.p
            className="text-gray-400 text-lg leading-relaxed mb-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Kami percaya bahwa suara sejati bukan hanya tentang kejernihan atau
            kekuatan, tetapi tentang makna dan koneksi. Musik adalah bahasa
            emosi — dan tugas kami adalah menerjemahkannya sebaik mungkin.
          </m.p>
          <m.div
            className="italic text-gray-500 text-sm"
            whileHover={{ scale: 1.05, color: "#fff" }}
            transition={{ duration: 0.3 }}
          >
            “Dengarkan dengan seksama, rasakan dengan jujur, dan biarkan suara
            menggerakkan jiwa Anda.”
          </m.div>
        </div>
      </section>
    </>
  );
}
