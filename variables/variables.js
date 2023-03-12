/*
[変数と宣言](https://jsprimer.net/basic/variables/)
[変数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types#%E5%A4%89%E6%95%B0)
 */

/*
  const
 */

// const 再代入禁止の定数、初期値は省略不可
const val1 = '再代入禁止';
// const val1; // 初期値省略不可
console.log(val1);
// val1 = '再代入してみる'; // エラー

// オブジェクトや配列等オブジェクト型については値を変更可能
const obj1 = {
  id: 1,
  name: "山田",
};
obj1.name = "高橋";
console.log(obj1); // {id: 1, name: "高橋"}

const arr1 = ["りんご", "みかん", "バナナ"]
arr1.push("キウイ");
console.log(arr1); // ["りんご", "みかん", "バナナ", "キウイ"]
arr1[0] = "ぶどう";
console.log(arr1); // ["ぶどう", "みかん", "バナナ", "キウイ"]

/*
  let
 */

// let 再宣言禁止、上書き可能
let val2_1 = '上書き可能';
console.log(val2_1); // 上書き可能
val2_1 = '上書きしてみる';
console.log(val2_1); // 上書きしてみる

// 初期値は省略可能
let val2_2;
// let var2_2 = '再宣言禁止'; // エラー

// ループ内で使われる変数を let で宣言
// 1-10 までの数字を表示
for (let i = 0;i < 10; i++) {
  console.log(i + 1);
}

/*
  var
 */

// 再代入、再定義が可能
var val3 = '初回の宣言';
console.log(val3);
val3 = '再代入';
console.log(val3);
var val3 = '再定義';
console.log(val3);