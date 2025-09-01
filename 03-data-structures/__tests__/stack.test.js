const Stack = require('../stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('starts empty', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    });

    test('pushes the top element', () => {
        stack.push(10);
        stack.push(20);
       expect(stack.peek()).toBe(20);
       expect(stack.size()).toBe(2);
    });

    test('pops the top element', () => {
        stack.push('a');
        stack.push('b');
        expect(stack.pop()).toBe('b');
        expect(stack.pop()).toBe('a');
        expect(stack.pop()).toBe(null);
    });

    test('claer reset the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.clear();
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });
    test('peek on empty stack returns numm', () => {
        expect(stack.peek()).toBe(null);
    });
});