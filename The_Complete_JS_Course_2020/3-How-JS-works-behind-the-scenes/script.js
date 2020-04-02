// Lecture: Hoisting;
// Lecture: Scoping

// First scoping example

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}

// Example to show the differece between execution stack and scope chain

// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();

//   function second() {
//     var c = "Hey!";
//     third();
//   }
// }

// function third() {
//   var d = "John";
//   console.log(a + b + c + d);
// }

calculateAge(1991);
function calculateAge(year) {
  console.log(2020 - year);
}

var retirement = function(year) {
  console.log(65 - (2020 - year));
};

retirement(1991);

console.log(age);
var age = 23;

function foo() {
  var age1 = 65;
  console.log(age1);
}
foo();

var a = "Hello";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}
///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calculateAge(1991);
function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}

var john = {
  name: "John",
  yearOfBirth: 1991,
  calculateAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
