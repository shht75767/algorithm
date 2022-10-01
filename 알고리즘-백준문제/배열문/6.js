let input = require('fs').readFileSync('./6.text').toString().split('\r\n');
for (let i = 1; i <= input[0]; i++) {
  let count = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  }
  console.log(sum);
}
