const fs = require("fs");
const path = require("path");

const getInput = () => {
  const inputPath = path.join(__dirname, "input.txt");
  const input = fs.readFileSync(inputPath, "utf8");
  return input;
};

const mul = (a, b) => a * b;

const input = getInput();
const regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
const matches = input.match(regex);

let enabled = true;
let sum = 0;

for (const match of matches) {
  if (match === "do()") enabled = true;
  if (match === "don't()") enabled = false;
  if (enabled && match.startsWith("mul(")) {
    sum += eval(match);
  }
}

console.log(sum);
// 83595109
