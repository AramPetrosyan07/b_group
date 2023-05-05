import React from "react";
import RightPattern from "../img/Pattern.png";
import LeftPattern from "../img/Pattern2.png";
 import {BsFillArrowRightCircleFill} from 'react-icons/bs'
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

        <div className="texts">
          <div className="textDiv">
            <p className="textStyle">Text Styles</p>
          </div>
          <div className="text">
            <h1 className="h1">Display H1 Text</h1>
            <h2 className="h2">Heading H2 Text</h2>
            <h3 className="h3">Heading H3 Text</h3>
            <h4 className="h4">Heading H4 Text</h4>
            <h5 className="h5"> Heading H5 Text</h5>
            <h6 className="h6">Heading H6 Text</h6>
          </div>
          <div></div>
        </div>
        <div className="paragraphs">
          <p className="paragr">Paragraph</p>
          <p className="p1">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed.
          </p>
        </div>
        <div className="paragraphs">
          <p className="list">List</p>
          <ul className="ul">
            <li>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li> Content here, content here', making it look like readable</li>
            <li>Packages and web pageLorem Ipsum as their default</li>
          </ul>
        </div>
        <div className="quotes">
          <p className="quotesText">Quotes</p>
          <div>
            <p>
              “The first rule of any organic used in a business is that nature
              applied to an efficient operation will magnify the efficiency. The
              second is that organic applied to an inefficient operation will
              magnify the health.”
            </p>
          </div>
        </div>
        <div className="button">
          <p className="buttonText">Button</p>
          <div>
            <button className="defaultButton">
              Default Button 
              <BsFillArrowRightCircleFill className="icon"/>
            </button>
            <button className="defaultButton2">
              {" "}
              Default Button 
              <BsFillArrowRightCircleFill className="icon1"/>
            </button>
            <button className="defaultButton3">
              {" "}
              Default Button 
              <BsFillArrowRightCircleFill className="icon"/>
            </button>
            <button className="defaultButton4">
              {" "}
              Pagination Button
            </button>
          </div>
        </div>

        <div className="orange">
          <div className="newsletter">
            <p>Subscribe to<br/> our Newsletter</p>
          </div>
          <div className="form">
            <input type="text" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StyleGuide;
