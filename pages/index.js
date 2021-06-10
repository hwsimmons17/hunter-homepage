import Head from "next/head";
import { Element } from "react-scroll";

import { heroSection } from "../Assets/homeData";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero.js";
import Socials from "../components/Socials";
import Timeline from "../components/Timeline";
import TopHero from "../components/Welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunter Simmons | About Me</title>
        <meta
          name="description"
          content="This is a blog created by me, Hunter Simmons"
        />
        <link rel="icon" href="/bank.svg" />
      </Head>

      <Element name="welcome" id="welcome">
        <TopHero />
      </Element>
      <Element name="summary" id="summary">
        <Hero {...heroSection} />
      </Element>
      <Element name="blog" id="blog">
        <Blog />
      </Element>
      <Element name="socials" id="socials">
        <Socials />
      </Element>
      <Element name="timeline" id="timeline">
        <Timeline />
      </Element>

      <Element name="contact" id="contact">
        <Contact />
      </Element>
    </>
  );
}
