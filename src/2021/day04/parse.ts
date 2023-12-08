var _ = require('lodash');

export const parsePartOne = (input: string) => {
    let splitted = input.split("\n");
    let numbers = splitted[0].split(',').map(d => +d), game: number[][][] = [];

    splitted.shift();

    let temp: string[][] = [];

    splitted.forEach((d, i) => {
        if (d == '') {
            temp.push([]);
        }
        else {
            temp[temp.length - 1].push(d);
        }
    });

    temp.forEach(elem => {
        game.push([]);
        elem.forEach(d => {
            game[game.length - 1].push([]);
            d.split(" ").filter(x => x != '').map((x: string) => {
                game[game.length - 1][game[game.length - 1].length - 1].push(+x)
            });
        });
    });

    return { numbers, game };
};