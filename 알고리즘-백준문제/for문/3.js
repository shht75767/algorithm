let input = require('fs').readFileSync('./3.text').toString();

let sum = 0;
for (let i = 1; i <= input[0]; i++) {
  sum += i;
}
console.log(sum);
