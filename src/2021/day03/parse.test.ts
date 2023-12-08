import { parsePartOne } from "./parse";

describe("Part one", () => {
    test("Parse the example", () => {
        const input = `001
        111
        101
`;

        const result = parsePartOne(input);
        expect(result).toEqual(['001', '111', '101']);
    });
});