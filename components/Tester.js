import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { Link, scroller } from "react-scroll";

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
          <Link to="home">
            <Nav.Link href="#" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
              Home
            </Nav.Link>
          </Link>
          <Link to="socials">
            <Nav.Link href="#" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
              Summary
            </Nav.Link>
          </Link>
          <Link to="timeline">
            <Nav.Link href="#" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
              Socials
            </Nav.Link>
          </Link>
          <Link to="about">
            <Nav.Link href="#" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
              Timeline
            </Nav.Link>
          </Link>
          <Link>
            <Nav.Link href="#" style={{ color: "rgba(0, 0, 0, 0.55)" }}>
              Contact Me
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Tester;