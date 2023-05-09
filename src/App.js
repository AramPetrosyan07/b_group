import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import About from "./about/components/Main";
import ShopSingle from "./shop single/Main";
import Shop from "./shop/main";
import Arpine from "./Arpine/Main";
import Services from "./Services/work/Services";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ShopSingle />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Portfolio" element={<Arpine />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  );
}
export default App;
