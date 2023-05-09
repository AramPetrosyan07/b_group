import HistoryStyles from "./History.module.css";
import MilkBottle from "./pictures/MilkBottle.png";
import OnlineStore from "./pictures/OnlineStore.png";
import Delivery from "./pictures/Delivery.png";
import Photo from "./pictures/Photo.png";
import Aerrow from "./pictures/Aerrow.png";

const History = () => {
  return (
    <>
      <div className={HistoryStyles.container}>
        <div className={HistoryStyles.leftSideGlobalDiv}>
          <div className={HistoryStyles.leftSideDiv}>
            <img src={MilkBottle} />
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
        {/* right */}

        <div className={HistoryStyles.rightSideGlobalDiv}>
          <div className={HistoryStyles.RightSideSiv}>
            <img src={MilkBottle} alt="" />
            <h3>Dairy Products</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>

          <div className={HistoryStyles.RightSideSiv}>
            <img src={OnlineStore} />
            <h3>Store Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>

          <div className={HistoryStyles.RightSideSiv}>
            <img src={Delivery} />
            <h3>Delivery Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
      </div>
      {/* btn */}
      <div className={HistoryStyles.btnDiv}>
        <button className={HistoryStyles.btn}>
          Explore More
          <img src={Aerrow} className={HistoryStyles.ArrowButtom} />
        </button>
      </div>
    </>
  );
};

export default History;
