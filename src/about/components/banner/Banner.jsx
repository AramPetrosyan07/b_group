import React from "react";
import styles from "./banner.module.css";
import BannerImage from "../../assets/Banner.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerImage} src={BannerImage} alt="" />
    </div>
  );
};

export default Banner;
