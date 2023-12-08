import { getOnes } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let data = parsePartOne(input);
    const l = data[0].length;
    let epsilon = "", gamma = "", ones = 0;

    for (let i = 0; i < l; i++) {
        ones = getOnes(data, i);

        if (ones >= data.length / 2) {
            gamma += "1";
            epsilon += "0";
        }
        else {
            gamma += "0";
            epsilon += "1";
        }

        ones = 0;
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

export const solvePartTwo = (input: string) => {
    let data = parsePartOne(input);
    const l = data[0].length;
    let oxygen = [...data], co2 = [...data], countOxy = 0, countCo2 = 0;

    for (let i = 0; i < l; i++) {
        countOxy = getOnes(oxygen, i);
        countCo2 = getOnes(co2, i);

        if (countOxy >= oxygen.length / 2) oxygen = oxygen.length > 1 ? oxygen.filter(d => d[i] == '1') : oxygen;
        else oxygen = oxygen.length > 1 ? oxygen.filter(d => d[i] == '0') : oxygen;

        if (countCo2 >= co2.length / 2) co2 = co2.length > 1 ? co2.filter(d => d[i] == '0') : co2;
        else co2 = co2.length > 1 ? co2.filter(d => d[i] == '1') : co2;
    }


    let exOxy = oxygen[0] || "0", exCo2 = co2[0] || "0";

    return parseInt(exOxy, 2) * parseInt(exCo2, 2);
};
