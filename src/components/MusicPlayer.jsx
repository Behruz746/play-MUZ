import React from "react";
import { PlayIcon, SkepIcon } from "./Icons";

function MusicPlayer() {
  return (
    <div className="flex justify-center w-full py-[11.5px] px-[50px] fixed left-0 bottom-0 z-10 bg-[#1b1a1a] ">
      <div className="max-w-[1550px] w-full flex items-center">
        <div className="max-w-[300px] w-full flex items-center gap-[10px]">
          <img
            width={54}
            height={54}
            src="/img/svg/Ellipse 70.svg"
            className="w-[54px] h-[54px] rounded-full overflow-hidden"
            alt="music image"
          />
          <div>
            <h1 className="text-[10px] font-normal text-[#fff]">
              Death Grips is Online
            </h1>
            <h2 className="text-[10px] font-bold text-[#fff]">Death Grips </h2>
          </div>
        </div>
        <div className=" w-full flex items-center justify-between gap-[50px]">
          <div className="flex items-center gap-[16px]">
            <button type="button">
              <SkepIcon />
            </button>
            <button type="button">
              <PlayIcon width={35} height={35} />
            </button>
            <button type="button" className="-rotate-[180deg]">
              <SkepIcon />
            </button>
          </div>

          <div className="w-full flex items-center gap-[20px]">
            <div>
              <h1 className="text-[13px] font-bold text-[#fff]">02:49</h1>
            </div>
            <div className="max-w-[500px] w-full h-[4px] bg-[#ffffff54] relative">
              <div className="max-w-[20%] w-full h-[4px] bg-[#fff]"></div>
              <div className="w-[32px] h-[32px] rounded-full absolute top-[50%] left-[20%] translate-y-[-50%] bg-[#fff] cursor-pointer"></div>
            </div>
            <div>
              <h1 className="text-[13px] font-bold text-[#fff]">00:45</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
