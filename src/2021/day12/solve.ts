import { getDistinctPaths, getDistinctPathsTwice } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return getDistinctPaths(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return getDistinctPathsTwice(parsePartOne(input));
};
