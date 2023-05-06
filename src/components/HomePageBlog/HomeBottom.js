import image from '../../images/WhoWeAre.svg';
import Arrow from '../../images/Arrow.svg';
import Blog1 from '../../images/BlogPhoto1.svg';
import Blog2 from '../../images/BlogPhoto2.svg';
import admin from '../../images/AdminVect.svg';
import styles from './HomeBottom.module.css';

export default function HomeBottom() {

    return (<>
            <div className={styles.WhoWeAre}>
                <div className={styles.Content}>
                    <p>Eco Friendly</p>
                    <span>Econis is a Friendly <br /> Organic Store</span>
                    <ul>
                        <li><h5>Start with Our Company First</h5>
                            <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</h2>
                        </li>
                        <li><h5>Learn How to Grow Yourself</h5>
                            <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</h2>
                        </li>
                        <li><h5>Farming Strategies of Today</h5>
                            <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</h2></li>
                    </ul>
                </div>
                <div className={styles.Image}><img src={image} /></div>
            </div>

            <div className={styles.BottomGallery}>
                <ul>
                    <li><button>Organic Juice</button></li>
                    <li><button>Organic Food</button></li>
                    <li><button>Nuts Cookis</button></li>
                </ul>
            </div>

            <div className={styles.BottomBlog}>

                <div className={styles.BlogContent}>
                    <p>News</p>
                    <span>Discover weekly content about <br /> organic food, & more</span>
                    <div className={styles.BlogBtn}>
                        <span>More News</span>
                        <img src={Arrow} />
                    </div>
                </div>

                <div className={styles.BlogBlog}>
                    <div className={styles.BlogFirst}>
                        <span>25 <br /> now</span>
                        <img src={Blog1} />
                        <div className={styles.BlogFirstText}>
                            <img src={admin} /> <span>By Rachi Card</span>
                            <h4>The Benefits of Vitamin D & How to Get It</h4>
                            <h2>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
                            <button></button>
                        </div>
                    </div>

                    <div className={styles.BlogSecond}>
                        <span>25 <br /> now</span>
                        <img src={Blog2} />
                        <div className={styles.BlogSecondText}>
                            <img src={admin} /> <span>By Rachi Card</span>
                            <h4>Our Favourite Summertime Tommeto</h4>
                            <h2>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
                            <button></button>
                        </div>

                    </div>
                </div>
            </div>
    </>
    )
}