import { parsePartOne } from "./parse";

export const getData = (input: string) => {
    const parsedInput = parsePartOne(input);
    let axis: string[] = [], distance: number[] = [];
    parsedInput.forEach(element => {
        let data = element.split(" ");
        axis.push(data[0]);
        distance.push(+data[1]);
    });

    return { axis, distance };
};