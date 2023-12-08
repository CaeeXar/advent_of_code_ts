import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solve example", () => {
        const input = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

        const result = solvePartOne(input);

        expect(result).toEqual(0);
    });
});
