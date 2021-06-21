import { Container } from "react-bootstrap";

import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Projects</h1>
        <h2 className={styles.h2tag}>
          This is a repository of the past projects I have worked on. Every one
          of them has failed, but I feel like I learned a lot from working on
          each one.
        </h2>
        <h3>GrowthGate</h3>
        <p>
          GrowthGate was meant to be a private equity firm for the masses. Our
          business model was to raise money from college kids with a lot of
          money, aka summer sales bros. While we were looking for a target
          acquisition company, we came upon a company called Source Bold that
          outsourced WordPress developers to South America. <br></br>
          Because summer sales bros don't make money until the summer, and it
          was the winter, we decided to pivot our business model to copy that of
          Source Bold. Through some connections, we found some cheap devs in the
          Philippines and launched our business. I was able to find a lot of
          demand quickly, but our product was terrible. The devs were incapable
          of completing simple tasks so we parted ways and shut down the
          business.
        </p>
        <hr />
        <h3>ATHlete</h3>
        <p>Coming soon! 🚧</p>
        <hr />
        <h3>Allen Simmons Cleaning</h3>
        <p>Coming soon! 🚧</p>
      </div>
    </Container>
  );
};

export default Projects;
