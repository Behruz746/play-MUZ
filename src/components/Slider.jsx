import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ArrowIcon } from "./Icons";
import { slideMusicData } from "../data/data";

function Slider() {
  return (
    <section className="w-full mt-[21px]">
      <div className="container flex flex-col items-center gap-[13px]">
        <h1 className="text-left w-full text-[11px] font-bold leading-normal text-[#fff] mdd:text-[18px]">
          TOP ALBUM
        </h1>
        <Splide
          hasTrack={false}
          options={{
            pagination: false,
            rewind: false,
            width: "1067px",
            gap: "40px",
            padding: "0%",
            start: 0,
            perPage: 5,
            perMove: 1,
            arrows: true,
            breakpoints: {
              970: {
                perPage: 4,
              },
              770: {
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
                perPage: 1.7,
                perMove: 1.7,
              },
            },
          }}
        >
          <SplideTrack>
            {slideMusicData.map(({ link, img, altImg }, idx) => (
              <SplideSlide key={idx} className="cursor-pointer">
                <img
                  width={151}
                  height={151}
                  src={img}
                  className="w-[151px] h-[151px] mdd:w-[200px] mdd:h-auto smm:w-[230px]"
                  alt={altImg}
                />
              </SplideSlide>
            ))}
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
