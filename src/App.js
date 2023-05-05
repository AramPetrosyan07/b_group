import React from "react";
import { data } from "./database.js";
import "./styles/reset.css";
import "./styles/main.css";
import { Team } from "./pages/Team.js";


const { team } = data.pages;
function App() {
  return (
    <div className="App">
      <Team team={team} />
    </div>
  );
}

export default App;
