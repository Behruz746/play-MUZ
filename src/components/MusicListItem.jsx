import React, { useState, useContext } from "react";
import { musicList } from "../data/data";
import AppContext from "../context/AppContext";
import { PlayIcon, DotsIcon } from "./Icons";

// function MusicListItem({ img, name, auther, src, index, toggle, id }) {
function MusicListItem({ img, name, auther, src, index, toggle, id }) {
  const { currentSong, setMusicPlayer } = useContext(AppContext);
  const [overItem, setOverItem] = useState(false);
  let newIndex = index < 10 ? `0${index}` : index;

  function onItemOver() {
    setOverItem(true);
  }

  function onItemOut() {
    setOverItem(false);
  }

  return (
    <div
      className={`max-w-[579px] w-full  flex items-center justify-between cursor-pointer p-[5px] ease-in duration-150 hover:bg-[#5a5454] ${
        currentSong.name === name ? "bg-[#5a5454]" : ""
      }`}
      onMouseMove={onItemOver}
      onMouseOut={onItemOut}
      onClick={() => setMusicPlayer(musicList, id)}
    >
      <div className="max-w-[270px] w-full flex items-center justify-between mdd:max-w-[250px] gap-[5px]">
        <h1 className="text-[12px] font-normal leading-normal text-[#fff]">
          {newIndex}
        </h1>

        <button type="button" className="p-[10px]">
          {overItem ? (
            <PlayIcon width={21} height={21} />
          ) : (
            <h1 className="text-[18px] w-[21px] h-[21px]">+</h1>
          )}
        </button>
        <div>
          <img
            width={27}
            height={27}
            src={img}
            className="w-[27px] h-auto mdd:w-[38px]"
            alt="music img"
          />
        </div>
        <div className="flex flex-col gap-[2px] w-[150px] mdd:ml-[5px]">
          <h1 className="text-[10px] font-bold text-[#fff]">{name}</h1>
          <p className="text-[10px] font-normal text-[#fff]">{auther}</p>
        </div>
      </div>
      <DotsIcon />
    </div>
  );
}

export default MusicListItem;
