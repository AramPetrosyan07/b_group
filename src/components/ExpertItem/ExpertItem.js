import React from "react"
import { SocialList } from "../Social/SocialList/SocialList"
import styles from "./ExpertItem.module.css"

export const ExpertItem = ({ expert }) => {
   return (
      <div className={styles.expert}>
         {
            <figure>
               <img src={expert.img} className="img-fluid" alt={expert.name} />
               <figcaption className={styles.caption}>
                  <h4 className={styles.name}>{expert.name}</h4>
                  <p className={styles.vocation}>{expert.vocation}</p>
                  <SocialList social__list={expert.follow} />
               </figcaption>
            </figure>
         }
      </div>
   )
}