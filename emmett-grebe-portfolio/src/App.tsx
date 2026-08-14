import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import Navigation from "./navigation/Navigation";
import Education from "./education/Education";

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
    </>
  );
}

export default App;
