const input = require('fs').readFileSync('./4.text').toString().split('\r\n');

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  console.log(Number(num[0]) + Number(num[1]));
}
