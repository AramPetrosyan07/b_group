import directoryStyles from "./Directory.module.css";
const Directory = () => {
  return (
    <>
      <div className={directoryStyles.container}>
        <div className={directoryStyles.directory}>
          <p>What we Grow</p>
          <h2>Better Agriculture for Better Future</h2>
        </div>
      </div>
    </>
  );
};

export default Directory;
