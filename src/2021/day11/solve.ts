import { calculateFlashes } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculateFlashes(parsePartOne(input), { steps: 100 });
};

export const solvePartTwo = (input: string) => {
    return calculateFlashes(parsePartOne(input), { getFirstSync: true });
};
