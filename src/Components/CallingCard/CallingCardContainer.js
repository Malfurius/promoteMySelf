import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./CallingCard.css";
import CallingCardFront from "./CallingCardFront";
import CallingCardBack from "./CallingCardBack";

function CallingCardContainer() {
  const rotate0to90 = "rotate0to90";
  const rotate90to180 = "rotate90to180";
  const rotate180to90 = "rotate180to90";
  const rotate90to0 = "rotate90to0";
  const [rotated, setRotated] = React.useState(false);
  const [animationClass, setAnimationClass] = React.useState("");
  return (
      <div className={"callingCardContainer "+animationClass} onAnimationEnd={(e) => {
        if (e.animationName === rotate0to90) {
          setRotated(!rotated);
          setAnimationClass(rotate90to180);
        }
        if (e.animationName === rotate90to180) {
          setAnimationClass("backfront");
        }
        if(e.animationName === rotate180to90){
          setRotated(!rotated);
          setAnimationClass(rotate90to0);
        }
        if (e.animationName === rotate90to0) {
          setAnimationClass("");
        }
      }}>
        {!rotated &&
        <CallingCardFront clickCallback={() => setAnimationClass(rotate0to90)}/>
        }

        {rotated &&
        <div className={"backfront"}>
        <CallingCardBack clickCallback={() => setAnimationClass(rotate180to90)}/>
        </div>}

      </div>
  )
}

export default CallingCardContainer;
