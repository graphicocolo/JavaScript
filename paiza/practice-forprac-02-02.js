// paizaの森練習問題コンテスト過去問題2 エレベーターの行き先
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_elevator/edit?language_uid=javascript

// エレベーターで移動するとき、上のボタンか下のボタンのどちらかを押して移動します。
// 入力として現在の階と、移動したい階が与えられるので、
// 上と下のどちらのボタンを押せばよいかを判定し、出力してください。
// ただし、現在いる階と移動したい階は、1階 ~ 9階のいずれかであるとします。

// 入力される値
// 入力は以下のフォーマットで与えられます

// f1 f2

// ・f1 は現在の階を表す文字列で、1F, 2F, ..., 9F のいずれか
// ・f2 は移動したい階を表す文字列で、1F, 2F, ..., 9Fのいずれか

// 期待する出力
// 移動したい階が、現在の階よりも
// ・上にあるとき、up
// ・下にあるとき、down
// を出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// ・f1 ≠ f2

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
  const preFloorInfo = [...inputData].map(char => char === 'F' ? "" : char).join("");
  const floorInfo = preFloorInfo.split(' ');
  const [currentFloor, goFloor] = floorInfo.map((elm) => {
    return Number(elm);
  })
  const numberedFloorInfo = [currentFloor, goFloor];
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
  if (currentFloor !== goFloor && numberedFloorInfo.every(judgeSign) && numberedFloorInfo.every(judgeInteger)) {
    if (currentFloor < goFloor) {
      console.log('up');
    } else if (currentFloor > goFloor) {
      console.log('down');
    } else {
      return;
    }
  } else {
    console.log('入力値を確認してください');
  }
});