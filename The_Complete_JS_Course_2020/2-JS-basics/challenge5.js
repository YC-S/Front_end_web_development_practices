var bill = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  final: [],
  calculate: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var b = this.bills[i];
      if (b < 50) {
        var tip = b * 0.2;
      } else if (b < 200) {
        var tip = b * 0.15;
      } else {
        var tip = b * 0.1;
      }
      this.tips[i] = tip;
      this.final[i] = b + tip;
    }
  }
};

bill.calculate();
console.log(bill.tips);
console.log(bill.final);
