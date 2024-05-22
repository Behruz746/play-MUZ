import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ArrowIcon } from "./Icons";

function Slider() {
  const { setMusicPlayer, sliderList, load } = useContext(AppContext);
  const sliderOptions = {
    pagination: false,
    rewind: false,
    width: "1067px",
    gap: "40px",
    padding: "0%",
    start: 0,
    perPage: 5,
    perMove: 1,
    arrows: true,
    lazyLoad: "nearby",
    breakpoints: {
      970: {
        perPage: 4,
      },
      770: {
        padding: "5px",
        perPage: 2.5,
        perMove: 2,
      },
      570: {
        perPage: 2,
        autoplay: true,
        interval: 5000,
        arrows: false,
      },
      400: {
        perPage: 1,
        perMove: 1,
      },
    },
  };

  return (
    <section className="w-full mt-[21px]">
      <div className="container flex flex-col items-center gap-[13px]">
        <h1 className="text-left w-full text-[11px] font-bold leading-normal text-[#fff] mdd:text-[18px]">
          TOP ALBUM
        </h1>
        <Splide hasTrack={false} options={sliderOptions}>
          <SplideTrack>
            {load ? (
              <h1>loading</h1>
            ) : (
              <>
                {sliderList.map(({ img, altImg, id }, idx) => (
                  <SplideSlide
                    key={idx}
                    className="cursor-pointer smm:justify-center smm:flex"
                  >
                    <img
                      width={151}
                      height={151}
                      loading="lazy"
                      src={img}
                      className="w-[151px] h-[151px] mdd:w-[200px] mdd:h-auto smm:max-w-[280px] smm:w-full"
                      alt={altImg}
                      onClick={() => setMusicPlayer(sliderList, id)}
                    />
                  </SplideSlide>
                ))}
              </>
            )}
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <ArrowIcon />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <ArrowIcon />
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
}

export default Slider;
