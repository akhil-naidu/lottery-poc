"use client";

import { Button } from "@/components/ui/button";
import { gql, useQuery } from "@apollo/client";
import React from "react";

const HomePage = () => {
  const GET_CONTESTS = gql`
    query GetAllContest {
      contest {
        contest_name
        contest_no
        id
        status
        total_amount
        total_price
        type
      }
    }
  `;

  const { data, loading } = useQuery(GET_CONTESTS);

  console.log("contests: ", data);

  if (loading) return <div>...Loading</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
