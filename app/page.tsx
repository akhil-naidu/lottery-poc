"use client";

import { Button } from "@/components/ui/button";
import { useGetAllContestsQuery } from "@/generated/graphql";
import React from "react";

const HomePage = () => {
  const { data, loading } = useGetAllContestsQuery();

  console.log("contests: ", data);

  if (loading) return <div>...Loading</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
