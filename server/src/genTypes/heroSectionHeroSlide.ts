import { SharedLink } from './sharedLink';
import { Media } from './media';

export interface HeroSectionHeroSlide {
  id?: number;
  Title?: string;
  Description?: any;
  Button?: SharedLink | null;
  Media?: Media | null;
  UserFullOverlay?: boolean;
  UseHalfOverlay?: boolean;
};
