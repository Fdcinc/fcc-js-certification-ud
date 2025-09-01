const Animal = require('../class-syntax');

test('Animal can speak', () => {
    const dog = new Animal('Dog');
    expect(dog.speak()).toBe('Dog makes a noise.');
});