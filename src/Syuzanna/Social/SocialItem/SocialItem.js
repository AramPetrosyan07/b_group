import React from "react"



export const SocialItem = ({ social__item, social__icon }) => {
   return (
      <li><a href={social__item} ><img src={require(`../icons/${social__icon}`)} alt={social__item} /></a></li>
   )
}