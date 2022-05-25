const input = require('fs').readFileSync('./9.text').toString();
let num = parseInt(input);

/*for (let i = 0; i < num; i++) {
  let result = '';
  for (let j = 0; j < num - 1 - i; j++) {
    result += ' ';
  }
  for (let k = 0; k < i + 1; k++) {
    result += '*';
  }
  console.log(result);
}*/

for (let i = 0; i < num; i++) {
  let result = '';
  for (let j = 0; j < num - 1 - i; j++) {
    result += ' ';
  }
  for (let k = 0; k < i + 1; k++) {
    result += '*';
  }
  console.log(result);
}
