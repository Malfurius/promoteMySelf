import React from "react";

function DisclaimerItem(props) {
  return(
      <div>
        <h5>{props.title}</h5>
        <div>{props.text}</div>
      </div>
  )
}

export default DisclaimerItem;
