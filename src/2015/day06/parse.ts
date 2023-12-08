export type Position2D = { x: number, y: number };
export type Instruction = { status: "on" | "off" | "toggle", from: Position2D, to: Position2D };

export const parsePartOne = (input: string) => {
    let positions: number[][] = (input.match(/(\d)*,(\d)*/g) || []).map(d => d.split(",").map(n => +n)),
        instructions: Instruction[] = input.split("\n").map((d, i) => {
            return {
                status: (d.includes("on") ? "on" : d.includes("off") ? "off" : "toggle"),
                from: { x: positions[2 * i][0], y: positions[2 * i][1] },
                to: { x: positions[2 * i + 1][0], y: positions[2 * i + 1][1] }
            }
        }) || [];

    return instructions;
};

export const parsePartTwo = (input: string) => { };