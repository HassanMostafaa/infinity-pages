import { gql } from "@apollo/client";
export const f_heroWithSlides = gql`
  fragment f_heroWithSlides on ComponentHeroSectionHeroWithSlides {
    id
    Slides {
      id
      Title
      Description
      Button {
        id
        Text
        page {
          MetaData {
            NavigationName
            Slug
            LongNavigationName
            Title
          }
        }
        ExternalUrl
        IsExternal
      }
      Media {
        ext
        mime
        name
        url
        alternativeText
      }
      UserFullOverlay
      UseHalfOverlay
    }
    Breadcrumbs {
      id
      Text
      page {
        MetaData {
          NavigationName
          Slug
        }
      }
      ExternalUrl
      IsExternal
    }
  }
`;
