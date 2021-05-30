import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Fade from "react-reveal/Fade";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunter Simmons | About Me</title>
        <meta
          name="description"
          content="This is a blog created by me, Hunter Simmons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Fade left>
          <h1>Hello from Hunter Simmons!</h1>
        </Fade>
      </main>
    </div>
  );
}
