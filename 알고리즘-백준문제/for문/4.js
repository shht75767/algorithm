let input = require('fs').readFileSync('./4.text').toString().split('\r\n');
let ans = '';
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ');
  ans += parseInt(num[0]) + parseInt(num[1]) + '\r\n';
}
console.log(ans);
