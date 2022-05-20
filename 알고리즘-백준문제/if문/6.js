const fs = require('fs');
let input = fs.readFileSync('./5.text').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

b -= 45;

if (b < 0) {
  a--;
  b += 60;
  if (a < 0) {
    a += 24;
  }
}
console.log(a, b);

// 계산은 -=(빼기할당) +=(더하기할당)을 이용하였고 if문의 중복 사용 a값을 조절
