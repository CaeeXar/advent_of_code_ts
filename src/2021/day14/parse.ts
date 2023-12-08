export type PolymerRules = {
    [key: string]: string,
}

export type PolymerTemplate = {
    polymer: string,
    rules: PolymerRules,
};

export const parsePartOne = (input: string): PolymerTemplate => {
    let pt: PolymerTemplate = { polymer: "", rules: {} },
        lines = input.split("\n");
    pt["polymer"] = lines[0];

    for (let i = 2; i < lines.length; i++) {
        let [left, right] = lines[i].split(" -> ");
        pt.rules[left] = right;
    }

    return pt;
}