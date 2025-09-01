const Queue = require('../queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue and peek', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue works in FIFO order', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe(null);
  });

  test('isEmpty and size', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(5);
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('clear empties the queue', () => {
    queue.enqueue(1);
    queue.clear();
    expect(queue.size()).toBe(0);
  });
});
