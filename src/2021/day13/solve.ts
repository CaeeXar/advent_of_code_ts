import { countDots, printDots } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let parsed = parsePartOne(input);
    return countDots(parsed, 1);
};

export const solvePartTwo = (input: string) => {
    let parsed = parsePartOne(input);
    return printDots(parsed);
};
