export const parsePartOne = (input: string) => {
    return input.split("\n").map(d => parseInt(d)).filter(d => ![NaN, undefined].includes(d));
};