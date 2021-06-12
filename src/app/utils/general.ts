/**
 * create a random number between 0 to N
 */
export function randomNumber(n: number): number {
    return Math.round(Math.random() * n);
}