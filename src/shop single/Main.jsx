import React from 'react'
import style from "./main.module.css"
import Newsite from './main/Newsite';
import Newsite2 from './second/Newsite2';
import Newsite3 from './next/Newsite3';

const Main = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
       <Newsite/>
      <Newsite2/>
      <Newsite3/>
      </div>
    </div>
  )
}

export default Main