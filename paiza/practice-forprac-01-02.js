// paizaの森練習問題コンテスト過去問題1 バイトの休憩時間
// https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_break_time/edit?language_uid=javascript

// アルバイトの休憩時間には決まりがあり、
// ・勤務時間が6時間を超え、8時間以下であるときには、45分
// ・勤務時間が8時間を超えるときには、60分
// の休憩時間を取ることが義務付けられています。
// 勤務時間が入力として与えられるので、休憩が発生するかどうかを調べ、
// 休憩時間が発生する場合には、休憩時間（分）を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// h
// ・hは勤務時間

// 期待する出力
// ・休憩時間が発生しないときは、no break
// ・休憩時間が発生する場合には、x min
// 　（xは休憩時間(分)、xとminの間に空白を1つ含みます）
// を出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 4 ≤ h ≤ 12

// Math.sign() 正負判定
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

// Number.isInteger() 整数判定
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

// 参考：Math.floor() 
// 与えられた数値以下の最大の整数を返す
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// 参考：Math.round() 四捨五入
// 引数として与えた数値を四捨五入して、もっとも近似の整数を返す
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round

// 参考：【10選】複数条件の組み合わせ方法徹底解説！条件分岐のコツと注意点を学ぼう
// https://jp-seemore.com/web/5195/

// 与えられた条件以外に、小数整数・正負判定も必要
// 入力値の範囲 4 ≤ h ≤ 12
// ・勤務時間が6時間以下 h ≤ 6 => no break
// ・勤務時間が6時間を超え、8時間以下であるときには、45分 6 < h ≤ 8 => 45 min
// ・勤務時間が8時間を超えるときには、60分 8 < h => 60 min

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
  const inputHour = lines[0];
  const changedInputData = Number(inputHour); // 入力値を数値に変換 変換できない場合NaNが返り、falseと判定される
  const judge1 = Math.sign(changedInputData); // 正負判定
  const judge2 = Number.isInteger(changedInputData); // 整数判定
  const judge3 = data3 => data3 >= 4; // 適正入力値判定1
  const judge4 = data4 => data4 <= 12; // 適正入力値判定2
  if (judge1 && judge2 && judge3(changedInputData) && judge4(changedInputData)) {
    if (changedInputData <= 6) {
      console.log("no break");
    } else if (changedInputData > 6 && changedInputData <= 8) {
      console.log("45 min");
    } else if (changedInputData > 8) {
      console.log("60 min");
    }
  } else {
    console.log("正しい値を入力してください");
  }

  // ChatGPTが出力したコード
  // function validateInput(input) {
  //   if (typeof input !== 'number' || !Number.isInteger(input) || input <= 0 || input < 4 || input > 12) {
  //     console.log('無効な入力です');
  //     return;
  //   }
  
  //   if (input <= 6) {
  //     console.log('no break');
  //   } else if (input <= 8) {
  //     console.log('45 min');
  //   } else if (input <= 12) {
  //     console.log('60 min');
  //   } else {
  //     console.log('有効な入力です');
  //   }
  // }
  
  // // 使用例
  // validateInput(5); // no break がコンソール表示される
  // validateInput(7); // 45 min がコンソール表示される
  // validateInput(9); // 60 min がコンソール表示される
  // validateInput(15); // 無効な入力です がコンソール表示される  
});