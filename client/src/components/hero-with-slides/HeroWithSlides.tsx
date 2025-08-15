"use client";
import { IGenComponentHeroSectionHeroWithSlides } from "@/types";
import React, { type FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSlide } from "./Components/HeroSlide";
// import { useDispatch, useSelector } from "@/store/hooks";
// import {
//   asyncChangeByAmount,
//   incrementByOne,
// } from "@/store/features/counter/counterSlice";
// import { debounce } from "@/utils/helpers";

export type IHeroWithSlides = Omit<
  IGenComponentHeroSectionHeroWithSlides,
  "__typename" | "id"
> & {};

export const HeroWithSlides: FunctionComponent<IHeroWithSlides> = ({
  Slides,
  // Breadcrumbs,
}) => {
  // console.log("HeroWithSlides", { Slides, Breadcrumbs });

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
  // const dispatchAsyncDebounced = useRef(
  //   debounce((amount: number) => {
  //     dispatch(asyncChangeByAmount(amount));
  //   }, 500) // wait 500ms between calls
  // ).current;

  if (!Slides || Slides.length === 0) {
    return <></>;
  }
  return (
    <div>
      {/* {JSON.stringify({ count })}
      <br />
      <button
        onClick={() => {
          dispatchAsyncDebounced(5);
        }}
      >
        alo
      </button> */}
      <Swiper
        slidesPerView={1}
        className="hero-with-slides-swiper"
        pagination={{
          clickable: true,
          el: "#hero-with-slides-pagination-bullets",
        }}
        loop={Slides.length > 1}
      >
        {Slides.map((slide, index) => (
          <SwiperSlide className="!h-full !min-h-[60vh]" key={index}>
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
