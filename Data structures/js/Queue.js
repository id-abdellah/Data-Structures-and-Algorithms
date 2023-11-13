class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    size() {
        return this.queue.length
    }
    print() {
        return this.queue.join(", ")
    }
}

/* Optimised Solution */

class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++
    }

    dequeue() {
        if (this.isEmpty()) return;
        let item = this.items[this.head];
        delete this.items[this.head];
        this.head++
        return item
    }

    size() {
        return this.tail - this.head
    }

    isEmpty() {
        return this.size() == 0
    }

    peek() {
        return this.items[this.head]
    }
}