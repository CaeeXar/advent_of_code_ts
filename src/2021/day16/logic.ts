import _ from "lodash";
import { bin2dec } from "./parse";

type LiteralPacket = { versionId: string, typeId: string, literal: string, };
type OperatorPacket = {
    versionId: string,
    typeId: string,
    lengthTypeId: string,
    length: string,
    packets: any[],
};

const createLiteralPacket = (binary: string) => {
    const countGroups = (s: string): number => {
        if (s[0] === '0') return 1;
        return countGroups(s.substring(5)) + 1;
    }
    let lp: LiteralPacket = { versionId: binary.substring(0, 3), typeId: "100", literal: "" };
    binary = binary.substring(6);
    let groups = countGroups(binary);

    for (let i = 0; i < groups; i++) {
        lp.literal += binary.substring(1, 5);
        binary = binary.substring(5);
    }

    return { binary, packet: lp };
};

const createOperatorPacket = (binary: string) => {
    let op: OperatorPacket = {
        versionId: binary.substring(0, 3),
        typeId: binary.substring(3, 6),
        lengthTypeId: binary.substring(6, 7),
        length: binary.substring(6, 7) === '0' ? binary.substring(7, 22) : binary.substring(7, 18),
        packets: [],
    }, len = parseInt(bin2dec(op.length));
    binary = binary.substring(7 + (op.lengthTypeId === '0' ? 15 : 11));

    if (op.lengthTypeId === '0') {
        let count = 0;
        while (count < len) {
            let data;
            if (binary.substring(3, 6) === '100') data = createLiteralPacket(binary);
            else data = createOperatorPacket(binary);
            op.packets.push(data.packet);
            count += (Math.abs(binary.length - data.binary.length));
            binary = data.binary;
        }
    } else {
        for (let i = 0; i < len; i++) {
            let data;
            if (binary.substring(3, 6) === '100') data = createLiteralPacket(binary);
            else data = createOperatorPacket(binary);
            op.packets.push(data.packet);
            binary = data.binary;
        }
    }

    return { binary, packet: op };
};

const createPackets = (binary: string) => {
    let lps = [], ops: OperatorPacket[] = [];

    while (!binary.match(/^0*$/)) {
        let p;

        if (binary.substring(3, 6) === '100') {
            p = createLiteralPacket(binary);
            lps.push(p.packet);
        } else {
            p = createOperatorPacket(binary);
            ops.push(p.packet);
        }

        binary = ((p || {}).binary);
    }

    return [lps, ops];
};

const _sumBy = (key: "versionId", packet: any): number => {
    if (packet.typeId === '100') {
        return parseInt(bin2dec(packet[key]));
    }

    return parseInt(bin2dec(packet[key])) + _.reduce(packet.packets, (total: number, curr, index) => {
        total += _sumBy(key, curr);
        return total;
    }, 0);
};

export const sumBy = (binary: string) => {
    let x = createPackets(binary),
        lps: any[] = x[0],
        ops: any[] = x[1],
        sum = 0;

    lps.forEach((p: LiteralPacket) => {
        sum += parseInt(bin2dec(p["versionId"]));
    });

    sum += _.sum(ops.map(d => _sumBy("versionId", d)));

    return sum;
};

export const calculateValue = (binary: string) => {
    return 0;
};