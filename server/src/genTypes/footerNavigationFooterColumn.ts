import { SharedLink } from './sharedLink';

export interface FooterNavigationFooterColumn {
  id?: number;
  Title?: string;
  Links?: SharedLink[] | null;
};
