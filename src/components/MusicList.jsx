import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { MusicListItem } from "./";

function MusicList() {
  const { load, songs } = useContext(AppContext);

  return (
    <section className="w-full mt-[46px] md:mt-[23px]" id="play-list">
      <div className="container">
        <h1 className="text-left text-[11px] font-bold leading-normal text-[#fff] mdd:text-[18px]">
          LATEST ALBUM
        </h1>
        <div className="mt-[20px] grid grid-cols-2 mdd:grid-cols-1">
          {songs.map((item, idx) => (
            <MusicListItem {...item} index={idx} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicList;
