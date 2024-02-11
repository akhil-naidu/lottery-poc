import React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useWinners } from "@/states/winners";

const ShowResults = ({ contestName }: any) => {
  const [winners, addToWinners] = useWinners((state: any) => [
    state.winners,
    state.addToWinners,
  ]);

  const winnerData = winners.find(
    (winner: any) => winner.contestName === contestName
  );

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Show Result</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{contestName}</DrawerTitle>
              <DrawerDescription className="mt-2">
                The contest {contestName} has been ended and winner has been
                decleared.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold tracking-tighter">
                    Token No : {winnerData?.random7Digit}
                  </div>
                  <div className="uppercase mt-4">winner : USERNAME</div>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ShowResults;
