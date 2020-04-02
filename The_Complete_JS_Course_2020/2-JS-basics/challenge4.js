// var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn;
// massMark = 75;
// massJohn = 80;
// heightMark = 1.8;
// heightJohn = 1.8;
// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);

// var MarkHigherBMIThanJohn = BMIMark > BMIJohn;

// console.log("Is Mark's BMI higher than John's? ", MarkHigherBMIThanJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's");
// } else {
//   console.log("John's BMI is higher than Mark's");
// }

var Mark = {
  mass: 75,
  height: 1.8,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
  }
};

var John = {
  mass: 80,
  height: 1.9,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
  }
};

Mark.calcBMI();
John.calcBMI();

var BMIMark = Mark.BMI;
var BMIJohn = John.BMI;

console.log(BMIMark);
console.log(BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark has the highest BMI with", BMIMark);
} else if (BMIJohn > BMIMark) {
  console.log("John has the highest BMI with", BMIJohn);
} else {
  console.log("They have the same BMI with", BMIMark);
}
