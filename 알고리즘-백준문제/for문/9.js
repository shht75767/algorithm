const input = require('fs').readFileSync('./9.text').toString();
let star = '';
let num = parseInt(input);

for (let i = 1; i <= num; i++) {
  star += '*';
  console.log(star);
}
