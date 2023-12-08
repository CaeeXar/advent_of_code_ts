export const getOnes = (input: string[], i: number) => {
    let ones = 0;
    input.forEach(e => {
        if (e[i] == '1') ones++;
    });
    return ones;
};