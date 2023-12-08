import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `(())`;

        const result = solvePartOne(input);

        expect(result).toEqual(0);
    });

    test("solves the example", () => {
        const input = `(()(()(`;

        const result = solvePartOne(input);

        expect(result).toEqual(3);
    });

    test("solves the example", () => {
        const input = `))(((((`;

        const result = solvePartOne(input);

        expect(result).toEqual(3);
    });

    test("solves the example", () => {
        const input = `))(`;

        const result = solvePartOne(input);

        expect(result).toEqual(-1);
    });

    test("solves the example", () => {
        const input = `)())())`;

        const result = solvePartOne(input);

        expect(result).toEqual(-3);
    });
});

describe("Part two", () => {
    test("solves the example", () => {
        const input = `()())`;

        const result = solvePartTwo(input);

        expect(result).toEqual(5);
    });
});