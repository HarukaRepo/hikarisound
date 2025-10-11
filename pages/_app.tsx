import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <m.div>
        <NextNProgress color="#51FF76FF" height={3} />
        <Component {...pageProps} />
      </m.div>
    </>
  );
}
