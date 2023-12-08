import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `00100
        11110
        10110
        10111
        10101
        01111
        00111
        11100
        10000
        11001
        00010
        01010
`;

        const result = solvePartOne(input);

        expect(result).toEqual(198);
    });
});

describe("Part one", () => {
    test("solves the example", () => {
        const input = `00100
        11110
        10110
        10111
        10101
        01111
        00111
        11100
        10000
        11001
        00010
        01010
`;

        const result = solvePartTwo(input);

        expect(result).toEqual(230);
    });
});