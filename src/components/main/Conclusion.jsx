import React from 'react'
import style from './main.module.css'

export default function Conclusion() {
  return (
    <div className={style.conclusion_content}>
        <div className={style.conclusion_title_and_text}>
            <h2>Conclusion:</h2>
            <p>
                t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                <br></br>
                <br></br>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
            </p>
        </div>
    </div>
  )
}
