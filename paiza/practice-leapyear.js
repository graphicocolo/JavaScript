// 入力された整数がグレゴリオ暦でうるう年であるか判定するプログラムを書いてください。

// 閏年判定の条件
// 西暦が4で割り切れる年は閏年。
// ただし、100で割り切れる年は閏年ではない。
// ただし、400で割り切れる年は閏年。

// https://paiza.jp/challenges/practice
// https://magazine.techacademy.jp/magazine/27156

// paiza.io で確認済み
// https://paiza.io/ja

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
// 1行目に入力行を指定
reader.on('close', () => {
  const N = lines[0];
  for (let i = 0; i < N; i++) {
      let year = lines[i+1].split(" ");
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          console.log(`${year} is a leap year`);
      } else {
          console.log(`${year} is not a leap year`);
      }
  }
});
// 行数の指定がない場合
// reader.on('close', () => {
//   for (const year of lines) { 
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//           console.log(`${year} is a leap year`);
//       } else {
//           console.log(`${year} is not a leap year`);
//       }
//   }
// });