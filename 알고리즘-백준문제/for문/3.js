let input = require('fs').readFileSync('./3.text').toString();

let sum = parseInt(input);
for (let i = 0; i < input; i++) {
  sum += i;
}
console.log(sum);
