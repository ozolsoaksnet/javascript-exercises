/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
    count(str) {
        function count(str, substr) {
            str = str.split(" ");
            return str.filter(a => a.toLowerCase() === substr).length;
            console.log(substr);
        }
    }
}
module.exports = Words;