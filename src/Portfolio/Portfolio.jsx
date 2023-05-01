import React from 'react'
import classes from './style.module.css'
import {BiChevronRight} from 'react-icons/bi'



function Portfolio(image) {
 
  return (
    <>
      {
        image.image.includes('lemon')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="lemon.png"  title='Tasty Lemon'/>
          <div>
            <h2>green & tasty lemon</h2>
            <p>fruits</p>
          </div>
          <div className={classes.popup}>
            <div className={classes.popupInner}>
              <BiChevronRight className={classes.goBtn}/>
            </div>
          </div>   
        </div>:null
      }
      {
        image.image.includes('carrot')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="carrot.png" title='Organic Carrot'/>
          <div>
            <h2>organic carrot</h2>
            <p>farmer</p>
          </div>
          <div className={classes.popup}>
            <div className={classes.popupInner}>
              <BiChevronRight className={classes.goBtn}/>
            </div>
          </div>
        </div>:null
      }
      {
        image.image.includes('leaf')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="leaf.png" title='Leaf'/>
          <div>
            <h2>organic betel leaf</h2>
            <p>leaf</p>
          </div>
          <div className={classes.popup}>
            <div className={classes.popupInner}>
              <BiChevronRight className={classes.goBtn}/>
            </div>
          </div>
        </div>:null
      }
      {
        image.image.includes('tommato')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="tommato.png" title='Natural Tommato'/>
          <div>
            <h2>natural tommato</h2>
            <p>fruits</p>
          </div>
          <div className={classes.popup}>
            <div className={classes.popupInner}>
              <BiChevronRight className={classes.goBtn}/>
            </div>
          </div>
        </div>:null
      }
      {
        image.image.includes('raspberry')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="raspberry.png" title='Black Raspberry'/>
          <div>
            <h2>blak raspberry</h2>
            <p>farmer</p>
          </div>
          <div className={classes.popup}>
            <div className={classes.popupInner}>
              <BiChevronRight className={classes.goBtn}/>
            </div>
          </div>
        </div>:null
      }
      {
         
        image.image.includes('orange')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="orange.png" title='Honey Orange'/>
          <div>
            <h2>honey orange</h2>
            <p>farmer</p>
          </div>
          <div className={classes.popup}>
            <div className={classes.popupInner}>
              <BiChevronRight className={classes.goBtn}/>
            </div>
          </div>
        </div>:null 
      }
      
          
   </> 
  )
}

export default Portfolio
