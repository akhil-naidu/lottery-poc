'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BuyNow from './BuyNow';
import { useTokens } from '@/states/tokens';
import ShowResults from './ShowResults';
import { useWinners } from '@/states/winners';

export default function Contest({ contestDetails }: any) {
  const {
    contestName,
    contestNo,
    ticketPrice,
    remainingTickets,
    totalAmount,
    live,
    isWinner,
  } = contestDetails;

  const [count, setCount] = useState(1);
  const tokens = useTokens((state: any) => state.tokens);

  const winners = useWinners((state: any) => state.winners);

  const winner = winners.find((win: any) => win.contestName === contestName);

  return (
    <Card className='w-[350px] m-2'>
      <CardHeader>
        <CardTitle> {contestName}</CardTitle>
        <CardDescription>{contestNo}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Label>Ticket Price:</Label> {ticketPrice}$
        </div>
        <div>
          {isWinner ? (
            <div>Winner Token Number : {winner.random7Digit}</div>
          ) : (
            <div>
              {live ? (
                <div>
                  {tokens
                    .flat()
                    .filter((token: any) => token.contestName === contestName)
                    .length *
                    ticketPrice >=
                  Number(totalAmount) ? (
                    <div>
                      <div>Lucky Draw on 19th February</div>
                    </div>
                  ) : (
                    'Draw Date is coming soon'
                  )}
                </div>
              ) : (
                <div>Draw is happening on live, link to URL</div>
              )}
            </div>
          )}
        </div>
        {/* {live ? 'Draw Date is coming soon' : null} */}
      </CardContent>
      <CardFooter className='flex justify-between'>
        {live ? (
          <div className='flex justify-around'>
            <div>
              <Button
                variant='outline'
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </Button>
              {count}
              <Button
                variant='outline'
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </Button>
            </div>

            <BuyNow
              contestName={contestName}
              count={count}
              setCount={setCount}
              live={live}
              ticketPrice={ticketPrice}
            />
          </div>
        ) : (
          <div>
            {isWinner ? <ShowResults contestName={contestName} /> : null}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
