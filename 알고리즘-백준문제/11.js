/*
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.*/

const fs = require('fs');
let input = fs.readFileSync('./11.text').toString().split('\r\n');
let firstNum = parseInt(input[0]);
let secondNum = parseInt(input[1]);
let hNum = Math.floor(secondNum / 100);
let tNum = Math.floor((secondNum % 100) / 10);
let oNum = secondNum % 10;
console.log(firstNum * oNum);
console.log(firstNum * tNum);
console.log(firstNum * hNum);
console.log(firstNum * secondNum);
