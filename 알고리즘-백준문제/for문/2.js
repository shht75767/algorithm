let input = require('fs').readFileSync('./2.text').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  console.log(parseInt(num[0]) + parseInt(num[1]));
}
