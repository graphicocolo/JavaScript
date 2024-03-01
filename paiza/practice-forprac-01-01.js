// paizaの森練習問題コンテスト過去問題1 スポーツの人数
// https://paiza.jp/works/mondai/forest_contest_001/problem_index?language_uid=javascript

// スポーツ名が与えられたときに、そのスポーツの1チームの人数を表示するプログラムを作成してください。

// ただし、各スポーツの競技人数は以下であるとします。
// ・野球：9人
// ・サッカー：11人
// ・ラグビー：15人
// ・バスケットボール：5人
// ・バレーボール：6人

// 入力される値
// 入力は以下のフォーマットで与えられます
// s
// sはスポーツ名
// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。

// 期待する出力
// 入力されたスポーツの1チームの人数を出力してください。
// ただし、各スポーツの1チームの人数は以下であるものとします。
// baseball : 9
// soccer : 11
// rugby : 15
// basketball : 5
// volleyball : 6

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// sは、
// baseball または、
// soccer または、
// rugby または、
// basketball または、
// volleyball のいずれかの文字列

// すっきり書きたい JavaScriptの条件分岐
// https://qiita.com/ist-t-s/items/e2bf11fcf1645623235f

// 検査する条件があまりに多い場合、
// 条件分岐ではなく、データ（配列やオブジェクト）から条件に適合するものを走査する
// というアプローチの方が良い

// Array.prototype.find()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Array.prototype.some()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some

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
  const sportsList = [
    { sportsName: "baseball", menberNum: 9 },
    { sportsName: "soccer", menberNum: 11 },
    { sportsName: "rugby", menberNum: 15 },
    { sportsName: "basketball", menberNum: 5 },
    { sportsName: "volleyball", menberNum: 6 },
  ];
  const designatedSport = {
    sportsName: lines[0],
  };
  const getSportsNum = (designatedSport) => {
    if (sportsList.some(s => s.sportsName === designatedSport.sportsName)) {
      const designatedSportNum = sportsList.find(s => s.sportsName === designatedSport.sportsName).menberNum;
      return designatedSportNum;
    } else {
      return '指定されたスポーツ名を入力してください';
    }
  }
  console.log(getSportsNum(designatedSport));
});