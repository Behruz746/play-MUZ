import React from "react";
import { MusicListItem } from "./";
import { musicList } from "../data/data";

function MusicList() {
  return (
    <section className="w-full mt-[46px] md:mt-[23px]">
      <div className="container">
        <h1 className="text-left text-[11px] font-bold leading-normal text-[#fff] mdd:text-[18px]">
          LATEST ALBUM
        </h1>
        <div className="mt-[20px] grid grid-cols-2 mdd:grid-cols-1">
          {musicList.map((item, idx) => (
            <MusicListItem {...item} index={idx} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicList;
