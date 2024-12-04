class Car {
  constructor(brand) {
    this.type = 'Car';
    this.brand = brand;
  }

  drive() {
    console.log(`Driving a ${this.brand} car!`)
  }
}

class Bike {
  constructor(brand) {
    this.type = 'Bike';
    this.brand = brand;
  }

  ride() {
    console.log(`Riding a ${this.brand} bike!`)
  }
}

class MotorFactory {
  static create(type, brand) {
    const cars = {
      Car: new Car(brand),
      Bike: new Bike(brand),
    };
    
    if (type in cars) {
      return cars[type];
    }

    throw new Error('Unknown vehicle type')
  }
}

const car = MotorFactory.create('Car', 'Subaru')
car.drive();

const bike = MotorFactory.create('Bike', 'Yamaha');
bike.ride()
