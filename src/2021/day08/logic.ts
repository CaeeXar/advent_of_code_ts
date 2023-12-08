import _ from "lodash"

//#region helper

const sort = (s: string) => {
    return _.sortBy(s).join('') || "";
}

const includesEvery = (a: string, b: string) => {
    return _.every(b.split("").map(d => a.includes(d)), d => !!d);
}

const reverseMap = (map: { [key: number]: string }) => {
    const ret: { [key: string]: number } = {};

    Object.keys(map).forEach(key => {
        ret[map[+key]] = +key;
    });

    return ret;
}

//#endregion helper

// mapping
const _getMap = (input: string) => {
    let map: { [key: number]: string } = {}, lines = input.split(" ");

    // unique
    map[1] = sort(lines.find(d => d.length === 2) || "");
    map[4] = sort(lines.find(d => d.length === 4) || "");
    map[7] = sort(lines.find(d => d.length === 3) || "");
    map[8] = sort(lines.find(d => d.length === 7) || "");

    // 0, 6, 9
    map[6] = sort(lines.find(d => d.length === 6 && !includesEvery(d, map[1])) || "");
    map[9] = sort(lines.find(d => d.length === 6 && sort(d) !== map[6] && includesEvery(d, map[4])) || "");
    map[0] = sort(lines.find(d => d.length === 6 && sort(d) !== map[6] && sort(d) !== map[9]) || "");

    // 2, 3, 5
    map[3] = sort(lines.find(d => d.length === 5 && includesEvery(d, map[1])) || "");
    map[5] = sort(lines.find(d => d.length === 5 && sort(d) !== map[3] && includesEvery(map[6], d)) || "");
    map[2] = sort(lines.find(d => d.length === 5 && sort(d) !== map[3] && sort(d) !== map[5]) || "");

    return map;
}

const getMap = (input: string) => {
    return reverseMap(_getMap(input))
};

export const decode2 = (input: { before: string[], after: string[] }) => {
    let { before, after } = input, count = 0;

    for (let i = 0; i < before.length; i++) {
        let map = getMap(before[i]), number = "";

        after[i].split(" ").forEach(a => {
            number += "" + map[sort(a || "")];
        });

        count += +number;
    }

    return count;
}

export const decode1 = (input: string[]) => {
    let count = 0;

    input.forEach(line => {
        let temp = line.split(" ");
        temp.forEach(d => {
            count += d.length === 2 ? 1 : 0;
            count += d.length === 3 ? 1 : 0;
            count += d.length === 4 ? 1 : 0;
            count += d.length === 7 ? 1 : 0;
        });
    });

    return count;
}