/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        var str = "";
        for (let j = 1; j < n - i; j++) {
            str = str + " ";
        }
        for (let k = 1; k <= 2 * i + 1; k++) {
            str = str + "#";
        }
        for (let l = 1; l <= i + 1; l++) {
            str = str + " ";
        }
        console.log(str);
    }
}
module.exports = pyramid;