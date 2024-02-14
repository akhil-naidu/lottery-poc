import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { useTokens } from "@/states/tokens";
import { useWinners } from "@/states/winners";

const TokenCard = ({ contest }: { contest: any }) => {
  const tokens = useTokens((state: any) => state.tokens);

  const requiredTokens = tokens
    .flat()
    .filter((token: any) => token.contestName === contest);

  const [winners] = useWinners((state: any) => [state.winners]);

  console.log(requiredTokens);

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>contest name : {contest}</AccordionTrigger>
          <AccordionContent>
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
                {requiredTokens.map((token: any, index: any) => (
                  <TableRow
                    className={`${
                      winners.includes(token) ? "bg-green-300" : "bg-gray-200"
                    }`}
                    key={index}
                  >
                    <TableCell>{token.contestName}</TableCell>
                    <TableCell>{token.random7Digit}</TableCell>
                    <TableCell className="text-right">
                      {token.ticketPrice}$
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default TokenCard;
