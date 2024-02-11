"use client";

import React from "react";
import { useWinners } from "@/states/winners";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WinList = () => {
  const [winners, addToWinners] = useWinners((state: any) => [
    state.winners,
    state.addToWinners,
  ]);

  return (
    <div className="w-5/6 mx-auto">
      <h2 className="text-center font-semibold text-4xl m-4 mb-8">
        Contest Won
      </h2>
      {winners.map((winner: any, index: number) => (
        <div className="mb-4 mt-6" key={index}>
          <Card>
            <CardHeader>
              <CardTitle>Contest Name : {winner.contestName}</CardTitle>
              <p>Ticket Number : {winner.random7Digit}</p>
            </CardHeader>
            <CardFooter>
              <p>Ticket Price : {winner.ticketPrice}$</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default WinList;
