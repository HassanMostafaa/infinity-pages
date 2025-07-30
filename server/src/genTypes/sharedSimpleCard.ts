import { Media } from './media';
import { SharedLink } from './sharedLink';

export interface SharedSimpleCard {
  id?: number;
  Image?: Media | null;
  Title?: string;
  Description?: any;
  Link?: SharedLink | null;
};
