import React from "react";
import style from "./main.module.css";
import logo from "./assets/logo.png";
import brocolli from "./assets/brocolli edited.png";
import bannana from "./assets/banana edited.png";
import nuts from "./assets/nuts edited.png";
import tomatoe from "./assets/tometoe edited.png";
import bean from "./assets/bean edited.png";
import hazelnut from "./assets/hazelnut edited.png";
import eggs from "./assets/eggs edited.png";
import bread from "./assets/bread edited.png";
import mungbean from "./assets/mung bean edited.png";
import whiteHazelnut from "./assets/white hazelnut edited.png";
import corn from "./assets/corn edited.png";
import almonds from "./assets/almond edited.png";
import cart from "./assets/Cart Icon.png";
import search from "./assets/Search Icon.png";

const Main = () => {
  let fruits = [
    {
      status: "Vegetable",
      img: brocolli,
      title: "Calabrese Broccoli",
      price: "$13.00",
      width: "150px",
      height: "180px",
    },
    {
      status: "Fresh",
      img: bannana,
      title: "Fresh Banana Fruties",
      price: "$14.00",
      width: "143px",
      height: "198px",
    },
    {
      status: "Millets",
      img: nuts,
      title: "White Nuts",
      price: " $15.00",
      width: "225px",
      height: "205px",
    },
    {
      status: "Vegetables",
      img: tomatoe,
      title: "Vegan Red Tomato",
      price: "$17.00",
      width: "160px",
      height: "135px",
    },
    {
      status: "Health",
      img: bean,
      title: "Brown Hazelnut",
      price: "$11.00",
      width: "255px",
      height: "205px",
    },
    {
      status: "Nuts",
      img: hazelnut,
      title: "Eggs",
      price: "$12.00",
      width: "185px",
      height: "180px",
    },
    {
      status: "Fresh",
      img: eggs,
      title: "Zelco Suji Elaichi Rusk",
      price: "$17.00",
      width: "190px",
      height: "183px",
    },
    {
      status: "Fresh",
      img: bread,
      title: "Mung Bean",
      price: " $15.00",
      width: "178px",
      height: "186px",
    },
    {
      status: "Health",
      img: mungbean,
      title: "White Hazelnut",
      price: "$11.00",
      width: "180px",
      height: "200px",
    },
    {
      status: "Nuts",
      img: whiteHazelnut,
      title: "Fresh Corn",
      price: "$12.00",
      width: "222px",
      height: "211px",
    },
    {
      status: "Fresh",
      img: corn,
      title: "Organic Almonds",
      price: "$17.00",
      width: "160px",
      height: "225px",
    },
    {
      status: "Fresh",
      img: almonds,
      title: "Organic Almonds",
      price: "$15.00",
      width: "127px",
      height: "200px",
    },
  ];

  return (
    <>
      <div className={style.header}>
        <div className={style.sub_header}>
          <div className={style.logo}>
            <img className={style.img} src={logo} alt="logo" />
            <label className={style.logo_name}>Organick</label>
          </div>
          <div className={style.menu_bar}>☰</div>
          <ul className={style.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Pages˅</li>
            <li>Shop</li>
            <li>Projects</li>
            <li>News</li>
          </ul>
          <div className={style.last_sub_header}>
            <div className={style.search}>
              <img src={search} alt="" />
            </div>
            <div className={style.rectangle}>
              <div className={style.cart}>
                <img src={cart} alt="" />
              </div>
              <span>Cart(0)</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.banner}></div>
      <div className={style.shop}>
        <div className={style.shop_list}>
          {fruits.map((item) => {
            return (
              <div className={style.shop_column}>
                <div className={style.type_of_food}>{item.status}</div>
                <div className={style.img}>
                  <img
                    src={item.img}
                    alt="brocolli"
                    style={{ width: item.width, height: item.height }}
                  />
                </div>
                <span className={style.title}>{item.title}</span>
                <hr className={style.line} />
                <div className={style.price_tag}>
                  <div className={style.price}>
                    <s className={style.strike}>$20.00</s> {item.price}
                  </div>
                  <div className={style.stars}>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
              </div> 
            );
          })}
        </div>
      </div>

     
         
    </>
  );
};

export default Main;
