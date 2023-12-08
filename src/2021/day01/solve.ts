import { count } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return count(parsePartOne(input));
};

export const solvePartTwo = (input: string) => {
    let parsedInput = parsePartOne(input);
    let groupedArray = [];
    for (var i = 0; i < parsedInput.length - 2; i++) {
        groupedArray.push(parsedInput[i] + parsedInput[i + 1] + parsedInput[i + 2]);
    }
    return count(groupedArray);
};
