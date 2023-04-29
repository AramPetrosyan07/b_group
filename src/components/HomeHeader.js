import Logo from './images/Logo.svg';
import Search from './images/Search.svg'
import Cart from './images/Cart Icon.svg'
export default function HomeHeader() {
    return (<>
        <div className='Header'>
            <img className='logo' src={Logo} />
            <ul>
                <li>Home</li>              
                <li>About</li>
                <li>Pages</li>
                <li>Shop</li>
                <li>Projects</li>
                <li>News</li>
            </ul>
            <input type='text' placeholder="Search..."></input>
            <img className='Search' src={Search}/>
            <div className='Cart'>
                <img src={Cart}/>
                <span>Cart(0)</span>
            </div>
        </div>

        <div className='Banner'></div>
        <div className='OferrBaner'></div>
    </>
    )
}