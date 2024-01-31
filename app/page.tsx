"use client";

import { Button } from "@/components/ui/button";
import {
  GetAllContestsDocument,
  GetAllContestsQuery,
  GetAllContestsQueryVariables,
} from "@/generated/graphql";
import { gql, useQuery } from "@apollo/client";
import React from "react";

const HomePage = () => {
  const { data, loading } = useQuery<
    GetAllContestsQuery,
    GetAllContestsQueryVariables
  >(GetAllContestsDocument);

  console.log("contests: ", data);

  if (loading) return <div>...Loading</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
