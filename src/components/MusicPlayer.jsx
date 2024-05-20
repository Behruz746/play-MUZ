import React, { Fragment, useContext } from "react";
import AppContext from "../context/AppContext";
import { PlayIcon, SkepIcon, PauseIcon, ArrowIcon2 } from "./Icons";

function MusicPlayer() {
  const {
    currentSong,
    timer,
    setIsPlaying,
    isPlaying,
    finishTime,
    skipNext,
    skipBack,
    checkWidth,
    clickRef,
    imgModalToggle,
    playerToggle,
    bigPlayer,
  } = useContext(AppContext);

  return (
    <>
      <div
        className={`flex justify-center w-full py-[11.5px] px-[50px] fixed left-0 bottom-0 z-10 bg-[#1b1a1a] mdd:px-[10px]  ${
          playerToggle ? "mdd:h-full mdd:pt-[80px]" : ""
        }`}
      >
        <div
          className={`max-w-[1550px] w-full flex items-center  mdd:gap-[10px] mdd:justify-between ${
            playerToggle ? "mdd:flex-col" : "mdd:flex-col-reverse"
          }`}
        >
          <div
            className={`max-w-[300px] w-full flex items-center gap-[10px] lg:max-w-[200px] mdd:max-w-none  ${
              playerToggle
                ? "mdd:flex-col mdd:max-h-[500px] mdd:h-full mdd:justify-center mdd:items-center"
                : ""
            }`}
          >
            <img
              width={54}
              height={54}
              src={currentSong.img}
              className={`w-[54px] h-[54px] rounded-full overflow-hidden  ${
                playerToggle
                  ? "mdd:max-w-[250px] mdd:w-full mdd:h-auto mdd:rounded-none"
                  : ""
              }`}
              alt={`image ${currentSong.name}`}
              onClick={() => imgModalToggle(currentSong.img)}
            />
            <div>
              <h1
                className={`text-[10px] font-normal text-[#fff]  ${
                  playerToggle ? "mdd:text-[20px] mdd:text-center" : ""
                }`}
              >
                {currentSong.name}
              </h1>
              <h2
                className={`text-[10px] font-bold text-[#fff]  ${
                  playerToggle ? "mdd:text-[20px] mdd:text-center" : ""
                }`}
              >
                {currentSong.auther}
              </h2>
            </div>

            {!playerToggle && (
              <button
                className={`p-[15px] ml-[auto] rotate-[270deg]`}
                onClick={bigPlayer}
              >
                <ArrowIcon2 />
              </button>
            )}
          </div>
          <div className="w-full flex items-center justify-between gap-[50px] mdd:gap-[15px] mdd:flex-col-reverse ">
            <div
              className={`${
                playerToggle ? "w-full" : ""
              } flex items-center justify-between gap-[0px] `}
            >
              <div
                className={`flex justify-center items-center gap-[16px] mdd:gap-[40px] ${
                  playerToggle ? "translate-x-[50%]" : ""
                } `}
              >
                <button type="button" onClick={skipBack}>
                  <SkepIcon
                    classes={`${
                      playerToggle
                        ? "mdd:w-[30px] mdd:h-[30px]"
                        : "mdd:w-[20px] mdd:h-[20px]"
                    }`}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying((prev) => !prev);
                  }}
                >
                  {isPlaying ? (
                    <PauseIcon
                      width={35}
                      height={35}
                      classes={`scale-2 mdd:w-[30px] mdd:h-[30px] ${
                        playerToggle
                          ? " mdd:w-[40px] mdd:h-[40px]"
                          : " mdd:w-[30px] mdd:h-[30px]"
                      }`}
                    />
                  ) : (
                    <PlayIcon
                      width={35}
                      height={35}
                      classes={`${
                        playerToggle
                          ? " mdd:w-[40px] mdd:h-[40px]"
                          : " mdd:w-[30px] mdd:h-[30px]"
                      }`}
                    />
                  )}
                </button>
                <button
                  type="button"
                  className="-rotate-[180deg]"
                  onClick={skipNext}
                >
                  <SkepIcon
                    classes={`  ${
                      playerToggle
                        ? "mdd:w-[30px] mdd:h-[30px]"
                        : "mdd:w-[20px] mdd:h-[20px]"
                    }`}
                  />
                </button>
              </div>

              {playerToggle && (
                <button
                  className={`p-[15px] rotate-[270deg] `}
                  onClick={bigPlayer}
                >
                  <img
                    width="20px"
                    height="20px"
                    src="/img/png/close.png"
                    alt="close-window"
                  />
                </button>
              )}
            </div>

            <div className="w-full flex items-center gap-[10px]">
              <Fragment>
                <h1 className="w-[60px] text-center text-[13px] font-bold text-[#fff] text-nowrap">
                  {timer}
                </h1>
              </Fragment>
              <div
                className="w-full px-[15px] py-[10px] cursor-pointer"
                onClick={(e) => {
                  setIsPlaying(true);
                  checkWidth(e);
                }}
                ref={clickRef}
              >
                <div className="w-full h-[4px] bg-[#ffffff54] relative">
                  <div
                    className={`max-w-[0%] w-full h-[4px] bg-[#fff]`}
                    style={{ maxWidth: currentSong.progress + "%" }}
                  ></div>
                  <div
                    className="w-[32px] h-[32px] rounded-full absolute top-[50%] left-[0%] translate-y-[-50%] bg-[#ffffff] cursor-pointer mdd:w-[20px] mdd:h-[20px]"
                    style={{ left: currentSong.progress + "%" }}
                  ></div>
                </div>
              </div>

              <Fragment>
                <h1 className="w-[60px] text-center text-[13px] font-bold text-[#fff] text-nowrap">
                  {currentSong.length ? finishTime : "00 : 00"}
                </h1>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center w-full py-[11.5px] px-[50px] fixed left-0 bottom-0 z-10 bg-[#1b1a1a] mdd:px-[10px]">
      <div className="max-w-[1550px] w-full flex items-center mdd:flex-col-reverse mdd:gap-[10px]">
        <div className="max-w-[300px] w-full flex items-center gap-[10px] lg:max-w-[200px] mdd:max-w-none">
          <img
            width={54}
            height={54}
            src={currentSong.img}
            className="w-[54px] h-[54px] rounded-full overflow-hidden"
            alt={`image ${currentSong.name}`}
            onClick={() => imgModalToggle(currentSong.img)}
          />
          <div>
            <h1 className="text-[10px] font-normal text-[#fff]">
              {currentSong.name}
            </h1>
            <h2 className="text-[10px] font-bold text-[#fff]">
              {currentSong.auther}
            </h2>
          </div>
        </div>
        <div className=" w-full flex items-center justify-between gap-[50px] mdd:gap-[15px]">
          <div className="flex items-center gap-[16px]">
            <button type="button" onClick={skipBack}>
              <SkepIcon classes="mdd:w-[20px] mdd:h-[20px]" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPlaying((prev) => !prev);
              }}
            >
              {isPlaying ? (
                <PauseIcon
                  width={35}
                  height={35}
                  classes="scale-2 mdd:w-[30px] mdd:h-[30px]"
                />
              ) : (
                <PlayIcon
                  width={35}
                  height={35}
                  classes=" mdd:w-[30px] mdd:h-[30px]"
                />
              )}
            </button>
            <button
              type="button"
              className="-rotate-[180deg]"
              onClick={skipNext}
            >
              <SkepIcon classes="mdd:w-[20px] mdd:h-[20px]" />
            </button>
          </div>

          <div className="w-full flex items-center gap-[10px]">
            <Fragment>
              <h1 className="w-[60px] text-center text-[13px] font-bold text-[#fff] text-nowrap">
                {timer}
              </h1>
            </Fragment>
            <div
              className="w-full px-[15px] py-[10px] cursor-pointer"
              onClick={(e) => {
                setIsPlaying(true);
                checkWidth(e);
              }}
              ref={clickRef}
            >
              <div className="w-full h-[4px] bg-[#ffffff54] relative">
                <div
                  className={`max-w-[0%] w-full h-[4px] bg-[#fff]`}
                  style={{ maxWidth: currentSong.progress + "%" }}
                ></div>
                <div
                  className="w-[32px] h-[32px] rounded-full absolute top-[50%] left-[0%] translate-y-[-50%] bg-[#ffffff] cursor-pointer mdd:w-[20px] mdd:h-[20px]"
                  style={{ left: currentSong.progress + "%" }}
                ></div>
              </div>
            </div>

            <Fragment>
              <h1 className="w-[60px] text-center text-[13px] font-bold text-[#fff] text-nowrap">
                {currentSong.length ? finishTime : "00 : 00"}
              </h1>
            </Fragment>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default MusicPlayer;
