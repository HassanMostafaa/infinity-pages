import { Media } from './media';
import { HeaderNavigationHeaderNavigationLink } from './headerNavigationHeaderNavigationLink';

export interface HeaderNavigation {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Logo?: Media | null;
  Link?: HeaderNavigationHeaderNavigationLink[] | null;
};
