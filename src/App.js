import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
/* this  is to learn 
useState, 
useRef ans 
setInterval and 
clearInterval */
function App() {
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  const intervalRef = useRef(null);
  function padTime(time) {
    return time.toString().padStart(2, "0");
  }
  function startTimer() {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        return timeLeft <= 0 ? resetTimer() : timeLeft - 1;
      });
    }, 1000);
  }
  function stopTimer() {
    clearInterval(intervalRef.current);
  }
  function resetTimer() {
    clearInterval(intervalRef.current);
    setTimeLeft(10 * 60);
    return 0;
  }
  return (
    <div className="App-header">
      <div className="">react timer project</div>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="" style={{ magin: "5px", padding: "5px" }}>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>
      </div>
    </div>
  );
}

export default App;
