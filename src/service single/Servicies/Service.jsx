
import style from './service.module.css';

import ServiceImg from "../assets/Photo.png";

function Service() {
    return (
        <div className={style.container}>
            <div className={style.serviceImg}><img src={ServiceImg} />
            </div>
        </div>
    );
}

export default Service;