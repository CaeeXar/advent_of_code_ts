export const parsePartOne = (input: string) => {
    let newString = input.split("\n").map(d => (d.split("->")[1] + " = " + d.split("->")[0]).trim()).join("\n");
    newString = newString
        .replace(/( AND )/g, "&")
        .replace(/( OR )/g, "|")
        .replace(/( LSHIFT )/g, "<<")
        .replace(/( RSHIFT )/g, ">>")
        .replace(/( NOT )/g, " 65536 + ~")
        .replace(/do/g, "doo")
        .replace(/if/g, "iff")
        .replace(/in/g, "inn");

    newString += '\n\n';
    let vars = newString.split("\n").map(d => d.split("=")[0].trim()).filter(d => d.length > 0),
        values = vars.map(v => 'console.log( "' + v + ': " + (eval("' + v + '")) )');

    return newString + values.join("\n");
};

export const parsePartTwo = (input: string) => { };