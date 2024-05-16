import React, { useState, useEffect } from "react";
import AppContext from "./context/AppContext";
import {
  Navbar,
  MusicList,
  MusicInfo,
  MusicPlayer,
  Slider,
  Header,
} from "./components";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

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
    <AppContext.Provider value={{ menuToggle, setMenu }}>
      <div className="w-full flex">
        <Navbar />
        <div className="w-full mb-[90px] mdd:mb-[120px]">
          <Header />
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
