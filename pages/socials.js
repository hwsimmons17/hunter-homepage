import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export default function Socials() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    console.log("I was pressed");
    router.push("/socials");
  }
  return (
    <Container>
      <Head>
        <title>Hunter Simmons | About Me</title>
        <meta
          name="description"
          content="This is a blog created by me, Hunter Simmons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Jumbotron className={styles.left}>
          <h1>Hello from Hunter Simmons!</h1>
          <p>
            I have always been a builder. I grew up just outside Washington,
            D.C. in Arlington, VA and from an early age I have been interested
            in building. I used to love playing with legos and digging in the
            sand. I graduated from BYU in April 2021 and I currently work at an
            early stage startup called <a>WorkPulse</a>.
          </p>
          <p>
            <Button variant="primary" onClick={() => handleClick()}>
              More about me
            </Button>
          </p>
        </Jumbotron>
      </main>
    </Container>
  );
}
