import { decode1, decode2 } from "./logic";
import { parsePartTwo } from "./parse";

export const solvePartOne = (input: string) => {
    let parse = parsePartTwo(input);
    return decode1(parse.after);
};

export const solvePartTwo = (input: string) => {
    let parse = parsePartTwo(input);
    return decode2(parse);
};
