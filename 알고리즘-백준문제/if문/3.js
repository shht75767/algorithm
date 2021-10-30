const fs = require('fs');
let input = fs.readFileSync('./3.text').toString();
let a = parseInt(input);

if (a % 4 == 0 && a % 100 != 0) {
  console.log(1);
} else if (a % 4 == 0 && a % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}
