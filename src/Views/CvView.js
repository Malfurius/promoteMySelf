import React from "react";

import "./CvView.css"
import CvData from "../__contrib/cv.json"
import CvItem from "../Components/CV/CvItem";

function CvView() {
  return (
      <div className={"container"}>
        <h3>Work Experience</h3>
        <ul className={"cvList"}>
          {CvData.work.reverse().map((item) => <li className={"cvListItem"}><CvItem title={item.title} date={item.date} content={item.content}/></li>)}
        </ul>
        <h3>Education</h3>
        <ul className={"cvList"}>
          {CvData.education.reverse().map((item) => <li className={"cvListItem"}><CvItem title={item.title} date={item.date} content={item.content}/></li>)}
        </ul>
      </div>
  )
}

export default CvView
