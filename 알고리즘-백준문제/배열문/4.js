let input = require('fs').readFileSync('./4.text').toString().split('\r\n');
let numbers = [];
let num;
for (let i = 0; i < 10; i++) {
  num = input[i] % 42;
  if (numbers.indexOf(num) === -1) {
    numbers.push(num);
  }
}
console.log(numbers.length);
