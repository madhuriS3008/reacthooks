import { useEffect, useState } from "react";
import "./App.css";
import GiftCard from "./components/GiftCard";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = toggle
      ? "Welcome to little lemon"
      : "Using useEffect hook";
  }, [toggle]);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <h1>Little Lemon</h1>
      <button onClick={toggleHandler}>Toggle message</button>
      {toggle && <p>Welcome to little lemon.</p>}
      <GiftCard />
    </div>
  );
}

export default App;
