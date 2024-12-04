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

const { listA, listB } = getInput();
listA.sort();
listB.sort();

const sum = listA.reduce((acc, cur, i) => {
  return acc + Math.abs(cur - listB[i]);
}, 0);

console.log("Sum of differences:", sum);
// Sum of differences: 2066446
