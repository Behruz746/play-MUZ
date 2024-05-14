import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ArrowIcon } from "./Icons";

const slideMusicData = [
  { link: "/", img: "/img/png/Rectangle 5.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 6.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 7.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 8.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 9.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 5.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 6.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 7.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 8.png", altImg: "music albom" },
  { link: "/", img: "/img/png/Rectangle 9.png", altImg: "music albom" },
];

function Slider() {
  return (
    <section className="w-full mt-[21px]">
      <div className="container flex flex-col items-center gap-[13px]">
        <h1 className="text-left w-full text-[11px] font-bold leading-normal text-[#fff]">
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
          }}
        >
          <SplideTrack>
            {slideMusicData.map(({ link, img, altImg }, idx) => (
              <SplideSlide key={idx} className="cursor-pointer">
                <img width={151} height={151} src={img} alt={altImg} />
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
