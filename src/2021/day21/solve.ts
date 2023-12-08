import { play } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return play(parsePartOne(input));
};

export const solvePartTwo = (input: string) => { };
