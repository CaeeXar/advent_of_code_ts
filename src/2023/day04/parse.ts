import _ from "lodash";

export type Card = {
  card: number;
  winning: number[];
  has: number[];
};

export const parsePartOne = (input: string) => {
  const lines = input.split("\n").map((d) => d.trim());

  const cards: Card[] = lines.map((line) => {
    const [cardStr, numberStr] = line.split(":");
    const cardId = +cardStr.replace("Card ", "");
    const [winningStr, hasStr] = numberStr.split("|");
    const winning = winningStr
      .trim()
      .split(" ")
      .map((n) => _.parseInt(n))
      .filter((n) => !isNaN(n));
    const has = hasStr
      .trim()
      .split(" ")
      .map((n) => _.parseInt(n))
      .filter((n) => !isNaN(n));

    return { card: cardId, winning, has };
  });

  return cards;
};

export const parsePartTwo = (input: string) => {};
