import _ from "lodash";
import { Manual } from "./parse";

// helper
const getMaxValue = (numbers: number[]): number => {
    return (_.max(numbers) || 0) + 1; // +1, cuz starting with 0
};

const generateDotMap = (x: number, y: number): string[][] => {
    return _.range(0, y, 0).map(d => _.range(0, x, 0).map(d => '.'));
}

const initializePositions = (coords: number[][]) => {
    let maxX = getMaxValue(coords.map(d => d[0])),
        maxY = getMaxValue(coords.map(d => d[1])),
        dotMap = generateDotMap(maxX, maxY);

    coords.forEach(row => {
        let [x, y] = row;
        dotMap[y][x] = '#';
    });

    return dotMap;
};

// logic
const makeFold = (dotMap: string[][], foldAxis: "x" | "y", pos: number) => {
    let map = _.cloneDeep(dotMap), h1, h2;
    if (foldAxis === "x") {
        h1 = map.map(d => d.slice(0, pos));
        h2 = map.map(d => d.slice(pos + 1).reverse());
    } else {
        h1 = map.slice(0, pos);
        h2 = map.slice(pos + 1).reverse();
    }

    if (h1.length !== h2.length) throw new Error("Not same length");

    for (let y = 0; y < h2.length; y++) {
        for (let x = 0; x < h2[y].length; x++) h1[y][x] = (h1[y][x] === '#' || h2[y][x] === '#') ? '#' : '.';
    }

    return h1;
}

const foldUntilStep = (manual: Manual, steps?: number) => {
    let dotsMap = initializePositions(manual.coords),
        folds = _.cloneDeep(manual.folds);

    if (!steps) steps = Number.MAX_VALUE;

    for (let i = 0; i < folds.length && i < steps; i++) {
        let [axis, pos] = folds[i];
        dotsMap = makeFold(dotsMap, axis, pos);
    }

    return dotsMap;
}

// run
export const countDots = (manual: Manual, steps?: number) => {
    let dotsMap = foldUntilStep(manual, steps);
    return _.sum(dotsMap.map(row => row.filter(d => d === '#').length))
}

export const printDots = (manual: Manual, steps?: number) => {
    let dotsMap = foldUntilStep(manual, steps), s = "\n";

    dotsMap.forEach(row => {
        row.forEach(d => s += d);
        s += "\n";
    });

    console.log(s);

    return s;
}