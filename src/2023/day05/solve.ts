import _ from "lodash";
import { Almanac, Conversion, parsePartOne } from "./parse";

const fromTo = [
  { seed: "soil" },
  { soil: "fertilizer" },
  { fertilizer: "water" },
  { water: "light" },
  { light: "temperature" },
  { temperature: "humidity" },
  { humidity: "location" },
];

const mapTo = (
  input: number,
  conversion: Conversion,
  reversed: boolean = false
) => {
  const sourceMin = reversed ? conversion.desination : conversion.source;
  const sourceMax = sourceMin + conversion.range - 1;
  const desination = reversed ? conversion.source : conversion.desination;

  if (input >= sourceMin && input <= sourceMax) {
    return input + (desination - sourceMin);
  }

  return input;
};

const getLowestLocation = (almanac: Almanac) => {
  let min: number[] = [];
  almanac.seeds.forEach((seed) => {
    let location = seed;

    fromTo.forEach((entry) => {
      const to: string = Object.values(entry)[0]!;
      const map = almanac.maps.get(to);

      if (map) {
        const mappedSeed = map
          .map((conversion) => mapTo(location, conversion))
          .filter((n) => !_.isNil(n) && !isNaN(n) && n !== location)[0];

        if (mappedSeed) location = mappedSeed;
      }
    });

    min.push(location);
  });

  return min.sort((a, b) => a - b)[0];
};

const getLowestSeed = (almanac: Almanac, location: number) => {
  let seed = location;
  fromTo
    .slice()
    .reverse()
    .forEach((entry) => {
      const to: string = Object.values(entry)[0]!;
      const map = almanac.maps.get(to);

      if (map) {
        const mappedSeed = map
          .map((conversion) => mapTo(seed, conversion, true))
          .filter((n) => !_.isNil(n) && !isNaN(n) && n !== seed)[0];

        if (mappedSeed) {
          seed = mappedSeed;
        }
      }
    });

  return seed;
};

export const solvePartOne = (input: string) => {
  const almanac = parsePartOne(input);
  return getLowestLocation(almanac);
};

export const solvePartTwo = (input: string) => {
  const almanac = parsePartOne(input);

  const ranges: number[][] = [];
  for (let i = 0; i < almanac.seeds.length; i += 2) {
    ranges.push([almanac.seeds[i], almanac.seeds[i + 1]]);
  }

  const contains = (seed: number) => {
    return ranges.some((range) => {
      const [start, length] = range;
      return seed >= start && seed <= start + length;
    });
  };

  let location = 0;
  while (location < 662197086) {
    const seed = getLowestSeed(almanac, location);
    if (contains(seed)) {
      return location;
    }

    console.log("invalid seed for: " + location);
    location++;
  }
};
