import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solve example", () => {
        const input = `abcdef`;

        const result = solvePartOne(input);

        expect(result).toEqual(609043);
    });
});