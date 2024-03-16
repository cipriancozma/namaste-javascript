// Classes - templates for creating objects

class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    // this here refers to the instance of the class

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

let triangle_1 = new Triangle(2, 3);

console.log(triangle_1.getArea());

console.log(triangle_1 instanceof Triangle);

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b); // calls the parent constructor

    this.color = color;
  }

  getColor() {
    return `${this.color} is the colour`;
  }
}

const newColor = new ColorTriangle(3, 2, "red");

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  // static property is tied to the class not to the instance of the class
  static species = "felis catus";
  // if we are trying to instantate the class Cat, on all the instances we will have the same species
}

const blueCat = new Cat("Blue", "scotish");
console.log(blueCat.name); // Blue
console.log(blueCat.breed); // Scotish
console.log(blueCat.species); // undefined
console.log(Cat.species); // felis catus
