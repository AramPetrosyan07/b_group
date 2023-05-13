import React from "react";
import styles from "./categories.module.css";
import Img1 from "../../assets/ContImg1.png";
import Img2 from "../../assets/ContImg2.png";
import Img3 from "../../assets/ContImg3.png";
import Img4 from "../../assets/ContImg4.png";

const Categories = () => {
  const arr = [
    {
      img: Img1,
      title: "Spicy",
    },
    {
      img: Img2,
      title: "Nuts & Feesd",
    },
    {
      img: Img3,
      title: "Fruits",
    },
    {
      img: Img4,
      title: "Vegetable",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.greenText}>About Us</p>
          <p className={styles.title}>What We Offer for You</p>
        </div>
        <div className={styles.imagesContainer}>
          {arr.map((item, index) => {
            return (
              <div className={styles.imageItem} key={index}>
                <img src={item.img} />
                <div className={styles.imagesTextContainer}>
                  <p className={styles.imgTitle}>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
