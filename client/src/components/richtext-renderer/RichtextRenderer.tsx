import { Maybe, Scalars } from "@/types";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import React, { FunctionComponent } from "react";

export const RichtextRenderer: FunctionComponent<{
  blocks: Maybe<Scalars["JSON"]["output"]> | BlocksContent;
}> = ({ blocks }) => {
  return <BlocksRenderer content={blocks} />;
};
