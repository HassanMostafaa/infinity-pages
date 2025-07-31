import { q_headerNavigation } from "./../query/q_header-navigation";
import client from "../client";
import type { ApolloQueryResult } from "@apollo/client";
import {
  IGenFooterNavigation,
  IGenHeaderNavigation,
  IGenQuery,
  Maybe,
} from "@/types";
import { q_footerNavigation } from "../query/q_footer-navigation";

type GetLayoutQuery = {
  footer: Maybe<IGenFooterNavigation> | undefined;
  header: Maybe<IGenHeaderNavigation> | undefined;
};

export const getLayout = async ({
  locale,
}: {
  locale: string;
}): Promise<GetLayoutQuery | null> => {
  try {
    const footerQuery = client.query({
      query: q_footerNavigation,
      fetchPolicy: "no-cache",
      variables: {
        locale: locale,
      },
    });
    const headerQuery = client.query({
      query: q_headerNavigation,
      fetchPolicy: "no-cache",
      variables: {
        locale: locale,
      },
    });

    const [footerResponse, headerResponse]: [
      ApolloQueryResult<Pick<IGenQuery, "footerNavigation">>,
      ApolloQueryResult<Pick<IGenQuery, "headerNavigation">>
    ] = await Promise.all([footerQuery, headerQuery]);

    return {
      header: headerResponse?.data?.headerNavigation,
      footer: footerResponse?.data?.footerNavigation,
    };
  } catch (error) {
    console.error("Error fetching layout:", error);
    return null;
  }
};
