import { solvePartOne, solvePartTwo } from "./solve";


describe("Part one", () => {
    test("solves the example", () => {
        const input = `target area: x=20..30, y=-10..-5`;

        const result = solvePartOne(input);

        expect(result).toEqual(45);
    });
});

describe("Part one", () => {
    test("solves the example", () => {
        const input = `target area: x=20..30, y=-10..-5`;

        const result = solvePartTwo(input);

        expect(result).toEqual(112);
    });
});