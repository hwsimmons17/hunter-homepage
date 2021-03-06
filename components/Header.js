import {
  Button,
  Form,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";
import Link from "next/link";
import { Link as Links, scroller } from "react-scroll";

import styles from "../styles/Header.module.css";

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    scroller.scrollTo("contact", { duration: 500 });
  };

  const handleBrand = (e) => {
    e.preventDefault();
    scroller.scrollTo("home", { duration: 500, offset: -500 });
  };

  return (
    <div className={styles.parent}>
      <Container>
        <Navbar
          bg="light"
          variant="light"
          className="justify-content-between"
          style={{ borderRadius: "0px 0px 10px 10px" }}
        >
          <Navbar.Brand onClick={handleBrand} className={styles.brand}>
            <Link href="/">Hunter Simmons</Link>
          </Navbar.Brand>
          <Nav className={styles.link}>
            <Link href="/#blog" className={styles.linkChild}>
              <a className={styles.linkChild}>Blog</a>
            </Link>
            <Link href="/#timeline" className={styles.linkChild}>
              <a className={styles.linkChild} style={{ marginRight: "10px" }}>
                Timeline
              </a>
            </Link>
            <Link href="/#socials" className={styles.linkChild}>
              <a className={styles.linkChild}>Socials</a>
            </Link>

            <Link href="/#contact">
              <Button variant="outline-primary" className={styles.button}>
                Contact Me
              </Button>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
