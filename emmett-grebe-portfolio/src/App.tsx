import "./App.css";
import Navigation from "./Navigation";
import profilePic from "./assets/profilePic.jpg";

function App() {
  return (
    <>
      {/*  React requires a single parent wrapper. */}
      <Navigation />
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
        </div>
      </div>
    </>
  );
}

export default App;
