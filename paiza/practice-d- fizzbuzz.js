// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// FizzBuzz

// paiza.io で確認済み
// https://paiza.io/ja

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  // STEP: 1 ある数字までの出力 2
  const inputData = lines[0];
  const formattedData = Number(inputData);
  const judge1 = data1 => data1 >= 1;
  const judge2 = data2 => data2 <= 100;
  const judge3 = data3 => Number.isInteger(data3);
  if ((judge1(formattedData)) && (judge2(formattedData)) && (judge3(formattedData))) {
    for (let i = 0; i < formattedData; i++) {
      console.log(i + 1);
    }
  }

  // FizzBuzz
  for (let i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
});