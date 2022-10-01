let input = require('fs').readFileSync('7.text').toString().split('\r\n');
let inputNum = input[0];
for (let i = 1; i <= inputNum; i++) {
  let cases = input[i].split(' ');
  let casesNum = Number(cases[0]);
  let sum = 0;
  for (let j = 1; j <= casesNum; j++) {
    sum += Number(cases[j]);
  }

  let rev = sum / casesNum;
  let highScore = 0;
  let student = 0;
  for (let k = 1; k <= casesNum; k++) {
    if (rev < cases[k]) {
      highScore++;
    }
  }
  student = (highScore / casesNum) * 100;
  console.log(student.toFixed(3) + '%');
}
