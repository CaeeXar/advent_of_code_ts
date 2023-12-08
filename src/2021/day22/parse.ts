export type Region = { x1: number, x2: number, y1: number, y2: number, z1: number, z2: number }
export type Instruction = { status: boolean, region: Region };
export const PROCEDURE_REGION: Region = { x1: -50, x2: 50, y1: -50, y2: 50, z1: -50, z2: 50 };

const checkRegion = (r: Region) => {
    return r.x1 >= PROCEDURE_REGION.x1 && r.x2 <= PROCEDURE_REGION.x2 &&
        r.y1 >= PROCEDURE_REGION.y1 && r.y2 <= PROCEDURE_REGION.y2 &&
        r.z1 >= PROCEDURE_REGION.z1 && r.z2 <= PROCEDURE_REGION.z2;
};

const getData = (input: string) => {
    return input.split("\n").map(d => {
        let subData = d.split(" "),
            status = subData[0] === "on" ? true : false,
            regs = subData[1].split(",").map(b => b.split("..")),
            region: Region = {
                x1: +regs[0][0].substring(2), x2: +regs[0][1],
                y1: +regs[1][0].substring(2), y2: +regs[1][1],
                z1: +regs[2][0].substring(2), z2: +regs[2][1]
            };

        return { status, region };
    });
}

export const parsePartOne = (input: string): Instruction[] => {
    let data = getData(input);
    return data.filter(d => checkRegion(d.region));
};

export const parsePartTwo = (input: string): Instruction[] => {
    return getData(input);
};