/**
 * @method getRandomInt
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} random generated number
 * @description generate random interger between min and max
 */
export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1 - min + 1) + min + 1);
}
