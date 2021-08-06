import logo from "./logo.svg";
import "./App.css";

// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
import TimerContainer from "./components/TimerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Basic1 />
        <Basic2 />
        <BasicUseEffect /> */}
        {/* <TimerContainer /> */}
      </header>
    </div>
  );
}

export default App;
