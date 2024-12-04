const fs = require("fs");
const path = require("path");

const getInput = () => {
  const inputPath = path.join(__dirname, "input.txt");
  const input = fs.readFileSync(inputPath, "utf8");
  return input;
};

const mul = (a, b) => a * b;

const input = getInput();
const regex = /mul\(\d+,\s?\d+\)/g;
const matches = input.match(regex);

const quotient = matches.reduce((acc, cur) => acc + eval(cur), 0);

console.log(quotient);
