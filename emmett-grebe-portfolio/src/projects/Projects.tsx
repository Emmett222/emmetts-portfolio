import "./Projects.css";
import { Container } from "react-bootstrap";
import Collapsible from "../components/collapsible/Collapsible";
import Alloy from "../assets/Alloy.gif";

function Projects() {
  return (
    <Container id="projects" className="sections">
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center m-5">
        <h1 className="display-1 mb-5">Projects</h1>
        <Collapsible
          title={"Alloy Audio Player (June 2026 - Now)"}
          children={
            <>
              <div className="d-flex flex-row justify-content-center align-items-center text-center">
                <img
                  src={Alloy}
                  className="rounded shadow img-fluid"
                  id="AlloyGif"
                />
                <div>
                  <p className="lead">
                    Work in progress. An audio player with personality.
                    Extremely customizable with many settings to choose from.
                    Customize colors, animations, filename truncating, sorting,
                    visualizers, and more.
                  </p>
                  <p className="lead">
                    Developed for Android using Kotlin and Media3. Engineered a
                    robust background service architecture using
                    MediaSessionService and ExoPlayer to ensure seamless
                    playback across system states.
                  </p>
                  <p className="lead">
                    Used AI tools to boost development. This usage significantly
                    reduced debugging overhead and helped safely navigate
                    Media3's background lifecycle constraints. After tutorials
                    couldn't help me develop Alloy anymore, AI taught me
                    intermediate topics of Android development.
                  </p>
                  <p className="lead">
                    <a href="https://github.com/Emmett222/Alloy-Audio-Player">
                      Check it out here
                    </a>
                  </p>
                </div>
              </div>
            </>
          }
        ></Collapsible>
        <Collapsible
          title={"Emmett Grebe's Portfolio (August 2026 - Now)"}
          children={
            <>
              <p className="lead">
                Made with React, TypeScript, and Bootstrap. Shows all of my
                achievements and will be updated as time goes on.
              </p>
              <p className="lead">
                Used AI tools to teach me how to use React. Once I learned
                enough, this website was completely handmade.
              </p>
            </>
          }
        ></Collapsible>
        <Collapsible
          title={"Folder Sorter (February 2026 - April 2026)"}
          children={
            <>
              <p className="lead">
                Folder Sorter is a Java-based program that sorts a folder into
                subfolders based on filetype and filename. Can sort a specific
                folder, or sort the folder that the program is currently in.
              </p>
              <p className="lead">
                Sorting behavior can be configured in
                Documents/Folder-Sorter/Config.txt.
              </p>
              <p className="lead">Used Git for version control.</p>
              <p className="lead">
                <a href="https://github.com/Emmett222/Folder-Sorter">
                  Check it out here
                </a>
              </p>
            </>
          }
        ></Collapsible>
        <Collapsible
          title={"BarWare Restaurant Software (September 2025 - December 2025)"}
          children={
            <>
              <p className="lead">
                Developed as part of a five person Agile team, BarWare is a
                restaurant management solution designed to streamline dining.
                Through the development, I focused on collaborative engineering,
                participating in sprint cycles, and implementing complex
                business requirements into features. This project solidified my
                ability to work in cross-functional teams, manage version
                control among multiple contributors, and work on a strict
                timeline.
              </p>
              <p className="lead">
                <a href="https://github.com/bernstdh/f25team3c">
                  Check it out here
                </a>
              </p>
            </>
          }
        ></Collapsible>
        <Collapsible
          title={"Pictures With Friends (September 2025 - December 2025)"}
          children={
            <>
              <p className="lead">
                Created in a collaborative three person team, this web
                application provides a platform for users to share and interact
                with images. I took ownership of the core database
                responsibilities and ensured efficient data storage, retrieval,
                and relational integrity.
              </p>
              <p className="lead">
                <a href="https://github.com/OutboundSpade/CS347-Project">
                  Check it out here
                </a>
              </p>
            </>
          }
        ></Collapsible>
      </div>
    </Container>
  );
}

export default Projects;
