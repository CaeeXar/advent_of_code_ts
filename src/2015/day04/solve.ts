import { mining } from "./logic";

export const solvePartOne = (input: string) => { return mining(input) };

export const solvePartTwo = (input: string) => { return mining(input, 6) };
