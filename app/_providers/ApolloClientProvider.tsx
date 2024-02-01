"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    headers: {
      "x-hasura-admin-secret":
        process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
    },
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
