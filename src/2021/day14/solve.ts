import { calculate } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculate(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return calculate(parsePartOne(input), 40);
};
