"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import BuyNow from "./BuyNow";
import Timer from "./Timer";

import { useWinners } from "@/states/winners";
import { useContest } from "@/states/contests";
import { useTokens } from "@/states/tokens";
import ShowResults from "./ShowResults";

export default function Contest({ contestDetails }: any) {
  const {
    contestName,
    contestNo,
    ticketPrice,
    remainingTickets,
    totalAmount,
    live,
  } = contestDetails;

  const [winners, addToWinners] = useWinners((state: any) => [
    state.winners,
    state.addToWinners,
  ]);

  const [contests, updateLive] = useContest((state: any) => [
    state.contests,
    state.updateLive,
  ]);

  const time = 10000;
  const [count, setCount] = useState(1);
  const tokens = useTokens((state: any) => state.tokens);

  const getwinner = () => {
    const filteredTokens = tokens
      .flat()
      .filter((token: any) => token.contestName === contestName);

    const generateWinnerToken = () => {
      const randomIndex = Math.floor(Math.random() * filteredTokens.length);
      return filteredTokens[randomIndex];
    };

    if (live) {
      const winner = generateWinnerToken();
      updateLive(contestName);
      addToWinners(winner);
    }
  };

  return (
    <Card className="w-[350px] m-2">
      <CardHeader>
        <CardTitle> {contestName}</CardTitle>
        <CardDescription>{contestNo}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Label>Ticket Price:</Label> {ticketPrice}$
        </div>
        <div>
          {live ? (
            <div>
              {tokens
                .flat()
                .filter((token: any) => token.contestName === contestName)
                .length *
                1000 >
              Number(totalAmount) ? (
                <div>
                  <div>
                    Get your tokens now!!!
                    <Timer time={time} getwinner={getwinner} />
                  </div>
                  {/* {winner && <div>{JSON.stringify(winner)}</div>} */}
                </div>
              ) : null}
            </div>
          ) : (
            <div>contest has been ended</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Counter /> */}
        <div>
          <Button
            variant="outline"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </Button>
          {count}
          <Button
            variant="outline"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
        {live ? (
          <BuyNow
            contestName={contestName}
            count={count}
            setCount={setCount}
            live={live}
            ticketPrice={ticketPrice}
          />
        ) : (
          <ShowResults contestName={contestName} />
        )}
      </CardFooter>
    </Card>
  );
}
