import Constants from "./Constants";

let score = 0;
let playerPosition = [Constants.PLAYER.X, Constants.PLAYER.Y];
let mailPositon = [];
export default class Helper {
    static addScore = () => {
        score += 1;
    }
    static deductScore = () => {
        if (score >= 3) {
            score -= 3;
        } else {
            score = 0;
        }
    }
    static getScore = () => {
        return score;
    }
    static setPlayerPosition = (pos) => {
        playerPosition = pos;
    }
    static getPlayerPosition = () => {
        return playerPosition;
    }
    static setMailPositon = (pos) => {
        mailPosition = pos;
    }
    static getMailPositon = () => {
        return mailPosition;
    }
}