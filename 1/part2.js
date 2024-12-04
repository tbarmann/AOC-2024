const fs = require("fs");

const getInput = () => {
  const input = fs.readFileSync("input.txt", "utf8");
  const lines = input.split("\n");
  const listA = [],
    listB = [];
  lines.forEach((line) => {
    const numbers = line.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      listA.push(Number(numbers[0]));
      listB.push(Number(numbers[1]));
    }
  });
  return { listA, listB };
};

const presenceCount = (list, value) =>
  list.reduce((acc, cur) => (cur === value ? acc + 1 : acc), 0);

const { listA, listB } = getInput();

const similarityScore = listA.reduce(
  (acc, cur) => acc + cur * presenceCount(listB, cur),
  0
);

console.log("Similarity score:", similarityScore);
// Similarity score: 24931009
