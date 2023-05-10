import React from "react"
import styles from "./SocialList.module.css"
import { SocialItem } from "../SocialItem/SocialItem"


export const SocialList = ({ social__list }) => {
   return (
      <ul className={styles.social__list + ' list-horizontal'}>
         {
            social__list.map(social__item => {
               let social__icon = ''
               if (social__item.indexOf('facebook') > -1) {
                  social__icon = "facebook-icon.svg"
               }
               else if (social__item.indexOf('instagram') > -1) {
                  social__icon = "instagram-icon.svg"
               }
               else if (social__item.indexOf('twitter') > -1) {
                  social__icon = "twitter-icon.svg"
               }
               return (
                  <SocialItem social__item={social__item} social__icon={social__icon} />
               )
            })
         }
      </ul>
   )
}