import { parsePartOne } from "./parse";

describe("Part one", () => {
    test("Parse the example", () => {
        const input = `199
        200
        208
        210
        200
        207
        240
        269
        260
        263
`;

        const result = parsePartOne(input);
        expect(result).toEqual([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]);
    });
});