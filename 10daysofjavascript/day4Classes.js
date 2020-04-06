/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(length) {
    this.length = length;
  }
  perimeter() {
    let total = 0;
    this.length.forEach((element) => {
      total += element;
    });
    return total;
  }
}

let p = new Polygon([1, 2, 3, 4, 5, 6, 7]);
console.log(p.perimeter());
