import { GraphQLClient } from "graphql-request";

const requestHeaders = {
  "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
};

const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  { headers: requestHeaders }
);

export default graphqlRequestClient;
