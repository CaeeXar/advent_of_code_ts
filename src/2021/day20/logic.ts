import _ from "lodash";
import { Image } from "./parse";

const convert = (data: string): number => {
    return parseInt(data.replace(/\./g, "0").replace(/#/g, "1"), 2) || 0; // replace all .|# with 0|1 and convert to bin2dec
};

const getPixel = (data: string[], x: number, y: number, char: string) => {
    return (!!data[y] && !!data[y][x]) ? data[y][x] : char;
}

export const enhance = (image: Image, steps: number = 1): string[] => {
    let { algorithm, input } = _.cloneDeep(image), temp: string[] = [], char: string = ".";

    for (let i = 0; i < steps; i++) {
        temp = [];
        for (let y = -1; y < input.length + 1; y++) {
            let row = "";
            for (let x = -1; x < input[0].length + 1; x++) {
                let idx = convert(
                    getPixel(input, x - 1, y - 1, char) + getPixel(input, x, y - 1, char) + getPixel(input, x + 1, y - 1, char) +
                    getPixel(input, x - 1, y, char) + getPixel(input, x, y, char) + getPixel(input, x + 1, y, char) +
                    getPixel(input, x - 1, y + 1, char) + getPixel(input, x, y + 1, char) + getPixel(input, x + 1, y + 1, char)
                );
                row += algorithm[idx];
            }
            temp.push(row);
        }
        input = _.cloneDeep(temp);
        // Fixing problem, when the enchance-algorithm starts with an # and so all
        // dark areas get lit up
        if (algorithm[0] === "#" && char === ".") char = "#";
        else if (algorithm[algorithm.length - 1] === "." && char === "#") char = ".";
    }
    return input;
};

export const countLit = (image: Image, steps: number = 1) => {
    return enhance(image, steps).join("").replace(/\./g, "").length; // only count all #
};