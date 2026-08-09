import "./App.css";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      {/*  React requires a single parent wrapper. */}
      <Navigation />
      <div
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center"
        id="all"
      >
        <h1 className="display-1 ">Emmett Grebe</h1>
        <h2 className="display-5">
          Programmer who focuses on writing clean and reusable code.
        </h2>
      </div>
    </>
  );
}

export default App;
