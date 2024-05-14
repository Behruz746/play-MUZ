import React, { useState } from "react";
import AppContext from "./context/AppContext";
import {
  Navbar,
  MusicList,
  MusicInfo,
  MusicPlayer,
  Slider,
} from "./components";

function App() {
  const [musicList, setMusicList] = useState([]);

  return (
    <AppContext.Provider value={{ musicList }}>
      <div className="w-full flex">
        <Navbar />
        <div className="w-full mb-[90px]">
          <MusicInfo />
          <Slider />
          <MusicList />
        </div>
        <MusicPlayer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
