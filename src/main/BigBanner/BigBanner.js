import React from "react"
import bigBanner from "../img/team-banner.jpg"
import styles from "./BigBanner.module.css"

export const BigBanner = ({ caption }) => {
   return (
      <div className={styles.bigBanner}>
         <img src={bigBanner} className={styles.bigBanner__img + ' img-fluid'} alt="" />
         <h2 className={styles.caption} >
            {caption}
         </h2>
      </div>
   )
}