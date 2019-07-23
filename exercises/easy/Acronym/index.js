/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input) {
    var words, acronym, nextWord;

    words = s.split();
    acronym = "";
    index = 0
    while (index < words.length) {
        nextWord = words[index];
        acronym = acronym + nextWord.charAt(0);
        index = index + 1;
    }
    return acronym
}

module.exports = parse;