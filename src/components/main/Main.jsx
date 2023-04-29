import React from 'react'
import style from './main.module.css'
import image1 from './images/Photo.png'
import images2 from './images/Photo (1).png'

export default function Main() {


  return (
    <div className={style.container}>
        <div className={style.main_Content}>
            <div className={style.image_block}>
                <img src={image1} alt="img" />
                <div className={style.child_block}>
                    <div className={style.description_block_one}>
                        <div className={style.description_children_one}>
                            <h2>Black Raspberry</h2>
                            <p>
                                Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
                            </p>
                        </div>
                    </div>
                    <div className={style.description_block_two}>
                        <div className={style.description_children_two}>
                            <p><span>Date : </span>December 4, 2022</p>
                            <p><span>Client : </span>Kevin Martin</p>
                            <p><span>Category : </span>Agriculture , Eco</p>
                            <p><span>Service :</span>Organic Products</p>
                        </div>
                    </div>
                </div>  
            </div>


            {/* About The Farm block */}
            

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


                {/* How To Farm: */}


                <div className={style.how_to_farm_content}>
                    <div className={style.how_to_farm_title_text}>
                        <h2>How To Farm:</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                            <br></br>
                            <br></br>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
                        </p>
                    </div>
                </div>


                {/* Conclusion: */}


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
            </div>

        </div>
    </div>
  )
}
