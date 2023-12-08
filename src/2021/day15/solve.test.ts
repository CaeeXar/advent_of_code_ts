import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

        const result = solvePartOne(input);

        expect(result).toEqual(40);
    });
});

describe("Part one", () => {
    test("solves the example", () => {
        const input = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

        const result = solvePartTwo(input);

        expect(result).toEqual(315);
    });
});