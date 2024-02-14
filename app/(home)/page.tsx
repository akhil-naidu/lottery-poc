"use client";

import React from "react";
import Contest from "./Contest";
import { useContest } from "@/states/contests";

const HomePage = () => {
  const data = [
    {
      id: 1,
      contestName: "Hundai Verna",
      contestNo: "b2p",
      ticketPrice: 100,
      totalAmount: 5000,
      type: "car",
      remainingTickets: 10,
    },
    {
      id: 2,
      contestName: "Honda City",
      contestNo: "a6r",
      ticketPrice: 10,
      type: "car",
      totalAmount: 10000,
      remainingTickets: 4,
    },
    {
      id: 3,
      contestName: "Audi Q5",
      contestNo: "b6k",
      ticketPrice: 20,
      totalAmount: 20000,
      type: "car",
      remainingTickets: 10,
    },
  ];
  const [contests] = useContest((state: any) => [state.contests]);
  return (
    <div className="flex">
      {contests.map((contestDetails: any) => {
        return (
          <Contest key={contestDetails.id} contestDetails={contestDetails} />
        );
      })}
    </div>
  );
};

export default HomePage;
