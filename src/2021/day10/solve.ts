import { calculate } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculate(parsePartOne(input), "CORRUPTED");
};

export const solvePartTwo = (input: string) => {
    return calculate(parsePartOne(input), "INCOMPLETE");
};
