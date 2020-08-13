import React from "react";
import Card from "react-bootstrap/Card";
import MeImg from "../../__contrib/meImg.jpg"
import {ChevronDoubleRight} from "react-bootstrap-icons";

import "./CallingCard.css";

function CallingCardFront(props) {
  return (
      <Card style={{width: '18rem'}} onClick={props.clickCallback}>
        <Card.Body>
          <div className={"icon   horizontalCenter"}>
            <img src={MeImg} className={"icon"}/>
          </div>
          <div className={"horizontalCenter tagContainer"}>
            Maximilian Henneberg
          </div>
          <hr/>
          <div className={"horizontalCenter tagContainer"}>
            <span>Developer</span> • <span>Traveler</span> • <span>Gamer</span>
          </div>
        </Card.Body>
      <div className={"turnIcon"}>
        <ChevronDoubleRight/>
      </div>
      </Card>
  );
}

export default CallingCardFront;
