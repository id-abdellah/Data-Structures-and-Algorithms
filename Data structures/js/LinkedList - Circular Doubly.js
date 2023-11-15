// circular singly linked list

class listNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class CircularDoublyLinkedList {
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

    prepend(value) {
        const newListNode = new listNode(value);

        if (this.isEmpty()) {
            this.head = newListNode;
            this.tail = newListNode;
            this.size++;
        } else {
            newListNode.next = this.head;
            this.head.previous = newListNode;
            this.head = newListNode;

            this.head.previous = this.tail;
            this.tail.next = this.head;
            this.size++;
        }
    }

    append(value) {
        const newListNode = new listNode(value);
        if (this.isEmpty()) {
            this.head = newListNode;
            this.tail = newListNode;
            this.size++;
        } else {
            newListNode.previous = this.tail;
            this.tail.next = newListNode;
            this.tail = newListNode;

            this.tail.next = this.head;
            this.head.previous = this.tail;
            this.size++;
        }
    }

    removeFromFront() {
        if (this.isEmpty()) return console.error("List is empty")

        if (this.getSize() == 1) {
            const value = this.head.value;
            this.tail = null;
            this.head = null;
            this.size--;
            return value;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.head.previous = this.tail;
        this.tail.next = this.head;
        this.size--;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) return console.log("List is empty")

        if (this.getSize() == 1) {
            const value = this.head.value;
            this.tail = null;
            this.head = null;
            this.size--;
            return value;
        }

        const value = this.tail.value;
        this.tail = this.tail.previous;
        this.tail.next = this.head;
        this.head.prepend = this.tail;
        this.size--;
        return value
    }

    findIndexByValue(value) {
        if (this.isEmpty()) return console.error("List is empty");

        let i = 0;
        let current = this.head;
        while (i <= this.getSize() - 1) {
            if (current.value == value) {
                return i
            }
            current = current.next;
            i++;
        }
        return -1
    }

    findValueByIndex(index) {
        if (this.isEmpty()) return console.error("List is empty");

        let listData = this.print();

        for (let i = 0; i < listData.length; i++) {
            if (this.findIndexByValue(listData[i]) == index) {
                return listData[i]
            }
        }

        return -1
    }

    print() {
        if (this.isEmpty()) return console.error("List is empty")
        let current = this.head;
        let i = 1;
        let data = [];
        while (i <= this.getSize()) {
            data.push(current.value);
            current = current.next;
            i++;
        }
        return data;
    }
}