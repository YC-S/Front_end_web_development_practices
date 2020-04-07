/*
 * Q1: Question: How would you make this work?
 * add(2, 5);  // 7
 * add(2)(5); // 7
 */

// add(2, 5); // 7
function add(a, b) {
  console.log(a + b);
}
add(2, 5);
// add(2)(5); // 7
let add1 = function (x) {
  return function (y) {
    return x + y;
  };
};
console.log(add1(2)(5));

/*
 * Q2: Array filter Array
 * var a = [1, 2, 3, 4];
 * var b = [3, 4];
 *
 * results: return filter = [1, 2]
 */

function filter(a, b) {
  let c = [];
  a.forEach((element) => {
    if (!b.includes(element)) {
      c.push(element);
    }
  });
  return c;
}
let a = [1, 2, 3, 4];
let b = [3, 4];
console.log(filter(a, b));

/*
 * Q3: Count string
 * string = "aaabbaaaa"
 * result a3b2a4
 */

function countString(str) {
  let res = "";
  if (str == null || str.length == 0) {
    return str;
  } else {
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        res += str[i - 1];
        res += count;
        count = 1;
      }
    }
    res += str[str.length - 1];
    res += count;
    return res;
  }
}

console.log(countString("aaabbaaaa"));

/*
 * Q4: group count object array
 * var list = [
 *   {user:"mike", age:19},
 *   {user:"mike", age:21},
 *   {user:"mike", age:19},
 *   {user:"Dave", age:31},
 *   {user:"Tom", age:18},
 *   {user:"Tom", age:18},
 * ];
 */

function countObject(list) {
  let count = 0;
  let set = new Set();
  list.forEach((element) => {
    set.add(element.user);
  });
  return set.size;
}

let list = [
  { user: "mike", age: 19 },
  { user: "mike", age: 21 },
  { user: "mike", age: 19 },
  { user: "Dave", age: 31 },
  { user: "Tom", age: 18 },
  { user: "Tom", age: 18 },
];

console.log(countObject(list));

/*
 * Q5 Delete the duplicate array
 */

function deleteDuplicate(list) {
  let set = new Set();
  let res = [];
  list.forEach((element) => {
    let tmp = element.user;
    if (!set.has(tmp)) {
      set.add(tmp);
      res.push(tmp);
    }
  });
  return res;
}

let list1 = [
  { user: "mike" },
  { user: "mike" },
  { user: "mike" },
  { user: "Dave" },
  { user: "Tom" },
  { user: "Tom" },
];

console.log(deleteDuplicate(list1));

/*
 * Q6 Inheritance in js
 */

/*
 * Q7 Put ten <li> tag in one uses html, css
 */

/*
 * Q8 Write a function that will loop through a list of integers and print
 * the index of each element after a 2 second delay.
 */

let list2 = [1, 2, 3, 4, 5];
// function timeout(list) {
//   setTimeout(function () {
//     for (let i = 0; i < list.length; i++) {
//       console.log(i);
//       timeout();
//     }
//   }, 2000);
// }
let counter = 0;
function start(list2) {
  if (counter < 10) {
    setTimeout(function () {
      console.log(counter);
      counter++;
      start(counter);
    }, 2000);
  }
}
start(list2);
