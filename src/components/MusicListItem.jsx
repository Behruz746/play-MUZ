import React from "react";
import { PlayIcon, DotsIcon } from "./Icons";

function MusicListItem({ img, name, auther, mp3Link, index }) {
  let newIndex = index < 10 ? `0${index}` : index;
  return (
    <div className="max-w-[579px] w-full  flex items-center justify-between cursor-pointer p-[5px] ease-in duration-150 hover:bg-[#5a5454]">
      <div className="max-w-[270px] w-full flex items-center justify-between">
        <h1 className="text-[12px] font-normal leading-normal text-[#fff]">
          {newIndex}
        </h1>
        <button type="button" className="p-[10px]">
          <PlayIcon />
        </button>
        <div>
          <img width={27} height={27} src={img} alt="music img" />
        </div>
        <div className="flex flex-col gap-[2px] w-[150px]">
          <h1 className="text-[10px] font-bold text-[#fff]">{name}</h1>
          <p className="text-[10px] font-normal text-[#fff]">{auther}</p>
        </div>
      </div>
      <DotsIcon />
    </div>
  );
}

export default MusicListItem;
