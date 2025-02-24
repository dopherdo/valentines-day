import React, { useState } from 'react';

import './App.css';



function App() {

  const [x, setx] = useState(52);
  const [y, sety] = useState(60);


  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }

  }, 100);


  /* code for moving button */
  const popUp = () => {
    alert("AH look at you, you caught the button. \nLucky button catchers win one free date on February 14th with an eligible bachelor who will be in touch with you to follow up!");
  }

  const clickedYes = () => {
    alert("YAYYY I'm glad you didn't say no :)")
  }

  function mouseOver() {
    setx(Math.random() * 95);
    sety(Math.random() * 95);
  }
  
  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };
  
  var yesStyle = {
    left: "40%",
    top: "60%",
    position: "absolute",
  }

  
  return (
    <>
    <p className="pre-valentine">
      Will you be my
    </p>
    <p className="valentine">Valentine?</p>
      <button 
        style={yesStyle}
        type="submit"
        onClick={clickedYes}
      >
        YES!
      </button> 
    <button
      onMouseOver={mouseOver}
      style={noStyle}
      onClick={popUp}
    >
      no u suck
  </button>
  </>
  );
}

export default App;
