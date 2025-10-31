import "./App.css";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
// import Timer from "./components/Timer";
import Timers from "./components/Timers";
import ContextApi from "./store/ContextApi";

function App() {
  return (
    <>
      <ContextApi>
        <Header />
        <main>
          {/* <Timer /> */}
          <AddTimer />
          <Timers />
        </main>
      </ContextApi>
    </>
  );
}

export default App;
