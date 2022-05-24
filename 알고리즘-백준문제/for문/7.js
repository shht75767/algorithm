const input = require('fs').readFileSync('./7.text').toString().split('\r\n');

/*for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(' ');

  console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}*/
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');

  console.log(`Case #${i}: ${parseInt(num[0]) + parseInt(num[1])}`);
}
