import React from "react";
import "./Header.css";

function Header() {
  const teste = () => {
    console.log("lalala");
  };
  return (
    <div className="header__container">
        <h3 className="header__intro">The story of</h3>
        <h1 className="header__text" data-text="My Bedroom Walls .">
          My Bedroom Walls .
        </h1>
    </div>
  );
}

export default Header;
