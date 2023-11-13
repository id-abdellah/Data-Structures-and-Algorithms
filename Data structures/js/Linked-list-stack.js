const LinkedList = require("./Singly - Linked list with tail");

class LinkedListStack {
    constructor() {
        this.items = new LinkedList();
    }

    push(value) {
        this.items.prepend(value)
    }

    pop() {
        return this.items.removeFromFront()
    }

    peek() {
        return this.items.head.value
    }

    isEmpty() {
        return this.items.size == 0;
    }

    getSize() {
        return this.items.size
    }

    print() {
        this.items.print()
    }
}