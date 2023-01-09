import React from "react";
import BlackCat from "../ComponentsLight/LineOne/BlackCat/BlackCat";
import TeaCup from "../ComponentsLight/LineOne/TeaCup/TeaCup";
import Header from "../ComponentsLight/Header/Header";
import TextOne from "../ComponentsLight/LineOne/TextOne/TextOne";
import TextTwo from "../ComponentsLight/LineTwo/TextTwo/TextTwo";
import DayNight from "../ComponentsLight/LineTwo/DayNight/DayNight";
import Idea from "../ComponentsLight/LineThree/Idea/Idea";
import Bee from "../ComponentsLight/LineFour/Bee/Bee";
import Rainbow from "../ComponentsLight/LineFive/Rainbow/Rainbow";
import "./Light.css";

function Light() {
  return (
    <div className="light__main">
      <Header />
      <div className="line__1">
        <TextOne />
        <BlackCat />
        <TeaCup />
      </div>
      <div className="line__2">
        <DayNight />
        <TextTwo />
      </div>
      <div className="line__3">
        <Idea />
      </div>
      <div className="line__4">
        <Bee />
      </div>
      <div className="line__5">
        <Rainbow />
      </div>
    </div>
  );
}

export default Light;
