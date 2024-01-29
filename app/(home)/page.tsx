import React from 'react';
import Contest from './Contest';

const HomePage = () => {
  const data = [
    {
      id: 1,
      contestName: 'Hundai Verna',
      contestNo: 'b2p',
      ticketPrice: 100,
      totalAmount: 5000,
      type: 'car',
    },
    {
      id: 2,
      contestName: 'Honda City',
      contestNo: 'a6r',
      ticketPrice: 10,
      type: 'car',
      totalAmount: 10000,
    },
    {
      id: 3,
      contestName: 'Audi Q5',
      contestNo: 'b6k',
      ticketPrice: 20,
      totalAmount: 20000,
      type: 'car',
    },
  ];
  return (
    <div className='flex'>
      {data.map((contestDetails) => {
        return (
          <Contest key={contestDetails.id} contestDetails={contestDetails} />
        );
      })}
    </div>
  );
};

export default HomePage;
