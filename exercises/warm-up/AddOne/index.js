/**
 * Add One
 *
 * Array of numbers are passed in the function, your task is to increment each number by one. But without modifying the passed array values.
 */

function addOne(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}

module.exports = addOne;
