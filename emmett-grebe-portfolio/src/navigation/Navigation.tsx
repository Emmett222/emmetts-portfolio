import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.css";

/**
 * Navigation bar creator. Creates a navigation bar with About Me, Education, Projects, and Work History.
 *
 * @returns A navigation bar with About Me, Education, Projects, and Work History.
 */
function Navigation() {
  return (
    <Navbar expand="md" sticky="top" id="nav">
      <Container>
        <Navbar.Brand href="#home" className="button">Emmett Grebe's Portfolio</Navbar.Brand>
        {/* The hamburger button for mobile */}
        <Navbar.Toggle aria-controls="portfolio-navbar" />

        {/* Everything in here hides on mobile */}
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="button">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="button">
              About Me
            </Nav.Link>
            <Nav.Link href="#education" className="button">
              Education
            </Nav.Link>
            <Nav.Link href="#projects" className="button">
              Projects
            </Nav.Link>
            <Nav.Link href="#workhistory" className="button">
              Work History
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
