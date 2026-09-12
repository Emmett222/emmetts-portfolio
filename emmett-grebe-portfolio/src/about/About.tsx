import { Container } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="sections">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-1 ">About Me</h1>
        <h2 className="display-6 mt-5">
          Hey, I'm Emmett! Problems are a puzzle to be broken down into pieces.
          Every little bit counts so it is important to think through piece by
          piece.
        </h2>
        <table className="table mt-5">
          <tr>
            <th scope="col">Languages</th>
            <th scope="col">Frameworks</th>
            <th scope="col">Tools/Cloud</th>
          </tr>
          <tr>
            <td>Java</td>
            <td>React</td>
            <td>AWS</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Svelte</td>
            <td>Git</td>
          </tr>
          <tr>
            <td>Kotlin</td>
            <td>Django</td>
            <td>Linux</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Bootstrap</td>
            <td>npm</td>
          </tr>
          <tr>
            <td>TypeScript</td>
            <td>Android Jetpack Media3</td>
            <td>Vite</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Java Swing</td>
            <td>Junit</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Android Room</td>
            <td>Relational Databases</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </Container>
  );
}

export default About;
