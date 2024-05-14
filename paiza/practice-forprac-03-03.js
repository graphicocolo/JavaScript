// paizaの森練習問題コンテスト過去問題3 小文字にする
// https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_lowercase/edit?language_uid=javascript

// 入力として、小文字と大文字が混在した文字列が与えられます。
// これでは何が書いてあるかわかりにくいので、
// この文字列に含まれる大文字を、すべて小文字に書き換えて出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// s
// ・sは文字列

// 期待する出力
// 入力された文字列sをすべて小文字に書き換えて出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ (Sの長さ) ≤ 15

// 入力例1
// pAIza

// 出力例1
// paiza

// 入力例2
// iNfORMatIon

// 出力例2
// information

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
  
  // 2. ----------
  // 空
  const judgeNotEmpty = data => !(data === undefined) && true;
  // 文字数制限
  const judgeIsCorrectLimit = (data) => {
    const judgeLowestValue = data => data.length >= 1;
    const judgeHighestValue = data => data.length <= 15;
    const result = (judgeLowestValue(data) && judgeHighestValue(data)) && true;
    return result;
  };

  // 3. 処理----------
  if (judgeNotEmpty(inputData)) {
    if (judgeIsCorrectLimit(inputData)) {
      const convertData = inputData.toLowerCase();
      console.log(convertData);
    } else {
      console.log('入力文字数が間違っています');
    }
  } else {
    console.log('文字を入力してください');
  }
  
});