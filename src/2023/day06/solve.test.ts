import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
  test("solves the example", () => {
    const input = `Time:      7  15   30
Distance:  9  40  200`;
    const result = solvePartOne(input);
    expect(result).toEqual(288);
  });
});

describe("Part two", () => {
  test("solves the example", () => {
    const input = `Time:      7  15   30
Distance:  9  40  200`;
    const result = solvePartTwo(input);
    expect(result).toEqual(71503);
  });
});
