import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Container, Jumbotron, Button } from "react-bootstrap";

import styles from "../styles/Home.module.css";

const Hero = ({ title, header, body, btnBody, btnLink, img }) => {
  function handleClick(e) {
    e.preventDefault();
    console.log("I was pressed");
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
                <Button variant="primary" onClick={handleClick}>
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
