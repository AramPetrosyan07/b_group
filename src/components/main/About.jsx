import React from 'react'
import style from './main.module.css'
import images2 from './images/Photo (1).png'


export default function About() {
  return (
    <div className={style.farm_block}>
        <div className={style.farm_block_content}>
            <div className={style.title_and_text}>
                <h2>About The Farm:</h2>
                <p>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    <br></br>
                    <br></br> 
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
                </p>
                <img src={images2} alt="img" />
                <p className={style.image_descr}>The Organic Products</p>
            </div>
        </div>
    </div>

  )
}
