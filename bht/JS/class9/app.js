let a = {
  name: "jerry",
  describe: function () {
    return "name: " + this.name;
  },
};

let b = {
  name: "tom",
};

b.describe = a.describe;
console.log(b.describe);

function f() {
  return this;
}

console.log(f());

let Obj = function (p) {
  this.p = p;
};

let obj = { n: 123 };

let f1 = function () {
  return this;
};

console.log(f1.call());
console.log(f1.call(obj));

let counter = {
  count: 0,
  inc: function () {
    this.count++;
  },
};

let func = counter.inc.bind(counter);
func();
console.log(counter.count);
// console.log(count);

let x = 3;

let foo = {
  x: 2,
  baz: {
    x: 1,
    bar: function () {
      return this.x;
    },
  },
};

console.log(foo.baz.bar());

let arr = [1, 2, 3, 4];
console.log(arr.join(""));
console.log(arr.join("|"));
console.log(arr.join(" "));

console.log(["hello"].concat(["world"], ["!"]));

let arr1 = ["a", "b", "c", "d"];
console.log(arr1.slice(0));
console.log(arr1.slice(1));
console.log(arr1.slice(1, 2));
console.log(arr1.slice(2, 6));
console.log(arr1.slice(-1));
console.log(arr1.slice(-2, -1));
console.log(arr1.slice(-2));

console.log(arr1.splice(2, 2));
console.log(arr1);

let arr2 = ["a", "b", "c", "d", "e", "f"];
console.log(arr2.splice(4, 2, 1, 2));
console.log(arr2);

let arr3 = ["a", "b", "c", "d", "e", "f"];
arr3.filter(function (element) {
  return element > 3;
});

let s1 = "abc";
let s2 = new String("abc");

console.log(typeof s1);
console.log(typeof s2);

console.log(s1 == s2);
console.log(s1 === s2);

console.log(s2.valueOf());
console.log(s1.valueOf());

console.log("abc".length);
console.log("abc".charAt(1));
console.log("abc".charAt(1));

let s3 = "abc";
let s4 = "def";
console.log(s3.concat(s4));

console.log("hello world".indexOf("o"));
console.log("hello world".lastIndexOf("o"));
console.log("hello world".lastIndexOf("o", 6));
console.log("hello world".indexOf("o", 6));

// replace()
console.log(new Date() + 0);
let d1 = new Date(1970, 1, 1);
let d2 = new Date();
console.log(d2 - d1);

console.log(Date.now());
