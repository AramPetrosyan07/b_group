import React from 'react'
import style from './changelog.module.css'
import image1 from './images/Pattern (1).png'
import image2 from './images/Pattern.png'
import image3 from './images/Photo.jpg'


export default function Changelog() {
  return (
    <div className={style.changelog_container}>
        <div className={style.changelog_content}>
            <div className={style.images_and_title_block}>
                <img src={image2} alt="img" />
                <h2>Changelog</h2>
                <img src={image1} alt="img" />
            </div>
            <div className={style.initial_block}>
                <div className={style.image_and_descr_block}>
                    <img src={image3} alt="img" />
                    <div className= {style.title_and_text_block}>
                        <h3>V.1</h3>
                        <p>Initial Organick Webflow Template Release</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
