import React from 'react'
import style from './new.module.css'
import Mainpic from './../images/Banner Image.png'

export default function Newsite() {

  return (
      <>
        <div className={style.first}>
            <img className={style.mainPicture} src={Mainpic} alt="" />
            <h2 className={style.title}> Shop Single </h2>
        </div>
        </>
      )

}
