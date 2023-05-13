import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import "./service single/App.module.css";
import About from "./about/components/Main";
import ShopSingle from "./shop single/Main";
import Shop from "./shop/main";
import Arpine from "./Arpine/Main";
import Services from "./Services/work/Services";
import StyleGuide from "./style guide/StyleGuide/styleGuide.jsx";
import ServiceSingle from "./service single/Main";
import HomePage from "./HomePage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ShopSingle />} /> {/*  Veronika */}
        <Route path="/Shop" element={<Shop />} /> {/*  Haykanush */}
        <Route path="/Portfolio" element={<Arpine />} /> {/*  Arpine */}
        <Route path="/About" element={<About />} /> {/*  Aram */}
        <Route path="/Services" element={<Services />} /> {/*  Felo */}
        <Route path="/StyleGuide" element={<StyleGuide />} /> {/*  Harut */}
        <Route path="/ServiceSingle" element={<ServiceSingle />} />
        {/*  Serine */}
        <Route path="/HomePage" element={<HomePage />} /> {/*  Apet */}
      </Routes>
    </>
  );
}
export default App;
