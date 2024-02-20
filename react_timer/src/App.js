import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const startTimer = () => {
    for (let i = input; i >= 0; i--) {
      setTimeout(
        () => setInput(i),
        1000 * (input - i)
      );
    }
  };

  return (
    <div>
      <h1>Timer</h1>
      <input
        placeholder="Time in seconds..."
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={startTimer}>Start</button>
      <p>{input} seconds</p>
    </div>
  );
}

export default App;
