import React, { useState } from "react";
import Hearts from "./Hearts";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [message] = useState("Will you be my Valentine? ❤️");
  const [yesClicked, setYesClicked] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 80); // %
    const randomY = Math.floor(Math.random() * 80); // %
    setNoBtnStyle({
      position: "absolute",
      left: `${randomX}%`,
      top: `${randomY}%`,
      transition: "all 0.5s ease", // smooth movement
    });
  };

  return (
    <div className="app">
      <Hearts />
      <h1 className="title">💌 A Special Question 💌</h1>
      <p className="proposal">{message}</p>
      <button className="yes-btn" onClick={() => setYesClicked(true)}>Yes! 💖</button>
      <button
        className="no-btn"
        style={noBtnStyle}
        onMouseEnter={moveNoButton}
      >
        No 😢
      </button>
      {yesClicked && (
        <>
          <Confetti />
          <p className="sweet-message">I loves you sm! 💕</p>
        </>
      )}
    </div>
  );
}

export default App;
