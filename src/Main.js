import "./App.css";
import Banner from "./Arpine/Banner/Banner";
import Portfolio from "./Arpine/Portfolio/Portfolio";

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
