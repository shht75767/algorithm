const input = require('fs').readFileSync('./8.text').toString().split('\r\n');
/*for (let i = 1; i <= input[0]; i++) {
  let number = input[i].split(' ');
  let a = Number(number[0]);
  let b = Number(number[1]);
  let c = a + b;

  console.log(`Case #${i}: ${a} + ${b} = ${c}`);
}*/

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  let a = parseInt(num[0]);
  let b = parseInt(num[1]);
  let c = a + b;
  console.log(`Case #${i}: ${a} + ${b} = ${c}`);
}
