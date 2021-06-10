import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <p style={{ textAlign: "center" }}>Copyright 2021</p>
    </>
  );
}

export default MyApp;
