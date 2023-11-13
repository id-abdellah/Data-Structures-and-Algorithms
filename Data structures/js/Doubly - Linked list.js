class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    isEmpty() {
        return this.size == 0;
    };

    getSize() {
        return this.size;
    };

    prepend(value) {
        const newNode = new node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            this.size++
        };
    };

    append(value) {
        const newNode = new node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            this.size++
        };
    };

    removeFromFront() {
        if (this.isEmpty()) return null;
        if (this.getSize() == 1) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            this.size--;
            return value;
        };
        const value = this.head.value;
        this.head = this.head.next;
        this.head.previous = null;
        this.size--;
        return value;
    };

    removeFromEnd() {
        if (this.isEmpty()) return null;
        let value = this.tail.value;
        if (this.getSize() == 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return value;
        };
        let previousNodeOfTail = this.tail.previous;
        previousNodeOfTail.next = null;
        this.tail = previousNodeOfTail;
        this.size--;
        return value;
    };

    insert(value, index) {
        if (index < 0 || index > this.getSize() - 1) return console.error("Invalid index");
        if (index == 0) {
            this.prepend(value);
            return;
        }

        const newNode = new node(value);
        let previousNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            previousNode = previousNode.next;
        }
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.size++;
    }

    print() {
        if (this.isEmpty()) return "List is empty";
        let headNode = this.head;
        let data = [];
        while (headNode) {
            data.push(headNode.value)
            headNode = headNode.next;
        };
        return data;
    };

    printReverse() {
        if (this.isEmpty()) return null;
        let tailNode = this.tail;
        let dataReverse = [];
        while (tailNode) {
            dataReverse.push(tailNode.value)
            tailNode = tailNode.previous;
        };
        return dataReverse;
    };
};