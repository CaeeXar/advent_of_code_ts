export type Records = {
  times: number[];
  distances: number[];
};

export const parsePartOne = (input: string): Records => {
  const lines = input.split("\n").map((line) => line.trim());
  const times = lines[0]
    .replace("Time:", "")
    .split(" ")
    .filter((s) => s.length > 0)
    .map((n) => +n);
  const distances = lines[1]
    .replace("Distance:", "")
    .split(" ")
    .filter((s) => s.length > 0)
    .map((n) => +n);

  return { times, distances };
};

export const parsePartTwo = (input: string) => {
  const lines = input.split("\n").map((line) => line.trim());
  const time = lines[0]
    .replace("Time:", "")
    .split(" ")
    // .filter((s) => s.length > 0)
    .join("");
  const distance = lines[1]
    .replace("Distance:", "")
    .split(" ")
    .join("");

  return { times: [+time], distances: [+distance] };
};
