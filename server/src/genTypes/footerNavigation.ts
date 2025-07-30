import { FooterNavigationFooterColumn } from './footerNavigationFooterColumn';

export interface FooterNavigation {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Columns?: FooterNavigationFooterColumn[] | null;
};
