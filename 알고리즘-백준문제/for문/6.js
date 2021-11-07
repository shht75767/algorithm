let input = require('fs').readFileSync('./5.text').toString().split();

let answer = '';

for (let i = Number(input[0]); i >= 1; i--) {
  answer += i + '\n';
}

console.log(answer);
