import React from "react";
import styles from "./description.module.css";
import Green from "../../assets/Green.png";

import Cart from "../../assets/Cart.png";
import Leaf from "../../assets/Leaf.png";
import Watch from "../../assets/Watch.png";
import Card from "../../assets/Сard.png";

const Description = () => {
  const fresh = [
    {
      img: Cart,
      title: "Return Policy",
    },
    {
      img: Leaf,
      title: "100% Fresh",
    },
    {
      img: Watch,
      title: "Support 24/7",
    },
    {
      img: Card,
      title: "Secured Payment",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.firstContent}>
        <div className={styles.left}>
          <p className={styles.greenText}>Why Choose us?</p>
          <p className={styles.title}>
            We do not buy from the open market & traders.
          </p>
          <p className={styles.text}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div className={styles.natiral}>
            <div className={styles.greenCircle}></div>
            <p className={styles.naturalText}>100% Natural Product</p>
          </div>

          <p className={styles.middleText}>
            Simply dummy text of the printing and typesetting industry Lorem
            Ipsum
          </p>

          <div className={styles.natiral2}>
            <div className={styles.greenCircle}></div>
            <p className={styles.naturalText}>Increases resistance</p>
          </div>

          <p className={styles.middleText}>
            Filling, and temptingly healthy, our Biona Organic Granola with Wild
            Berries is just the thing
          </p>
        </div>
        <div className={styles.right}>
          <img src={Green} alt="" />
        </div>
      </div>
      <div className={styles.fresh}>
        {fresh.map((item, ind) => {
          return (
            <div className={styles.freshItem} key={ind}>
              <img src={item.img} className={styles.freshImg} alt="" />
              <p className={styles.freshTitle}>{item.title}</p>
              <p className={styles.freshText}>
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
