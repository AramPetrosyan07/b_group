import React from "react";
import style from "./new.module.css";
import Banner from "../../images/Banner Image.png";

export default function Newsite() {
  return (
    <>
      <section className={style.first}>
        {/* <div className={style.container}>  */}
        {/* </div> */}
        <img className={style.banner} src={Banner} alt="" />
        <h2 className={style.title}> Shop Single </h2>
      </section>
    </>
  );
}
