import { Page } from './page';

export interface SharedLink {
  id?: number;
  Text?: string;
  page?: Page | null;
  ExternalUrl?: string;
};
