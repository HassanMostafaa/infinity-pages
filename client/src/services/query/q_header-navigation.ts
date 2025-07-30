import { gql } from "@apollo/client";

export const q_headerNavigation = gql`
  query q_headerNavigation {
    headerNavigation {
      Logo {
        ext
        mime
        name
        url
        alternativeText
      }
      Links {
        Page {
          MetaData {
            LongNavigationName
            NavigationName
            Slug
            Title
            id
          }
        }
      }
    }
  }
`;
