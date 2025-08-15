"use client";

import React, { memo, type FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { RichtextRenderer } from "@/components/richtext-renderer/RichtextRenderer";
import { Button } from "@/base-components/button/Button";
import { getCMSMediaURL } from "@/utils/helpers";
import { IGenComponentHeroSectionHeroSlide } from "@/types";

type IHeroSlideProps = Omit<
  IGenComponentHeroSectionHeroSlide,
  "__typename" | "id"
>;

const HeroSlideComponent: FunctionComponent<IHeroSlideProps> = ({
  Media,
  Title,
  Description,
  UserFullOverlay,
  UseHalfOverlay,
  Button: SlideButton,
}) => {
  console.log("slide: i re-rendered");
  return (
    <div className="!h-full !min-h-[60vh] relative">
      {/* Background Image */}
      {Media?.url ? (
        <div className="h-full absolute top-0 w-full z-[0]">
          <Image
            fill
            src={getCMSMediaURL(Media.url)}
            alt={Media.alternativeText ?? ""}
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <div className="h-full absolute top-0 w-full z-[0] bg-neutral-400" />
      )}

      {/* Overlay */}
      {(UserFullOverlay || UseHalfOverlay) && (
        <div
          className="absolute top-0 left-0 w-full h-full z-[1]"
          style={{
            background: UserFullOverlay
              ? "#1F2A37B2"
              : UseHalfOverlay
              ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.9) 85%, rgba(0,0,0,1) 100%)"
              : "transparent",
          }}
        />
      )}

      {/* Content */}
      {(Title || Description || SlideButton) && (
        <div className="py-20 relative h-full !min-h-[60vh] flex flex-col gap-10 justify-center items-center text-center z-[2]">
          {Title && (
            <p className="text-3xl responsive font-bold relative z-[2] text-white">
              {Title}
            </p>
          )}

          {Description && (
            <div className="text-white responsive relative z-[2]">
              <RichtextRenderer blocks={Description} />
            </div>
          )}

          {/* Buttons */}
          {SlideButton?.IsExternal && SlideButton?.Text && (
            <Link
              href={SlideButton.ExternalUrl ?? "#"}
              target={SlideButton.UseSelfTarget ? "_self" : "_blank"}
              aria-disabled={!SlideButton.ExternalUrl}
              className={`${
                !SlideButton.ExternalUrl && "pointer-events-none"
              } relative z-[2]`}
            >
              <Button
                text={SlideButton.Text}
                disabled={!SlideButton.ExternalUrl}
              />
            </Link>
          )}

          {!SlideButton?.IsExternal &&
            SlideButton?.page?.MetaData?.LongNavigationName && (
              <Link target="_self" href={SlideButton.page.MetaData.Slug}>
                <Button text={SlideButton.page.MetaData.LongNavigationName} />
              </Link>
            )}
        </div>
      )}
    </div>
  );
};

// Memoize so it only re-renders if props actually change
export const HeroSlide = memo(HeroSlideComponent);
