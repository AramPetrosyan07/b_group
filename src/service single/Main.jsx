import style from './main.module.css';
import Banner from "./Banner/Banner";
import Service from"./Servicies/Service";
import OrganicStore from "./OrganicStore/OrganicStore";
import Header from "./Header/Header"

function Main() {
    return (
        <>
         <div className={style.header}>
                <Header />
            </div> 
        <div className={style.container} >
          <div className={style.banner}> <Banner />
          </div>
               <div className={style.service}><Service />
               </div>
                    <div className={style.organicStore}><OrganicStore />
                    </div>
        </div>
        </>
    );
}

export default Main;