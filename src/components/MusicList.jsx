import React from "react";
import { MusicListItem } from "./";
import { MusicListData } from "../data/data";

function MusicList() {
  return (
    <section className="w-full mt-[46px]">
      <div className="container">
        <h1 className="text-left text-[11px] font-bold leading-normal text-[#fff]">
          LATEST ALBUM
        </h1>
        <div className="mt-[20px] grid grid-cols-2">
          {MusicListData.map((item, idx) => (
            <MusicListItem {...item} index={idx} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicList;
