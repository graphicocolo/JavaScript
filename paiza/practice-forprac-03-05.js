// paizaの森練習問題コンテスト過去問題3 ラッキーナンバー 
// https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__b_lucky_number/edit?language_uid=javascript

// 与えられた数字を組み合わせて、ラッキーナンバー777を作ろうと考えました。
// n個の自然数が与えられるので、足して777になる数字の組み合わせを見つけて、
// それらの数字を小さい順に出力してください。
// ただし、そのような組み合わせが複数ある場合には multiple answers
// そのような組み合わせがない場合には no answer
// を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// n
// x_1
// x_2
// ...
// x_n
// ・入力される自然数の数n
// ・x_1, x_2, ..., x_n は自然数
// ・入力はn + 1行となり、末尾に改行を一つ含みます。

// 期待する出力
// 足して777になる組み合わせがある場合には、その数字を昇順にスペース区切りで出力してください。
// ただし、そのような組み合わせが
// ・複数ある場合には、multiple answers
// ・存在しない場合には、no answer
// を出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ n ≤ 8
// 1 ≤ x_1, x_2, ..., x_n ≤ 1000

// 入力例1
// 4
// 333
// 222
// 444
// 666
// 出力例1
// 333 444

// 入力例2
// 4
// 111
// 222
// 333
// 444
// 出力例2
// multiple answers

// 入力例3
// 4
// 800
// 125
// 310
// 602
// 出力例3
// no answer

// paiza.io
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

  
  
});