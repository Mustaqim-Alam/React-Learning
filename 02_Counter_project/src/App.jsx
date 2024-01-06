import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(4);

  const addValue = () => {
    console.log("Clicked", counter);
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Code with react</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value </button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
