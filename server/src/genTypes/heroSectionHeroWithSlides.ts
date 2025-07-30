import { HeroSectionHeroSlide } from './heroSectionHeroSlide';
import { SharedLink } from './sharedLink';

export interface HeroSectionHeroWithSlides {
  id?: number;
  Slides?: HeroSectionHeroSlide[] | null;
  Breadcrumbs?: SharedLink[] | null;
};
