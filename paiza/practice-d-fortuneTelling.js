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
  const inputValue = lines[0];
  if ((1 <= inputValue.length) && (inputValue.length < 20) && (inputValue.match(/^[a-z]*$/))) {
    if (inputValue === 'paiza') {
      console.log('YES');
    } else {
      console.log('NO');
    }
  } else {
    return;
  }
});