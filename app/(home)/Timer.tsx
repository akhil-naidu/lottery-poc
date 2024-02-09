import React, { useState, useEffect } from 'react';

const Timer = ({ getWinner, time }: { getWinner: any; time: any }) => {
  //   useEffect(() => {
  //     const intervel = setInterval(() => {
  //       setTimer(timer + 1);
  //     }, 1000);

  //     return () => clearInterval(intervel);
  //   }, [setTimer, timer]);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      getWinner();
    }, time);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [getWinner, time]);

  return <span></span>;
};

export default Timer;
