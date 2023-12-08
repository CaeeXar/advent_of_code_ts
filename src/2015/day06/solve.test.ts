import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solve example", () => {
        const input = `turn on 0,0 through 999,999`;

        const result = solvePartOne(input);

        expect(result).toEqual(1000 * 1000);
    });
});

describe("Part one", () => {
    test("solve example", () => {
        const input = `toggle 0,0 through 999,999`;

        const result = solvePartTwo(input);

        expect(result).toEqual(2000000);
    });
});