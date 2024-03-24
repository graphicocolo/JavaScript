// paizaの森練習問題コンテスト過去問題2 競輪のユニフォーム
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_keirin/edit?language_uid=javascript

// 競輪の選手は、遠くからでも見分けがつくように、鮮やかな単色のユニフォームを着用しています。
// ユニフォームの色は、車番と呼ばれる、各選手に割り当てられた番号によって決まっています。
// 1番車 : 白
// 2番車 : 黒
// 3番車 : 赤
// 4番車 : 青
// 5番車 : 黄
// 6番車 : 緑
// 7番車 : オレンジ
// 8番車 : ピンク
// 9番車 : 紫
// 入力として車番が与えられるので、その選手のユニフォームの色を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// n

// 期待する出力
// nが
// ・1のとき、white
// ・2のとき、black
// ・3のとき、red
// ・4のとき、blue
// ・5のとき、yellow
// ・6のとき、green
// ・7のとき、orange
// ・8のとき、pink
// ・9のとき、purple
// を出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ n ≤ 9

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
  const pairList = [
    { pairNum: 1, pairColor: "white" },
    { pairNum: 2, pairColor: "black" },
    { pairNum: 3, pairColor: "red" },
    { pairNum: 4, pairColor: "blue" },
    { pairNum: 5, pairColor: "yellow" },
    { pairNum: 6, pairColor: "green" },
    { pairNum: 7, pairColor: "orange" },
    { pairNum: 8, pairColor: "pink" },
    { pairNum: 9, pairColor: "purple" },
  ];
  const designatedNumber = {
    number: Number(lines[0]),
  };
  const getColor = (designatedNumber) => {
    if (pairList.some(s => s.pairNum === designatedNumber.number)) {
      const designatedColor = pairList.find(s => s.pairNum === designatedNumber.number).pairColor;
      return designatedColor;
    } else {
      return '指定された数字を入力してください';
    }
  }
  console.log(getColor(designatedNumber));
});