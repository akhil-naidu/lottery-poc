import React, { useState, useEffect } from "react";

const Timer = ({ getwinner, time }: { getwinner: any; time: any }) => {
  //   useEffect(() => {
  //     const intervel = setInterval(() => {
  //       setTimer(timer + 1);
  //     }, 1000);

  //     return () => clearInterval(intervel);
  //   }, [setTimer, timer]);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      getwinner();
    }, time);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return <span></span>;
};

export default Timer;
