import { countBrightness, countLit } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return countLit(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return countBrightness(parsePartOne(input));
};
