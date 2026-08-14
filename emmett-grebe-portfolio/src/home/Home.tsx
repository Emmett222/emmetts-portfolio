import "./Home.css";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import profilePic from "../assets/profilePic.jpg";
import emailIcon from "../assets/contact_email.png";
import gitHubIcon from "../assets/contact_github.png";
import linkedinIcon from "../assets/contact_linkedin.png";

function Home() {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Email copied to clipboard.
    </Tooltip>
  );

  return (
    <Container id="home">
      <div
        className="vh-100 d-flex flex-row justify-content-center align-items-center text-center"
        id="all"
      >
        <div>
          {/**
           * img-fluid: Makes it shrink for smaller screens.
           */}
          <img
            src={profilePic}
            alt="Emmett's Picture"
            className="rounded shadow img-fluid"
            id="pfp"
          />
          <p>This is a placeholder image.</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center m-5">
          <h1 className="display-1 ">Emmett Grebe</h1>
          <h2 className="display-5">
            Programmer who focuses on writing clean and reusable code.
          </h2>

          <div className="d-flex flex-row justify-content-center align-items-center text-center m-5">
            <OverlayTrigger
              placement="top"
              trigger="click"
              overlay={renderTooltip} // Connects the sensor to your popup
              rootClose={true} // Automatically closes it if the user clicks anywhere else
            >
              <a onClick={emailCopy} className="hover-pointer">
                <img src={emailIcon} className="m-5" id="contactIcon" />
              </a>
            </OverlayTrigger>

            <a href="https://github.com/Emmett222">
              <img src={gitHubIcon} className="m-5" id="contactIcon" />
            </a>
            <a href="https://www.linkedin.com/in/emmett-grebe-b41b40376/">
              <img src={linkedinIcon} className="m-5" id="contactIcon" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

/**
 * Copies my email to the user's clipboard.
 */
function emailCopy() {
  navigator.clipboard.writeText("emmettgrebe@gmail.com");
}

export default Home;
