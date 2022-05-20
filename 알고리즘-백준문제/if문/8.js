const fs = require('fs');
let input = fs.readFileSync('./8.text').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

let money;

if (a == b && a == c) {
  money = 10000 + a * 1000;
} else if (a == b || a == c || b == c) {
  if (a == b || a == c) {
    money = 1000 + a * 100;
  }
  if (b == c) {
    money = 1000 + b * 100;
  }
} else if (a !== b && a !== c && b !== c) {
  input.sort((a, b) => b - a);
  money = input[0] * 100;
}
console.log(money);
