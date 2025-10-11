"use client";
import { motion as m } from "framer-motion";
import Image from "next/image";

export default function ListeningRoom() {
  return (
    <section className="w-full py-24 bg-neutral-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/beat-headphone-banner.jpg"
              alt="Listening setup"
              fill
              className="object-cover object-center opacity-90 hover:opacity-100 transition"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Listening Room / Setup Experience
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Pengaturan mendengarkan harian saya - kombinasi dari{" "}
            <span className="text-white font-medium">Moondrop Chu 2</span>{" "}
            digabungkan dengan{" "}
            <span className="text-white font-medium">JCALLY JM10 Pro DAC</span>.
            Kombinasi ini menghasilkan suara yang bersih dan seimbang dengan
            midrange alami, treble yang ringan, dan sentuhan kehangatan -
            sempurna untuk mendengarkan musik sehari-hari yang santai dan
            menemukan lagu-lagu baru.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Pengaturan ini terletak di atas meja kayu minimalis, dirancang untuk
            kenyamanan dan keseimbangan akustik. Setiap sesi di sini terasa
            imersif - bukan hanya mendengar musik, tetapi *merasakan diri berada
            di dalamnya*.
          </p>
        </m.div>
      </div>
    </section>
  );
}
