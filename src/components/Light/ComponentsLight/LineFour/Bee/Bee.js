import React from "react";
import "./Bee.css";

function Bee() {
  return (
    <div className="bee__container">
      <div className="bee__texts">
        <h1 className="bee__text-1">
          I'm going to draw a bee using boots on my wall.
        </h1>
        <h2 className="bee__text-2">Since that day </h2>
      </div>
      <div className="bee">
        <div className="bee__antenna"></div>
        <div className="bee__boots__leg"></div>
        <div className="bee__boots"></div>
      </div>
    </div>
  );
}

export default Bee;
