import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.css";
import { useEffect, useState } from "react";

const homeStr = "home";
const aboutStr = "about";
const educationStr = "education";
const projectsStr = "projects";
const workStr = "workhistory";

/**
 * Navigation bar creator. Creates a navigation bar with About Me, Education, Projects, and Work History.
 *
 * @returns A navigation bar with About Me, Education, Projects, and Work History.
 */
function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  // Being in a useEffect makes it wait until the whole page is fully rendered, then set up the observer.
  useEffect(() => {
    const options = {
      root: null, // Defaults to the browser viewport
      rootMargin: "0px", // No offset padding around the viewport
      threshold: 0.1, // Fires as soon as 10% of the element is visible
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        // Check if the target is in view
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          //   document.getElementById(entry.target.id)?.style.background = "white";
          // } else {
          //   document.getElementById(entry.target.id)?.style.background = "none";
        }
      });
    };

    const sectionObserver = new IntersectionObserver(callback, options);
    const sections = document.querySelectorAll(".sections");
    sections.forEach((item) => sectionObserver.observe(item));
  }, []);

  return (
    <Navbar expand="md" sticky="top" id="nav">
      <Container>
        <Navbar.Brand href="#home">Emmett Grebe's Portfolio</Navbar.Brand>
        {/* The hamburger button for mobile */}
        <Navbar.Toggle aria-controls="portfolio-navbar" />

        {/* Everything in here hides on mobile */}
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active={activeSection === homeStr}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" active={activeSection === aboutStr}>
              About Me
            </Nav.Link>
            <Nav.Link href="#education" active={activeSection === educationStr}>
              Education
            </Nav.Link>
            <Nav.Link href="#projects" active={activeSection === projectsStr}>
              Projects
            </Nav.Link>
            <Nav.Link href="#workhistory" active={activeSection === workStr}>
              Work History
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
