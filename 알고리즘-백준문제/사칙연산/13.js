const fs = require('fs');
let input = fs.readFileSync('./13.text').toString();
console.log(input);
let num = parseInt(input);
let year = num - 543;
console.log(year);
