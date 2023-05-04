import React, { useState } from 'react';
import style from './customer.module.css';
import style_copy from '../OurProducts/ourproducts.module.css';
import { VscCircleFilled, VscCircle } from 'react-icons/vsc';
import { MdStarRate } from 'react-icons/md';
import { useSelector } from 'react-redux';

const CustomerSaying = () => {
  const { consumer } = useSelector((nam) => nam);
  const [consumerDat, setConsumerDat] = useState(0);

  const { rating, WhatSay, consumers, name, id, img } = consumer[consumerDat];

  function changeConsumerData(num) {
    setConsumerDat(num);
  }

  return (
    <div className={style.wrapperBlock}>
      <div className="container">
        <div className={style_copy.OurProducts_Title}>
          <div className={style_copy.OurProducts_categories}>Testimonial</div>
          <div className={style_copy.OurProducts_subTitle}>
            What Our Customer Saying?
          </div>

          <div className={style.customer_photo}>
            <img src={img} alt="Consumer" />
          </div>
          <span className="rating">
            {new Array(rating).fill('').map((_, id) => {
              return <MdStarRate key={id} />;
            })}
          </span>
          <div className={style.customer_text}>
            <p>{WhatSay}</p>
            <div className={style.customer_consumer}>
              <div className={style.customer_name}>{name} </div>
              {consumers}
            </div>
            <span className={style.dots}>
              {consumer.map((_, i) => {
                return i === id ? (
                  <VscCircleFilled
                    key={i}
                    className={style.switching}
                    size={18}
                    onClick={() => changeConsumerData(i)}
                  />
                ) : (
                  <VscCircle
                    key={i}
                    className={style.switching}
                    onClick={() => changeConsumerData(i)}
                  />
                );
              })}
            </span>
          </div>
          <div className={style.OurProducts_statistics}>
            <div className={style.OurProducts_statistics_block}>
              <div className={style.OurProducts_statistics_amount}>
                <span className={style.procent}>100%</span>
                <span className={style.procentName}>Organic</span>
              </div>
            </div>
            <div className={style.OurProducts_statistics_block}>
              <div className={style.OurProducts_statistics_amount}>
                <span className={style.procent}>285</span>
                <span className={style.procentName}>Active Product</span>
              </div>
            </div>
            <div className={style.OurProducts_statistics_block}>
              <div className={style.OurProducts_statistics_amount}>
                <span className={style.procent}>350+</span>
                <span className={style.procentName}>Organic Orchads</span>
              </div>
            </div>
            <div className={style.OurProducts_statistics_block}>
              <div className={style.OurProducts_statistics_amount}>
                <span className={style.procent}>25+</span>
                <span className={style.procentName}>Years of Farming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSaying;
