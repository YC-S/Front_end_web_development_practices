{
  let a = 10;
  var b = 1;
}

console.log(b);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}

a[6]();

for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}

// temporal dead zone
var x = x;

// 2. 块级作用域
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    let tmp = 'hello world';
  }
}
f();

var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i);

{
  {
    let insane = 'hello';
    {
      insane = 'world';
    }
  }
}
