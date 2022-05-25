let input = require('fs').readFileSync('11.text').toString().split('\r\n');
let input1 = input[0].split(' ');
let input2 = input[1].split(' ');

let total = parseInt(input1[0]);
let limit = parseInt(input1[1]);

let answer = '';

for (let i = 0; i < total; i++) {
  let a = parseInt(input2[i]);
  if (limit > a) {
    answer += a + ' ';
  }
}

console.log(answer);
