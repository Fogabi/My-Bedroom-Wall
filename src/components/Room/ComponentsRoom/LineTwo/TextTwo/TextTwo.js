import React from "react";
import "./TextTwo.css";

function TextTwo() {
  return (
    <div className="text__two__container">
      <div>
        <h1
          className="text__two__day__night"
          data-text="Day and night, night and day,"
        >
          Day and night, night and day,
        </h1>
      </div>
      <div className="text__two__paragraphs" id="text__two__paragraphs">
        <p>there was just me,</p>
        <p>a cup of tea,</p>
        <p>my loneliness,</p>
        <p>my bedroom office,</p>
        <p className="text__two__white__walls">white walls,</p>
        <p>and</p>
      </div>
      <div className="text__two__shadow__container">
        <h1 className="text__two__shadow" data-title="MY SHADOW">
          MY SHADOW
        </h1>
      </div>
    </div>
  );
}

export default TextTwo;
