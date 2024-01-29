import * as React from 'react';

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
import Counter from './Counter';

export default function Contest({ contestDetails }: any) {
  const { contestName, contestNo, ticketPrice, remainingTickets } =
    contestDetails;
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
          <Label>Tickets Remaining</Label> {remainingTickets}
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Counter />
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}
