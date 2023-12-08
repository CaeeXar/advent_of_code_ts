import { solvePartOne, solvePartTwo } from "./solve";

describe("Part two", () => {
    test("solves the example", () => {
        const input = `2x3x4
1x1x10`;

        const result = solvePartOne(input);

        expect(result).toEqual(58 + 43);
    });
});

describe("Part two", () => {
    test("solves the example", () => {
        const input = `2x3x4
1x1x10`;

        const result = solvePartTwo(input);

        expect(result).toEqual(34 + 14);
    });
});