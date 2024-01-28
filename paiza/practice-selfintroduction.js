// https://paiza.jp/works/mondai/self_introduction/problem_index?language_uid=javascript

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      console.log(`name: graphico`);
    } else if (i === 1) {
      console.log(`language: JavaScript`);
    } else if (i === 2) {
      console.log(`hitokoto: 考えた機能をスムーズに実装できるようになりたい`);
    }
  }
});
// name: 名前
// language: 言語
// hitokoto: 一言