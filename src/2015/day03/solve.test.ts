import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `>`;

        const result = solvePartOne(input);

        expect(result).toEqual(2);
    });

    test("solves the example", () => {
        const input = `^>v<`;

        const result = solvePartOne(input);

        expect(result).toEqual(4);
    });

    test("solves the example", () => {
        const input = `^v^v^v^v^v`;

        const result = solvePartOne(input);

        expect(result).toEqual(2);
    });
});

describe("Part two", () => {
    test("solves the example", () => {
        const input = `^v`;

        const result = solvePartTwo(input);

        expect(result).toEqual(3);
    });

    test("solves the example", () => {
        const input = `^>v<`;

        const result = solvePartTwo(input);

        expect(result).toEqual(3);
    });

    test("solves the example", () => {
        const input = `^v^v^v^v^v`;

        const result = solvePartTwo(input);

        expect(result).toEqual(11);
    });
});