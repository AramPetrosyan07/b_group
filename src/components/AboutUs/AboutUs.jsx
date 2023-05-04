import React from 'react';
import style from './about.module.css';
import { GrFormNextLink } from 'react-icons/gr';
import offerStyle from '../Offer/offer.module.css';

const AboutUs = () => {
  return (
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
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
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
  );
};

export default AboutUs;
