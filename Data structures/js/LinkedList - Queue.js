const LinkedList = require("./LinkedList - Singly with Tail");

class LinkedListQueue {
    constructor() {
        this.items = new LinkedList();
    }

    enQueue(value) {
        this.items.append(value)
    }

    deQueue() {
        return this.items.removeFromFront()
    }

    peek() {
        return this.items.head.value
    }

    isEmpty() {
        return this.items.getSize() == 0;
    }

    getSize() {
        return this.items.getSize()
    }

    print() {
        this.items.print()
    }
}