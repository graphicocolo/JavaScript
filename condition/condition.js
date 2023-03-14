/*
[条件分岐](https://jsprimer.net/basic/condition/)
 */

// if 文
const age = 18;
if (age >= 20) {
  console.log("成人です");
} else {
  console.log("未成年です");
}

if (true) {
  console.log('この行は常に実行される：その1');
}
if ('条件式のテスト') {
  console.log('この行は常に実行される：その2');
}

// falsy な条件式
if (false) {
  console.log('この行は常に実行されない');
}
if (0) {
  console.log('この行も常に実行されない');
}
if ('') {
  console.log('この行も常に実行されない');
}
if (undefined) {
  console.log('この行も常に実行されない');
}
if (null) {
  console.log('この行も常に実行されない');
}

// else if 文、else 文
const x = 5;

if (x < 0) {
  console.log('x is negative');
} else if (x > 0) {
  console.log('x is positive');
} else {
  console.log('x is zero');
}

// switch 文
// 例として、1から7までの整数を曜日に変換する
const dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "月曜日";
    break;
  case 2:
    dayName = "火曜日";
    break;
  case 3:
    dayName = "水曜日";
    break;
  case 4:
    dayName = "木曜日";
    break;
  case 5:
    dayName = "金曜日";
    break;
  case 6:
    dayName = "土曜日";
    break;
  case 7:
    dayName = "日曜日";
    break;
  default:
    dayName = "不明な曜日";
}

console.log(dayName); // 出力結果: 水曜日

// break 文を忘れたため、意図しない処理が実行される場合
const version = "ES6";
switch (version) {
  case "ES5":
    console.log("ECMAScript 5"); // ここは飛ばされる
  case "ES6": // 一致するケース
    console.log("ECMAScript 2015");
  case "ES7": // breakされないため条件無視して実行
    console.log("ECMAScript 2016");
  default:    // breakされないため条件無視して実行
    console.log("しらないバージョンです");
}

// if文の代用として使うのではなく、
// 次のように関数と組み合わせて条件に対する値を返すパターンとして使うことが多い
// 関数と組み合わせて使用
// 関数は return が呼び出された時点で即座に終了するため
// break 文がなくても目的の値のみを返す
const getECMAScriptName = (version) => {
  switch (version) {
      case "ES5":
          return "ECMAScript 5";
      case "ES6":
          return "ECMAScript 2015";
      case "ES7":
          return "ECMAScript 2016";
      default:
          return "しらないバージョンです";
  }
}
// 関数を実行して`return`された値を得る
console.log(getECMAScriptName("ES7")); // => "ECMAScript 2015"