import _ from "lodash";

export const parsePartOne = (input: string) => {
    let parsed = input.split("\n").map(d => d.split(" -> ").map(d => d.split(",").map(d => +d))), coords: { x1: number, y1: number, x2: number, y2: number }[] = [];

    for (let row_id = 0; row_id < parsed.length; row_id++) {
        let x1 = parsed[row_id][0][0], y1 = parsed[row_id][0][1], x2 = parsed[row_id][1][0], y2 = parsed[row_id][1][1];
        coords.push({ x1, y1, x2, y2 });
    }

    return coords;
};