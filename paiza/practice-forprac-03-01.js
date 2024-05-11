// paizaの森練習問題コンテスト過去問題3 文字列の逆順
// https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_reverse/edit?language_uid=javascript

// 入力として文字列が与えられます。
// その文字列を逆順にして出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// s
// ・sは文字列

// 期待する出力
// sを逆順にして出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ (sの長さ) ≤ 10

// 入力例1
// paiza

// 出力例1
// aziap

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
  // 1. 必要データ定義----------
  // 入力値
  const inputData = lines[0];
  
  // 2. 判定関数----------
  const judgeInputData = data => {
    // 空判定
    const isEmpty = !(data === undefined) && true;
    // 限界値判定
    const isCorrectLimit = (isEmpty && data.length >= 1 && data.length <= 10) && true;
    if (isCorrectLimit) {
      return true;
    } else {
      return false;
    }
  }
  
   if (judgeInputData(inputData)) {
    const convertData = inputData.split('').reverse().join('');
    console.log(convertData);
   } else {
    console.log('入力値が正しくありません');
   }
  
});