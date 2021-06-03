import {
  Button,
  Form,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";

import { Link, scroller } from "react-scroll";

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
            Hunter Simmons
          </Navbar.Brand>
          <Nav className={styles.link}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={false}
              duration={500}
              offset={-500}
              className={styles.linkChild}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="socials"
              spy={true}
              smooth={false}
              duration={500}
              offset={-40}
              className={styles.linkChild}
            >
              Summary
            </Link>
            <Link
              activeClass="active"
              to="timeline"
              spy={true}
              smooth={false}
              duration={500}
              offset={-80}
              className={styles.linkChild}
            >
              Socials
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={false}
              duration={500}
              className={styles.linkChild}
            >
              Timeline
            </Link>
            <Button
              variant="outline-primary"
              onClick={handleClick}
              className={styles.button}
            >
              Contact Me
            </Button>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
