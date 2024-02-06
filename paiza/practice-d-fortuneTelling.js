// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// 占い

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
  // STEP: 1 単純な条件分岐
  // const inputValue = lines[0];
  // if ((1 <= inputValue.length) && (inputValue.length < 20) && (inputValue.match(/^[a-z]*$/))) {
  //   if (inputValue === 'paiza') {
  //     console.log('YES');
  //   } else {
  //     console.log('NO');
  //   }
  // } else {
  //   return;
  // }

  // STEP: 2 数値の分岐
  const N = Number(lines[0]);
  if ((1 <= N) && (N < 200) && Number.isInteger(N)) {
    if (N <= 100) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }

  // STEP: 3 数値演算結果で分岐
  // const inputDatas = lines[0].split(' ');
  // const formattedDatas = inputDatas.map((inputData) => Number(inputData));
  // const judge1 = data1 => data1 >= 1;
  // const judge2 = data2 => data2 <= 200;
  // const judge3 = data3 => Number.isInteger(data3);
  // if (formattedDatas.every(judge1) && formattedDatas.every(judge2) &&formattedDatas.every(judge3)) {
  //   if ((formattedDatas[0] * formattedDatas[1]) <= formattedDatas[2]) {
  //     console.log('YES');
  //   } else {
  //     console.log('NO');
  //   }
  // }

  // 占い
  const inputData = lines[0];
  const formattedData = Number(inputData);
  const judge1 = data1 => data1 >= 1;
  const judge2 = data2 => data2 <= 9;
  const judge3 = data3 => Number.isInteger(data3);
  if ((judge1(formattedData)) && (judge2(formattedData)) && (judge3(formattedData))) {
    if (formattedData === 7) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
});