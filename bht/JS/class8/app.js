// method 1
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

// method 2

var minus = function (a, b) {
  return a - b;
};
console.log(minus(3, 2));
console.log(typeof minus);

// method 3
let multiply = new Function("x", "y", "return (x*y)");
console.log(multiply(2, 3));

function fib(num) {
  if (num == 1) {
    return 1;
  } else if (num == 0) {
    return 0;
  } else {
    return fib(num - 2) + fib(num - 1);
  }
}

console.log(fib(6));

function f(a, b) {
  console.log(a + b);
}

console.log(f.length);
console.log(f.toString());

function foo(a, b) {
  return a;
}

console.log(foo(undefined, 1));
console.log(foo);

// pass by reference
let obj = { p: 1 };
function f(o) {
  o.p = 2;
}
f(obj);
console.log(obj.p);

let a = 1;
function f(p) {
  process[p] = 2;
}
f("a");
console.log(a);

function f(b, b, b) {
  return b;
}

f(1, 2, 3);
console.log(f(1, 2, 3));

// Closure
// global variables
let n = 999;
function f1() {
  console.log(n);
}
f1();

// local variable
// function f2() {
//   let m = 999;
// }
// console.log(m);

function f1() {
  let n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

let result = f1();

console.log(f1());
console.log(f1()());

// Immediately invoked function expression
(function add(a, b) {
  console.log(a + b);
})(2, 3);

// type conversion
console.log("5" + []);
console.log("5" + {});
console.log("5" + 1);
console.log("5" + true);
console.log("5" + false);
console.log("5" + function () {});
console.log("5" + undefined);
console.log("5" + null);

console.log("5" - "2");
console.log("5" * "2");
console.log(true - 1);
console.log(false - 1);

arr = [1, 2, 3];
console.log(arr[-1]);

// question
// call me function normal way

let callMe = function (s) {
  console.log(s);
  console.log(s);
  console.log(s);
};

callMe("callMe1");

// call me function without assignment

function callMe2(s) {
  console.log(s);
  console.log(s);
  console.log(s);
}

// call me function anonymous function
callMe2("callMe2");

(function callMe3(s) {
  console.log(s);
  console.log(s);
  console.log(s);
})("callMe3");

// Object Oriented Programming
// ES5
let Vehicle = function () {
  this.price = 1000;
};

let v = new Vehicle();
console.log(v);
// console.log(v.price);
console.log(v.price);

// prototype
function Fruit(type) {
  this.type = type;
  this.color = "unknown";
}

Fruit.prototype.chinese = "水果";
let banana = new Fruit("banana");
console.log(banana.chinese);
console.log(banana);

let melon = new Fruit("melon");

Fruit.prototype.hello = function (type) {
  return "Hello " + this.type;
};

Fruit.prototype.getInformation = function () {
  return "This " + this.type + " is " + this.color + ".";
};

let lime = new Fruit("Lime");
console.log(lime.getInformation());

lime.color = "green";
console.log(lime.getInformation());

let apple = new Fruit("Apple");
console.log(apple.getInformation());

function Animal(name) {
  this.name = name;
}

Animal.prototype.color = "Brown";

let cat1 = new Animal("Tom1");
let cat2 = new Animal("Tom2");
console.log(cat1.color);
console.log(cat2.color);

function p() {}
console.log(p.prototype.constructor === p);

console.log(p.prototype);
console.log(p.prototype.constructor);
console.log(p);

function c() {}
c.prototype = new p();
console.log(c);
console.log(p);
let o1 = new c();
let o2 = new p();
console.log(o1 instanceof c);
console.log(o1 instanceof p);
console.log(o2 instanceof c);
console.log(o2 instanceof p);

console.log(null instanceof Object);
let s = "hello";
console.log(s instanceof String);

// getPrototypeOf();
// setPrototypeOf();
let d = { x: 1, y: 2, c: 3, null: null };
let e = Object.setPrototypeOf({}, d);
console.log(e.x);

// Object.create();

// Object.prototype.isPrototypeOf()

console.log(Object.getOwnPropertyNames(d));
console.log(Object.keys(d));

let x = ["a", "b"];
console.log(Object.getOwnPropertyNames(x));
console.log(Object.keys(x));

console.log(Date.hasOwnProperty("length"));
console.log(Date.hasOwnProperty("toString"));
