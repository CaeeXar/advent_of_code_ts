import _ from "lodash";
import { Instruction } from "./parse";

const switchedCubes: { [key: string]: boolean } = {};

const key = (x: number, y: number, z: number) => x + "," + y + "," + z;

const switchCube = (instruction: Instruction) => {
    const { status, region } = _.cloneDeep(instruction);
    console.log(region)
    for (let x = region.x1; x <= region.x2; x++) {
        for (let y = region.y1; y <= region.y2; y++) {
            for (let z = region.z1; z <= region.z2; z++) {
                if (!status && !!switchedCubes[key(x, y, z)]) switchedCubes[key(x, y, z)] = status;
                else if (status && !switchedCubes[key(x, y, z)]) switchedCubes[key(x, y, z)] = status;
            }
        }
    }

};

export const rebootSystem = (instructions: Instruction[]) => {
    instructions.forEach(ins => switchCube(ins));
    return Object.entries(switchedCubes).filter(([k, v]) => !!v).length
};