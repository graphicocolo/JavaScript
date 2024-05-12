// paizaの森練習問題コンテスト過去問題3 英単語の生成（連結）
// https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_join/edit?language_uid=javascript

// 入力として、2つの文字列がスペース区切りで与えられます。
// これらの文字列を連結し、1つの英単語にして出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// s1 s2
// ・s1, s2は文字列

// 期待する出力
// s1とs2を連結し、出力してください。
// （s1とs2は変更せずにそのまま連結してください）

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ (s1の長さ), (s2の長さ) ≤ 10

// 入力例1
// play ing
// 出力例1
// playing

// 入力例2
// un balance
// 出力例2
// unbalance

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
  // 空
  const judgeNotEmpty = data => !(data === undefined) && true;
  // 文字数制限
  const judgeIsCorrectLimit = (array) => {
    const judgeLowestValue = data => data.length >= 1;
    const judgeHighestValue = data => data.length <= 10;
    const result = (array.every(item => judgeLowestValue(item)) && array.every(item => judgeHighestValue(item))) && true;
    return result;
  };

  // 3. 処理----------
  if (judgeNotEmpty(inputData)) {
    const convertData = inputData.split(' ');
    if (judgeIsCorrectLimit(convertData)) {
      const resultText = convertData.join('');
      console.log(resultText);
    } else {
      console.log('入力文字数が間違っています');
    }
  } else {
    console.log('入力値が正しくありません');
  }
  
});