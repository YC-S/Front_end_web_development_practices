var x = 10;
if (null || console.log("hello") || x > 5) {
  console.log("Hello");
}

var counter = 0;
var myArray = ["yaakov", 2, { handle: "yaakovchaikin" }];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);

let Circle = function (radius) {
  this.radius = radius;

  this.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };
};

let myCircleNew = new Circle(5);
console.log("myCircleNew ... logs");
console.log(myCircleNew.getArea());

let myCircleDirectCall = Circle(10);
console.log("myCircleDirectCall... logs");
console.log(myCircleDirectCall.getArea());

function make(mul) {
  var myfun = function (x) {
    return mul * x;
  };
  return myfun;
}

var operation = make(10);
console.log(operation(10));

console.log(3.125e7);
