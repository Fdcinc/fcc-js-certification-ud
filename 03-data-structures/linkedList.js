class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    find(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }

    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while (curr.next && curr.next.value !== value) {
            curr = curr.next;
        }

        if (curr.next) {
            curr.next = curr.next.next;
        }
    }

    toArray() {
        const result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        return result;
    }
}

module.exports = LinkedList;