class Car {
  constructor() {
    this.car = {}
  }

  withWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  withColor(color) {
    this.car.color = color;
    return this;
  }

  withEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  withFeature(feature) {
    if (!this.car.features) {
      this.car.features = []
    }

    this.car.features.push(feature);

    return this;
  }



  build() {
    return this.car;
  }
}

const car = new Car()
  .withColor('blue')
  .withWheels(4) 
  .withEngine('V8')
  .withFeature('Sunroof')
  .withFeature('Heated seats')
  .withFeature('Eye Sight')
  .build()

console.log({ car })
