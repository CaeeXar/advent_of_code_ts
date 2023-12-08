import _ from "lodash";
import { countField, fillField, generateField, getFieldSize } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let parsed: { x1: number, y1: number, x2: number, y2: number }[] = parsePartOne(input), size = getFieldSize(parsed);
    let filledField = fillField(parsed.filter(d => d.x1 == d.x2 || d.y1 == d.y2), generateField(size), false);
    return countField(filledField);
};

export const solvePartTwo = (input: string) => {
    let parsed: { x1: number, y1: number, x2: number, y2: number }[] = parsePartOne(input), size = getFieldSize(parsed);
    let filledField = fillField(parsed, generateField(size), true);
    return countField(filledField);
};
