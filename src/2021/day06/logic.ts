import _ from "lodash";

export const simulate = (initialData: number[], days: number = 80): number => {
    let map = _.countBy(initialData),
        copy: { [key: number]: number } = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            ...map
        };

    for (let day = 0; day < days; day++) {
        let newFish = copy[0];

        for (let timer = 1; timer < 9; timer++) {
            copy[timer - 1] = copy[timer];
        }

        copy[8] = newFish;
        copy[6] += newFish;
    }

    let sum = 0;
    for (const value of Object.values(copy)) {
        sum += value;
    }

    return sum;
};