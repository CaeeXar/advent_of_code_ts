export type Manual = {
    coords: number[][],
    folds: any[][]
};

export const parsePartOne = (input: string): Manual => {
    let lines = input.split("\n"), idx = lines.findIndex(d => d === '');

    return {
        coords: lines
            .slice(0, idx)
            .map(d => d
                .split(",")
                .map(d => +d)),
        folds: lines
            .slice(idx + 1)
            .map(d => d
                .split("fold along ")[1]
                .split("=")
                .map(d => !isNaN(parseInt(d)) ? +d : d))
    };
}