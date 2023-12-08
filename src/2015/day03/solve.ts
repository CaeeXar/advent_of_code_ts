import { calcDirections, calcDirectionsWithRobo } from "./logic";

export const solvePartOne = (input: string) => {
    return calcDirections(input);
};

export const solvePartTwo = (input: string) => {
    return calcDirectionsWithRobo(input);
};
