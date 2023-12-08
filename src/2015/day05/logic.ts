import _ from "lodash";

const isNice1 = (input: string) =>
    (input.match(/[aeiou]/g) || []).length >= 3 &&
    (input.match(/(.)\1+/g) || []).length >= 1 &&
    (input.match(/ab|cd|pq|xy/g) || []).length === 0


const isNice2 = (input: string) =>
    (input.match(/(..).*\1/) || []).length >= 1 &&
    (input.match(/(.).\1/) || []).length >= 1;


export const countNice = (input: string[], part: 1 | 2) =>
    part === 1 ?
        input.filter(d => isNice1(d)).length :
        input.filter(d => isNice2(d)).length;