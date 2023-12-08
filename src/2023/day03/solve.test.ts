import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
  test("solves the example", () => {
    const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

    const result = solvePartOne(input);

    expect(result).toEqual(4361);
  });
});

describe("Part two", () => {
  test("solves the example", () => {
    const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
    const result = solvePartTwo(input);
    expect(result).toEqual(467835);
  });
});
