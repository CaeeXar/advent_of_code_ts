import { calculateFuel } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculateFuel(parsePartOne(input), false);
};

export const solvePartTwo = (input: string) => {
    return calculateFuel(parsePartOne(input), true);
};
