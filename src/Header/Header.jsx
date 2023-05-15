import style from "./header.module.css";
import PagedownVector from "./images/Vector.png";
import OrganicLogo from "./images/organicLogo.png";
import SearchLogo from "./images/search.png";
import BoxLogo from "./images/box.png";

function Header() {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.menu}>
          <div className={style.organicContainer}>
            <img src={OrganicLogo} />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <a>
                <img src={PagedownVector} />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">Shop</a>
            </li>
            <li>
              {" "}
              <a href="#">Projects</a>
            </li>
            <li>
              {" "}
              <a href="#">News</a>
            </li>
          </ul>
          <div className={style.search}>
            <div className={style.searchField}>
              <input type="text" placeholder=""></input>

              <div className={style.searchLogo}>
                <img src={SearchLogo} />
              </div>
            </div>
            <div className={style.boxField}>
              <div className={style.boxLogo}>
                <img src={BoxLogo} />
              </div>
              <div className={style.cart}>
                <p>Cart(0)</p>
              </div>
            </div>
          </div>

          <div className={style.humburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
