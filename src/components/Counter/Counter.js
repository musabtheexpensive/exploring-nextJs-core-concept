"use client";

import { useState } from "react";

console.log("Hello World");
const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>This Is Next App</h1>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="btn btn-accent"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
