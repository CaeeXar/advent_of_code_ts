import _ from "lodash";

export type Conversion = {
  source: number;
  desination: number;
  range: number;
};

export type Almanac = {
  seeds: number[];
  maps: Map<string, Conversion[]>;
};

export const parsePartOne = (input: string): Almanac => {
  let lines = input.split("\n");
  const seeds = lines[0]
    .split(":")[1]
    .trim()
    .split(" ")
    .map((n) => +n);
  lines = lines.slice(2);

  const maps = new Map<string, Conversion[]>();
  let name = "";
  lines.forEach((line) => {
    if (line.includes("map:")) {
      name = line.replace(" map:", "").split("-")[2];
      maps.set(name, []);
    } else if (!!line && !!name) {
      const numbers = line
        .trim()
        .split(" ")
        .map((n) => +n);
      const conversions = maps.get(name)!;
      conversions.push({
        source: numbers[1],
        desination: numbers[0],
        range: numbers[2],
      });
      maps.set(name, conversions);
    }
  });

  return { seeds, maps };
};

export const parsePartTwo = (input: string) => {};
