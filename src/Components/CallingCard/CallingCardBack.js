import React from "react";
import Card from "react-bootstrap/Card";
import {EnvelopeFill, GeoAlt, Geo} from "react-bootstrap-icons";
import {ReactComponent as Insta} from "../../__contrib/instagram.svg";
import Obfuscate from 'react-obfuscate';


import "./CallingCard.css";

function CallingCardBack(props) {
  return (
      <Card style={{width: '18rem'}} onClick={props.clickCallback}>
        <Card.Body>
            <ul className={"contactList horizontalCenter"}>
              <li className={"socialListItem"}><EnvelopeFill width="2em" height="2em"/><span className={"contactText"}><Obfuscate email="henneberg.maximilian@googlemail.com"/></span></li>
              <li className={"socialListItem"}><a target={"_blank"} href={"https://www.instagram.com/traveling.henne/"}><Insta className={"contactIcons"}/><span className={"contactText"}>traveling.henne</span></a></li>
              <li className={"socialListItem"}><Geo width="2em" height="2em"/><span className={"contactText"}>85748 Garching bei München</span> </li>
            </ul>
        </Card.Body>

      </Card>
  );
}

export default CallingCardBack;
