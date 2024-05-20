import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  SearchIcon,
  MusicIcon,
  FileIcon,
  StarIcon,
  MicrophoneIcon,
  EarphoneIcon,
} from "./Icons";

function Navbar() {
  const { menuToggle, setMenu } = useContext(AppContext);

  return (
    <aside
      className={`max-w-[270px] w-full h-[100vh] midd:flex items-start sticky top-0 left-0 mdd:fixed bg-[#1b1a1a] mdd:z-[100] lg:max-w-[190px] md:max-w-full ${
        menuToggle ? "flex" : "hidden"
      }`}
    >
      <nav className="w-full px-[29px] py-[65px] flex flex-col gap-[149px] mdd:py-[25px] mdd:px-[14px] mdd:gap-[20px]">
        <div className="w-full flex flex-col gap-[20px]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-[13px] font-bold leading-normal text-[#fff] mdd:text-[18px]">
              BROWSE
            </h1>
            <button
              type="button"
              className="hidden mdd:block mdd:p-[10px]"
              onClick={setMenu}
            >
              <img
                width="32"
                height="32"
                src="/img/png/close.png"
                alt="close-window"
              />
            </button>
          </div>
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
          <h1 className="text-[13px] font-bold leading-normal text-[#fff] mdd:text-[18px]">
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
