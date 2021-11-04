const fs = require('fs');

let input = fs.readFileSync('./1.text').toString();

let a = Number(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${a}*${i}= ${a * i}`);
}
