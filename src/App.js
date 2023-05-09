import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import ShopSingle from "./shop single/Main";
import Shop from "./shop/main";
import Arpine from "./Arpine/Main";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ShopSingle />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Portfolio" element={<Arpine />} />
      </Routes>
    </>
  );
}

export default App;
