import React from "react";
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
import { useContest } from "@/states/contests";

const MyContestCard = ({ contest }: { contest: any }) => {
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

  const filteredTokens = tokens
    .flat()
    .filter((token: any) => token.contestName === contest.contestName);

  const getwinner = () => {
    const generateWinnerToken = () => {
      const randomIndex = Math.floor(Math.random() * filteredTokens.length);
      return filteredTokens[randomIndex];
    };

    if (!contest.live) {
      const winner = generateWinnerToken();
      updateisWinner(contest.contestName);
      addToWinners(winner);
    }
  };

  const contestStop = () => {
    updateLive(contest.contestName);
  };

  return (
    <div>
      {" "}
      <div className="m-4 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Contest Name : {contest.contestName}</CardTitle>
            <p>Total Price : {contest.totalAmount}</p>
          </CardHeader>
          <CardContent>
            <p>Tickets sold : {filteredTokens.length}</p>
          </CardContent>
          <CardFooter>
            {!contest.live ? (
              <Button onClick={() => getwinner()} disabled={contest.isWinner}>
                Draw
              </Button>
            ) : null}

            <Button
              disabled={!contest.live}
              className="ml-2"
              onClick={() => contestStop()}
            >
              Stop
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MyContestCard;
