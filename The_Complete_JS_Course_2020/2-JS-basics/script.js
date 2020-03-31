/*
 * @Author: Yuanchen
 * @Date: 2020-03-31 00:52:04
 * @Last Modified by: Yuanchen
 * @Last Modified time: 2020-03-31 00:59:14
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
