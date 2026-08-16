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
            <td>Sveltekit</td>
            <td>Git</td>
          </tr>
          <tr>
            <td>Kotlin</td>
            <td>Django</td>
            <td>VSCode</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Bootstrap</td>
            <td>Android Studio</td>
          </tr>
          <tr>
            <td>CSS</td>
          </tr>
          <tr>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>TypeScript</td>
          </tr>
        </table>
      </div>
    </Container>
  );
}

export default About;
