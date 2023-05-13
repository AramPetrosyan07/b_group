import React from 'react'
import style from "./next.module.css"
import Banana from './../images/banana.png'
import Brokkoli from './../images/brokkoli.png'
import Tomato from './../images/tomato.png'
import Nuts from './../images/nuts.png'


const Newsite3 = () => {
   const banan="asdfgh"
   const products=[
      {
         category: "Vegetable",
         image: Brokkoli,
         title: 'Calabrese Broccoli',
         price: `$13.00`
      },
      {
         category: "Fresh",
         image: Banana,
         title: 'Fresh Banana Fruites',
         price: "$14.00"
      },
      {
         category: "Millets",
         image: Nuts,
         title: 'White Nuts',
         price: "$15.00"
      },
      {
         category: "Vegetable",
         image: Tomato,
         title: 'Vegan Red Tomato',
         price: "$13.00"
      },
      
   ]

   const stars=Array(5).fill(0);


  return (
    <div className={style.container}>
      <div className={style.content}>
         <h2 className={style.title}>Related Products</h2>

         <div className={style.productsContainer}>
            {
               products.map((item,index)=>{
                  return (
                     <div key={index} className={style.productItem}>
                        <p className={style.category}>{item.category}</p>
                        <img src={item.image} className={`${item.image} ${index===1? style.bananner : ''}`} alt="" />
                        <h2
                         className={`${style.productTitle} ${index===1? style.productTitleBanan : ''}`}
                        
                        >{item.title}</h2>
                        <div className={style.productFooter}>
                           <div className={style.pricing}>
                           <p                                                className={style.deletedPrice}>$20.00</p>
                           <p className={style.price}>{item.price}</p>
                           </div>
                           <div className={style.stars}>
                              
                              {
                                 stars.map((item,index)=>{
                                    return (
                                       <p key={index} 
                                       className={style.star}>&#9733;</p>
                                    )
                                 }
                                 )
                              }
                              
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
    </div>
  )
}

export default Newsite3