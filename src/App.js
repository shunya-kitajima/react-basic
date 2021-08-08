import { useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
// import APIFetch from "./components/APIFetch";
import AppContext from "./contexts/AppContext";
// import B from "./components/B";
// import BasicReducer from "./components/BasicReducer";
// import CompB from "./components/CompB";
// import Memo from "./components/Memo";
import CountDisplay from "./components/CountDisplay";
import CountClick from "./components/CountClick";

const initailState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initailState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initailState);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };

  const AddCount2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
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
          {/* <Basic1 /> */}
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <APIFetch /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          {/* Count {count} */}
          {/* <CompB /> */}
          {/* <Memo /> */}
          <CountDisplay name="count1" count={count1} />
          <CountClick handleClick={AddCount1} />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
