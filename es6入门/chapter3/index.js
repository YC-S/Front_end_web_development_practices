// 1. 数组的解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [foo, [[bar], bax]] = [1, [[2], 3]];
console.log(foo, bar, bax);

let [, , thirds] = ['foo', 'bar', 'baz'];
console.log(thirds);

let [x, , y] = [1, 2, 3];
console.log(x, y);

let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);

let [x1, y1, ...z] = ['a'];
console.log(x1, y1, z);

let [a1, [b1], d1] = [1, [2, 3], 4];
console.log(a1, b1, d1);

let [x2, y2, z2] = new Set(['a', 'b', 'c']);
console.log(x2, y2, z2);

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first, second, third, fourth, fifth, sixth);

// 默认值
let [foo1 = true] = [];
console.log(foo1);

let [x3, y3 = 'b'] = ['a'];
console.log(x3, y3);
let [x4, y4 = 'b'] = ['a', undefined];
console.log(x4, y4);
