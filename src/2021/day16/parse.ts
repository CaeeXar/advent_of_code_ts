export const hex2bin = (hex: string) => {
    let binary = "";

    for (let i = 0; i < hex.length; i++) {
        let hexDigit = hex[i];
        binary += (parseInt(hexDigit, 16).toString(2).padStart(4, '0'));
    }

    return binary;
}

export const bin2dec = (bin: string) => {
    return parseInt(bin, 2).toString(10);
}

export const parsePartOne = (input: string) => {
    return hex2bin(input);
};