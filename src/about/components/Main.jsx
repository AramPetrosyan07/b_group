import React from "react";
import styles from "./main.module.css";
import Banner from "./banner/Banner";
import About from "./about_as/About";
import Description from "./description/Description";

const Main = () => {
  return (
    <div className={styles.center}>
      <div className={styles.fullContainer}>
        <Banner />
        <About />
        <Description />
      </div>
    </div>
  );
};

export default Main;
