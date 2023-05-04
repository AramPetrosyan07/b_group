import React, { useState } from 'react';
import style from './about.module.css';
import { GrFormNextLink } from 'react-icons/gr';
import offerStyle from './offer.module.css';
import useAction from '../../hook/useAction';
import { useSelector } from 'react-redux';
import { useGetDataQuery } from '../../store/Products/Product.mutation';

import productStyle from './ourproducts.module.css';
import { BiError } from 'react-icons/bi';
import offerproductStyle from './offer.module.css';
import Cart from './Cart';

import CustomerStyle from './customer.module.css';
import style_copy from './ourproducts.module.css';
import { VscCircleFilled, VscCircle } from 'react-icons/vsc';
import { MdStarRate } from 'react-icons/md';

import OfferStyle from './offer.module.css';

const AboutUs = () => {
  const { consumer } = useSelector((nam) => nam);
  const [consumerDat, setConsumerDat] = useState(0);

  const { rating, WhatSay, consumers, name, id, img } = consumer[consumerDat];

  function changeConsumerData(num) {
    setConsumerDat(num);
  }

  const { isLoading, isError, data } = useGetDataQuery();

  const { LoadMoreNum } = useSelector((state) => state);
  const { supplement } = useAction();

  return (
    <>
      <section className={style.About}>
        <div className="container">
          <div className={style.About_Us}>
            <div className={style.About_Us_Block_One}>
              <img src="/assets/Fruits.png" alt="Fruits" />
            </div>

            <div className={style.About_Us_Block_Two}>
              <div className="About_info">
                <div className={style.AboutUs}>About Us</div>
                <div className={style.AboutUs_title}>
                  <h1>
                    We Believe in Working <br /> Accredited Farmers
                  </h1>
                </div>
                <div className={style.AboutUs_text}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </div>
              </div>

              <div className={style.AboutUs_items}>
                <div className={style.AboutUs_items_One}>
                  <div className="AboutUs_items_wrapper_img">
                    <img
                      src="/assets/img/items/Vegan Food.png"
                      alt="Vegan Food"
                    />
                  </div>
                  <div className={style.AboutUs_wrapper}>
                    <div className={style.AboutUs_items_Titile}>
                      Organic Foods Only
                    </div>
                    <div className="AboutUs_items_text">
                      Simply dummy text of the printing and typesetting <br />
                      industry. Lorem Ipsum
                    </div>
                  </div>
                </div>

                <div className={style.AboutUs_items}>
                  <div className={style.AboutUs_items_One}>
                    <div className="AboutUs_items_wrapper_img">
                      <img
                        src="/assets/img/items/Mailbox Quality.png"
                        alt="Mailbox Quality"
                      />
                    </div>
                    <div className={style.AboutUs_wrapper}>
                      <div className={style.AboutUs_items_Titile}>
                        Quality Standards
                      </div>
                      <div className="AboutUs_items_text">
                        Simply dummy text of the printing and typesetting <br />
                        industry. Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={offerStyle.offer_btn}
                  id={offerStyle.offerWrapper}
                >
                  <button>
                    Shop Now <GrFormNextLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={productStyle.allInCenter}>
        <div className={productStyle.OurProducts_Title}>
          <div className={productStyle.OurProducts_categories}>Categories</div>
          <div className={productStyle.OurProducts_subTitle}>Our Products</div>
        </div>
        <div className="container">
          <div className={productStyle.OurProducts}>
            {isLoading ? (
              <div className={productStyle.svg_wrapper}>
                <img src="/assets/svg/Load_Cube.svg" alt="Loading" />
              </div>
            ) : isError ? (
              <strong className={productStyle.error_wrapper}>
                Not Found <BiError />
              </strong>
            ) : (
              data.slice(0, LoadMoreNum).map((item) => {
                const { typeFood, img, name, pastPrice, newPrice, rating, id } =
                  item;
                return (
                  <Cart
                    key={id}
                    typeFood={typeFood}
                    img={img}
                    name={name}
                    pastPrice={pastPrice}
                    newPrice={newPrice}
                    rating={rating}
                    id={id}
                  />
                );
              })
            )}
          </div>
        </div>
        <div
          className={offerproductStyle.offer_btn}
          id={productStyle.wrpperBtn}
        >
          <button onClick={() => supplement(4)}>
            Load More <GrFormNextLink size={20} />
          </button>
        </div>
      </div>
      <div className={CustomerStyle.wrapperBlock}>
        <div className="container">
          <div className={style_copy.OurProducts_Title}>
            <div className={style_copy.OurProducts_categories}>Testimonial</div>
            <div className={style_copy.OurProducts_subTitle}>
              What Our Customer Saying?
            </div>

            <div className={CustomerStyle.customer_photo}>
              <img src={img} alt="Consumer" />
            </div>
            <span className="rating">
              {new Array(rating).fill('').map((_, id) => {
                return <MdStarRate key={id} />;
              })}
            </span>
            <div className={CustomerStyle.customer_text}>
              <p>{WhatSay}</p>
              <div className={CustomerStyle.customer_consumer}>
                <div className={CustomerStyle.customer_name}>{name} </div>
                {consumers}
              </div>
              <span className={CustomerStyle.dots}>
                {consumer.map((_, i) => {
                  return i === id ? (
                    <VscCircleFilled
                      key={i}
                      className={CustomerStyle.switching}
                      size={18}
                      onClick={() => changeConsumerData(i)}
                    />
                  ) : (
                    <VscCircle
                      key={i}
                      className={CustomerStyle.switching}
                      onClick={() => changeConsumerData(i)}
                    />
                  );
                })}
              </span>
            </div>
            <div className={CustomerStyle.OurProducts_statistics}>
              <div className={CustomerStyle.OurProducts_statistics_block}>
                <div className={CustomerStyle.OurProducts_statistics_amount}>
                  <span className={CustomerStyle.procent}>100%</span>
                  <span className={CustomerStyle.procentName}>Organic</span>
                </div>
              </div>
              <div className={CustomerStyle.OurProducts_statistics_block}>
                <div className={CustomerStyle.OurProducts_statistics_amount}>
                  <span className={CustomerStyle.procent}>285</span>
                  <span className={CustomerStyle.procentName}>
                    Active Product
                  </span>
                </div>
              </div>
              <div className={CustomerStyle.OurProducts_statistics_block}>
                <div className={CustomerStyle.OurProducts_statistics_amount}>
                  <span className={CustomerStyle.procent}>350+</span>
                  <span className={CustomerStyle.procentName}>
                    Organic Orchads
                  </span>
                </div>
              </div>
              <div className={CustomerStyle.OurProducts_statistics_block}>
                <div className={CustomerStyle.OurProducts_statistics_amount}>
                  <span className={CustomerStyle.procent}>25+</span>
                  <span className={CustomerStyle.procentName}>
                    Years of Farming
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={OfferStyle.offer}>
        <div className="container">
          <div className={OfferStyle.offer_block}>
            <div className={OfferStyle.offer_block_info}>
              <div className={OfferStyle.offer_text}>Offer</div>
              <div className={OfferStyle.offer_title}>
                Offer Organic For You
              </div>
            </div>
            <div className={OfferStyle.offer_btn}>
              <button>
                View All Product <GrFormNextLink size={20} />
              </button>
            </div>
          </div>
          <div className={OfferStyle.offer_vegetable}>
            {isLoading ? (
              <strong>LOADING...</strong>
            ) : isError ? (
              <strong>Error</strong>
            ) : data ? (
              data.map((elm) => {
                const { typeFood, img, name, pastPrice, newPrice, rating, id } =
                  elm;
                return elm.typeFood === 'Vegetable' ? (
                  <Cart
                    key={id}
                    typeFood={typeFood}
                    img={img}
                    name={name}
                    pastPrice={pastPrice}
                    newPrice={newPrice}
                    rating={rating}
                    id={id}
                  />
                ) : undefined;
              })
            ) : undefined}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
