import Contest from "@/app/(home)/Contest";
import { create } from "zustand";

export const useContest = create((set) => ({
  contests: [],
  addToContest: (contest: any) => {
    set((state: { contests: any }) => {
      return { contests: [...state.contests, contest] };
    });
  },
  updateLive: (contestId: any) => {
    // set((state: any) => {
    //   const myNextList = [...state.contests];
    //   const contest = myNextList.find((a) => a.contestName === contestId);
    //   contest.live = false;
    //   return {
    //     contests: myNextList,
    //   };
    // });
    set((state: any) => {
      const updatedContest = state.contests.map((contest: any) => {
        if (contest.contestName === contestId) {
          return { ...contest, live: false };
        } else {
          return contest;
        }
      });
      return {
        contests: updatedContest,
      };
    });
  },
}));
