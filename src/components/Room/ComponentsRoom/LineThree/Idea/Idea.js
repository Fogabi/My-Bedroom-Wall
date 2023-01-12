import React from "react";
import "./Idea.css";

function Idea() {
  return (
    <div className="idea__container">
      <div className="idea__lamp__container">
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 4 }}></span>
        <span style={{ "--i": 5 }}></span>
        <span style={{ "--i": 6 }}></span>
        <span style={{ "--i": 7 }}></span>
        <h1 className="idea__word">IDEA</h1>
      </div>
      <div>
        <h1 className="idea__text">One day, tired of looking at my white walls, I had an idea:</h1>
      </div>
    </div>
  );
}

export default Idea;
