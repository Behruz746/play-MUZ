import React from "react";
import {
  SearchIcon,
  MusicIcon,
  FileIcon,
  StarIcon,
  MicrophoneIcon,
  EarphoneIcon,
} from "./Icons";

function Navbar() {
  return (
    <aside className="max-w-[270px] w-full h-[100vh] flex items-start sticky top-0 left-0">
      <nav className="w-full px-[29px] py-[65px] flex flex-col gap-[149px] ">
        <div className="w-full flex flex-col gap-[21px]">
          <h1 className="text-[13px] font-bold leading-normal text-[#fff]">
            BROWSE
          </h1>
          <ul className="flex flex-col gap-[13px] items-start">
            <li className="w-full flex items-center gap-[11px] cursor-pointer text-[#fff] text-[13px] font-bold leading-normal ease-in duration-150 hover:bg-[#fff] hover:text-[#000]">
              <SearchIcon />
              DISCOVER
            </li>
            <li className="w-full flex items-center gap-[11px] cursor-pointer text-[#fff] text-[13px] font-bold leading-normal ease-in duration-150 hover:bg-[#fff] hover:text-[#000]">
              <MusicIcon />
              GENRE
            </li>
            <li className="w-full flex items-center gap-[11px] cursor-pointer text-[#fff] text-[13px] font-bold leading-normal ease-in duration-150 hover:bg-[#fff] hover:text-[#000]">
              <EarphoneIcon />
              TOP CHARTS
            </li>
            <li className="w-full flex items-center gap-[11px] cursor-pointer text-[#fff] text-[13px] font-bold leading-normal ease-in duration-150 hover:bg-[#fff] hover:text-[#000]">
              <MicrophoneIcon />
              PODCAST
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-[21px]">
          <h1 className="text-[13px] font-bold leading-normal text-[#fff]">
            LIBRARY
          </h1>
          <ul className="flex flex-col gap-[13px]">
            <li className="w-full flex items-center gap-[11px] cursor-pointer text-[#fff] text-[13px] font-bold leading-normal ease-in duration-150 hover:bg-[#fff] hover:text-[#000]">
              <StarIcon />
              FAVOURITES
            </li>
            <li className="w-full flex items-center gap-[11px] cursor-pointer text-[#fff] text-[13px] font-bold leading-normal ease-in duration-150 hover:bg-[#fff] hover:text-[#000]">
              <FileIcon />
              PLAYLIST
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Navbar;
