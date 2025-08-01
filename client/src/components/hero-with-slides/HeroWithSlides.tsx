import { IGenComponentHeroSectionHeroWithSlides } from "@/types";
import React, { type FunctionComponent } from "react";

export type IHeroWithSlides = Omit<
  IGenComponentHeroSectionHeroWithSlides,
  "__typename" | "id"
> & {};

export const HeroWithSlides: FunctionComponent<IHeroWithSlides> = ({
  Slides,
  Breadcrumbs,
}) => {
  return <div>HeroWithSlides</div>;
};
