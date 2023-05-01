import React from "react";
import styles from "./about.module.css";
import Salad from "../../assets/Salad.png";
import Plant from "../../assets/Plant.png";
import Tractor from "../../assets/Tractor.png";
import Arrow from "../../assets/Arrow.png";

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={Salad} alt="" />
        </div>
        <div className={styles.right}>
          <p className={styles.greenText}>About Us</p>
          <p className={styles.title}>We do Creative Things for Success</p>
          <p className={styles.text}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className={styles.text2}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.modern}>
            <div className={styles.modernLeft}>
              <img src={Tractor} className={styles.tractor} />
              <p className={styles.modernText}>Modern Agriculture Equipment</p>
            </div>
            <div className={styles.modernRight}>
              <img src={Plant} className={styles.plant} />
              <p className={styles.modernText}>No growth hormones are used</p>
            </div>
          </div>
          <div className={styles.btn}>
            <p>Explore More</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
