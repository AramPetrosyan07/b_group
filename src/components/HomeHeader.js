import Logo from './images/Logo.svg';
import Search from './images/Search.svg'
import Cart from './images/Cart Icon.svg'
import Baner from './images/Banner.jpg'
import Headervector from './images/HeaderVector.svg'
export default function HomeHeader() {
    return (<>
        <div className='Header'>
            <img className='logo' src={Logo} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li className='MenuHover'><img src={Headervector}/>Pages</li>
                <li>Shop</li>
                <li>Projects</li>
                <li>News</li>
            </ul>
            <input type='text'></input>
            <img className='Search' src={Search} />
            <div className='Cart'>
                <img src={Cart} />
                <span>Cart(0)</span>
            </div>
        </div>

        <div className='Banner'>
            <img className='BanerBackground' src={Baner} />
            <div className='BannerText'>
                <p>100% Natural Food</p>
                <span>Choose the best healthier way <br /> of life</span>
                <div className='BanerBtn'></div>

            </div>
        </div>

        <div className='OferrBaner'>
            <div className='leftBaner'>
                <p>Natural!!</p>
                <span>Get Garden <br/> Fresh Fruits</span>
            </div>

            <div className='rightBaner'>
                <p>Offer!!</p>
                <span>Get 10% off <br/> on Vegetables</span>
            </div>
        </div>
    </>
    )
}