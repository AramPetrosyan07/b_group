import OrganicStyles from "./OrganicNews.module.css";
import VideoIcon from "./pictures/VideoIcon.png";
import OrganicAbout from "./pictures/OrganicAbout.png";
const Organic = () => {
  return (
    <>
      <div className={OrganicStyles.organParentDiv}>
        <img src={OrganicAbout} className={OrganicStyles.bgImage} />
        <div className={OrganicStyles.childDiv}>
          <p className={OrganicStyles.mainP}>Organic Only</p>
          <h1>Everyday Fresh & Clean</h1>
          <p className={OrganicStyles.mainP_end}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
          </p>
          <button className="btn">
            <img src={VideoIcon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Organic;
