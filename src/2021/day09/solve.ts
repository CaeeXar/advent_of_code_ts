import { getBasin, getRisk } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return getRisk(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return getBasin(parsePartOne(input));
};
