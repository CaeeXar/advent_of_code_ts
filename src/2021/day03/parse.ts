export const parsePartOne = (input: string) => {
    return input.split("\n").map(d => d.replace(/\s/g, "")).filter(d => d.length > 0);
};