import React from "react";
import { useTimersContext } from "../store/ContextApi";
import Timer from "./Timer";

const Timers = () => {
  const { timers } = useTimersContext();
  return (
    <div>
      <ul>
        {timers.map((timer) => (
          <li key={timer.name}>
            <Timer {...timer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timers;
