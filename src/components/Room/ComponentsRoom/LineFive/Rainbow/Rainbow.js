import React from "react";
import "./Rainbow.css";

function Rainbow() {
  return (
    <div className="rainbow__line__container" id="rainbow__line__container">
      <div className="rainbow__container" id="rainbow__container">
        <div className="rainbow__color rainbow__color-1"></div>
        <div className="rainbow__color rainbow__color-2"></div>
        <div className="rainbow__color rainbow__color-3"></div>
        <div className="rainbow__color rainbow__color-4"></div>
        <div className="rainbow__color rainbow__color-5"></div>
      </div>
      <div className="rainbow__text__container">
        <h1>
          I knew that regardless of how I was feeling, I could let my
          imagination flow through my walls.
        </h1>
      </div>
    </div>
  );
}

export default Rainbow;
