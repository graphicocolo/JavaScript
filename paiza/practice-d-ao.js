// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// 代入演算 1

// Math.floor()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// Math.pow()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

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
  // STEP: 1 足し算
  const calc1 = 1231 + 5178;
  console.log(calc1);

  // STEP: 2 割り算
  const calc2 = Math.floor(437326 / 9085);
  const calc3 = 437326 % 9085;
  console.log(`${calc2} ${calc3}`);

  // STEP: 3 累乗
  const calc4 = ((202 + 134) * 107);
  console.log(Math.pow(calc4, 2));

  // 代入演算 1
  let N = 0;
  N = N + 3286;
  N = N * 4736;
  N = N % 12312;
  console.log(N);
});