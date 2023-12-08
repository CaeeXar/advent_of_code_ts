import { PlayerPositions } from "./parse";
import _ from "lodash";

const MAX_SCORE = 1000;


const getNewPosition = (score: number) => {
    while (score > 10) score -= 10;
    return score;
};

export const play = (players: PlayerPositions) => {
    let p1Pos = players.p1, p2Pos = players.p2,
        p1Score = 0, p2Score = 0,
        turn = "p1", die = 0, dieRolls = 0;

    while (p1Score < 1000 && p2Score < 1000) {
        die++;
        let d1 = die;
        if (die === 100) die = 0;
        die++;
        let d2 = die;
        if (die === 100) die = 0;
        die++;
        let d3 = die;
        if (die === 100) die = 0;

        if (turn === "p1") {
            p1Pos = getNewPosition(p1Pos + d1 + d2 + d3);
            p1Score += p1Pos;
            turn = "p2";
        } else {
            p2Pos = getNewPosition(p2Pos + d1 + d2 + d3);
            p2Score += p2Pos;
            turn = "p1";
        }

        dieRolls += 3;
    }

    return (p1Score > p2Score ? p2Score : p1Score) * dieRolls;
};