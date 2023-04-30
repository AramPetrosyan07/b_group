import React from "react";
import RightPattern from "../img/Pattern.png";
import LeftPattern from "../img/Pattern2.png";
import "./styleGuide.css";

const StyleGuide = () => {
  return (
    <div className="common">
      <div className="styleGuide">
        <div>
          <img src={RightPattern} alt="RightPattern" className="rightPattern" />
          <p className="styleGuideP"> Style Guide</p>
          <img src={LeftPattern} alt="LeftPattern" className="leftPattern" />
        </div>
      </div>
      <div className="colors">
        <div className="background">
          <p className="colorWord">Color</p>
          <div className="colorsDivs">
            <div className="blueDark">
              <div></div>
              <p className="hex">#274C5B</p>
            </div>
            <div className="greenDark">
              <div></div>
              <p className="hex">#7EB693</p>
            </div>
            <div className="YellowDark">
              <div></div>
              <p className="hex">#EFD372</p>
            </div>
            <div className="GrayDark">
              <div></div>
              <p className="hex">#D4D4D4</p>
            </div>
            <div className="WhiteDark">
              <div></div>
              <p className="hex">#F9F8F8</p>
            </div>
            <div className="GrayLight">
              <div></div>
              <p className="hex">#EFF6F1</p>
            </div>
            <div className="BlackLight">
              <div></div>
              <p className="hex">#525C60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StyleGuide;
