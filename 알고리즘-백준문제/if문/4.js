const fs = require('fs');
let input = fs.readFileSync('./4.text').toString().split('\r\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > 0) {
  console.log(b > 0 ? 1 : 4);
} else if (a < 0) {
  console.log(b > 0 ? 2 : 3);
}
// 짧은 조건문 사용으로 a가 음수일때 b가 음수일지 양수일지 판단
