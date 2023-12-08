import _ from "lodash";

const getSum = (n: number): number => {
    if (n > 0) return n + getSum(n - 1);
    return 0;
}

export const calculateFuel = (positions: number[], isPartTwo: boolean): number => {
    let max: number = _.max(positions) || 0,
        cheapest = Number.MAX_VALUE;

    for (let i = 1; i <= max; i++) {
        let sum = isPartTwo ?
            _.sum(positions.map(d => getSum(Math.abs(d - i)))) :
            _.sum(positions.map(d => Math.abs(d - i)));

        if (sum < cheapest) cheapest = sum;
    }

    return cheapest;
};