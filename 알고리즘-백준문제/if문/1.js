const fs = require('fs');
let input = fs.readFileSync('./1.text').toString().split(' ');
const a = +input[0];
const b = +input[1];

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}

//const a = +input[0];에서의 +는 숫자로 바꿔주는 parseInt()와 같음
