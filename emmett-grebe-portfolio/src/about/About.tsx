import { Container } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="sections">
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-1 ">About Me</h1>
        <h3 className="display-6 mt-5">
          Hey, I'm Emmett! I see problems as a puzzle and love breaking them
          down into pieces. Every little bit counts so I thoroughly think
          through piece by piece.
        </h3>
        <h3 className="display-6 mt-5">
          Languages:{" "}
          <em>Java, Python, Kotlin, HTML, CSS, JavaScript, TypeScript</em>
        </h3>
        <h3 className="display-6 ">
          Frameworks: <em>React, Sveltekit, Django, Bootstrap</em>{" "}
        </h3>
        <h3 className="display-6 ">
          Tools/Cloud: <em>AWS, Git, VSCode, Android Studio</em>
        </h3>
      </div>
    </Container>
  );
}

export default About;
