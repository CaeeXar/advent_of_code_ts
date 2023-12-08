import _ from "lodash";
import { parsePartOne } from "./parse";

const createMap = (length: number): { [key: string]: number } => {
  const map = {};

  for (let i = 1; i <= length; i++) {
    Object.assign(map, { [i]: 1 });
  }

  return map;
};

export const solvePartOne = (input: string) => {
  const cards = parsePartOne(input);
  return _.sum(
    cards.map((card) => {
      const rightGuesses = card.has.filter((guess) =>
        card.winning.includes(guess)
      );
      if (rightGuesses.length > 0) return Math.pow(2, rightGuesses.length - 1);
      return 0;
    })
  );
};

export const solvePartTwo = (input: string) => {
  const cards = parsePartOne(input);
  const map = createMap(cards.length);

  cards.forEach((card) => {
    const rightGuesses = card.has.filter((guess) =>
      card.winning.includes(guess)
    ).length;

    for (let i = card.card + 1; i <= card.card + rightGuesses; i++) {
      map[i] = map[card.card] + map[i];
    }
  });

  return _.sum(Object.values(map));
};
