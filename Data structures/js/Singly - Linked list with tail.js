class LinkedList_Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }
    // O(1)
    prepend(value) {
        const newNode = new LinkedList_Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.size++
        }
    }
    // O(1)
    append(value) {
        const newNode = new LinkedList_Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++
        }
    }

    removeFromFront() {
        if (this.isEmpty()) return console.error("List is empty :)");
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) return console.error("List is emty :)");

        const value = this.tail.value;

        if (this.getSize() == 1) {
            this.tail = null;
            this.head = null;
        } else {
            let previous = this.head;
            while (previous.next.value != this.tail.value) {
                previous = previous.next;
            }
            previous.next = null;
            this.tail = previous;

        }
        this.size--;
        return value
    }

    print() {
        if (this.isEmpty()) {
            console.error("List is empty")
        } else {
            let headNode = this.head;
            let data = [];
            while (headNode) {
                data.push(headNode.value);
                headNode = headNode.next;
            }
            console.log(data)
        }
    }
};

module.exports = LinkedList;