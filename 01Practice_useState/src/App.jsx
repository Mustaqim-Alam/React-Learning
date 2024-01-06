import { useState } from "react";

function App() {
  const [click, setClick] = useState([]);
  const addNum = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 5,
      },
    ]);
  };

  return (
    <div>
      <ul>
        {click.map((item) => (
          <li key={item.id}> value {item.value}
          
          </li>
        )
        )}
      </ul>

      <button onClick={addNum}>Click Me</button>
    </div>
  );
}

export default App;
