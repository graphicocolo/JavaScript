// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// 半角スペース区切りの 2 つの入力



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
  // STEP: 1 1 行の入力
  // const data = lines[0];
  // if ((0 < data.length) && (data.length <= 10) && (data.match(/^[A-Za-z0-9]*$/))) {
  //   console.log(data);
  // }

  // STEP: 2 2 行の入力
  // lines.map((data) => {
  //   if ((0 < data.length) && (data.length <= 10) && (data.match(/^[A-Za-z0-9]*$/))) {
  //     console.log(data);
  //   }
  // });

  // STEP: 3 1 つの入力
  // const data = lines[0];
  // if ((0 < data.length) && (data.length <= 10) && (data.match(/^[A-Za-z0-9]*$/))) {
  //   console.log(data);
  // }

  // 半角スペース区切りの 2 つの入力
  const pendingDatas = lines[0].split(' '); // 出力データ
  pendingDatas.map((data) => {
    if ((0 < data.length) && (data.length <= 10) && (data.match(/^[A-Za-z0-9]*$/))) {
      console.log(data);
    } else {
      console.log('');
    }
  });
});