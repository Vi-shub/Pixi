import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import NavbarHome from "@/components/NavbarHome";
import NavbarOther from "@/components/NavbarOther";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); // ✅ Used in Next.js 12

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {router.pathname === "/" ? <NavbarHome /> : <NavbarOther />}
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
