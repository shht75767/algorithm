let input = require('fs').readFileSync('./5.text').toString().split(' ');

for (let i = Number(input); i >= 1; i--) {
  console.log(i);
}
