import React from 'react';
import style from './ourproducts.module.css';
import { MdStarRate } from 'react-icons/md';

const Cart = ({ id, typeFood, img, name, pastPrice, newPrice, rating }) => {
  return (
    <div key={id} className={style.OurProducts}>
      <div className={style.OurProducts_Cart}>
        <div className={style.OurProducts_Info}>
          <div className={style.typeFood}>{typeFood}</div>
          <img src={img} alt={name} />
        </div>

        <div className={style.OurProducts_Price}>
          <div className={style.OurProducts_nameFood_wrapper}>
            <div className={style.nameFood}>{name}</div>
          </div>
          <hr />
          <div className={style.OurProducts_Price_wrapper}>
            <div className={style.OurProducts_Price_flex}>
              <span className={style.OurProducts_Price_Past}>{pastPrice}</span>
              <span className={style.OurProducts_Price_Now}>{newPrice}</span>
            </div>
            <span className="OurProducts_rating">
              {new Array(rating).fill(0).map((_, index) => {
                return <MdStarRate key={index} />;
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
