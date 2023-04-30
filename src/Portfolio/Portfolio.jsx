import React from 'react'
import classes from './style.module.css'

function Portfolio(image) {
console.log(image);

  return (
    <div className={classes.container}>
      {
        image.image.includes('lemon')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="lemon.png" />
          <div>
            <h2>green & tasty lemon</h2>
            <p>fruits</p>
          </div>
    </div>:null
      }
      {
        image.image.includes('carrot')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="carrot.png" />
          <div>
            <h2>organic carrot</h2>
            <p>fruits</p>
          </div>
        </div>:null
      }
      {
        image.image.includes('leaf')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="leaf.png" />
          <div>
            <h2>organic betel leaf</h2>
            <p>fruits</p>
          </div>
        </div>:null
      }
      {
        image.image.includes('tommato')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="tommato.png" />
          <div>
            <h2>natural tommato</h2>
            <p>fruits</p>
          </div>
        </div>:null
      }
      {
        image.image.includes('raspberry')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="raspberry.png" />
          <div>
            <h2>blak raspberry</h2>
            <p>fruits</p>
          </div>
        </div>:null
      }
      {
        image.image.includes('orange')? 
        <div className={classes.imgBlock}>
          <img src={image.image} alt="orange.png" />
          <div>
            <h2>honey orange</h2>
            <p>fruits</p>
          </div>
        </div>:null
      }

          
    </div>
  )
}

export default Portfolio
