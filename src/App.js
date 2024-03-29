import { useEffect, useState } from "react";
import "./App.css";
import GiftCard from "./components/GiftCard";
import FetchUser from "./components/FetchUser";
import Wallet from "./components/Wallet";
import InputFocus from "./components/InputFocus";
import WeekDay from "./components/WeekDay";
import Radio from "./components/radio/Radio";
import { PanelMouseTracker, PointMouseTracker } from "./components/hoc/HOC";
import {
  PanelMouseLogger,
  PointMouseLogger,
} from "./components/hoc/RenderProps";

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
      <InputFocus />
      <WeekDay />
      <Radio />
      <div>
        <PanelMouseTracker />
        <PointMouseTracker />
      </div>
      <div>
        <PanelMouseLogger />
        <PointMouseLogger />
      </div>
    </div>
  );
}

export default App;
