/*
[ループと反復処理](https://jsprimer.net/basic/loop/)
[ループと反復処理](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
 */

// for 文
// for (初期化処理; 条件式; 変化処理) {
//   繰り返し実行する処理
// }

// 0から4までの数字を繰り返し処理して、
// それぞれの数字に「番目」という文字列を付けてコンソールに表示する
for (let i = 0; i < 5; i++) {
  console.log(i + 1 + "番目");
}

// while 文
// while (条件式) {
//   実行する処理;
// }
// while 文は無限ループに陥りがち
// ループ内の条件が最終的に false になることを必ず確かめるようにする
let val1 = 0;
while (val1 < 5) {
  console.log(val1);
  val1++;
}

// do...while 文
// 条件式がチェックされる前に実行する処理が少なくとも一度は繰り返される
// do {
//   実行する処理;
// } while (条件式);
let val2 = 0;
do {
  console.log(val2);
  val2++;
} while (val2 < 5);

// forEach メソッド
// 通常の for と同様の動作になる。
// 繰り返し処理の部分が関数スコープになるので、
// スコープが閉じているのが for よりも優れている点。
// ブロックスコープが主流になる今後、この価値は薄れ利用は減っていくと思われる。
// 配列の要素を繰り返すのではない場合には、別の繰り返しの実装方法を検討する。
const array1 = ['apple', 'banana', 'orange'];

array1.forEach((element, index, array) => {
  console.log(element, index, array);
});
// for 文と違って、初期化処理・条件式・変化処理を書く必要がないため
// シンプルに記述可能
const sum = (numbers) => {
  let total = 0;
  numbers.forEach(num => {
      total += num;
  });
  return total;
}
console.log(sum([1, 2, 3, 4, 5])); // => 15

// filter メソッド
// 既存の配列から条件に合致した要素を集めて新しい配列を返す
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

// for...in文
// オブジェクトのプロパティを列挙する際
// 親オブジェクトのプロパティまで含めて検索するため
// 意図しない結果になる場合がある
// for...in文は正しく扱うのが難しいため、
// 別の方法で実装するようにする
const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}

// for...of 文
// 配列やイテラブルオブジェクトの要素に対してループ処理を行うための構文
const array2 = [1, 2, 3, 4, 5];

for (const element of array2) {
  console.log(element);
}