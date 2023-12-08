import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

        const result = solvePartOne(input);

        expect(result).toEqual(1656);
    });
});

describe("Part one", () => {
    test("solves the example", () => {
        const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

        const result = solvePartTwo(input);

        expect(result).toEqual(195);
    });
});