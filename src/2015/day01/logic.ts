export const findFloor = (input: string) => {
    let open = input.replace(/\)/g, "").length, close = input.replace(/\(/g, "").length;
    return open - close
};

export const findFloorAt = (input: string, at: number) => {
    let currentFloor = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "(") currentFloor++;
        else currentFloor--;
        if (currentFloor === at) return i + 1;
    }

    return input.length;
};