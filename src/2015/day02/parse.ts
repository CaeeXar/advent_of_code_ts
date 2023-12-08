export const parsePartOne = (input: string) => {
    return input.split("\n").map(d => d.split("x").map(a => +a));
};

export const parsePartTwo = (input: string) => { };