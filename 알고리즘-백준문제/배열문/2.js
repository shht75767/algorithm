let input = require('fs').readFileSync('./2.text').toString().split('\r\n');

let num = input.map((x) => parseInt(x));

let max = num[0];
let maxIdx = 0;
for (let i = 1; i < num.length; i++) {
  if (max < num[i]) {
    max = num[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
