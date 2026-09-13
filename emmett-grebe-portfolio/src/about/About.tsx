import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="sections">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-1">About Me</h1>
        <h2 className="display-6 mt-5">
          Hey, I'm Emmett! Problems are a puzzle to be broken down into pieces.
          Every little bit counts so it is important to think through piece by
          piece.
        </h2>

        <Row className="w-100 mt-5">
          <Col md={7}>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Frontend</th>
                  <th scope="col">Backend & Cloud</th>
                  <th scope="col">Mobile & Desktop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JavaScript</td>
                  <td>Java</td>
                  <td>Kotlin</td>
                </tr>
                <tr>
                  <td>TypeScript</td>
                  <td>Python</td>
                  <td>Android Jetpack Media3</td>
                </tr>
                <tr>
                  <td>React</td>
                  <td>Django</td>
                  <td>Java Swing</td>
                </tr>
                <tr>
                  <td>Svelte</td>
                  <td>AWS</td>
                  <td></td>
                </tr>
                <tr>
                  <td>HTML</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </Col>

          <Col md={5}>
            <table
              className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Database & Architecture</th>
                  <th scope="col">Developer Tooling & Systems</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SQL</td>
                  <td>Git</td>
                </tr>
                <tr>
                  <td>Android Room</td>
                  <td>Linux</td>
                </tr>
                <tr>
                  <td>Relational Databases</td>
                  <td>npm</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Vite</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Junit</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
