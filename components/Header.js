import {
  Button,
  Form,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <Navbar.Brand href="/" className={styles.brand}>
            Hunter Simmons
          </Navbar.Brand>
          <Nav className={styles.link}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/socials">Socials</Nav.Link>
            <Nav.Link href="/current-role">Current Role</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
