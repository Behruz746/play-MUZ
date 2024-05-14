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
      <div className="flex">
        <Navbar />
        <div className="w-full">
          <MusicInfo />
          <Slider />
          <MusicList />
        </div>
        {/* <MusicPlayer /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
