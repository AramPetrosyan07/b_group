import React from "react";
import styles from "./main.module.css";
import Banner from "./banner/Banner";
import About from "./about_as/About";
import Description from "./description/Description";
import Team from "./team/Team";
import Categories from "./categories/Categories";

const Main = () => {
  return (
    <div className={styles.center}>
      <div className={styles.fullContainer}>
        <Banner />
        <About />
        <Description />
        <Team />
        <Categories />
      </div>
    </div>
  );
};

export default Main;
