import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const appCounter = (initVal) => {
  const [count, setCount] = useState(initVal);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initVal);
  return { count, increment, decrement, reset };
};

const App = () => {
  const { count, increment, decrement, reset } = appCounter(0);
  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
