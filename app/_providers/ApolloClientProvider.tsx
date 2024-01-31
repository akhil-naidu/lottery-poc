"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: "https://hasura-template-production.up.railway.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "iwillhack",
    },
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
