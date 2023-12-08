import _ from "lodash";
import { parsePartTwo } from "./parse";

type Map = {
  [pos: string]: number;
};

const createMap = (parsedInput: string[]): Map => {
  const map = {};
  const regex = /[0-9]+/g;

  parsedInput.forEach((line, y) => {
    let match = regex.exec(line);
    while (match != null) {
      const value = match[0];
      const start = match.index;

      for (let i = 0; i <= value.length - 1; i++) {
        Object.assign(map, { [y + "-" + (start + i)]: +value });
      }

      match = regex.exec(line);
    }
  });

  return map;
};

const updateMap = (map: Map, pos: string) => {
  let temp = pos.split("-");
  let initY = Number(temp[0]);
  let initX = Number(temp[1]);

  while (!_.isNil(map[initY + "-" + initX])) {
    delete map[initY + "-" + initX];
    initX--;
  }

  initX = +temp[1] + 1;
  while (!_.isNil(map[initY + "-" + initX])) {
    delete map[initY + "-" + initX];
    initX++;
  }

  initX = +temp[1];
  delete map[initY + "-" + initX];
  return map;
};

export const solvePartOne = (input: string) => {
  const parsed = parsePartTwo(input);
  let map = createMap(parsed);
  let sum = 0;

  parsed.forEach((line, y) => {
    const regex = /[0-9]|\./g;
    const xs = line
      .split("")
      .map((char, x) => {
        if (!char.match(regex)) return x;
      })
      .filter((x) => !!x) as number[];

    xs.forEach((x) => {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const pos = y + i + "-" + (x + j);
          const value = map[pos];

          if (!_.isNil(value)) {
            sum += value;
            map = updateMap(map, pos);
          }
        }
      }
    });
  });

  return sum;
};

export const solvePartTwo = (input: string) => {
  const parsed = parsePartTwo(input);
  let map = createMap(parsed);
  let sum = 0;

  parsed.forEach((line, y) => {
    const regex = /\*/g;
    const xs = line
      .split("")
      .map((char, x) => {
        if (char.match(regex)) return x;
      })
      .filter((x) => !!x) as number[];

    xs.forEach((x) => {
      const valuePair = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const pos = y + i + "-" + (x + j);
          const value = map[pos];

          if (!_.isNil(value)) {
            valuePair.push(value);
            map = updateMap(map, pos);
          }
        }
      }

      if (valuePair.length === 2) sum += valuePair[0] * valuePair[1];
    });
  });

  return sum;
};
