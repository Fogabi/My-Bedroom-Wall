import React from "react";
import "./TextOne.css";

function TextOne() {
  return (
    <div className="text__one__container">
      <p className="text__one__p__one" id="text__one__p__one">
        Adapting to the home office during the pandemic was difficult for many
        of us.
      </p>
      <p className="text__one__p__two" data-text="Including me.">
        Including me.
      </p>
    </div>
  );
}

export default TextOne;
