import Changelog from "./components/changelog/Changelog";
import About from "./components/main/About";
import Conclusion from "./components/main/Conclusion";
import HowToFarm from "./components/main/HowToFarm";
import Main from "./components/main/Main";
import Protected from "./components/protected/Protected";

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Conclusion/>
      <HowToFarm/>
      <Changelog/>
      <Protected/>
    </div>
  );
}

export default App;
