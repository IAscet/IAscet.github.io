import Frontview from "./components/frontview/Frontview";
import React from "react";
import Contacts from "./components/Contacts/Contacts";
import "./App.css"
import About from "./components/About/About"
import Player from "./components/player/Player";
import Lang from "./components/langs/Lang"
import Button from "./components/Button/Button";
import Frontgif from "./components/frontgifs/Frontgif";
function App() {
  return (
    <div className="App">
      <Frontview/>
      <Button/>
      <Lang/>
      <Contacts/>
      <About/>
      <Frontgif/>
      <player>
        <Player/>
      </player>

    </div>


  );
}

export default App;
