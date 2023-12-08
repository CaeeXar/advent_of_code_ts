import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `16,1,2,0,4,2,7,1,2,14`;

        const result = solvePartOne(input);

        expect(result).toEqual(37);
    });
});

describe("Part two", () => {
    test("solves the example", () => {
        const input = `16,1,2,0,4,2,7,1,2,14`;

        const result = solvePartTwo(input);

        expect(result).toEqual(168);
    });
});