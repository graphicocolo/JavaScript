// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// 2 つの数値を出力

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
  // STEP: 1 1 つの文字列を出力
  console.log('paiza');

  // STEP: 2 2 つの文字列を出力
  console.log('paiza learning');

  // STEP: 3 1 行の出力
  console.log('813');

  // STEP: 4 3 行の出力
  console.log('8');
  console.log('1');
  console.log('3');

  // 2 つの数値を出力
  console.log('1 1');
});