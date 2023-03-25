/*
[関数と宣言](https://jsprimer.net/basic/function-declaration/)
[関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions)
 */

/*
  関数の定義
 */
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// 関数の呼び出し
greet("John"); // Hello, John!
greet("Mary"); // Hello, Mary!

/*
  return 文
 */
function func4() {
  console.log('最初の処理');
  return;
  console.log('2番目の処理'); // 実行されない
}
func4();

/*
  アロー関数
 */
const displayMessage = () => {
  console.log('Hello World!');
}
displayMessage(); // Hello World!

// 従来の関数定義
function displayGreeting() {
  return 'おはようございます！';
}
console.log(displayGreeting());

// 省略記法
// 引数が1つなので引数を囲む () を省略
const func1 = val1 => {
  return val1;
};
console.log(func1('引数は1つ'));

// 処理が一行なので {} を省略
// 関数が return（返り値）しか持たない場合
// return とともに {} を省略できる
const func2 = val2 => val2;
console.log(func2('処理は一行'));

// return 以外の処理が必要な場合は return と {} が必要
const func3 = (a) => {
  a = a + 1
  return a * 100
}

/*
  コールバック関数
 */
// コールバック関数を受け取る関数の定義
function myFunc1(callback) {
  console.log('myFunc1 が呼ばれました');
  callback();
}
// コールバック関数の定義
function myCallback1() {
  console.log('myCallback1 が呼ばれました');
}
// 関数の呼び出し
myFunc1(myCallback1);
// 無名関数を引数とする
myFunc1(() => {
  console.log('無名関数1です');
});
// アロー関数で書き換え
const myFunc2 = (callback) => {
  console.log('myFunc2 が呼ばれました');
  callback();
}
const myCallback2 = () => {
  console.log('myCallback2 が呼ばれました');
}
myFunc2(myCallback2);
myFunc2(() => {
  console.log('無名関数2です');
});

/*
  即時関数
 */
// 書き方 その1
(function() {
  console.log('書き方 その1 - function による即時関数');
})(); // 終端で () をつけて作成した無名関数をその場で呼び出している

(() => {
  console.log('書き方 その1 - アロー関数による即時関数');
})();
// 書き方 その2
(function() {
  console.log('書き方 その2 - function による即時関数');
}());
// アロー関数では以下の記述はできない（エラー）
// (() => {
//   console.log('アロー関数による即時関数');
// }());

// 引数を持たせることもできる
(function (param1, param2) {
  console.log(`${param1}${param2}`);
}('foo', 'baz'));
((num1, num2) => {
  console.log(num1 + num2);
})(3, 5);

/*
  無名関数
 */
const greeting = function() {
  console.log("Hello, world!");
}
greeting();

/*
  関数のスコープ
 */
const funcScope = () => {
  var val1 = '変数val1';
  const val2 = '変数val2';
  let val3 = '変数val3';
}
// console.log(`${val1}${val2}${val3}`); // エラー

/*
  関数のスコープと変数の巻き上げ
 */
function funcHoisting() {
  // ここに変数宣言のみが巻き上げられる
  // 変数宣言前に変数を参照しているが
  // エラーにはならず undefined となる
  console.log(`1回目${hoisting}`);
  // 代入はそのままの位置に残る
  var hoisting = '関数内における変数の巻き上げ';
}
funcHoisting(); // undefined

/*
  関数のデフォルト引数
 */
const displayGreet = (name = 'Guest') => {
  console.log(`Hello, ${name}!`);
}
displayGreet(); // "Hello, Guest!"
displayGreet('John'); // "Hello, John!"

/*
  関数の残余引数
 */
const sum = (...numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
// 通常の仮引数と組み合わせて使う
const displayDivide = (first, ...others) => {
  console.log(first);
  console.log(others);
}
displayDivide('Ken', 'Mike', 'John');
// Ken
// (2) ['Mike', 'John']

/*
  関数とスプレッド構文
 */
const displaySum = (num1, num2) => console.log(num1 + num2);
const array = [1, 2];
// 普通に配列の値を渡す場合
displaySum(array[0], array[1]); // 3
// スプレッド構文を用いた場合
displaySum(...array); // 3