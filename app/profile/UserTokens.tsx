"use client";

import React from "react";
import { useTokens } from "@/states/tokens";

import { useWinners } from "@/states/winners";
import TokenCard from "./TokenCard";

const UserTokens = () => {
  const tokens = useTokens((state: any) => state.tokens);

  // const contestList = [
  //   ...new Set(
  //     tokens.map((token: any) => {
  //       return token.name;
  //     })
  //   ),
  // ];

  const contestList = [
    ...new Set(
      tokens.flat().map((list: any) => {
        return list.contestName;
      })
    ),
  ];

  return (
    <div>
      <h2 className="text-center font-semibold text-4xl m-4">
        Tokens Purchased
      </h2>

      {contestList.map((contest: any, index: number) => (
        <div className="m-4" key={index}>
          <TokenCard contest={contest} />
        </div>
      ))}
      {/* <Table className="">
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
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{token.contestName}</TableCell>
                <TableCell>{token.random5Digit}</TableCell>
                <TableCell className="text-right">
                  {token.ticketPrice}$
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
      </Table> */}
    </div>
  );
};

export default UserTokens;
