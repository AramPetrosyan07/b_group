import React from 'react';
import style from './offer.module.css';
import { useGetDataQuery } from '../../store/Products/Product.mutation';
import Cart from '../OurProducts/Cart';
import { GrFormNextLink } from 'react-icons/gr';

const Offer = () => {
  const { isLoading, isError, data } = useGetDataQuery();

  return (
    <div className={style.offer}>
      <div className="container">
        <div className={style.offer_block}>
          <div className={style.offer_block_info}>
            <div className={style.offer_text}>Offer</div>
            <div className={style.offer_title}>Offer Organic For You</div>
          </div>
          <div className={style.offer_btn}>
            <button>
              View All Product <GrFormNextLink size={20} />
            </button>
          </div>
        </div>
        <div className={style.offer_vegetable}>
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
  );
};

export default Offer;
