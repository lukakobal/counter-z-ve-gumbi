import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrese = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Multi Button Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={increase}>+1</button>
        <button onClick={decrese}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
