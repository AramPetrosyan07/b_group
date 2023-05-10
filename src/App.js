import React from "react";
import { data } from "./Syuzanna/database.js";
import "./Syuzanna/styles/reset.css";
import "./Syuzanna/styles/main.css";
import { Team } from "./Syuzanna/pages/Team.js";


const { team } = data.pages;
function App() {
  return (
    <div className="App">
      <Team team={team} />
    </div>
  );
}

export default App;
