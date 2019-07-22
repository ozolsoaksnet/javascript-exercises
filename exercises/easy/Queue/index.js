/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
    constructor() {
        this.numbers = []
    }
    numbers = []

    add(number) {
        this.numbers.push(number)
    }
    remove() {
        return this.numbers.splice(0)

    }
}

module.exports = Queue;