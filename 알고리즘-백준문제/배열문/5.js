let input = require('fs').readFileSync('./5.text').toString().split('\r\n');
let inputScore = input[1].split(' ');
let inputA = input[0];

let newArr = [];
function numSort(a, b) {
  return b - a;
}

let max = inputScore.map((x) => parseInt(x)).sort(numSort);

for (let i = 0; i < inputA; i++) {
  let num = (max[i] / max[0]) * 100;
  newArr.push(num);
}

function add(a, b) {
  return a + b;
}
let ans = newArr.reduce(add, 0) / inputA;
console.log(ans);
