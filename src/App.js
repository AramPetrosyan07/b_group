import React from "react";
import { data } from "./database.js";
import "./main/styles/reset.css";
import "./main/styles/main.css";
import { Team } from "./main/pages/Team.js";


const { team } = data.pages;
function App() {
  return (
    <div className="App">
      <Team team={team} />
    </div>
  );
}

export default App;
