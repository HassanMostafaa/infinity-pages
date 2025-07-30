import { MetaPageMeta } from './metaPageMeta';

export interface Page {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Title: string;
  MetaData?: MetaPageMeta | null;
  Content?: any;
};
