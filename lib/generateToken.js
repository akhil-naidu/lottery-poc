function generateRandom5DigitNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}

export function generateArrayOfTickts({ userId, title, count }) {
  const arrayOfTickets = [];

  for (let i = 0; i < count; i++) {
    const random5DigitNumber = generateRandom5DigitNumber();
    arrayOfTickets.push({
      userId: userId,
      productTitle: title,
      random5Digit: random5DigitNumber,
    });
  }

  return arrayOfTickets;
}

// Example usage:
// const userId = 123;
// const title = "Sample Title";
// const numberOfObjects = 5;

// const arrayOfTickets = generateArrayOfObjects(userId, title, numberOfObjects);
// console.log(arrayOfTickets);
