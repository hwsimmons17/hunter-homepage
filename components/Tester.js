import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  NavItem,
  Button,
} from "react-bootstrap";
import Link from "next/link";

import styles from "../styles/Tester.module.css";

const Tester = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ zIndex: 10 }}
    >
      <Navbar.Brand style={{ marginLeft: "20px" }}>Hunter Simmons</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ marginRight: "20px" }}
      />
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/#blog">
            <a className={styles.link}>Blog</a>
          </Link>
          <Link href="/#timeline">
            <a className={styles.link}>Timeline</a>
          </Link>
          <Link href="/#socials">
            <a className={styles.link}>Socials</a>
          </Link>
          <Link href="/#contact">
            <Button
              variant="outline-primary"
              style={{ width: "150px", margin: "auto" }}
            >
              Contact Me
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Tester;
