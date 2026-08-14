import { Container } from "react-bootstrap";

function Education() {
  return (
    <Container id="education">
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center m-5">
        <h1 className="display-1 ">Education</h1>
        <h3 className="display-5 mt-5">
          Computer Science BS with Honors minor at James Madison University
          (August 2023 - May 2027)
        </h3>
        <h4 className="display-6">
          I am currently pursuing a Bachelor of Science in Computer Science with
          an Honors minor at James Madison University. My Academic career is
          rooted in applied software development. Worked solo to working in
          Agile teams to build robust applications. I have gained a strong
          command of object-oriented design and the complete software
          development life cycle.
        </h4>
        <h3 className="display-5 mt-5">AWS Cloud Practitioner</h3>
        <h4 className="display-6">
          This certification validates my foundational expertise in cloud
          infrastructure, security best practices, and distributed architectural
          patterns. This portfolio is hosted using AWS Lightsail and AWS Route
          53.
        </h4>
        <h3 className="display-5 mt-5">AWS Solutions Architect Associate</h3>
        <h4 className="display-6">Currently preparing for the exam.</h4>
      </div>
    </Container>
  );
}

export default Education;
