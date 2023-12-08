import { calculateValue, sumBy } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return sumBy(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return calculateValue(parsePartOne(input));
};
