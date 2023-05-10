import React from "react"
import styles from "./PageCaption.module.css"

export const PageCaption = ({ title, subtitle, text }) => {
   return (
      <div className={styles.pageCaption + ' container'}>
         <h4 className={styles.title} >
            {title}
         </h4>
         <h2 className={styles.subtitle}>{subtitle}</h2>
         <p className={styles.text}>{text}</p>
      </div>
   )
}
