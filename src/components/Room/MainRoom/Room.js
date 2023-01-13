import React from "react";
import BlackCat from "../ComponentsRoom/LineOne/BlackCat/BlackCat";
import TeaCup from "../ComponentsRoom/LineOne/TeaCup/TeaCup";
import Header from "../ComponentsRoom/Header/Header";
import TextOne from "../ComponentsRoom/LineOne/TextOne/TextOne";
import TextTwo from "../ComponentsRoom/LineTwo/TextTwo/TextTwo";
import DayNight from "../ComponentsRoom/LineTwo/DayNight/DayNight";
import Idea from "../ComponentsRoom/LineThree/Idea/Idea";
import Bee from "../ComponentsRoom/LineFour/Bee/Bee";
import Rainbow from "../ComponentsRoom/LineFive/Rainbow/Rainbow";
import "./Room.css";
import Lamp from "../ComponentsRoom/LineSix/Lamp/Lamp";
import Egg from '../../Egg/Egg'

function Light() {
  return (
    <div className="light__main" id="light__main">
      <Header />
      <div className="line__1" id="line__one">
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
      <div className="line__6">
        <Lamp />
      </div>
    </div>
  );
}

export default Light;
