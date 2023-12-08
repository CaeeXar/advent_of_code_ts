import _ from "lodash";

export const getBingoTable = (bingo: { numbers: number[], game: number[][][] }) => {
    let { numbers, game } = bingo, drawns: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        drawns.push(numbers[i]);

        for (const table of game) {
            // Zeilen durchsuchen
            for (const row of table) {
                if (_.every(row, d => drawns.includes(d))) {
                    return { table, drawns };
                }
            }

            // Reihen durchsuchen
            for (let y = 0; y < table.length; y++) {
                if (_.every(table, row => drawns.includes(row[y]))) {
                    return { table, drawns };
                }
            }
        }
    }

    return { table: [[]], drawns: [] };
};

export const calcSum = (bingo: { table: number[][], drawns: number[] }) => {
    let unmarkedSum = 0, { table, drawns } = bingo;

    for (let row_id = 0; row_id < table.length; row_id++) {
        for (let cell_id = 0; cell_id < table[row_id].length; cell_id++) {
            let data = table[row_id][cell_id];
            unmarkedSum += (drawns.includes(data)) ? 0 : data;
        }
    }

    return unmarkedSum * (drawns.pop() || 1);
};