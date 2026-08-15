import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import Navigation from "./navigation/Navigation";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import WorkHistory from "./workhistory/WorkHistory";

function App() {
  return (
    <>
      {/*  React requires a single parent wrapper. */}
      <Navigation />
      <Home />
      <hr />
      <About />
      <hr />
      <Education />
      <hr />
      <Projects />
      <hr />
      <WorkHistory />
    </>
  );
}

export default App;
