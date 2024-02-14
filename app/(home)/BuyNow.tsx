'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { useTokens } from '@/states/tokens';
import { generateArrayOfTickts } from '@/lib/generateTokens';
import { useRouter } from 'next/navigation';

const BuyNow = ({
  count,
  contestName,
  setCount,
  live,
  ticketPrice,
}: {
  count: number;
  contestName: any;
  setCount: any;
  live: any;
  ticketPrice: any;
}) => {
  const [tokens, addToToken] = useTokens((state: any) => [
    state.tokens,
    state.addToToken,
  ]);

  const router = useRouter();

  // console.log("tokens", tokens);

  const handleConfirm = () => {
    const data = generateArrayOfTickts({
      count: count,
      contestName: contestName,
      userId: 2,
      ticketPrice: ticketPrice,
    });
    addToToken(data);
    setCount(1);
    router.push('/profile');
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' disabled={!live}>
            Buy Now
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>payment</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input id='username' value='@peduarte' className='col-span-3' />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              onClick={() => handleConfirm()}
              //   disabled={live}
            >
              confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuyNow;
