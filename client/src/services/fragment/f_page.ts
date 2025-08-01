import { f_heroWithSlides } from "./f_hero-with-slides";
import { gql } from "@apollo/client";

export const f_page = gql`
  ${f_heroWithSlides}
  fragment f_page on Page {
    Title
    Content {
      ...f_heroWithSlides
    }
  }
`;
