import React from "react";

import DisclaimerData from "../__contrib/disclaimer";
import DisclaimerItem from "../Components/DisclaimerItem/DisclaimerItem";
import "./DisclaimerView.css"
function DisclaimerView(props) {
  return (
      <div className={"container horizontalCenter"}>
        <DisclaimerItem title={DisclaimerData.urheberrecht.title} text={DisclaimerData.urheberrecht.text}/>
        <hr/>
        <DisclaimerItem title={DisclaimerData.haftung.title} text={DisclaimerData.haftung.text}/>
        <hr/>
        <DisclaimerItem title={DisclaimerData.linkHaftung.title} text={DisclaimerData.linkHaftung.text}/>
        <hr/>
        <DisclaimerItem title={DisclaimerData.datenschutz.title} text={DisclaimerData.datenschutz.text}/>
      </div>
  );
}

export default DisclaimerView;
