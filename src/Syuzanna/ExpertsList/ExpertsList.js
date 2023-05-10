import React from "react"
import styles from "./ExpertsList.module.css"
import { ExpertItem } from "../ExpertItem/ExpertItem"

export const ExpertsList = ({ experts }) => {
   console.log(experts)
   return (
      <div className={'container ' + styles.experts}>
         {
            experts.map(expert => {
               return (
                  <ExpertItem expert={expert} />
               )
            })
         }
      </div>
   )
}