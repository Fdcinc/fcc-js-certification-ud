const { Vehicle, Car } = require('../inheritance');

test('Vehicle starts correctly', () => {
  const v = new Vehicle('Generic');
  expect(v.start()).toBe('Generic engine started.');
});

test('Car inherits from Vehicle and drives', () => {
  const c = new Car('Toyota', 'Corolla');
  expect(c.start()).toBe('Toyota engine started.');
  expect(c.drive()).toBe('Toyota Corolla is driving.');
});
