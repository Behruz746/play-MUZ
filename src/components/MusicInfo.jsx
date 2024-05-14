import React from "react";
import { MiniSearchIcon } from "./Icons";

function MusicInfo() {
  return (
    <section className="background py-[25px]">
      <div className="container">
        <div className="max-w-[250px] w-full flex items-center gap-[2px] rounded-[30px] bg-[#443F3F] opacity-8">
          <MiniSearchIcon />
          <input
            type="text"
            placeholder="search"
            className="py-[6px] border-none outline-none bg-transparent placeholder:italic"
          />
        </div>
        <div className="mt-[28px] flex items-end flex-col">
          <h1 className="text-right text-[64px] font-bold leading-normal text-[#fff]">
            WHAT’S NEW?
          </h1>
          <div className="max-w-[732px] w-full mt-[18px]">
            <h2 className="text-right text-[13px] font-bold leading-normal text-[#fff]">
              Switzerland's Nemo wins Eurovision as UK comes 18th
            </h2>
            <p className="text-right text-[10px] font-bold leading-normal text-[#fff] mt-[10px]">
              Swiss singer Nemo has won the Eurovision Song Contest in Sweden,
              with their song The Code. A compelling hybrid of opera and
              hip-hop, it topped the jury vote, helping the 24-year-old gain an
              impressive score of 591 points. The singer becomes the first
              non-binary artist to win Eurovision. Fittingly, they wrote the
              song to explain how they came to terms with their identity.
              Croatia, which led the public vote, came second with the raucous
              party anthem Rim Tim Tagi Dim, while the UK's Olly Alexander was
              consigned to 18th place, out of 25. The Years and Years singer
              received the dreaded "nul points" from the public, but was saved
              from last place by the jury vote.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-[182px] xl:mt-[82px]">
          <button
            type="button"
            className="py-[17px] px-[67px] rounded-[50px] text-[12px] font-normal leading-normal text-[#fff] bg-[#443F3F] opacity-8  ease-in duration-150 hover:bg-[#5a5454]"
          >
            START
          </button>
        </div>
      </div>
    </section>
  );
}

export default MusicInfo;
