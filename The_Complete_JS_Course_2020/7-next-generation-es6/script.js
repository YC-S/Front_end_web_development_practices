// lecture: let and const
// es5
var name = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// es6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);

function driversLicence(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(
    firstName +
      ', born in ' +
      yearOfBirth +
      ', is now officially allowed to drive a car.',
  );
}

driversLicence(true);
