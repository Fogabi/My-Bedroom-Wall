import React, { useState } from "react";
import "./Lamp.css";

function Lamp() {
  const [on__off, setOnOff] = useState("on");
  return (
    <div className="lamp__container">
      <div>
        <h1 className="lamp__text">
          Before you leave, can you please turn off the lights?
          Click on the button on the right!
        </h1>
        <h2 className="lamp__thanks" id="lamp__thanks">
          Thank you!
        </h2>
        <div className="contact__container" id="contact__container">
          <h1>Gabriela Fogaça Cunha</h1>
          <h2>gabifogaca.gabriela@gmail.com</h2>
          <h3>+55 (12) 98217-1835</h3>
        </div>
      </div>
      <div className="switch__to__dark__container">
        <input
          className="switch__to__dark__input"
          type="checkbox"
          onClick={() => {
            //changing elements when the switch to dark is triggered

            const turn__off__lights =
              window.parent.document.getElementById("light__main");

            const turn__off__rainbow__container =
              window.parent.document.getElementById("rainbow__container");

            const turn__off__rainbow__container__after =
              window.getComputedStyle(turn__off__rainbow__container, ":after");

            const change__color__text__two__paragraphs =
              window.parent.document.getElementById("text__two__paragraphs");

            const lamp__thaks = document.getElementById("lamp__thanks");
            const contact = document.getElementById("contact__container");

            if (on__off == "on") {
              turn__off__lights.style.background = "#85a8fc;";

              turn__off__lights.style.opacity = 0.4;

              turn__off__rainbow__container.style.setProperty(
                "--turn__off__rainbow__container__afterBackColor",
                "#85a8fc;"
              );
              change__color__text__two__paragraphs.style.color = "white";

              lamp__thaks.style.color = "white";

              contact.style.color = "white";

              setOnOff("off");
            } else {
              turn__off__lights.style.background = "#85a8fc";

              turn__off__lights.style.opacity = 1;

              turn__off__rainbow__container.style.setProperty(
                "--turn__off__rainbow__container__afterBackColor",
                "#85a8fc"
              );
              change__color__text__two__paragraphs.style.color = "black";

              lamp__thaks.style.color = "transparent";
              contact.style.color = "transparent";
              setOnOff("on");
            }
          }}
        />
        <label className="switch__to__dark__label"></label>
      </div>
    </div>
  );
}

export default Lamp;
