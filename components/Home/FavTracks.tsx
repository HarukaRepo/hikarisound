import { Tab } from "@headlessui/react";
import { motion as m } from "framer-motion";
import Image from "next/image";

const albums = [
  {
    title: "Ado — Uta’s Songs: One Piece Film Red",
    desc: "Vokal J-pop yang dinamis, imaging yang luas, dan kedalaman produksi yang kaya.",
    img: "/album/ado-uta-one-piece.jpg",
  },
  {
    title: "Ado — Kyōgen",
    desc: "Vokal intens bertemu produksi genre-beragam (EDM, rock, tropical) — album debut yang memperkenalkan karakter emosional & energi Ado.",
    img: "/album/ado-kyougen-cover.jpg",
  },
  {
    title: "Ado — Zanmu",
    desc: "Album kedua Ado, menampilkan paduan produksi modern & vocal ekspresif — memperluas warna musikal sambil tetap emosional.",
    img: "/album/ado-zanmu-cover.jpg",
  },
];

const testTracks = [
  {
    title: "milet — us",
    desc: "Tema drama *Gisō Furin*; vokal murni berpadu dengan aransemen minimalis, cocok untuk pengujian kejelasan vokal dan keseimbangan mix. (Info: lagu ini digunakan sebagai tema drama).",
  },
  {
    title: "Aimer — Kataomoi",
    desc: "Aransemen sederhana dan lembut yang memungkinkan vokal Aimer bersinar, sangat ideal untuk mengecek keindahan ekspresi dan dinamika suara.",
  },
  {
    title: "幾田りら — スパークル (Sparkle)",
    desc: "Lagu pop Jepang dengan nuansa dreamlike — cocok untuk menguji detail vokal, ambience, dan reverb halus.",
  },
];

export default function FavoriteAlbums() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Favorite <span className="text-[#51FF76]">Albums</span> & Test Tracks
        </h2>
        <p className="text-gray-400">
          Musik yang saya gunakan untuk mengevaluasi dan menikmati peralatan
          saya — di mana emosi bertemu dengan presisi.
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="flex justify-center gap-4 mb-10">
          {["Albums", "Test Tracks"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-6 py-2 text-sm font-medium rounded-full transition ${
                  selected
                    ? "bg-[#51FF76] text-black"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {albums.map((album, i) => (
                <m.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900 rounded-xl overflow-hidden shadow-md border border-zinc-800 hover:border-[#51FF76]"
                >
                  <div className="relative w-full h-80">
                    <Image
                      src={album.img}
                      alt={album.title}
                      fill
                      className="rounded-t-xl object-contain"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="font-semibold text-lg mb-1">
                      {album.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{album.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="space-y-6 max-w-xl mx-auto">
              {testTracks.map((track, i) => (
                <m.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-[#51FF76]"
                >
                  <h3 className="font-medium text-lg">{track.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{track.desc}</p>
                </m.div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
