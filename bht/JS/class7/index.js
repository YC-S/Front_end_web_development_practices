var fruit = "1";

switch (fruit) {
  case 1:
    console.log("banana");
    break;
  case "apple":
    console.log("apple");
    break;
  default:
    console.log("not sure");
}

console.log(typeof "a");
console.log(typeof true);
console.log("1" + 2 + 4);
console.log(1 + 2 + "4");
console.log("a" + " b");
console.log("a" - " b");

console.log(typeof 123);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
console.log(auto instanceof Object);

alphabets = ["a", "b", "c"];
console.log(alphabets instanceof Array);

console.log(undefined == null);
console.log(undefined === null);

console.log(null + 3);

var emp = [];
console.log(emp);

console.log(1 === 1.0);
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log(0.3);

console.log(0.2 + 0.3 === 0.1 + 0.4);
console.log(0.2 + 0.3);
console.log(0.1 + 0.4);
console.log(0.7 + 0.8 === 0.9 + 0.6);
console.log(0.1 + 0.2);

console.log(0.2 + 0.05);

console.log(0.25 * 0.5);

var x = "abc";
console.log(parseInt(x));

var x = ".3";
console.log(parseInt(x));

var str = "abc";

str[0] = "d";
console.log(str);

var john = {
  name: "John",
  dateOfBirth: 1992,
  calculateAge: function () {
    age = 2020 - this.dateOfBirth;
    console.log(age);
  },
};

john.calculateAge();
console.log(john);

var o = {
  p: function (x) {
    return 2 * x;
  },
};

console.log(o.p(1));

var obj = {};
obj.foo = 123;
console.log(obj);

var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2);

o2.b = 2;
console.log(o1);

console.log(Object.keys(john));
delete john.name;
delete john.dateOfBirth;
delete john.calculateAge;
console.log(john);
console.log(Object.keys(john));
console.log(delete john.name);

var o = { p: 1 };
console.log("p" in o);

var o = { a: 1, b: 2, c: 3 };
for (var i in o) {
  console.log(o[i]);
}

var arr = [
  1,
  "abc",
  john,
  [22, 2, 3],
  { a: 1 },
  function () {
    return false;
  },
];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
console.log(typeof arr[3]);
console.log(typeof arr[4]);
console.log(typeof arr[5]);
console.log(typeof arr[6]);
console.log(typeof arr[-1]);

var arr = [1, 2, 3];
console.log(arr[0]);

console.log(arr.length);

var arr = [];
console.log(arr.length);

arr[10] = "a";
console.log(arr[1]);

var arr = ["a", "b", "c"];
console.log("a" in arr);

var a = [, , ,];
a.forEach(function (x, i) {
  console.log(i + "," + x);
});

for (var i in a) {
  console.log(i);
}

var a = [undefined, undefined, undefined];
a.forEach(function (x, i) {
  console.log(i + "," + x);
});

var fruit = ["apple", "banana"];
fruit.unshift("cat");
console.log(fruit);
console.log(fruit.indexOf("cat"));

var range = fruit.splice(0, 1);
console.log(fruit);
console.log(range);

var fruit2 = fruit.slice();
console.log(fruit2);
console.log(fruit);

fruit2.push("ds");
console.log(fruit2);
console.log(fruit);

fruit.push("adasf");
console.log(fruit2);
console.log(fruit);

var a = {
  p: "asdf",
};

console.log(a);
var b = a;

var xx = [{ p: 123 }];
var yy = xx.slice();
xx.push({ x: 234 });
console.log(xx);
console.log(yy);
