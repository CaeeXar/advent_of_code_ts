import { findFloor, findFloorAt } from "./logic";

export const solvePartOne = (input: string) => {
    return findFloor(input);
};

export const solvePartTwo = (input: string) => {
    return findFloorAt(input, -1);
};
