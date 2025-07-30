// lib/apollo-client.ts
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL || "",
  cache: new InMemoryCache(),
});

export default client;
