import Fruits from "./Fruits/Fruits";
import Directory from "./directory/Directory";
import History from "./History/History";
import Organic from "./Organic/Organic";
import style from "./service.module.css";

const Services = () => {
  return (
    <div className={style.conatiner}>
      <div className={style.content}>
        <Fruits />
        <Directory />
        <History />
        <Organic />
      </div>
    </div>
  );
};

export default Services;
