function generateRandom5DigitNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}

export function generateArrayOfTickts({
  userId,
  contestName,
  count,
  ticketPrice,
}: {
  userId: number;
  contestName: string;
  count: number;
  ticketPrice: any;
}) {
  const arrayOfTickets = [];

  for (let i = 0; i < count; i++) {
    const random5DigitNumber = generateRandom5DigitNumber();
    arrayOfTickets.push({
      userId: userId,
      contestName: contestName,
      random5Digit: random5DigitNumber,
      ticketPrice: ticketPrice,
    });
  }

  return arrayOfTickets;
}
