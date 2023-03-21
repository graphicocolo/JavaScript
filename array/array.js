/*
[配列](https://jsprimer.net/basic/array/)
[インデックス付きコレクション](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Indexed_collections)
 */

// 配列の定義
const fruits = ['apple', 'banana', 'orange', 'grape'];

// 配列の要素にアクセス
console.log(fruits[0]); // apple

// 配列の要素を変更
fruits[1] = 'kiwi';
console.log(fruits); // ['apple', 'kiwi', 'orange', 'grape']

// 配列に要素を追加
fruits.push('pear');
console.log(fruits); // ['apple', 'kiwi', 'orange', 'grape', 'pear']

// 配列の要素を削除
fruits.splice(2, 1);
console.log(fruits); // ['apple', 'kiwi', 'grape', 'pear']

// 配列の分割代入
const userInfo = ['太郎', 30];
// 配列に格納されている順番通りに任意の変数名を設定し抽出
const [userName, age] = userInfo;
// const [userName] = userInfo; // インデックスの途中までしか必要ない場合
const message = `${userName} さんの年齢は ${age} 歳です。`;
console.log(message); // 太郎 さんの年齢は 30 歳です。

// スプレッド構文を使った配列の展開
// 配列の展開
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2];
console.log(newArray); // [1, 2, 3, 4, 5, 6]

// 関数の引数に配列を渡す
function myFunction(a, b, c) {
  console.log(a + b + c);
}
const myArray = [1, 2, 3];
myFunction(...myArray); // 6

/*
 配列でよく使うメソッド
*/
// map()
// 配列の全ての要素に対して処理を行い
// 処理済みの新しい配列を返す
// 配列の定義
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number => {
  return number * 2;
}));
// 結果の出力
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // numbers の各値はそのまま

// filter()
// コールバック関数が true を返した値で新しい配列を作成
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
// 結果の出力
console.log(evenNumbers); // [2, 4]
console.log(numbers); // numbers の各値はそのまま

// forEach() 関数で配列の各要素を処理
numbers.forEach((number) => {
  console.log(number);
});
// 出力結果
// 1
// 2
// 3
// 4
// 5
numbers.forEach((element, index, array) => {
  console.log(element, index, array);
});
// 出力結果
// 1 0 (5) [1, 2, 3, 4, 5]
// 2 1 (5) [1, 2, 3, 4, 5]
// 3 2 (5) [1, 2, 3, 4, 5]
// 4 3 (5) [1, 2, 3, 4, 5]
// 5 4 (5) [1, 2, 3, 4, 5]