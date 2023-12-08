import { getData } from "./logic";

export const solvePartOne = (input: string) => {
    let x = 0, y = 0, { axis, distance } = getData(input);

    for (let i = 0; i < axis.length; i++)
        axis[i] == "forward" ?
            x += distance[i] :
            y += (axis[i] == "up" ? -1 : 1) * distance[i];

    return x * y;
};

export const solvePartTwo = (input: string) => {
    let x = 0, aim = 0, depth = 0, { axis, distance } = getData(input);

    for (let i = 0; i < axis.length; i++) {
        let v = distance[i];
        if (axis[i] == "forward") {
            x += v;
            depth += aim * v;
        }
        else aim = aim + (axis[i] == "up" ? -1 : 1) * v;
    }

    return x * depth;
};