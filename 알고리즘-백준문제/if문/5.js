const fs = require('fs');
let input = fs.readFileSync('./5.text').toString().toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

b -= 45;

if (b < 0) {
  b += 60;
  a--;
  if (a < 0) {
    a = 23;
  }
}
console.log(`${a} ${b}`);
