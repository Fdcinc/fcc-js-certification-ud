class Vehicle {
  constructor(make) {
    this.make = make;
  }

  start() {
    return `${this.make} engine started.`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make);
    this.model = model;
  }

  drive() {
    return `${this.make} ${this.model} is driving.`;
  }
}

module.exports = { Vehicle, Car };
