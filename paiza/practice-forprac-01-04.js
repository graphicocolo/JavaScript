// paizaの森練習問題コンテスト過去問題1 背番号順
// https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__c_player_number/edit?language_uid=javascript

// n人の野球選手の名前が背番号と一緒に入力されます。
// 各選手の背番号と名前を、背番号の数字の小さい順に並び替えて出力してください。
// ただし、同じ背番号の選手は存在しないものとします。

// 入力される値
// 入力は以下のフォーマットで与えられます
// n
// b_1 p_1
// b_2 p_2
// ...
// b_n p_n
// ・入力される文字列数n
// ・b_1, b_2, ..., b_n は各選手の背番号
// ・p_1, p_2, ..., p_n は選手名で、大文字のアルファベットからなる文字列
// ・入力はn + 1行となり、末尾に改行を一つ含みます。

// 期待する出力
// 背番号と選手名を背番号の昇順に並び替えて出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ n ≤ 20 人数は1人以上20人以下
// 0 ≤ b_1, b_2, ..., b_n ≤ 99 背番号は0以上99以下
// b_1 ≠ b_2 ≠ ... ≠ b_n 背番号は必ず異なる数字
// 3 ≤ (p_1の長さ), (p_2の長さ), ..., (p_nの長さ) ≤ 10 選手名は3文字以上10文字以下

// Array.prototype.slice()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// 

// Array.prototype.toSorted()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Array.prototype.sort()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// 【JavaScript】数値のみを含む配列を sort() メソッドで並び替えるときは sort() メソッドの引数に比較関数を与える
// https://qiita.com/ndj/items/689e3eec398fc3c564fe

// Set() コンストラクター
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Set

// Set.prototype.has()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/has

// paiza.io
// https://paiza.io/ja

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  // ChatGPTが書いたコード
  const nop = Number(lines[0]);
  const pairs = lines.slice(1).map(line => {
    const [number, name] = line.split(' ');
    // 分割された各行の最初の要素（背番号）を整数に変換し、number プロパティに代入
    // 分割された各行の2番目の要素（名前）はそのままname プロパティに代入
    // 最終的に、背番号と名前のペアを含むオブジェクトを返す
    return { number: parseInt(number), name };
  });
  pairs.sort((a, b) => a.number - b.number);
  let valid = true;
  const numbers = new Set();
  pairs.forEach(pair => {
    if (numbers.has(pair.number) && pair.name.length < 3 && pair.name.length > 10 && pair.number < 0 && pair.number > 99) {
      valid = false;
    }
    numbers.add(pair.number);
    if (valid) {
      console.log(`${pair.number} ${pair.name}`);
    }
  });

  // let valid = true;
  // const numbers = new Set();
  // pairs.forEach(pair => {
  //   if (numbers.has(pair.number) || pair.name.length < 3 || pair.name.length > 10) {
  //     valid = false;
  //   }
  //   numbers.add(pair.number);
  // });

  // console.log("データの条件を満たしていますか？", valid ? "はい" : "いいえ");
});