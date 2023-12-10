import { parsePartOne, parsePartTwo } from "./parse";

const getButtonTimes = (
  recordTime: number,
  recordDistance: number
): number[] => {
  const buttonTimes: number[] = [];

  for (let time = 1; time < recordTime; time++) {
    const msLeft = recordTime - time;
    const mmMade = msLeft * time;

    if (mmMade > recordDistance) buttonTimes.push(time);
  }

  return buttonTimes;
};

export const solvePartOne = (input: string) => {
  const records = parsePartOne(input);
  const length = records.times.length;
  let sum = 1;

  for (let i = 0; i < length; i++) {
    const time = records.times[i];
    const distance = records.distances[i];
    const way2Win = getButtonTimes(time, distance);
    sum *= way2Win.length;
  }

  return sum;
};

export const solvePartTwo = (input: string) => {
  const record = parsePartTwo(input);
  const way2Win = getButtonTimes(record.times[0], record.distances[0]);
  return way2Win.length;
};
