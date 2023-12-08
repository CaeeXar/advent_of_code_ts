import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `2199943210
3987894921
9856789892
8767896789
9899965678`;

        const result = solvePartOne(input);

        expect(result).toEqual(15);
    });
});

describe("Part two", () => {
    test("solves the example", () => {
        const input = `2199943210
3987894921
9856789892
8767896789
9899965678`;

        const result = solvePartTwo(input);

        expect(result).toEqual(1134);
    });
});