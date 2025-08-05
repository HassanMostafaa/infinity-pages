"use client";
import { IGenComponentHeroSectionHeroWithSlides } from "@/types";
import Image from "next/image";
import React, { type FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RichtextRenderer } from "../richtext-renderer/RichtextRenderer";
import Link from "next/link";
import { Button } from "@/base-components/button/Button";

export type IHeroWithSlides = Omit<
  IGenComponentHeroSectionHeroWithSlides,
  "__typename" | "id"
> & {};

export const HeroWithSlides: FunctionComponent<IHeroWithSlides> = ({
  Slides,
  Breadcrumbs,
}) => {
  console.log("HeroWithSlides", { Slides, Breadcrumbs });

  if (!Slides || Slides.length === 0) {
    return <></>;
  }
  return (
    <div>
      <Swiper
        slidesPerView={1}
        className="hero-with-slides-swiper"
        pagination={{
          clickable: true,
          el: "#hero-with-slides-pagination-bullets",
        }}
        loop={Slides.length > 1}
      >
        {Slides.map((slide, index) => {
          return (
            <SwiperSlide className="h-full" key={index}>
              {slide?.Media?.url && (
                <div className="h-full z-[2] absolute top-0 w-full">
                  <Image
                    fill
                    src={process.env.NEXT_PUBLIC_STRAPI_URL + slide?.Media?.url}
                    alt={slide?.Media?.alternativeText ?? ""}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              {(slide?.Title || slide?.Description) && (
                <div className="py-20 relative min-h-[50vh] justify-center items-center text-center z-[3] flex flex-col gap-10">
                  {(slide?.UserFullOverlay || slide?.UseHalfOverlay) && (
                    <div
                      className="absolute top-0 no-contrast z-[1] w-full h-full bo left-0 right-0"
                      style={{
                        background: slide?.UserFullOverlay
                          ? "#1F2A37B2"
                          : slide?.UseHalfOverlay
                          ? "linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 50%,rgba(0, 0, 0, 0.75) 70%,rgba(0, 0, 0, 0.9) 85%,rgba(0, 0, 0, 1) 100%)"
                          : "transparent",
                      }}
                    ></div>
                  )}
                  {slide?.Title && (
                    <p className="text-3xl responsive font-bold relative z-[2] text-white">
                      {slide?.Title}
                    </p>
                  )}
                  {slide?.Description && (
                    <div className="text-white responsive relative z-[2]">
                      <RichtextRenderer blocks={slide?.Description} />
                    </div>
                  )}
                  {slide?.Button?.IsExternal && slide?.Button?.Text && (
                    <Link
                      className="relative z-[2]"
                      href={slide?.Button?.ExternalUrl ?? "#"}
                    >
                      <Button text={slide?.Button?.Text} />
                    </Link>
                  )}
                  {!slide?.Button?.IsExternal &&
                    slide?.Button?.page?.MetaData?.LongNavigationName && (
                      <Link href={slide?.Button?.page?.MetaData?.Slug}>
                        <Button
                          text={
                            slide?.Button?.page?.MetaData?.LongNavigationName
                          }
                        />
                      </Link>
                    )}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
