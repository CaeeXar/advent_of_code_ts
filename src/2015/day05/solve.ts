import { countNice } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => countNice(parsePartOne(input), 1);

export const solvePartTwo = (input: string) => countNice(parsePartOne(input), 2);
