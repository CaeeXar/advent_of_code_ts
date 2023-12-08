import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
  test("solves the example", () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

    const result = solvePartOne(input);

    expect(result).toEqual(142);
  });
});

describe("Part two", () => {
  test("solves the example", () => {
    const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

    const result = solvePartTwo(input);

    expect(result).toEqual(281);
  });
});
