import React from 'react'
import classes from './style.module.css'
import banner from '../images/banner.png'

function Banner() {
  return (
    <div className={classes.banner}>
      <img src={banner} alt="banner" />
      <div className={classes.headerBlock}>
        <h1 className={classes.header}>portfolio standard</h1>
      </div>
    </div>
  )
}

export default Banner
