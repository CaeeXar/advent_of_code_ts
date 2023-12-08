import _ from "lodash";

export const getFieldSize = (field: { x1: number, y1: number, x2: number, y2: number }[]) => {
    // man sucht den Eintrag mit dem größten Wert heraus
    let max: { x1: number, y1: number, x2: number, y2: number } =
        (_.maxBy(field, d => _.max([d.x1, d.y1, d.x2, d.y2])) || { x1: 0, y1: 0, x2: 0, y2: 0 });

    // Nun muss man von diesem Eintrag herausfinden, welcher Wert der größte ist
    return Math.max(max.x1, max.y1, max.x2, max.y2);
};

export const generateField = (size: number) => {
    let f: number[][] = [];

    // man beginnt von 0 zu Zählen, daher +1
    for (let y = 0; y < size + 1; y++) {
        f.push([]);
        for (let x = 0; x < size + 1; x++) {
            f[y].push(0);
        }

    }

    return f;
};

export const fillField = (data: { x1: number, y1: number, x2: number, y2: number }[], field: number[][], diagonal: boolean) => {
    let copyField = _.cloneDeep(field), copyData = _.cloneDeep(data);

    // zeichnet nur horizontale und vertikale ein ==> x1 = y1 oder y1 = y2
    data = data.filter(d => d.x1 == d.x2 || d.y1 == d.y2);

    for (let i = 0; i < data.length; i++) {
        let { x1, y1, x2, y2 } = data[i];

        for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
            for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
                copyField[y][x]++;
            }
        }
    }

    // diagonale erfordern eine Sonderlogik die per Funktionsparameter angesteuert werden kann
    if (diagonal) {
        copyField = fillFieldDiagonal(copyData.filter(d => d.x1 != d.x2 && d.y1 != d.y2), copyField);
    }

    return copyField;
};

const fillFieldDiagonal = (data: { x1: number, y1: number, x2: number, y2: number }[], field: number[][]) => {
    let copyField = _.cloneDeep(field);
    // zeichnet nur diagonal ein ==> x1 != x2 und y1 != y2

    for (let i = 0; i < data.length; i++) {
        let { x1, y1, x2, y2 } = data[i];

        if (x1 > x2 && y1 > y2) {
            for (let y = y1, x = x1; y >= y2 && x >= x2; y--, x--) {
                copyField[y][x]++;
            }
        }
        else if (x1 > x2 && y2 > y1) {
            for (let y = y1, x = x1; y <= y2 && x >= x2; y++, x--) {
                copyField[y][x]++;
            }
        } else if (x2 > x1 && y1 > y2) {
            for (let y = y1, x = x1; y >= y2 && x <= x2; y--, x++) {
                copyField[y][x]++;
            }
        } else if (x2 > x1 && y2 > y1) {
            for (let y = y1, x = x1; y <= y2 && x <= x2; y++, x++) {
                copyField[y][x]++;
            }
        }
    }

    return copyField;
};

export const countField = (field: number[][]) => {
    let count = 0;

    field.map(row => {
        row.map(d => d > 1 ? count++ : count = count);
    });

    return count;
};