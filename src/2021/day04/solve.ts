import _ from "lodash";
import { calcSum, getBingoTable } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calcSum(getBingoTable(parsePartOne(input)));
};

export const solvePartTwo = (input: string) => {
    let { numbers, game } = parsePartOne(input);

    // Bingo so oft durchspielen, bis nur mehr eine Tabelle übrig bleibt
    while (game.length > 1) {
        let { table, drawns } = getBingoTable({ numbers, game });
        let idx = game.map((t, i) => _.isEqual(t, table) ? i : -1).filter(d => d != -1)[0];
        game.splice(idx, 1);
    }

    return calcSum(getBingoTable({ numbers, game }));
};
