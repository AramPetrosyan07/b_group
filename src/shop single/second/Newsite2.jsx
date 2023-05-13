import React from 'react'
import style from './new1.module.css'
import Picture1 from './../images/Image.png'
import Picture2 from './../images/Star.png'
import Picture3 from './../images/Pricing.png'
import Arrow from './../images/Arrow.png'
export default function Newsite2() {

  return (
 
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.picture_box}>
        <img className={style.picture1} src={Picture1} alt="" />
        </div>
        <div className={style.second}>
          <h2 className={style.title1}>Health Pistachios</h2>
          <img className={style.picture2} src={Picture2} alt="" />
          <img className={style.picture3} src={Picture3} alt="" />
          <p className={style.small_text}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className={style.borders}>
            <p className={style.small_text2}>Quantity :</p>
            <button className={style.link1}>1</button>
            <button className={style.link2}>Add To Cart <img className={style.arrow} src={Arrow} alt="" /></button>
            
          </div>
        </div>
      </div>
      <div className={style.next}>
        <button className={style.product}>Product Description</button>
        <button className={style.additional}>Additional Info</button>
      </div>
        <div className={style.descr}>
          <p className={style.last}>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        </div>
    </div>


  )

}