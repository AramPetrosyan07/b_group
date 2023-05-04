import React from 'react';
import { useSelector } from 'react-redux';
import { useGetDataQuery } from '../../store/Products/Product.mutation';
import style from './ourproducts.module.css';
import { BiError } from 'react-icons/bi';
import { GrFormNextLink } from 'react-icons/gr';
import useAction from '../../hook/useAction';
import offerStyle from '../Offer/offer.module.css';
import Cart from './Cart';

const OurProducts = () => {
  const { isLoading, isError, data } = useGetDataQuery();
  const { LoadMoreNum } = useSelector((state) => state);
  const { supplement } = useAction();

  return (
    <div className={style.allInCenter}>
      <div className={style.OurProducts_Title}>
        <div className={style.OurProducts_categories}>Categories</div>
        <div className={style.OurProducts_subTitle}>Our Products</div>
      </div>
      <div className="container">
        <div className={style.OurProducts}>
          {isLoading ? (
            <div className={style.svg_wrapper}>
              <img src="/assets/svg/Load_Cube.svg" alt="Loading" />
            </div>
          ) : isError ? (
            <strong className={style.error_wrapper}>
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
      <div className={offerStyle.offer_btn} id={style.wrpperBtn}>
        <button onClick={supplement}>
          Load More <GrFormNextLink size={20} />
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
