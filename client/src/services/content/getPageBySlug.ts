import { IGenPage, IGenQuery, Maybe } from "@/types";
import client from "../client";
import { q_page } from "../query/q_page";
import { ApolloQueryResult } from "@apollo/client";

interface IPageQuery {
  page: Maybe<IGenPage>;
  is404: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPageBySlug = async (slug: string): Promise<IPageQuery> => {
  const pageQuery: ApolloQueryResult<Pick<IGenQuery, "pages">> =
    await client.query({
      query: q_page,
      variables: {
        filters: {
          MetaData: {
            Slug: {
              eq: slug,
            },
          },
        },
      },
    });

  console.log({ pageQuery });

  return {
    page: pageQuery?.data?.pages?.[0] || null,
    is404: !pageQuery?.data?.pages?.length,
  };
};
