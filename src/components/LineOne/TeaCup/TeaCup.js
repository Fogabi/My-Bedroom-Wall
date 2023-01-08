import React from "react";
import "./TeaCup.css";

function TeaCup() {
  return (
    <div className="tea__cup__container">
      <div className="tea__cup__plate"></div>
      <div className="tea__cup">
        <div className="tea__cup__top">
          <div className="tea__cup__vapour">
            <div className="span" style={{ "--v": 1 }}></div>
            <div className="span" style={{ "--v": 2 }}></div>
            <div className="span" style={{ "--v": 3 }}></div>
            <div className="span" style={{ "--v": 4 }}></div>
            <div className="span" style={{ "--v": 5 }}></div>
            <div className="span" style={{ "--v": 6 }}></div>
            <div className="span" style={{ "--v": 7 }}></div>
            <div className="span" style={{ "--v": 8 }}></div>
            <div className="span" style={{ "--v": 9 }}></div>
            <div className="span" style={{ "--v": 10 }}></div>
            <div className="span" style={{ "--v": 11 }}></div>
            <div className="span" style={{ "--v": 12 }}></div>
            <div className="span" style={{ "--v": 13 }}></div>
            <div className="span" style={{ "--v": 14 }}></div>
            <div className="span" style={{ "--v": 15 }}></div>
          </div>
          <div className="tea__cup__circle">
            <div className="tea__cup__tea"></div>
          </div>
          <div className="tea__cup__handle"></div>
        </div>
      </div>
    </div>
  );
}

export default TeaCup;
