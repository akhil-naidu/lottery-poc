'use client';

import React from 'react';
import { useContest } from '@/states/contests';

import MyContestCard from './MyContestCard';

const MyContest = () => {
  const [contests, updateLive, updateisWinner] = useContest((state: any) => [
    state.contests,
    state.updateLive,
    state.updateisWinner,
  ]);

  const userContests = contests.filter((contest: any) => contest.userId === 2);

  return (
    <div>
      <h2 className='text-center font-semibold text-4xl m-4'>Admin Panel</h2>
      {userContests.map((contest: any) => {
        return (
          <div key={contest.id}>
            {/* <div className="m-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contest Name : {contest.contestName}</CardTitle>
                  <p>Total Price : {contest.totalAmount}</p>
                </CardHeader>
                <CardContent>
                  <p>Tickets sold : 10</p>
                </CardContent>
                <CardFooter>
                  {!contest.live ? (
                    <Button
                      onClick={() =>
                        getwinner(contest.contestName, contest.live)
                      }
                      disabled={contest.isWinner}
                    >
                      Draw
                    </Button>
                  ) : null}

                  <Button
                    disabled={!contest.live}
                    className="ml-2"
                    onClick={() => contestStop(contest.contestName)}
                  >
                    Stop
                  </Button>
                </CardFooter>
              </Card>
            </div> */}
            <MyContestCard contest={contest} />
          </div>
        );
      })}
    </div>
  );
};

export default MyContest;
