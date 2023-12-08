import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const parsedInput = parsePartOne(input);
  let sum = 0;

  parsedInput.forEach((line: string) => {
    const first = line.split("").find((char: string) => !isNaN(+char));
    const last = line
      .split("")
      .reverse()
      .find((char: string) => !isNaN(+char));

    sum += +((first ?? "0") + (last ?? "0"));
  });

  return sum;
};

export const solvePartTwo = (input: string) => {
  const digits = [
    { key: "one", value: 1 },
    { key: "two", value: 2 },
    { key: "three", value: 3 },
    { key: "four", value: 4 },
    { key: "five", value: 5 },
    { key: "six", value: 6 },
    { key: "seven", value: 7 },
    { key: "eight", value: 8 },
    { key: "nine", value: 9 },
  ];

  const parsedInput = parsePartOne(input);
  let sum = 0;

  parsedInput.forEach((line) => {
    const foundDigits = [];

    // find first word
    foundDigits.push(
      ...digits
        .map((digit) => ({ idx: line.indexOf(digit.key), digit: digit.value }))
        .filter((n) => n.idx >= 0)
    );

    // find last word
    foundDigits.push(
      ...digits
        .map((digit) => ({
          idx: line.lastIndexOf(digit.key),
          digit: digit.value,
        }))
        .filter((n) => n.idx >= 0)
    );

    // find all numbers
    line.split("").forEach((char, idx) => {
      if (!isNaN(+char)) {
        foundDigits.push({ idx, digit: +char });
      }
    });

    const min = foundDigits.sort((a, b) => a.idx - b.idx)[0];
    const max = foundDigits.sort((a, b) => b.idx - a.idx)[0];

    sum += Number("" + min.digit + max.digit);
  });

  return sum;
};
