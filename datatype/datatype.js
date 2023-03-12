/*
[データ型とリテラル](https://jsprimer.net/basic/data-type/)
[データ構造とデータ型](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types#%E3%83%87%E3%83%BC%E3%82%BF%E6%A7%8B%E9%80%A0%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E5%9E%8B)
 */

// テンプレートリテラル
const val1 = 2;
const val2 = 5;
const calc = `計算結果は${val1 + val2}です`;
console.log(calc);
// テンプレートリテラルを使わない場合
const result = '計算結果は' + (val1 + val2) + 'です';
console.log(result);