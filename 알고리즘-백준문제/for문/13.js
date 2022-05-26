let input = require('fs').readFileSync('13.text').toString().split('\r\n');
let answer = '';
for (let i = 0; i < input.length; i++) {
  let num = input[i].split(' ');
  console.log(parseInt(num[0]) + parseInt(num[1]));
}

console.log(input.length);
