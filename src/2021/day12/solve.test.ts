import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

        const result = solvePartOne(input);

        expect(result).toEqual(10);
    });
});

describe("Part one", () => {
    test("solves the example", () => {
        const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

        const result = solvePartTwo(input);

        expect(result).toEqual(36);
    });
});