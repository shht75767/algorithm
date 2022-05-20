const fs = require('fs');
let input = fs.readFileSync('./7.text').toString().split('\n');
let input1 = input[0].split(' ');
let hours = parseInt(input1[0]);
let minute = parseInt(input1[1]);
let cookT = parseInt(input[1]);

let a = Math.floor((minute + cookT) / 60) + hours;
let b = (minute + cookT) % 60;
if (a >= 24) {
  a -= 24;
}
console.log(a, b);
