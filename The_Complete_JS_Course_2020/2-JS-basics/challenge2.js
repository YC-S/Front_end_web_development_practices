var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;

console.log(johnAverage > mikeAverage ? "John wins!" : "Mike wins!");

johnAverage = (100 + 110 + 90) / 3;
mikeAverage = (100 + 80 + 120) / 3;

if (johnAverage === mikeAverage) {
  console.log("draw");
} else if (johnAverage > mikeAverage) {
  console.log("John wins");
} else {
  console.log("Mike wins");
}

var maryAverage = (97 + 134 + 105) / 3;
console.log(maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log("John wins");
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log("Mike wins");
} else if (maryAverage > mikeAverage && maryAverage > johnAverage) {
  console.log("Mary wins");
}
