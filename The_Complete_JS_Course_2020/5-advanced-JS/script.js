// Function constructor

let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
  };
};

let john = new Person("John", 1991, "Teacher");

john.calculateAge();

console.log(john);
