import md5 from "md5";

export const mining = (input: string, zeros: number = 5) => {
    for (let i = 1; true; i++) {
        if (md5(input + i).substring(0, 5) === "0".padEnd(zeros, "0")) return i;
    }
};