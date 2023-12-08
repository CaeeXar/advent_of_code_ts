import { countLit, enhance } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let i = parsePartOne(input);
    return countLit(i, 2);
};

export const solvePartTwo = (input: string) => {
    let i = parsePartOne(input);
    return countLit(i, 50);
};
