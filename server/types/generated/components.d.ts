import type { Schema, Struct } from '@strapi/strapi';

export interface FooterNavigationFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_navigation_footer_columns';
  info: {
    displayName: 'FooterColumn';
    icon: 'globe';
  };
  attributes: {
    Links: Schema.Attribute.Component<'shared.link', true>;
    Title: Schema.Attribute.String;
  };
}

export interface HeaderNavigationHeaderNavigationLink
  extends Struct.ComponentSchema {
  collectionName: 'components_header_navigation_header_navigation_links';
  info: {
    displayName: 'HeaderNavigationLink';
    icon: 'globe';
  };
  attributes: {
    Page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface HeroSectionHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_slides';
  info: {
    displayName: 'HeroSlide';
    icon: 'television';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.link', false>;
    Description: Schema.Attribute.Blocks;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
    UseHalfOverlay: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    UserFullOverlay: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface HeroSectionHeroWithSlides extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_with_slides';
  info: {
    displayName: 'HeroWithSlides';
    icon: 'television';
  };
  attributes: {
    Breadcrumbs: Schema.Attribute.Component<'shared.link', true>;
    Slides: Schema.Attribute.Component<'hero-section.hero-slide', true>;
  };
}

export interface MetaPageContent extends Struct.ComponentSchema {
  collectionName: 'components_meta_page_contents';
  info: {
    displayName: 'PageContent';
    icon: 'layout';
  };
  attributes: {};
}

export interface MetaPageMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_page_metas';
  info: {
    displayName: 'PageMeta';
    icon: 'stack';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    LongNavigationName: Schema.Attribute.String;
    NavigationName: Schema.Attribute.String;
    Slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'/'>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsThreeColumnsSwiper extends Struct.ComponentSchema {
  collectionName: 'components_sections_three_columns_swipers';
  info: {
    displayName: 'ThreeColumnsSwiper';
    icon: 'filter';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Items: Schema.Attribute.Component<'shared.simple-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsTitleDescriptionCtAs extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_description_ct_as';
  info: {
    displayName: 'TitleDescriptionCTAs';
    icon: 'apps';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.link', true>;
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsTitleDescriptionMedia extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_description_medias';
  info: {
    displayName: 'TitleDescriptionMedia';
    icon: 'apps';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'shared.link', true>;
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'apps';
  };
  attributes: {
    ExternalUrl: Schema.Attribute.String;
    IsExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    Text: Schema.Attribute.String;
    UseSelfTarget: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedSimpleCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_cards';
  info: {
    displayName: 'SimpleCard';
    icon: 'archive';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.Component<'shared.link', false>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer-navigation.footer-column': FooterNavigationFooterColumn;
      'header-navigation.header-navigation-link': HeaderNavigationHeaderNavigationLink;
      'hero-section.hero-slide': HeroSectionHeroSlide;
      'hero-section.hero-with-slides': HeroSectionHeroWithSlides;
      'meta.page-content': MetaPageContent;
      'meta.page-meta': MetaPageMeta;
      'sections.three-columns-swiper': SectionsThreeColumnsSwiper;
      'sections.title-description-ct-as': SectionsTitleDescriptionCtAs;
      'sections.title-description-media': SectionsTitleDescriptionMedia;
      'shared.link': SharedLink;
      'shared.simple-card': SharedSimpleCard;
    }
  }
}
