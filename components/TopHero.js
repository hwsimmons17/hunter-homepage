import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Card } from "react-bootstrap";

import styles from "../styles/TopHero.module.css";

const TopHero = () => {
  return (
    <div>
      <Image
        src="/Waves.jpg"
        layout="fill"
        alt="waves"
        priority={true}
        className={styles.image}
      />
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Fade left duration={2000}>
            <Card
              style={{ background: "none", border: "none" }}
              className="m-auto"
            >
              <Card.Body
                style={{ fontSize: 50 }}
                className="m-auto text-align-center"
              >
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
