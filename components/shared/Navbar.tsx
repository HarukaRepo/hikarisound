"use client";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const router = useRouter();
  const locale = router.locale || "id";
  const [open, setOpen] = useState(false);

  const goToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setOpen(false);

    const currentPath = router.asPath.split("#")[0];
    const homeCandidates = ["/", `/${locale}`, `/${locale}/`];

    if (homeCandidates.includes(currentPath)) {
      const el =
        typeof document !== "undefined" && document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (typeof window !== "undefined") {
          const url = `/${locale}#contact`;
          window.history.replaceState(null, "", url);
        }
        return;
      }
      router.push(`/${locale}#contact`);
      return;
    }

    router.push(`/${locale}#contact`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 text-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <m.div
          className="text-2xl font-bold tracking-wide cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push(`/${locale}`)}
        >
          Hikari<span className="text-[#51FF76FF]">Sound</span>
        </m.div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href={`/${locale}/`} locale={locale}>
            <m.span
              whileHover={{ color: "#3AD15BFF" }}
              transition={{ duration: 0.2 }}
              className={`cursor-pointer ${
                router.asPath === `/${locale}/` ||
                router.asPath === `/${locale}` ||
                router.asPath === "/"
                  ? "text-[#3AD15BFF]"
                  : ""
              }`}
            >
              Home
            </m.span>
          </Link>

          <Link href={`/${locale}/showcase`} locale={locale}>
            <m.span
              whileHover={{ color: "#3AD15BFF" }}
              transition={{ duration: 0.2 }}
              className={`cursor-pointer ${
                router.asPath.startsWith(`/${locale}/showcase`)
                  ? "text-[#3AD15BFF]"
                  : ""
              }`}
            >
              Showcase
            </m.span>
          </Link>
          <a
            href={`/${locale}#contact`}
            onClick={goToContact}
            className="cursor-pointer"
          >
            <m.span
              whileHover={{ color: "#3AD15BFF" }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </m.span>
          </a>

          <Link href={`/${locale}/about`} locale={locale}>
            <m.span
              whileHover={{ color: "#3AD15BFF" }}
              transition={{ duration: 0.2 }}
              className={`cursor-pointer ${
                router.asPath.startsWith(`/${locale}/about`)
                  ? "text-[#3AD15BFF]"
                  : ""
              }`}
            >
              About
            </m.span>
          </Link>
        </div>

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-black/80 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center gap-10 z-[60]"
          >
            <button
              className="absolute top-5 right-6 text-3xl text-white"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>

            <Link
              href={`/${locale}/`}
              locale={locale}
              onClick={() => setOpen(false)}
            >
              <m.span
                whileHover={{ scale: 1.1, color: "#3AD15BFF" }}
                transition={{ duration: 0.2 }}
                className="text-xl font-semibold cursor-pointer"
              >
                Home
              </m.span>
            </Link>

            <Link
              href={`/${locale}/showcase`}
              locale={locale}
              onClick={() => setOpen(false)}
            >
              <m.span
                whileHover={{ scale: 1.1, color: "#3AD15BFF" }}
                transition={{ duration: 0.2 }}
                className="text-xl font-semibold cursor-pointer"
              >
                Showcase
              </m.span>
            </Link>

            <a href={`/${locale}#contact`} onClick={goToContact}>
              <m.span
                whileHover={{ scale: 1.1, color: "#3AD15BFF" }}
                transition={{ duration: 0.2 }}
                className="text-xl font-semibold cursor-pointer"
              >
                Contact
              </m.span>
            </a>

            <Link
              href={`/${locale}/about`}
              locale={locale}
              onClick={() => setOpen(false)}
            >
              <m.span
                whileHover={{ scale: 1.1, color: "#3AD15BFF" }}
                transition={{ duration: 0.2 }}
                className="text-xl font-semibold cursor-pointer"
              >
                About
              </m.span>
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
