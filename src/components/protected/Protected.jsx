import React from 'react'
import style from './protected.module.css'
import image4 from './images/Pattern (1).png'
import image5 from './images/Pattern.png'
import image6 from './images/Photo (1).jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function Protected() {
  return (
    <div className={style.protected_container}>
        <div className={style.protected_content}>
            <div className={style.protected_title}>
                <img src={image4} alt="img" />
                <h2>Protected Page</h2>
                <img src={image5} alt="img" />
            </div>

            {/* form-block */}

            <div className={style.passvord_parent_block}>
                <form>
                    <div className={style.img_block}>
                        <img src={image6} alt="img" />
                    </div>
                    <div className={style.authorize_block}>
                        <label htmlFor="">password</label>
                        <input type="password" placeholder='Enter Your Password' />
                        <button className={style.send_btn}>
                            Send Now 
                            <ArrowCircleRightIcon className={style.icon_right}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
