const fs = require("fs");
const path = require("path");

const getInput = () => {
  const inputPath = path.join(__dirname, "input.txt");
  const input = fs.readFileSync(inputPath, "utf8");
  return input;
};

const input = getInput();

// every possible configuration
const regexes = [/SAM/, /MAS/];
const matrix = input.split("\n").map((row) => row.split(""));

// get the two segments of the X in a 9x9 grid
let count = 0;
for (let i = 0; i < matrix.length - 2; i++) {
  for (let j = 0; j < matrix[i].length - 2; j++) {
    const fallingDiagonal =
      matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2];
    const risingDiagonal =
      matrix[i + 2][j] + matrix[i + 1][j + 1] + matrix[i][j + 2];
    const fallingMatches = regexes.filter((regex) =>
      regex.test(fallingDiagonal)
    );
    const risingMatches = regexes.filter((regex) => regex.test(risingDiagonal));
    if (fallingMatches.length && risingMatches.length) {
      count++;
    }
  }
}

console.log(count);
// 1796
