const getInput = () => {
  const fs = require("fs");
  const input = fs.readFileSync("input.txt", "utf8");
  const lines = input.split("\n");
  const listA = [],
    listB = [];
  lines.forEach((line, i) => {
    const numbers = line.match(/(\d+)\s+(\d+)/);
    if (numbers) {
      listA.push(Number(numbers[1]));
      listB.push(Number(numbers[2]));
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
