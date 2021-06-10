import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Card } from "react-bootstrap";

import styles from "../styles/TopHero.module.css";

const TopHero = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image
          src="/Waves.jpg"
          layout="fill"
          objectFit="cover"
          alt="waves"
          quality={70}
          priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Fade left duration={2000}>
            <Card
              style={{ background: "none", border: "none" }}
              className="m-auto"
            >
              <Card.Body className={styles.text}>
                Welcome to my website!
              </Card.Body>
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
