export type Image = { algorithm: string, input: string[] };

export const parsePartOne = (input: string): Image => {
    let out = input.split("\n").filter(d => d != "");
    return { algorithm: out[0], input: out.slice(1) };
};