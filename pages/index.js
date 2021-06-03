import Head from "next/head";
import { Element } from "react-scroll";

import { heroSection } from "../Assets/homeData";
import Contact from "../components/Contact";
import Hero from "../components/Hero.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunter Simmons | About Me</title>
        <meta
          name="description"
          content="This is a blog created by me, Hunter Simmons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Element name="home">
        <Hero {...heroSection} />
      </Element>
      <Element name="socials">
        <Hero {...heroSection} />
      </Element>
      <Element name="timeline">
        <Hero {...heroSection} />
      </Element>
      <Element name="about">
        <Hero {...heroSection} />
      </Element>
      <Element name="contact">
        <Contact {...heroSection} />
      </Element>
    </>
  );
}
