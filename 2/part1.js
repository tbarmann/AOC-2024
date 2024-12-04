const fs = require("fs");
const path = require("path");

const getInput = () => {
  const reports = [];
  const inputPath = path.join(__dirname, "input.txt");
  const input = fs.readFileSync(inputPath, "utf8");
  const lines = input.split("\n");
  lines.forEach((line) => {
    const numbers = line.match(/\d+/g);
    if (numbers) {
      reports.push(numbers.map((number) => parseInt(number)));
    }
  });
  return reports;
};

const differenceLessThanFour = (pair) => Math.abs(pair[1] - pair[0]) < 4;
const isAscending = (pair) => pair[0] < pair[1];
const isDescending = (pair) => pair[0] > pair[1];

const allDifferenceLessThanFour = (report) => {
  return report.every((value, index) => {
    return (
      index === report.length - 1 ||
      differenceLessThanFour([value, report[index + 1]])
    );
  });
};

const allAscending = (report) => {
  return report.every((value, index) => {
    return (
      index === report.length - 1 || isAscending([value, report[index + 1]])
    );
  });
};

const allDescending = (report) => {
  return report.every((value, index) => {
    return (
      index === report.length - 1 || isDescending([value, report[index + 1]])
    );
  });
};

const allReports = getInput();
const safeReports = allReports.filter((report) => {
  return (
    (allAscending(report) || allDescending(report)) &&
    allDifferenceLessThanFour(report)
  );
});

console.log(safeReports.length);

// 257
