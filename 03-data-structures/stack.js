class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Remove the top element
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    // View the top element without removing
    peek() {
        return this.items.length === 0 ? null : this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get stack size
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

module.exports = Stack;