import { Container } from "react-bootstrap";
import Collapsible from "../components/collapsible/Collapsible";

function Education() {
  return (
    <Container id="education" className="sections">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-1 mb-5">Education</h1>
        <Collapsible
          title={
            "Computer Science BS with Honors minor at James Madison University (August 2023 - May 2027)"
          }
          children={
            <>
              <p className="lead">
                I am currently pursuing a Bachelor of Science in Computer
                Science with an Honors minor at James Madison University. My
                academic career is rooted in applied software development.
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  Engineered full-stack academic projects and standalone
                  applications using Java, Python, and modern web frameworks.
                </li>
                <li className="list-group-item">
                  Worked solo to working in Agile teams to build robust
                  applications.
                </li>
                <li className="list-group-item">
                  Gained a strong command of object-oriented design and the
                  complete software development life cycle.
                </li>
                <li className="list-group-item">
                  Designed and implemented relational databases and data
                  structures for collaborative software.
                </li>
              </ul>
            </>
          }
        ></Collapsible>

        <Collapsible
          title={"AWS Cloud Practitioner"}
          children={
            <>
              <p className="lead">
                This certification validates my foundational expertise in cloud
                infrastructure, security best practices, and distributed
                architectural patterns. This portfolio is hosted using AWS
                Lightsail and AWS Route 53.
              </p>
            </>
          }
        ></Collapsible>

        <Collapsible
          title={"AWS Solutions Architect Associate"}
          children={
            <>
              <p className="lead">Currently preparing for the exam.</p>
            </>
          }
        ></Collapsible>
      </div>
    </Container>
  );
}

export default Education;
