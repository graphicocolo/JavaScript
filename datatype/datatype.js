// テンプレートリテラル
const val1 = 2;
const val2 = 5;
const calc = `計算結果は${val1 + val2}です`;
console.log(calc);
// テンプレートリテラルを使わない場合
const result = '計算結果は' + (val1 + val2) + 'です';
console.log(result);