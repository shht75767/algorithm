let input = require('fs').readFileSync('./1.text').toString().split('\r\n');
let count = parseInt(input[0]);
let numbers = input[1].split(' ');
let num = numbers.map((x) => parseInt(x)).sort(numberSort);

function numberSort(a, b) {
  return a - b;
}

console.log(num[0], num[count - 1]);
