var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn;
massMark = 75;
massJohn = 80;
heightMark = 1.8;
heightJohn = 1.8;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

var MarkHigherBMIThanJohn = BMIMark > BMIJohn;

console.log("Is Mark's BMI higher than John's? ", MarkHigherBMIThanJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
