import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <>
      {/*  React requires a single parent wrapper. */}
      <Navigation />
      <Home />
      <hr />
      <About />
    </>
  );
}

export default App;
