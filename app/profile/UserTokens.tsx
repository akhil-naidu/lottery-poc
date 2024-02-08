"use client";

import React from "react";
import { useTokens } from "@/states/tokens";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useWinners } from "@/states/winners";

const UserTokens = () => {
  const tokens = useTokens((state: any) => state.tokens);

  const [winners, addToWinners] = useWinners((state: any) => [
    state.winners,
    state.addToWinners,
  ]);
  return (
    <div>
      <h2 className="text-center font-semibold text-4xl m-4">
        Tokens Purchased
      </h2>
      <Table className="">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Contest Name</TableHead>
            <TableHead>Token Number</TableHead>
            <TableHead className="text-end">Ticket Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-black">
          {tokens.map((tokensData: any) =>
            tokensData.map((token: any, index: any) => (
              <TableRow
                className={`${
                  winners.includes(token) ? "bg-green-300" : "bg-gray-200"
                }`}
                key={index}
              >
                {/* <TableCell className="font-medium">{index + 1}</TableCell> */}
                <TableCell>{token.contestName}</TableCell>
                <TableCell>{token.random5Digit}</TableCell>
                <TableCell className="text-right">
                  {token.ticketPrice}$
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$0.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default UserTokens;
