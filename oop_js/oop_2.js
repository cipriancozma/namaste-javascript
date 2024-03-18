class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // getter
  get diameter() {
    return this._radius * 2;
  }

  // setter
  set radius(value) {
    if (value < 0) {
      throw new Error("Add a positive number");
    } else {
      this._radius = value;
    }
  }
}

const c = new Circle(2);
