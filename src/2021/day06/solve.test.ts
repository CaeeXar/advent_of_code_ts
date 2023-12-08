import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `3,4,3,1,2`;

        const result = solvePartOne(input);

        expect(result).toEqual(5934);
    });
});

describe("Part two", () => {
    test("solves the example", () => {
        const input = `3,4,3,1,2`;

        const result = solvePartTwo(input);

        expect(result).toEqual(26984457539);
    });
});