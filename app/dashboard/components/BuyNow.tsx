"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useTokens } from "@/states/tokens";
import { generateArrayOfTickts } from "@/lib/generateToken";

const BuyNow = ({ count, product }: { count: number; product: any }) => {
  // const [tokensData, setTokensData] = useState([]);

  // const addToToken = useTokens((state) => state.manoj);

  // const data = useTokens((state) => state.tokens);

  const [tokens, addToToken] = useTokens((state: any) => [
    state.tokens,
    state.addToToken,
  ]);

  console.log("data", tokens);

  //   console.log(tokensData);
  const handleConfirm = () => {
    const data = generateArrayOfTickts({
      count: count,
      title: product.name,
      userId: 2,
    });
    addToToken(data);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Buy Now</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>payment</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => handleConfirm()}>
              confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuyNow;
