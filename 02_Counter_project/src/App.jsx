import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Learning react Hooks</h1>
      <h3>Counter value: {counter}</h3>
      <div>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
