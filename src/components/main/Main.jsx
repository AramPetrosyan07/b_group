import React from 'react'
import style from './main.module.css'
import image1 from './images/Photo.png'



export default function Main() {


  return (
    <div className={style.container}>
        <div className={style.main_Content}>
            <div className={style.image_block}>
                <img className={style.raspberry} src={image1} alt="img" />
                <div className={style.description_block_one}>
                    <div className={style.description_children_one}>
                        <h2>Black Raspberry</h2>
                        <p>
                            Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
                        </p>
                    </div>
                    <div className={style.description_children_two}>
                        <p><span>Date : </span>December 4, 2022</p>
                        <p><span>Client : </span>Kevin Martin</p>
                        <p><span>Category : </span>Agriculture , Eco</p>
                        <p><span>Service :</span>Organic Products</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
