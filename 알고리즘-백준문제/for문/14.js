let input = require('fs').readFileSync('14.text').toString().split('');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = [];
let answer = '';
let i = 1;
while (i < 10) {
  c = a + b;
  console.log(c);
  i++;
}
