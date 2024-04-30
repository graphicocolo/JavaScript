// paizaの森練習問題コンテスト過去問題2 長方形の面積
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_rectangular/edit?language_uid=javascript

// 長方形の隣接する2辺の長さが入力として与えられます。
// 長方形の面積を計算して出力してください。
// ただし、長さ0の辺がある場合には invalid と出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// e1 e2
// ・e1, e2は、隣接するそれぞれの辺の長さ（0以上の整数）

// 期待する出力
// 長方形の面積（e1 × e2）を計算して出力してください。
// ただし、e1 もしくは e2 が 0 の場合には invalid と出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 0 ≤ e1, e2 ≤ 20

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
  const inputData = lines[0]
  const preData = inputData.split(' ');
  const [side1, side2] = preData.map((elm) => {
    return Number(elm);
  })
  const calcElm = [side1, side2];

  const judgeSign = (data) => {
    if (Math.sign(data) === 1) {
      return true;
    } else if (Math.sign(data) === -1) {
      return false;
    } else {
      return;
    }
  }
  const judgeInteger = data => Number.isInteger(data);
  const judgeLowestValue = data => data >= 0;
  const judgeHighestValue = data => data <= 20;

  if (calcElm.every(judgeSign) && calcElm.every(judgeInteger) && calcElm.every(judgeLowestValue) && calcElm.every(judgeHighestValue)) {
    console.log(side1 * side2)
  } else if (side1 === 0 || side2 === 0) {
    console.log('invalid')
  } else {
    return;
  }
});