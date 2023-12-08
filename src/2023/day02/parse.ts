export type Set = {
  red?: number;
  blue?: number;
  green?: number;
};
export type Game = {
  id: number;
  sets: Set[];
};

export const parsePartOne = (input: string) => {
  const lines = input.split("\n").map((d) => d.trim());

  const data = lines.map((line) => {
    const game: Game = { id: -1, sets: [] };
    const [gameStr, grabStr] = line.split(":");
    const id = +gameStr.replace("Game ", "");
    const setStr = grabStr.split(";");
    const sets: Set[] = setStr.map((set) => {
      const cubes = set.split(",");

      const ret = {};
      cubes
        .map((cube) => {
          if (cube.includes("red")) return { red: +cube.replace("red", "") };
          else if (cube.includes("green"))
            return { green: +cube.replace("green", "") };
          else if (cube.includes("blue"))
            return { blue: +cube.replace("blue", "") };
        })
        .map((cube) => Object.assign(ret, cube));

      return ret;
    });

    game.id = id;
    game.sets = sets;
    return game;
  });

  return data;
};

export const parsePartTwo = (input: string) => {
  return parsePartOne(input);
};
