import { solvePartOne, solvePartTwo } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `8A004A801A8002F478`;

        const result = solvePartOne(input);

        expect(result).toEqual(16);
    });

    test("solves the example", () => {
        const input = `620080001611562C8802118E34`;

        const result = solvePartOne(input);

        expect(result).toEqual(12);
    });

    test("solves the example", () => {
        const input = `C0015000016115A2E0802F182340`;

        const result = solvePartOne(input);

        expect(result).toEqual(23);
    });

    test("solves the example", () => {
        const input = `A0016C880162017C3686B18A3D4780`;

        const result = solvePartOne(input);

        expect(result).toEqual(31);
    });
});

describe("Part one", () => {
    test("solves the example", () => {
        const input = `C200B40A82`;

        const result = solvePartTwo(input);

        expect(result).toEqual(3);
    });
});