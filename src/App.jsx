import React, { useState } from "react";
import AppContext from "./context/AppContext";
import {
  Navbar,
  Header,
  MusicAlbom,
  MusicInfo,
  MusicPlayer,
  Slider,
} from "./components";

function App() {
  const [musicList, setMusicList] = useState([]);

  return (
    <AppContext.Provider value={{ musicList }}>
      <h1>Hello play MUZ</h1>
    </AppContext.Provider>
  );
}

export default App;
