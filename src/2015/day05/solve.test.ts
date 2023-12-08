import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solve example", () => {
        const input = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`;

        const result = solvePartOne(input);

        expect(result).toEqual(2);
    });
});

describe("Part one", () => {
    test("solve example", () => {
        const input = `qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`;

        const result = solvePartTwo(input);

        expect(result).toEqual(2);
    });
});