import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { MenuIcon, MiniSearchIcon } from "./Icons";

function Header() {
  const { setMenu } = useContext(AppContext);

  return (
    <header className="header w-full flex items-center justify-between gap-[20px] px-[14px] py-[25px] mdd:py-[10px] fixed top-0 z-[40]">
      <div className="max-w-[250px] w-full flex items-center gap-[2px] rounded-[30px] bg-[#443F3F] opacity-8 mdd:max-w-full">
        <MiniSearchIcon />
        <input
          type="text"
          placeholder="search"
          className="py-[6px] border-none outline-none bg-transparent placeholder:italic"
        />
      </div>

      <button
        type="button"
        className="hidden mdd:block mdd:p-[10px]"
        onClick={setMenu}
      >
        <MenuIcon />
      </button>
    </header>
  );
}

export default Header;
