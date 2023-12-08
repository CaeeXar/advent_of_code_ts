export type PlayerPositions = { p1: number, p2: number };

export const parsePartOne = (input: string): PlayerPositions => {
    let pps = input.trim().split("\n").map(d => +d.split(":")[1])
    return { p1: pps[0], p2: pps[1] };
};