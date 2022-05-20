const fs = require('fs');

let input = fs.readFileSync('./1.text').toString();

let num = parseInt(input);
console.log(num);

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
