import { SharedLink } from './sharedLink';

export interface SectionsTitleDescriptionCtAs {
  id?: number;
  Title?: string;
  Description?: any;
  CTA?: SharedLink[] | null;
};
