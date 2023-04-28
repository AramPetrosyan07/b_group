import React from "react";
import RightPattern from "../img/Pattern.png"
import LeftPattern from "../img/Pattern2.png"
import "./styleGuide.css";

const StyleGuide = () => {
    return(
        <div className="common">
           <div className="styleGuide">
            <div>
                <img src={RightPattern} alt="RightPattern" className="rightPattern" />
                <p className="styleGuideP"> Style Guide</p>
                <img src={LeftPattern} alt="LeftPattern" className="leftPattern"/>
            </div>
           </div>
        </div>
    )
};
export default StyleGuide
