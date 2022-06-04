let input = require('fs').readFileSync('./2.text').toString().split('\r\n');

let max = input.sort(num);

function num(a, b) {
  return b - a;
}

console.log(input);
