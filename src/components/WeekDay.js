import { useState } from "react";
import usePrevious from "../customHooks/usePrevious";

const WeekDay = () => {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") setDay("Tuesday");
    if (day === "Tuesday") setDay("Wednesday");
    if (day === "Wednesday") setDay("Thursday");
    if (day === "Thursday") setDay("Friday");
    if (day === "Friday") setDay("Monday");
  };

  return (
    <div>
      <h2>Today is: {day} </h2>
      {prevDay && <h2>Previous work day was: {prevDay} </h2>}
      <button onClick={getNextDay}>Get Next Day</button>
    </div>
  );
};

export default WeekDay;
