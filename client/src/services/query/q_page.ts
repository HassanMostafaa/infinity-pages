import { f_page } from "../fragment/f_page";
import { gql } from "@apollo/client";

export const q_page = gql`
  ${f_page}
  query q_page($filters: PageFiltersInput) {
    pages(filters: $filters) {
      ...f_page
    }
  }
`;
