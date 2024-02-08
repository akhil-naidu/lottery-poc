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

const Page = () => {
  const tokens = useTokens((state: any) => state.tokens);

  const [winners, addToWinners] = useWinners((state: any) => [
    state.winners,
    state.addToWinners,
  ]);

  return (
    <div className="w-5/6 mx-auto">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>contest</TableHead>
            <TableHead>token no</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
                  {token.ticketPrice}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$0.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Page;
