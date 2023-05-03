// import directoryStyles from "/Directory.module.css";
import fruitsStyles from "./Fruits.module.css";
import FruitPhoto from "./pictures/FruitPhoto.png";

const Fruits = () => {
  return (
    <>
      <div className={fruitsStyles.peakcherGlobalDev}>
        <img className={fruitsStyles.peakcherImg} src={FruitPhoto} />
        <div className={fruitsStyles.peakcherDev}>
          <h1 className={fruitsStyles.peakcherText}>Servicesdssdsd</h1>
        </div>
      </div>
    </>
  );
};

export default Fruits;
