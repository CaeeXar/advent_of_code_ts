import _ from "lodash";

//const
const pointMap_p1: { [key: string]: number } = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
};
const pointMap_p2: { [key: string]: number } = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
};
const map_reverse: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
};
const openings = ["(", "[", "{", "<"];

//helper
const countMiddleScore = (arr: string[][]) => {
    return _.sortBy(arr.map(d => d.reduce((total, curr) => (total * 5 + pointMap_p2[curr]), 0)))[Math.floor(arr.length / 2)]
};

// main
export const calculate = (input: string[][], check?: "CORRUPTED" | "INCOMPLETE") => {
    let stack: string[] = [], corr: string[] = [], incompleteLines = [];

    for (let y = 0; y < input.length; y++) {
        let isCorr = false;
        for (let x = 0; x < input[y].length; x++) {
            let value = input[y][x];
            if (openings.includes(value)) stack.push(value);
            else if (map_reverse[stack.pop() || ""] !== value) {
                corr.push(value);
                isCorr = true;
                break;
            }
        }
        if (!isCorr) incompleteLines.push(input[y]);
    }

    if (check === "INCOMPLETE") {
        let incp = [];
        for (let y = 0; y < incompleteLines.length; y++) {
            stack = [];
            for (let x = 0; x < incompleteLines[y].length; x++) {
                let value = incompleteLines[y][x];
                if (openings.includes(value)) stack.push(map_reverse[value]);
                else stack.pop();
            }
            incp.push(stack.reverse());
        }
        return countMiddleScore(incp);
    }
    return _.sum(corr.map(d => pointMap_p1[d]));
};