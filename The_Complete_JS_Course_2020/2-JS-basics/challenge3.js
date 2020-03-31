function calculateTip(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill < 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

var tipArray = [calculateTip(124), calculateTip(48), calculateTip(268)];
var totalArray = [tipArray[0] + 124, tipArray[1] + 48, tipArray[2] + 268];

console.log(tipArray);
console.log(totalArray);
