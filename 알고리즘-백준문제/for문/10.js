const input = require('fs').readFileSync('./9.text').toString();
let num = Number(input);

let result = '';

for (let i = 0; i < num; i++) {
  result += '.';
  console.log(result);
}

/* 
   // 별
    for (let line = 1; line <= N; ++line) {
        const starCnt = line;
        const spaceCnt = N - line;
        let printString = '';
        for (let i = 0; i < spaceCnt; ++i) {
            printString += ' ';
        }
        for (let i = 0; i < starCnt; ++i) {
            printString += '*';
        }
        console.log(printString);
    }
}
*/
