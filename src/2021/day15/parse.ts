import _ from "lodash";

export type RiskLevel = number[][];

export const parsePartOne = (input: string): RiskLevel => {
    return input.split("\n").map(d => d.split("").map(d => +d));
};

export const parsePartTwo = (input: string): RiskLevel => {
    let rl: RiskLevel = input.split("\n").map(d => d.split("").map(d => +d)), copy = _.cloneDeep(rl), times = 5;
    // x-entries x5
    for (let y = 0; y < rl.length; y++) {
        for (let i = 1; i < times; i++) {
            copy[y].push(...rl[y].map(d => (d + i <= 9) ? d + i : (d + i) - 9)); // copy from raw-data
        }
    }
    // y-entries x5
    for (let i = 1; i < times; i++) {
        for (let y = 0; y < rl.length; y++) {
            copy.push(copy[y].map(d => (d + i <= 9) ? d + i : (d + i) - 9)); // copy from incremented-data
        }
    }
    return copy;
};