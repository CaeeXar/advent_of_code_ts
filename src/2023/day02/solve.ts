import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
  const data = parsePartOne(input);
  let sum = 0;

  data.forEach((game) => {
    if (
      !game.sets.some(
        (set) =>
          (set?.red ?? 0) > 12 ||
          (set?.green ?? 0) > 13 ||
          (set?.blue ?? 0) > 14
      )
    ) {
      sum += game.id;
    }
  });

  return sum;
};

export const solvePartTwo = (input: string) => {
  const data = parsePartOne(input);
  let sum = 0;

  data.forEach((game) => {
    const red = Math.max(...game.sets.map((set) => set.red ?? 0));
    const green = Math.max(...game.sets.map((set) => set.green ?? 0));
    const blue = Math.max(...game.sets.map((set) => set.blue ?? 0));
    sum += red * green * blue;
  });

  return sum;
};
