import { calculatePaper, calculateRibbon } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculatePaper(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return calculateRibbon(parsePartOne(input));
};
