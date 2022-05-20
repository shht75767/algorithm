let input = require('fs').readFileSync('./5.text').toString();
let num = '';
for (let i = 1; i <= input; i++) {
  num += i + '\n';
}
console.log(num);
