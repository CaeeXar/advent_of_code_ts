import _ from "lodash";

export const getRisk = (heightmap: string[][]) => {
    let sum = 0;

    for (let y = 0; y < heightmap.length; y++) {
        for (let x = 0; x < heightmap[y].length; x++) {
            let up = 10, down = 10, right = 10, left = 10, value = +heightmap[y][x];

            if (y > 0) up = +heightmap[y - 1][x];
            if (y < heightmap.length - 1) down = +heightmap[y + 1][x];
            if (x > 0) left = +heightmap[y][x - 1];
            if (x < heightmap[y].length - 1) right = +heightmap[y][x + 1];

            if (value < up && value < down && value < left && value < right) sum += value + 1;
        }
    }

    return sum;
};

export const getRiskPoints = (heightmap: string[][]) => {
    let pos = [];
    for (let y = 0; y < heightmap.length; y++) {
        for (let x = 0; x < heightmap[y].length; x++) {
            let up = 10, down = 10, right = 10, left = 10, value = +heightmap[y][x];

            if (y > 0) up = +heightmap[y - 1][x];
            if (y < heightmap.length - 1) down = +heightmap[y + 1][x];
            if (x > 0) left = +heightmap[y][x - 1];
            if (x < heightmap[y].length - 1) right = +heightmap[y][x + 1];

            if (value < up && value < down && value < left && value < right) pos.push([x, y]);
        }
    }

    return pos;
};

const _getBasin = (heightmap: string[][], x: number, y: number, visited: [number, number][]): number => {
    if (y < 0 || y >= heightmap.length) return 0;
    if (x < 0 || x >= heightmap[y].length) return 0;
    if (+heightmap[y][x] === 9) return 0;
    if (!!visited.find(pos => pos[0] === x && pos[1] === y)) return 0;

    visited.push([x, y]);
    return _getBasin(heightmap, x + 1, y, visited) +
        _getBasin(heightmap, x - 1, y, visited) +
        _getBasin(heightmap, x, y + 1, visited) +
        _getBasin(heightmap, x, y - 1, visited) + 1;
}

export const getBasin = (heightmap: string[][]) => {
    let positions = getRiskPoints(heightmap), sizes: number[] = [];

    positions.forEach(position => {
        let [x, y] = position;
        sizes.push(_getBasin(heightmap, x, y, []));
    });

    return _.sortBy(sizes).reverse().slice(0, 3).reduce(_.multiply, 1);
};