import "../App.css";
import Banner from "./Banner/Banner";
import Portfolio from "./Portfolio/Portfolio";

function Main() {
  return (
    <div className="AppContainer">
      <div className="content">
        <Banner />
        <div className="container">
          <Portfolio />;
        </div>
      </div>
    </div>
  );
}

export default Main;
