import _ from "lodash";

const compare = (a: number, b: number) => a - b;

export const calculatePaper = (presents: number[][]) => {
    let totalPaper = 0;
    presents.forEach(p => {
        let sorted = _.clone(p).sort(compare)
        totalPaper += (2 * p[0] * p[1]) + (2 * p[1] * p[2]) + (2 * p[0] * p[2]) + (sorted[0] * sorted[1]);
    });
    return totalPaper;
};

export const calculateRibbon = (presents: number[][]) => {
    let totalRibbon = 0;
    presents.forEach(p => {
        let sorted = _.clone(p).sort(compare)
        totalRibbon += (2 * sorted[0]) + (2 * sorted[1]) + (p[0] * p[1] * p[2]);
    });
    return totalRibbon;
};