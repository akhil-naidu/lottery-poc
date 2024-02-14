function generaterandom7DigitNumber() {
  return Math.floor(1000000 + Math.random() * 9000000);
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
    const random7DigitNumber = generaterandom7DigitNumber();
    arrayOfTickets.push({
      userId: userId,
      contestName: contestName,
      random7Digit: random7DigitNumber,
      ticketPrice: ticketPrice,
    });
  }

  return arrayOfTickets;
}
