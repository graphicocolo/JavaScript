/*
[オブジェクト](https://jsprimer.net/basic/object/)
[JavaScript オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)
 */

/*
  オブジェクトの定義
 */
// 空のオブジェクト
const obj1 = {};
console.log(typeof obj1);

// オブジェクトの作成
const person = {
  // オブジェクトのプロパティ
  // プロパティは、キーと値で構成
  name: 'John',
  age: 30,
  occupation: 'Developer',
  interests: ['Programming', 'Music', 'Cooking'],
  // オブジェクトのメソッド
  greet: () => {
    console.log(`Hi, my name is ${this.name}. Nice to meet you!`);
  }
};
// オブジェクトのプロパティへのアクセス
console.log(person.name); // 'John'
// ドット記法でプロパティにアクセス
console.log(person.age); // 30
// ブラケット記法でプロパティにアクセス
console.log(person['age']); // 30
console.log(person.occupation); // 'Developer'
console.log(person.interests); // ['Programming', 'Music', 'Cooking']
// メソッドの呼び出し
person.greet(); // 'Hi, my name is John. Nice to meet you!'

// ES2015(ES6)から、キーと同名の値をセットにするときは、省略記法を使用することができるようになった
const role = 'Manager';
const att = {
  role
};
console.log(att); // {role: 'Manager'}

/*
  オブジェクトを分割代入
 */
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
  this
 */
const member = {
  name: 'Kate',
  message: function() {
    // 下記でも同様の結果が得られる
    // console.log('Bye ' + member.name);
    console.log('Bye ' + this.name);
  }
};
member.message();