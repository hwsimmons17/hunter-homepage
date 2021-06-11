import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Navbar from "../components/Navbar";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Link href="/admin">
        <p style={{ textAlign: "center" }}>Copyright 2021</p>
      </Link>
    </>
  );
}

export default MyApp;
