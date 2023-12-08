import { rebootSystem } from "./logic";
import { parsePartOne, parsePartTwo } from "./parse";

export const solvePartOne = (input: string) => {
    return rebootSystem(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return rebootSystem(parsePartTwo(input));
};
