import Arrow from "../../HomePage/images/Arrow.svg";
import admin from "../../HomePage/images/AdminVect.svg";
import styles from "./HomeBottom.module.css";

export default function HomeBottom() {
  return (
    <>
      <div className={styles.WhoWeAre}>
        <div className={styles.Content}>
          <p>Eco Friendly</p>
          <span>
            Econis is a Friendly <br /> Organic Store
          </span>
          <ul>
            <li>
              <h5>Start with Our Company First</h5>
              <h2>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </h2>
            </li>
            <li>
              <h5>Learn How to Grow Yourself</h5>
              <h2>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </h2>
            </li>
            <li>
              <h5>Farming Strategies of Today</h5>
              <h2>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </h2>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.BottomGallery}>
        <ul>
          <li>
            <button>Organic Juice</button>
          </li>
          <li>
            <button>Organic Food</button>
          </li>
          <li>
            <button>Nuts Cookis</button>
          </li>
        </ul>
      </div>

      <div className={styles.BottomBlog}>
        <div className={styles.BlogContent}>
          <p>News</p>
          <h4>
            Discover weekly content about <br /> organic food, & more
          </h4>
          <div className={styles.BlogBtn}>
            <span>More News</span>
            <img src={Arrow} />
          </div>
        </div>

        <div className={styles.BlogBlog}>
          <div className={styles.BlogFirst}>
            <p>
              25 <br /> now
            </p>
            <div className={styles.BlogFirstText}>
              <img src={admin} /> <span>By Rachi Card</span>
              <h4>The Benefits of Vitamin D & How to Get It</h4>
              <h2>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </h2>
              <button></button>
            </div>
          </div>

          <div className={styles.BlogSecond}>
            <p>
              25 <br /> now
            </p>
            <div className={styles.BlogSecondText}>
              <img src={admin} /> <span>By Rachi Card</span>
              <h4>Our Favourite Summertime Tommeto</h4>
              <h2>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </h2>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
