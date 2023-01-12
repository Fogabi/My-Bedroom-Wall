import React from "react";
import "./BlackCat.css";

function BlackCat() {
  return (
    <div className="black__cat__main__div">
      <div className="black__cat__face">
        <div className="black__cat__ear-l">
          <div className="black__cat__ear__inner1"></div>
        </div>
        <div className="black__cat__ear-r">
          <div className="black__cat__ear__inner2"></div>
        </div>
        <div className="black__cat__eye-l">
          <div className="black__cat__eyeball"></div>
        </div>
        <div className="black__cat__eye-r">
          <div className="black__cat__eyeball"></div>
        </div>
        <div className="black__cat__nose">
          <div className="black__cat__l1"></div>
          <div className="black__cat__l2"></div>
        </div>
      </div>
      <div className="black__cat__body">
        <div className="black__cat__paw-l"></div>
        <div className="black__cat__paw-r"></div>
        <div className="black__cat__tail"></div>
      </div>
      <div className="black__cat__shadow"></div>
    </div>
  );
}

export default BlackCat;
