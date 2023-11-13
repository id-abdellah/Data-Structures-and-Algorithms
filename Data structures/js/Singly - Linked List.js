class LinkedList_Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size
    }

    // O(1)
    prepend(value) {
        const newNode = new LinkedList_Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.size++
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.size++
        }
    }

    // O(n)
    append(value) {
        const newNode = new LinkedList_Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let previous = this.head;
            while (previous.next) {
                previous = previous.next;
            }
            previous.next = newNode;
        }
        this.size++;
    }

    insert(value, index) {
        if (index > this.getSize() || index < 0) {
            return console.error("Invalid index")
        }
        if (index == 0) {
            this.prepend(value);
            return;
        }
        const newNode = new LinkedList_Node(value);

        let previous = this.head;

        for (let i = 0; i < index - 1; i++) {
            previous = previous.next;
        }

        newNode.next = previous.next;
        previous.next = newNode;

        this.size++

    }

    removeFrom(index) {
        if (index < 0 || index >= this.getSize()) {
            return console.error("Invalid index")
        }
        let removedNode;
        if (index == 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let previous = this.head;
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeByValue(value) {
        if (this.isEmpty()) {
            return console.error("Linked List is empty")
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let removedNode;
            let previous = this.head;
            while (previous.next.value != value) {
                previous = previous.next;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
            this.size--;
            return removedNode.value;
        }
    }

    search(value) {
        if (this.isEmpty()) return -1;

        let i = 0;
        let current = this.head;
        while (current) {
            if (current.value == value) {
                return i
            }
            current = current.next;
            i++;
        }
        return -1
    }

    reverse() {
        let previous = null;
        let current = this.head;

        while (current != null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    print() {
        if (this.isEmpty()) {
            console.error("Linked list is empty")
        } else {
            let current = this.head;
            let lisValues = [];
            while (current) {
                lisValues.push(current.value)
                current = current.next;
            }
            return lisValues
        }
    }
}