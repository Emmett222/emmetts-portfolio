import { Container } from "react-bootstrap";
import Collapsible from "../components/collapsible/Collapsible";

function WorkHistory() {
  return (
    <Container id="workhistory" className="sections">
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-1 mb-5">Work History</h1>
        <Collapsible
          title={"Sentara RMH IT Shadow Internship (June 2025 - August 2025)"}
          children={
            <p className="lead">
              As a certified lifeguard at Massanutten I safeguarded thousands of
              visitors at Massanutten Waterpark, Woodstone Recreation Center,
              Massanutten Fitness and Recreation Center, and Mt. Peak Pool. As a
              resort these locations were busy. Despite the busyness, I managed
              critical situations with calm efficiency according to strict
              standards.
            </p>
          }
        ></Collapsible>

        <Collapsible
          title={"Red Cross Lifeguard (2022 - Now)"}
          children={
            <>
              <p className="lead">
                As a certified lifeguard at Massanutten I safeguarded thousands
                of visitors at Massanutten Waterpark, Woodstone Recreation
                Center, Massanutten Fitness and Recreation Center, and Mt. Peak
                Pool. As a resort these locations were busy. Despite the
                busyness, I managed critical situations with calm efficiency
                according to strict standards.
              </p>
              <p className="lead">
                During my time as a lifeguard, my superiors saw me fit to shadow
                the new hires through rotations. I taught 20+ new hires through
                rules, safety, and how to be an effective lifeguard at
                Massanutten.
              </p>
              <p className="lead">
                Between October 2023 to March 2024, I was a lifeguard for
                Sentara RMH Wellness Center. There is only one lifeguard on duty
                at a time there, so I was incredibly vigilant as the leader of
                the pool. I approached those who seemed like they needed help
                before they asked. After this I went back to lifeguarding for
                Massanutten.
              </p>
            </>
          }
        ></Collapsible>

        <Collapsible
          title={"Water Park Attendant (2021 - 2022)"}
          children={
            <p className="lead">
              Ensured the safety of daily guests by monitoring attractions,
              managing slide rules, and enforcing safety regulations. I brought
              exceptional customer service by proactively addressing guest
              inquiries and concerns.
            </p>
          }
        ></Collapsible>
      </div>
    </Container>
  );
}

export default WorkHistory;
