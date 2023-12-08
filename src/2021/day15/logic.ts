import _ from "lodash";
import { RiskLevel } from "./parse";
const dijkstra = require("dijkstrajs");

type Graph = { [key: string]: { [key: string]: number } };
let len: number;

const getKey = (n: number): string => {
    return (_.range(0, Math.log10(len), 0).join('') + n).slice(-1 * (Math.ceil(Math.log10(len))));
}

const createGraph = (rl: RiskLevel): Graph => {
    let graph: Graph = {};
    for (let y = 0; y < rl.length; y++) {
        for (let x = 0; x < rl[y].length; x++) {
            let pos = getKey(x) + "" + getKey(y);
            if (y > 0)
                graph[pos] = { ...graph[pos], [getKey(x) + "" + getKey(y - 1)]: rl[y - 1][x] };
            if (y < rl.length - 1)
                graph[pos] = { ...graph[pos], [getKey(x) + "" + getKey(y + 1)]: rl[y + 1][x] };
            if (x > 0)
                graph[pos] = { ...graph[pos], [getKey(x - 1) + "" + getKey(y)]: rl[y][x - 1] };
            if (x < rl[y].length - 1)
                graph[pos] = { ...graph[pos], [getKey(x + 1) + "" + getKey(y)]: rl[y][x + 1] };
        }
    }
    return graph;
};

const findPath = (graph: Graph, start: string, end: string): string[] => {
    return dijkstra.find_path(graph, start, end);
}

export const calculateDistance = (rl: RiskLevel): number => {
    len = rl.length;
    let graph: Graph = createGraph(rl), shortestPath: string[] = findPath(graph, getKey(0) + getKey(0), (len - 1) + "" + (len - 1));
    return _.reduce(shortestPath, (t, v, i) => t + (graph[shortestPath[i]][shortestPath[i + 1]] || 0), 0);
};