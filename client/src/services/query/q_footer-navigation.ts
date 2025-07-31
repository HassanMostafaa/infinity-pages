import { gql } from "@apollo/client";

export const q_footerNavigation = gql`
  query q_footerNavigation {
    footerNavigation {
      Columns {
        Title
        Links {
          Text
          page {
            MetaData {
              NavigationName
              Slug
              Title
              LongNavigationName
            }
          }
          ExternalUrl
          IsExternal
        }
      }
    }
  }
`;
