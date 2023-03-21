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