import React from "react";
import "./CV.css"

function CvItem(props) {
  return (
      <div className={"container"}>
        <div className={"top"}>
          <div className={"title"}>{props.title}</div>
          <div className={"date"}>{props.date}</div>
        </div>
        <hr/>
        <div dangerouslySetInnerHTML={{__html:props.content}}/>
      </div>
  )
}

export default CvItem;
