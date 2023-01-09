import React from "react";
import "./DayNight.css";

function DayNight() {
  return (
    <div className="day__night__container">
        <div className="day__night__glow"></div>
        <div className="day__night__stars"></div>
      <div className="day__night__spinner">
        <div className="day__night__sun">
          <div className="day__night__ray1"></div>
          <div className="day__night__ray2"></div>
          <div className="day__night__ray3"></div>
          <div className="day__night__ray4"></div>
        </div>
        <div className="day__night__moon"></div>
      </div>
    </div>
  );
}

export default DayNight;
