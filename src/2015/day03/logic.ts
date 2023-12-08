export const calcDirections = (input: string) => {
    let posX = 0, posY = 0, houses: { [key: string]: number } = { "0,0": 1 };
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "^":
                posY -= 1;
                break;
            case "v":
                posY += 1;
                break;
            case ">":
                posX += 1;
                break;
            case "<":
                posX -= 1;
                break;
        }
        let key = posX + "," + posY;
        houses[key] = (!!houses[key] ? houses[key] : 0) + 1;
    }

    return Object.keys(houses).length;
};

export const calcDirectionsWithRobo = (input: string) => {
    let positions: { [key: number]: { x: number, y: number } } = { 0: { x: 0, y: 0 }, 1: { x: 0, y: 0 } },
        houses: { [key: string]: number } = { '0:0': 2 };

    for (let i = 0; i < input.length; i++) {
        let pos = i % 2;
        switch (input[i]) {
            case '^':
                positions[pos].y++;
                break;
            case '>':
                positions[pos].x++;
                break;
            case 'v':
                positions[pos].y--;
                break;
            case '<':
                positions[pos].x--;
                break;
        }
        let index = positions[pos].x + ':' + positions[pos].y;
        houses[index] ? houses[index]++ : houses[index] = 1;
    }

    return Object.keys(houses).length;
};