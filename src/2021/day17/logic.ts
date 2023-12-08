import _ from "lodash";

export type Position = { x: number, y: number };

const makeStep = (probePos: Position, velX: number, velY: number) => {
    let newPos = { ...probePos, x: probePos.x + velX, y: probePos.y + velY };
    let newVelX = (velX === 0) ? 0 : velX - 1, newVelY = velY - 1;
    return { probePositions: newPos, velX: newVelX, velY: newVelY, height: newPos.y };
}

const inTargetArea = (probePos: Position, targetArea: Position[]) => {
    return probePos.x >= targetArea[0].x && probePos.y >= targetArea[0].y &&
        probePos.x <= targetArea[1].x && probePos.y <= targetArea[1].y;
};

const overshot = (probePos: Position, targetArea: Position[]) => {
    return probePos.x > targetArea[1].x || probePos.y < targetArea[0].y;
};

const checkAt = (probePos: Position, initVelX: number, initVelY: number, boundary: Position[]) => {
    let pos: Position = _.clone(probePos), velX: number = initVelX, velY: number = initVelY, maxHeight: number = 0;

    while (true) {
        let newPos = makeStep(pos, velX, velY);
        pos = newPos.probePositions;
        velX = newPos.velX;
        velY = newPos.velY;
        if (maxHeight < pos.y) maxHeight = pos.y;
        if (inTargetArea(pos, boundary)) return { status: true, height: maxHeight };
        if (overshot(pos, boundary)) return { status: false, height: null };
    }
};

export const run = (targetArea: Position[]) => {
    let probePos: Position = { x: 0, y: 0 },
        maxX: number = Math.max(Math.abs(targetArea[0].x), Math.abs(targetArea[1].x)),
        maxY: number = Math.max(Math.abs(targetArea[0].y), Math.abs(targetArea[1].y)),
        heights = [], initVelocities = [];

    for (let y = -maxY; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            let check = checkAt({ ...probePos }, x, y, targetArea);
            if (check.status) {
                initVelocities.push([x, y]);
                heights.push(check.height);
            }
        }
    }

    return { height: _.max(heights), initialVelocityValues: initVelocities.length };
};