import Logo from "../../HomePage/images/Logo.jpg";
import Search from "../../HomePage/images/Search.svg";
import Cart from "../../HomePage/images/Cart Icon.svg";
import Headervector from "../../HomePage/images/HeaderVector.svg";
import Styles from "./HomeHeader.module.css";
export default function HomeHeader() {
  return (
    <>
      <body>
        <div className={Styles.Header}>
          <img className={Styles.logo} src={Logo} />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li className={Styles.MenuHover}>
              <img src={Headervector} />
              Pages
            </li>
            <li>Shop</li>
            <li>Projects</li>
            <li>News</li>
          </ul>
          <input type={Styles.text}></input>
          <img className={Styles.Search} src={Search} />
          <div className={Styles.Cart}>
            <img src={Cart} />
            <span>Cart(0)</span>
          </div>
        </div>

        <div className={Styles.Banner}>
          <img className={Styles.BanerBackground} />
          <div className={Styles.BannerText}>
            <p>100% Natural Food</p>
            <span>
              Choose the best healthier way <br /> of life
            </span>
            <div className={Styles.BanerBtn}></div>
          </div>
        </div>

        <div className={Styles.OferrBaner}>
          <div className={Styles.leftBaner}>
            <p>Natural!!</p>
            <span>
              Get Garden <br /> Fresh Fruits
            </span>
          </div>

          <div className={Styles.rightBaner}>
            <p>Offer!!</p>
            <span>
              Get 10% off <br /> on Vegetables
            </span>
          </div>
        </div>
      </body>
    </>
  );
}
