import { Navbar, Container, Nav } from "react-bootstrap";

/**
 * Navigation bar creator. Creates a navigation bar with About Me, Education, Projects, and Work History.
 *
 * @returns A navigation bar with About Me, Education, Projects, and Work History.
 */
function Navigation() {
  return (
    <Navbar
      expand="md"
      bg="light"
      data-bs-theme="light"
      className="position-sticky"
    >
      <Container>
        <Navbar.Brand href="#home">Emmett Grebe's Portfolio</Navbar.Brand>
        {/* The hamburger button for mobile */}
        <Navbar.Toggle aria-controls="portfolio-navbar" />

        {/* Everything in here hides on mobile */}
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">About Me</Nav.Link>
            <Nav.Link href="#contact">Education</Nav.Link>
            <Nav.Link href="#contact">Projects</Nav.Link>
            <Nav.Link href="#contact">Work History</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
