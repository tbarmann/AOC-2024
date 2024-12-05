const { match } = require("assert");
const fs = require("fs");
const path = require("path");

const getInput = () => {
  const inputPath = path.join(__dirname, "input.txt");
  const input = fs.readFileSync(inputPath, "utf8");
  return input;
};

const countMatches = (block) => {
  const regexes = [/XMAS/g, /SAMX/g];
  let count = 0;
  regexes.forEach((regex) => {
    const matches = block.match(regex);
    count += matches ? matches.length : 0;
  });
  return count;
};

// swap rows and columns
const transpose = (block) => {
  const rows = block.split("\n");
  const matrix = rows.map((row) => row.split(""));
  const matrixTransposed = matrix[0].map((_, i) => matrix.map((row) => row[i]));
  return matrixTransposed.map((column) => column.join("")).join("\n");
};

// transform block into falling diagonals
const diagonalize = (block) => {
  const lines = block.split("\n");
  const rows = lines.length;
  const cols = lines[0].length;
  const diagonals = [];

  for (let k = 0; k < rows + cols - 1; k++) {
    let diagonal = "";
    for (let i = 0; i < rows; i++) {
      const j = k - i;
      if (lines[i] && lines[i][j]) {
        diagonal += lines[i][j];
      }
    }
    diagonals.push(diagonal);
  }

  return diagonals.join("\n");
};

const reverse = (block) => {
  const lines = block.split("\n");
  return lines.map((line) => line.split("").reverse().join("")).join("\n");
};

const block = getInput();
const blockTransposed = transpose(block);
const fallingDiagonals = diagonalize(block);
const risingDiagonals = diagonalize(reverse(block));

let matchesSum = countMatches(block);
matchesSum += countMatches(blockTransposed);
matchesSum += countMatches(fallingDiagonals);
matchesSum += countMatches(risingDiagonals);

console.log(matchesSum);
// 2378
