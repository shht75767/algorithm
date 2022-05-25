let input = require('fs').readFileSync('12.text').toString().split('\r\n');

for (let i = 0; i < input.length; i++) {
  let num = input[i].split(' ');
  let num1 = parseInt(num[0]);
  let num2 = parseInt(num[1]);
  if (num1 == 0 && num2 == 0) {
    break;
  } else {
    console.log(`${num1 + num2}`);
  }
}
