import "./styles.css";
import Counter from "./Counter";
import Props from "./Props";

export default function App() {
  return (
    <div className="App">
      <h1>Hello PennApps</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter></Counter>
      <Props name="Daisy"></Props>
    </div>
  );
}
