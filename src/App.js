import React from "react";
import { data } from "./database.js";
import "./styles/reset.css";
import "./styles/main.css";
import { BigBanner } from "./components/BigBanner/BigBanner";
import { PageCaption } from "./components/PageCaption/PageCaption.js";
import { ExpertsList } from "./components/ExpertsList/ExpertsList.js";


const { team } = data.pages;
function App() {
  return (
    <div className="App">
      <BigBanner caption={team.bannerCaption} />
      <PageCaption subtitle={team.subtitle} title={team.title} text={team.text} />
      <ExpertsList experts={team.experts} />
    </div>
  );
}

export default App;
