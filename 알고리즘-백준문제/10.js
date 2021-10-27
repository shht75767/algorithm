/*(a+b)%c는 ((a%c) + (b%c))%c 와 같을까?

(a×b)%c는 ((a%c) × (b%c))%c 와 같을까?

세 수 a, b, c가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.*/

const fs = require('fs');
let input = fs.readFileSync('./10.text').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
