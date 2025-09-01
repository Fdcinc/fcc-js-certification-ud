const LinkedList = require('../linkedList');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });
  
    test('insert and toArray', () => {
        list.insert(1);
        list.insert(2);
        expect(list.toArray()).toEqual([1, 2]);
    });

    test('find works correctly', () => {
        list.insert(10);
        list.insert(20);
        expect(list.find(20)).toBe(true);
        expect(list.find(30)).toBe(false);
    });

    test('delete removes correct node', () => {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.delete(2);
        expect(list.toArray()).toEqual([1, 3]);
    });

    test('delete head node', () => {
        list.insert(1);
        list.insert(2);
        list.delete(1);
        expect(list.toArray()).toEqual([2]);
    });
});