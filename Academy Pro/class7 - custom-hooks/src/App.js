import "./App.css";
import useCounter from "./hooks/use-counter.js";

export default function App() {
  const counter = useCounter();
  const counter2 = useCounter("diminuir");

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <h3>{counter}</h3>
      <h3>{counter2}</h3>
    </div>
  );
}