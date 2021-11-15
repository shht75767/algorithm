const input = require('fs').readFileSync('./9.text').toString();
let star = '';

for (let i = 0; i < input[0]; i++) {
  star += '*';
  console.log(star);
}
