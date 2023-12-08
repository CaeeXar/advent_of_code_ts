import _ from "lodash";
import { PolymerRules, PolymerTemplate } from "./parse";

export type Pairs = { [key: string]: number };

const calculateQuantityDifference = (pairs: Pairs): number => {
    const _createPolymerSumMap = (pairs: Pairs) => {
        return _.reduce(pairs, (t: Pairs, v: number, k: string) => {
            t[k[0]] = (t[k[0]] || 0) + (v / 2); // middle ones count twice ==> /2
            t[k[1]] = (t[k[1]] || 0) + (v / 2); // middle ones count twice ==> /2
            return t;
        }, {});
    }
    // at the begin/end we subtracted 1 element once too much ==> round up
    let values = _.values(_createPolymerSumMap(pairs)).map(d => Math.ceil(d));
    return (_.max(values) || 0) - (_.min(values) || 0);
}

const runThroughOnce = (pairs: Pairs, rules: PolymerRules): Pairs => {
    return _.reduce(pairs, (t: Pairs, v: number, k: string) => {
        let middle = rules[k], newPair1 = k[0] + middle, newPair2 = middle + k[1]; // each element creates 2 new elements
        t[newPair1] = (t[newPair1] || 0) + (v || 0); // left-sided new element
        t[newPair2] = (t[newPair2] || 0) + (v || 0); // right-sided new element
        t[k] = (t[k] || 0) - (v || 0); // old elements - new elements
        return t;
    }, _.cloneDeep(pairs));
}

const initializePairs = (polymer: string): Pairs => {
    let pairs: Pairs = {};
    for (let i = 0; i < polymer.length - 1; i++) {
        let pair: string = polymer.substring(i, i + 2);
        pairs[pair] = (pairs[pair] || 0) + 1;
    }
    return pairs;
}

export const calculate = (pt: PolymerTemplate, steps: number = 10) => {
    let pairs: Pairs = initializePairs(pt.polymer);
    for (let i = 0; i < steps; i++) pairs = runThroughOnce(pairs, pt.rules);
    return calculateQuantityDifference(pairs);
}