class Circle {
  // public -> can be accessed from outside the class
  // can be accessed via the instance
  circleName = "CC";

  #radius;
  constructor(radius) {
    // private
    this.#radius = radius;
  }

  // getter
  get diameter() {
    return this.#radius * 2;
  }

  // setter
  //   set radius(value) {
  //     if (value < 0) {
  //       throw new Error("Add a positive number");
  //     } else {
  //       this.#radius = value;
  //     }
  //   }

  // private setter
  #setRadius(value) {
    if (value < 0) {
      throw new Error("Add a positive number");
    } else {
      this.#radius = value;
    }
  }
}

const c = new Circle(2);
