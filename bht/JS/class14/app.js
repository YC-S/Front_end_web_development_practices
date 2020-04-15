// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6]();
// a[0]();

// // TODO in closure

// // No hoisting

// // Spread Operator
// // (1)
// let c = [8, 9];
// let b = [7, ...c, 10];
// console.log(b);

// // (2)
// function print(d, e, f) {
//   console.log(d, e, f);
// }
// let z = [1, 2, 3];
// let z1 = [1, 2, 3, 4];
// print(...z);
// print(...z1);

// // (3)
// function print1(...z) {
//   console.log(z);
// }
// let z2 = [1, 2, 3, 4, 5, 6, 7, 8];
// print1(z2);

// // copy array
// // es5
// // concat

// // es6
// let g1 = [1, 2, 3];
// let g2 = [...g1];
// console.log(g2);

// // arrayLike
// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3,
// };

// var arr1 = [].slice.call(arrayLike);

// let arr2 = Array.from(arrayLike);

// console.log(arr1);
// console.log(arr2);

// // NodeList object

// // Symbol
// let s = Symbol();
// console.log(typeof s);

// // Set
// let set = new Set([
//   1,
//   2,
//   3,
//   4,
//   5,
//   4,
//   3,
//   2,
//   '1',
//   0,
//   '0',
//   undefined,
//   null,
//   false,
//   -1,
//   '-1',
//   'undefined',
//   'null',
//   ' ',
//   '    ',
//   NaN,
//   '',
//   'a',
//   'A',
//   +0,
//   -0,
//   Symbol(1),
//   // Symbol('1'),
//   // Symbol('1'),
//   // Symbol('1'),
//   NaN,
//   {},
//   {},
// ]);
// console.log(set);
// console.log(' ' == false);

// console.log(set.add('b'));
// console.log(set.size);

// const array3 = Array.from(set);
// console.log(array3);

// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());
// set.forEach((element) => {
//   console.log(element);
// });

// // Map
// const m = new Map();
// const o = { p: 'Hello, World' };
// var o1 = { p: 'Hello, World' };

// console.log(typeof o);
// console.log(typeof o1);

// m.set('edition', 6);
// m.set(262, 'standard');
// m.set(undefined, 'nah');
// m.set('262', 'unique');
// console.log(m);

// console.log(m.keys());
// console.log(m.values());
// console.log(m.get(262));

// console.log(m.has(262));
// m.forEach((element) => {
//   console.log(element);
// });

// var person = {
//   name: 'Jerry',
// };

// console.log(person.age);

// console.log(Reflect.has(person, 'name'));

// // class
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toString = function () {
//   return '(' + this.x + ',' + this.y + ')';
// };
// var p = new Point(1, 2);
// console.log(p);

// // es6
// class Point1 {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return '(' + this.x + ',' + this.y + ')';
//   }
// }
// var p1 = new Point1(1, 2);
// console.log(p1);

// make Iterator
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++] }
        : { done: true };
    },
  };
}

var it = makeIterator(['a', 'b', 'c']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

// arrow function
// this.a = 25;
// var b3 = 3;
// let arrowFunction = () => {
//   console.log('this.a in arrowFunction', this.a, b3);
// };
// arrowFunction();
