import React from "react";
import { buildPageSlug } from "../../utils/helpers";

export default async function NextjsPage({
  params,
}: {
  params: { slug: string[] | undefined };
}) {
  const slug = await buildPageSlug(params.slug);

  return <div>NextjsPage : {JSON.stringify({ slug })}</div>;
}
