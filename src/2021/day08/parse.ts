export const parsePartTwo = (input: string): { before: string[], after: string[] } => {
    let lines = input.split("\n"), before: string[] = [], after: string[] = [];

    lines.forEach(line => {
        let temp = line.split(" | ");
        before.push(temp[0]);
        after.push(temp[1]);
    });

    return { before, after };
};