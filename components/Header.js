import {
  Button,
  Form,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";

import { Link } from "react-scroll";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.parent}>
      <Container>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <Navbar.Brand href="/" className={styles.brand}>
            Hunter Simmons
          </Navbar.Brand>
          <Nav className={styles.link}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={false}
              duration={500}
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
              className={styles.linkChild}
            >
              Socials
            </Link>
            <Link
              activeClass="active"
              to="timeline"
              spy={true}
              smooth={false}
              duration={500}
              className={styles.linkChild}
            >
              Timeline
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={false}
              duration={500}
              className={styles.linkChild}
            >
              About
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
