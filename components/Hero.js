import Image from "next/image";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { scroller } from "react-scroll";

import styles from "../styles/Home.module.css";

const Hero = ({ title, header, body, btnBody, btnLink, img }) => {
  function handleClick(e) {
    e.preventDefault();
    scroller.scrollTo(btnLink, { duration: 500 });
  }

  return (
    <div>
      <Container>
        <div className={styles.main}>
          <div className={styles.left}>
            <Jumbotron>
              <h1>{header}</h1>
              <p>{body}</p>
              <p>
                <Button
                  variant="primary"
                  onClick={handleClick}
                  className={styles.button}
                >
                  {btnBody}
                </Button>
              </p>
            </Jumbotron>
          </div>
          <div className={styles.right}>
            <Image src={`/${img}`} layout="fill" alt="me" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
