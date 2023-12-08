import _ from "lodash";
import { Instruction, Position2D } from "./parse";

const SIZE = 1000;
const LIGHTS1: boolean[][] = _.range(0, SIZE, 0).map(d => _.range(0, SIZE, 0).map(d => !!d));
const LIGHTS2: number[][] = _.range(0, SIZE, 0).map(d => _.range(0, SIZE, 0));

const execute1 = (status: "on" | "off" | "toggle", from: Position2D, to: Position2D) => {
    for (let y = from.y; y <= to.y; y++) {
        for (let x = from.x; x <= to.x; x++) {
            if (status === "on") LIGHTS1[y][x] = true;
            else if (status === "off") LIGHTS1[y][x] = false;
            else LIGHTS1[y][x] = !LIGHTS1[y][x];
        }
    }
}

const execute2 = (status: "on" | "off" | "toggle", from: Position2D, to: Position2D) => {
    for (let y = from.y; y <= to.y; y++) {
        for (let x = from.x; x <= to.x; x++) {
            if (status === "on") LIGHTS2[y][x] = LIGHTS2[y][x] + 1;
            else if (status === "off") LIGHTS2[y][x] = (LIGHTS2[y][x] - 1) < 0 ? 0 : (LIGHTS2[y][x] - 1);
            else LIGHTS2[y][x] = LIGHTS2[y][x] + 2;
        }
    }
}

const runInstructions = (instructions: Instruction[], part: 1 | 2) => {
    instructions.forEach(instruction => {
        if (part === 1) execute1(instruction.status, instruction.from, instruction.to);
        else execute2(instruction.status, instruction.from, instruction.to)
    });
}

export const countLit = (instructions: Instruction[]) => {
    runInstructions(instructions, 1);
    return LIGHTS1.reduce((total, row) => total + row.filter(d => !!d).length, 0);
};

export const countBrightness = (instructions: Instruction[]) => {
    runInstructions(instructions, 2);
    return LIGHTS2.reduce((total, row) => total + _.sum(row), 0);
};