import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.css";

/**
 * Navigation bar creator. Creates a navigation bar with About Me, Contact, Education, Projects, and Work History.
 *
 * @returns A navigation bar with About Me, Contact, Education, Projects, and Work History.
 */
function Navigation() {
  return (
    <Navbar expand="md" sticky="top" id="nav">
      <Container>
        <Navbar.Brand href="#home">Emmett Grebe's Portfolio</Navbar.Brand>
        {/* The hamburger button for mobile */}
        <Navbar.Toggle aria-controls="portfolio-navbar" />

        {/* Everything in here hides on mobile */}
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#workhistory">Work History</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
