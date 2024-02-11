"use client";

import React from "react";
import { useContest } from "@/states/contests";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTokens } from "@/states/tokens";
import { useWinners } from "@/states/winners";

const MyContest = () => {
  const [contests, updateLive, updateisWinner] = useContest((state: any) => [
    state.contests,
    state.updateLive,
    state.updateisWinner,
  ]);
  const tokens = useTokens((state: any) => state.tokens);
  const [winners, addToWinners] = useWinners((state: any) => [
    state.winners,
    state.addToWinners,
  ]);

  const userContests = contests.filter((contest: any) => contest.userId === 2);

  const getwinner = (contestName: string, live: boolean) => {
    const filteredTokens = tokens
      .flat()
      .filter((token: any) => token.contestName === contestName);

    const generateWinnerToken = () => {
      const randomIndex = Math.floor(Math.random() * filteredTokens.length);
      return filteredTokens[randomIndex];
    };

    if (!live) {
      const winner = generateWinnerToken();
      //   updateLive(contestName);
      updateisWinner(contestName);
      addToWinners(winner);
    }
  };

  const contestStop = (contestName: string) => {
    updateLive(contestName);
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-4xl m-4">My Contests</h2>
      {userContests.map((contest: any) => {
        return (
          <div key={contest.id}>
            <div className="m-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contest Name : {contest.contestName}</CardTitle>
                  <p>Total Price : {contest.totalAmount}</p>
                </CardHeader>
                <CardContent>
                  <p>Tickets sold : 10</p>
                </CardContent>
                <CardFooter>
                  {!contest.live ? (
                    <Button
                      onClick={() =>
                        getwinner(contest.contestName, contest.live)
                      }
                      disabled={contest.isWinner}
                    >
                      Draw
                    </Button>
                  ) : null}

                  <Button
                    disabled={!contest.live}
                    className="ml-2"
                    onClick={() => contestStop(contest.contestName)}
                  >
                    Stop
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyContest;
