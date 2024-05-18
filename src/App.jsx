import React, { useState, useEffect, useRef } from "react";
import AppContext from "./context/AppContext";
import { musicList } from "./data/data";
import {
  Navbar,
  MusicList,
  MusicInfo,
  MusicPlayer,
  Slider,
  Header,
} from "./components";

function App() {
  const audioElem = useRef();
  const [songs, setSongs] = useState(musicList);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(musicList[0]);
  const [timer, setTimer] = useState("00 : 00");
  const clickRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
      time: `${Math.floor(duration / 60)} : ${Math.floor(duration % 60)}`,
    });
  };

  function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - hours * 3600) / 60);
    var remainingSeconds = seconds - hours * 3600 - minutes * 60;
    let arr = [minutes.toFixed(), remainingSeconds.toFixed()];
    return arr;
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  {
    /* I don't understand but it's interesting :) */
  }
  const finishTime = `${
    Math.floor(currentSong.length / 60) <= 10
      ? `0${Math.floor(currentSong.length / 60)}`
      : Math.floor(currentSong.length / 60)
  } : ${
    Math.floor(currentSong.length % 60) <= 10
      ? `${Math.floor(currentSong.length % 60)}`
      : Math.floor(currentSong.length % 60)
  }`;

  const skipBack = () => {
    const index = songs.findIndex((x) => x.name == currentSong.name);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skipNext = () => {
    const index = songs.findIndex((x) => x.name == currentSong.name);
    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  // music loop function
  function getLoop() {
    if (timer === finishTime) {
      skipNext();
    }
  }

  getLoop();

  useEffect(() => {
    if (isPlaying) {
      setInterval(function () {
        var currentTime = formatTime(audioElem.current.currentTime);
        let secounts =
          currentTime[1] < 10 ? "0" + currentTime[1] : currentTime[1];
        let minutes =
          currentTime[0] < 10 ? "0" + currentTime[0] : currentTime[0];

        setTimer(`${minutes && minutes} : ${secounts && secounts}`);
      }, 500);
    }
  }, [isPlaying]);

  useEffect(() => {
    const headerEl = document.querySelector(".header");
    const menuIconSvg = document.querySelector(".menu-icon");

    function addBgClass() {
      headerEl.classList.add("bg-[#1b1a1a]");
      menuIconSvg.style.fill = "#ffffff";
    }

    function removeBgClass() {
      headerEl.classList.remove("bg-[#1b1a1a]");
      menuIconSvg.style.fill = "#1b1a1a";
    }

    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 80) {
        addBgClass();
      } else {
        removeBgClass();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function setMenu() {
    setMenuToggle((prev) => !prev);
  }

  return (
    <AppContext.Provider
      value={{
        menuToggle,
        setMenu,
        currentSong,
        audioElem,
        setIsPlaying,
        isPlaying,
        onPlaying,
        setCurrentSong,
        songs,
        setSongs,
        timer,
        setTimer,
        finishTime,
        skipNext,
        skipBack,
        checkWidth,
        clickRef,
      }}
    >
      <div className="w-full flex">
        <Navbar />
        <div className="w-full mb-[90px] mdd:mb-[120px]">
          <Header />
          <MusicInfo />
          <Slider />
          <MusicList />
        </div>
        {/* {currentSong.length && <MusicPlayer />} */}
        <MusicPlayer />
        <audio src={currentSong.src} ref={audioElem} onTimeUpdate={onPlaying} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
