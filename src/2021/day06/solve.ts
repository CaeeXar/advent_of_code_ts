import { simulate } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let parsed = parsePartOne(input);
    return simulate(parsed);
};

export const solvePartTwo = (input: string) => {
    let parsed = parsePartOne(input);
    return simulate(parsed, 256);
};