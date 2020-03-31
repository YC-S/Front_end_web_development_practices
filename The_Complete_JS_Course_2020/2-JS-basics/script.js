/*
 * @Author: Yuanchen
 * @Date: 2020-03-31 00:52:04
 * @Last Modified by: Yuanchen
 * @Last Modified time: 2020-03-31 14:27:29
 */

/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

console.log(lastName);
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
job = "Teacher";
console.log(job);

var $3year = 3;
console.log($3year);
*/

var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;

job = "teacher";
isMarried = false;

// Type Coercion

console.log(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation
age = "twenty eight";
job = "driver";
// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old" +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// var lastName = prompt("What is his last Name?");
// console.log(firstName + " " + lastName);

/*******************************
 * Basic operators
 */

var now, yearJohn, yearMark;
now = 2020;
ageJohn = 29;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);

// Operator Precedence
var now = 2020;
var yearJohn = 1991;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x += 1;
x++;
console.log(x);
x--;
console.log(x);

// if / else statements

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married.");
} else {
  console.log(firstName + " will hopefully marry soon.");
}

var isMarried = false;
if (isMarried) {
  console.log(firstName + " is married.");
} else {
  console.log(firstName + " will hopefully marry soon.");
}

// Boolean Logic

var fistName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age < 20) {
  console.log(firstName + " is a teenager.");
} else if (age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
}

// ternary operator and switch statements

var firstName = "John";
var age = 16;

age >= 18
  ? console.log(firstName + " drinks beer")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";

// switch statements

var job = "teacher";

switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs websites.");
    break;
  default:
    console.log(firstName + " do " + job + "'s work.");
}

var age = 30;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man");
}

// truthy
var height = false || 0 || NaN || undefined || null;

if (height) {
  console.log("variable is defined");
} else {
  console.log("variable has not been defined");
}

// equality operators
var height = 23;
if (height == "23") {
  console.log("The == operator does type coercion!");
}
