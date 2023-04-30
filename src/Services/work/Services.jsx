// img left and header
import FruitPhoto from "../pictures/FruitPhoto.png";
import MilkBottle from "../pictures/MilkBottle.png";
import OnlineStore from "../pictures/OnlineStore.png";
import Delivery from "../pictures/Delivery.png";

// img center
import Photo from "../pictures/Photo.png";

// css
import fruitsStyles from "./Fruits.module.css";
import directoryStyles from "./Directory.module.css";
import HistoryStyles from "./History.module.css";

const Services = () => {
  return (
    <div className={fruitsStyles.peakcherGlobalDev}>
      <div className={fruitsStyles.peakcherDev}>
        <img className={fruitsStyles.peakcherImg} src={FruitPhoto} />
        <h1 className={fruitsStyles.peakcherText}>Services</h1>
      </div>

      <div className={directoryStyles.container}>
        <div className={directoryStyles.directory}>
          <p>What we Grow</p>
          <h2>Better Agriculture for Better Future</h2>
        </div>
      </div>

      <div className={HistoryStyles.container}>
        <div className={HistoryStyles.leftSideGlobalDiv}>
          <div className={HistoryStyles.leftSideDiv}>
            <img src={MilkBottle} alt="" />
            <h3>Dairy Products</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>

          <div className={HistoryStyles.leftSideDiv}>
            <img src={OnlineStore} />
            <h3>Store Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>

          <div className={HistoryStyles.leftSideDiv}>
            <img src={Delivery} />
            <h3>Delivery Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>

        <div className={HistoryStyles.centerDiv}>
          <img src={Photo} />
        </div>

        <div className={HistoryStyles.rightSideGlobalDiv}>
          <div className={HistoryStyles.rightSideDiv}>
            <img src={MilkBottle} />
            <h3>Dairy Products</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>

          <div className={HistoryStyles.rightSideDiv}>
            <img src={OnlineStore} />
            <h3>Store Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>

          <div className={HistoryStyles.rightSideDiv}>
            <img src={Delivery} />
            <h3>Delivery Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
      </div>
      <div className={HistoryStyles.btnDiv}>
        <button className={HistoryStyles.btn}>aaadsds</button>
      </div>
    </div>
  );
};

export default Services;
