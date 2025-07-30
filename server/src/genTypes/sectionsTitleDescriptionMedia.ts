import { Media } from './media';
import { SharedLink } from './sharedLink';

export interface SectionsTitleDescriptionMedia {
  id?: number;
  Image?: Media | null;
  Title?: string;
  Description?: any;
  CTAs?: SharedLink[] | null;
};
