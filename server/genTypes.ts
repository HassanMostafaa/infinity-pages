
export interface FooterNavigationFooterColumn {
  id?: number;
  Title?: string;
  Links?: SharedLink[] | null;
};

export interface HeaderNavigationHeaderNavigationLink {
  id?: number;
  Page?: Page | null;
};

export interface HeroSectionHeroSlide {
  id?: number;
  Title?: string;
  Description?: any;
  Button?: SharedLink | null;
  Media?: Media | null;
  UserFullOverlay?: boolean;
  UseHalfOverlay?: boolean;
};

export interface HeroSectionHeroWithSlides {
  id?: number;
  Slides?: HeroSectionHeroSlide[] | null;
  Breadcrumbs?: SharedLink[] | null;
};

export interface MetaPageContent {
  id?: number;
};

export interface MetaPageMeta {
  id?: number;
  Slug: string;
  Title?: string;
  Description?: string;
  LongNavigationName?: string;
  NavigationName?: string;
};

export interface SectionsThreeColumnsSwiper {
  id?: number;
  Title?: string;
  Description?: any;
  Items?: SharedSimpleCard[] | null;
};

export interface SectionsTitleDescriptionCtAs {
  id?: number;
  Title?: string;
  Description?: any;
  CTA?: SharedLink[] | null;
};

export interface SectionsTitleDescriptionMedia {
  id?: number;
  Image?: Media | null;
  Title?: string;
  Description?: any;
  CTAs?: SharedLink[] | null;
};

export interface SharedLink {
  id?: number;
  Text?: string;
  page?: Page | null;
  ExternalUrl?: string;
  IsExternal?: boolean;
};

export interface SharedSimpleCard {
  id?: number;
  Image?: Media | null;
  Title?: string;
  Description?: any;
  Link?: SharedLink | null;
};

export interface FooterNavigation {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Columns?: FooterNavigationFooterColumn[] | null;
};

export interface HeaderNavigation {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  Logo?: Media | null;
  Links?: HeaderNavigationHeaderNavigationLink[] | null;
};

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

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};
