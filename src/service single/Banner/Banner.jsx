import style from './banner.module.css';
import BannerImg from "../assets/background_Image.png"

function Banner() {
    return (
        <div className={style.container}>
            <img src={BannerImg} />
            <p className={style.qualityStandard}>Quality standard</p>
        </div>
    );
}

export default Banner;