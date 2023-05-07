import React from "react";
import classes from "./style.module.css";
import { BiChevronRight } from "react-icons/bi";
import lemon from "../../images/lemon.png";
import carrot from "../../images/carrot.png";
import leaf from "../../images/leaf.png";
import tommato from "../../images/tommato.png";
import raspberry from "../../images/raspberry.png";
import orange from "../../images/orange.png";

function Portfolio() {
  const fruitArr = [
    {
      fruitImage: lemon,
      title: "green & tasty lemon",
      category: "fruits",
    },
    {
      fruitImage: carrot,
      title: "organic carrot",
      category: "farmer",
    },
    {
      fruitImage: leaf,
      title: "organic betel leaf",
      category: "leaf",
    },
    {
      fruitImage: tommato,
      title: "natural tommato",
      category: "fruits",
    },
    {
      fruitImage: raspberry,
      title: "black raspberry",
      category: "farmer",
    },
    {
      fruitImage: orange,
      title: "honey orange",
      category: "farmer",
    },
  ];

  return (
    <>
      {fruitArr.map((item, index) => {
        return (
          <div className={classes.imgBlock} key={index}>
            <img src={item.fruitImage} alt="orange.png" title="Honey Orange" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.category}</p>
            </div>
            <div className={classes.popup}>
              <div className={classes.popupInner}>
                <BiChevronRight className={classes.goBtn} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Portfolio;
