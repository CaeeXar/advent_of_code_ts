import _ from "lodash";

export interface Options {
    getFirstSync?: boolean;
    steps?: number;
};

let tracker = [..._.range(0, 10, 0).map(d => _.range(0, 10, 0))]

const _flash = (data: number[][], x: number, y: number): number => {
    if (y < 0 || y >= data.length) return 0;
    if (x < 0 || x >= data[y].length) return 0;
    if (tracker[y][x] !== 0) return 0;

    data[y][x]++;
    if (data[y][x] >= 10) {
        let flash = 1;
        data[y][x] = 0;
        tracker[y][x] = 1;

        // UP DOWN LEFT RIGHT
        flash += _flash(data, x, y - 1);
        flash += _flash(data, x, y + 1);
        flash += _flash(data, x - 1, y);
        flash += _flash(data, x + 1, y);
        // LEFT/RIGHT UP
        flash += _flash(data, x - 1, y - 1);
        flash += _flash(data, x + 1, y - 1);
        // LEFT/RIGHT DOWN
        flash += _flash(data, x - 1, y + 1);
        flash += _flash(data, x + 1, y + 1);

        return flash;
    }

    return 0;
}

const flash = (data: number[][]): number => {
    let flashesPerStep = 0;

    for (let y = 0; y < data.length; y++) {
        for (let x = 0; x < data[y].length; x++) {
            flashesPerStep += _flash(data, x, y);
        }
    }

    return flashesPerStep;
}

const isSync = (data: number[][]) => {
    return _.every(data, row => _.every(row, d => d === 0));
}

export const calculateFlashes = (data: number[][], options: Options = { steps: 100 }) => {
    if (!options.steps) options["steps"] = 100;
    let clone = _.cloneDeep(data);
    let flashes = 0;

    for (let i = 0; i < options.steps || (options.getFirstSync ? true : false); i++) {
        flashes += flash(clone);
        tracker = [..._.range(0, 10, 0).map(d => _.range(0, 10, 0))]
        if (options.getFirstSync && isSync(clone)) return i + 1;
    }

    return flashes;
}