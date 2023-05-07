import React from "react";
import classes from "./style.module.css";
import banner from "../../images/banner.png";

function Banner() {
  return (
    <div className={classes.banner}>
      <img src={banner} alt="banner" />
      <h1 className={classes.header}>portfolio standard</h1>
    </div>
  );
}

export default Banner;
