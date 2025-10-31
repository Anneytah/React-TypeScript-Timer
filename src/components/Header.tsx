import React from "react";
import { useTimersContext} from "../store/ContextApi"

const Header = () => {
    const timersCtx = useTimersContext();
    timersCtx;

  return (
    <div>
      <header>
        <h1>ReactTimer</h1>
        <button onClick={timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer} className="button">{timersCtx.isRunning ? "Stop" : "Start"} Timers</button>
        {/* <Button>Stop Timers</Button> */}
      </header>
    </div>
  );
};

export default Header;
