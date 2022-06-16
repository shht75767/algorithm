let input = require('fs').readFileSync('./3.text').toString().split('\r\n');

let times = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
  let count = 0;
  for (let j = 0; j < times.length; j++) {
    if (times[j] == i) {
      count++;
    }
  }
  console.log(count);
}
