import { useEffect, useState } from "react";
import "./App.css";
import GiftCard from "./components/GiftCard";
import FetchUser from "./components/FetchUser";
import Wallet from "./components/Wallet";

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
      <div>
        <h1>Little Lemon</h1>
        <button onClick={toggleHandler}>Toggle message</button>
        {toggle && <p>Welcome to little lemon.</p>}
      </div>
      <GiftCard />
      <FetchUser />
      <Wallet />
    </div>
  );
}

export default App;
