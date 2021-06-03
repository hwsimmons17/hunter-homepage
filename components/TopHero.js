import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Card } from "react-bootstrap";

import styles from "../styles/TopHero.module.css";

const TopHero = () => {
  return (
    <div className={styles.wrapper}>
      <Image src="/Waves.jpg" layout="fill" alt="waves" priority={true} />
      <div className={styles.card}>
        <Fade left duration={2000}>
          <Card style={{ background: "none", border: "none" }}>
            <Card.Body style={{ fontSize: 50 }}>
              Welcome to my website!
            </Card.Body>
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default TopHero;
