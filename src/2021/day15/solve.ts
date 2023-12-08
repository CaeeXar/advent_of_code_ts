import { calculateDistance } from "./logic";
import { parsePartOne, parsePartTwo } from "./parse";

export const solvePartOne = (input: string) => {
    return calculateDistance(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    return calculateDistance(parsePartTwo(input));
};