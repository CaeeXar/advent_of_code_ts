import { run } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return run(parsePartOne(input)).height;
};

export const solvePartTwo = (input: string) => {
    return run(parsePartOne(input)).initialVelocityValues;
};
