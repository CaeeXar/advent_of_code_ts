export const count = (input: number[]) => {
    let counter = 0;
    for (var i = 0; i < input.length - 1; i++) {
        if (input[i] < input[i + 1]) counter++;
    }
    return counter;
};