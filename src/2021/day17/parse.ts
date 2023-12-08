import { Position } from "./logic";

export const parsePartOne = (input: string) => {
    let temp = input
        .replace(/target area: /, '')
        .split(",")
        .map(d => d.replace(/[xy]=/, '')
            .trim())
        .map(d => (d.split(".."))
            .map(d => +d));

    let pos1: Position = { x: temp[0][0], y: temp[1][0] },
        pos2: Position = { x: temp[0][1], y: temp[1][1] };

    return [pos1, pos2];
};