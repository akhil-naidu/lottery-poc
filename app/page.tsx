"use client";

import { Button } from "@/components/ui/button";
import graphqlRequestClient from "@/lib/graphqlRequestClient";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import React from "react";

const HomePage = () => {
  const GET_ALL_CONTESTS_QUERY = gql`
    query GetAllContests {
      contest {
        id
        contest_name
        contest_no
        total_price
        total_amount
        type
        status
      }
    }
  `;

  const { data, isLoading } = useQuery({
    queryKey: ["GET_ALL_CONTESTS_QUERY"],
    queryFn: async () => graphqlRequestClient.request(GET_ALL_CONTESTS_QUERY),
  });

  if (isLoading) return <div>...loading</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
