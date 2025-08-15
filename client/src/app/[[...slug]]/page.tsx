import React from "react";
import { slugBuilder } from "../../utils/helpers";
import { getPageBySlug } from "@/services/content/getPageBySlug";
import { Page } from "@/base-components/page/Page";

export default async function NextjsPage({
  params,
}: {
  params: { slug: string[] | undefined };
}) {
  const querySlug = await slugBuilder(params?.slug);
  const { page } = await getPageBySlug(querySlug);
  return <>{page?.Content && <Page sections={page?.Content} />}</>;
}
