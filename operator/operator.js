/*
  後置インクリメント
 */

let a = 0;

// インクリメントを行い、インクリメント前の値を返す
// デクリメントの場合も同様
const b = a++;

console.log(`a の値：${a}、b の値：${b}`);

/*
  前置インクリメント
 */
let c = 5;

// インクリメントを行い、インクリメント後の値を返す
// デクリメントの場合も同様
const d = ++c;

console.log(`c の値：${c}、d の値：${d}`);

/*
  複合代入演算子
 */

// 複合代入演算子を使わない場合
let num = 20;
num = num + 10;
console.log(num);

// 複合代入演算子を使う場合
// 足し算
let num1 = 20;
num1 += 10;
console.log(num1);

// 引き算
let num2 = 20;
num2 -= 10;
console.log(num2);

// 掛け算
let num3 = 20;
num3 *= 10;
console.log(num3);

// 掛け算
let num4 = 20;
num4 /= 10;
console.log(num4);

/*
  厳密等価演算子
 */
// 値だけではなく型も同じ場合に true を返す
console.log(1 === '1');
console.log(1 === 1);

/*
  厳密不等価演算子
 */
// 値だけではなく型も異なる場合に true を返す
console.log(1 !== '1');
console.log(1 !== 1);

/*
  三項演算子
 */
const age = 22;
age > 20 ? console.log('年齢は20歳より上です') : console.log('年齢は20歳より上ではありません');

const greeting = (name) => {
  let state = name ? name : 'ゲスト';
  return `こんにちわ、${state}さん`;
}
console.log(greeting());
console.log(greeting('太郎'));
// 三項演算子の実践例1）
const num5 = '1300';
// num5 が数値ならばフォーマットされた値（1,300）を返し、そうでない場合は数値を入力するよう促す文を表示
const formattedNum = typeof num5 === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);
// 三項演算子の実践例2）
const checkSum = (sumVal1, sumVal2) => {
  return sumVal1 + sumVal2 > 100 ? '100を超えています！' : '許容範囲内です';
}
console.log(checkSum(50, 60));

/*
  分割代入
 */
// 配列を分割代入
const array1 = [1, 2, 3];
// 配列の順番通りに分割代入される
const [one, two, three] = array1;
console.log(one, two, three); // 1 2 3
// 分割代入を使用しない場合
console.log(array1[0], array1[1], array1[2]);

// オブジェクトを分割代入
const user = {
  name1: 'John',
  age1: 30,
  email1: 'john@example.com'
};
// 変数名は、オブジェクトのプロパティ名と一致する必要がある
// 一部のみ取り出す、順番が異なっていても良い
const { name1, age1, email1 } = user;
console.log(name1);  // 'John'
console.log(age1);   // 30
console.log(email1); // 'john@example.com'
// 別名をつけることもできる
const {name1: useName, age1: useAge, email1: useEmail} = user;
console.log(useAge, useEmail, useName);

/*
  論理積
 */
const text = "Hello, world!";
const message = text && "テキストが入力されています";
console.log(message); // "テキストが入力されています"が表示される

/*
  論理和
 */
const valA = 5;
const valB = 10;
const valC = null;

// a が truthy なので a の値が代入される
const result1 = valA || valB;
console.log(result1); // 5

// a が falsy なので b の値が代入される
const result2 = valC || valB;
console.log(result2); // 10

console.log(false || false); // false

const inputNum = null;
// const inputNum = 100;
const fee = inputNum || '金額未設定です';
console.log(fee);