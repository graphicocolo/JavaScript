// paizaの森練習問題コンテスト過去問題3 キーボードのシミュレーション
// https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__c_keyboard/edit?language_uid=javascript

// あなたは、以下のようなキーボードのシミュレーションをするプログラムを作成したいと考えました。
// ・キーは a, b, ..., z と shift, capslock のみ
// ・a, b, ..., z キーと shiftキーを同時に押すと、対応する大文字が出力される
// ・capslockキーを押すと、再びcapslockキーが押されるまで大文字が出力される
// キーボードで押されたキーが入力として与えられるので、
// パソコンの画面に表示される文字列を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// n
// c_1
// c_2
// ...
// c_n
// ・入力される文字列数n
// ・c_1, c_2, ..., c_n は押下されたキー
// ・入力はn + 1行となり、末尾に改行を一つ含みます。

// 期待する出力
// 押したキーによって表示される文字列を1行で表し、
// 最後に改行して出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ n ≤ 10
// c_1, c_2, ..., c_n は、以下のいずれかの文字列です。
// ・x
// ・shift x
// ・capslock
// ただし、xは小文字アルファベット1文字（a, b, ..., z）を表します。
// ただし、必ず何らかの文字列が表示されるものとし、
// また、capslockキーが有効なときshiftキーは押されないものとします。

// 入力例1
// 3
// a
// shift b
// c
// 出力例1
// aBc

// 入力例2
// 7
// a
// capslock
// b
// c
// d
// capslock
// f
// 出力例2
// aBCDf

// ポイント
// 入力の取得と初期化

// String.prototype.startsWith()
// startsWith() メソッドは文字列が引数で指定された文字列で始まるかを判定して true か false を返します。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

// String.prototype.trim()
// trim() メソッドは、文字列の両端からホワイトスペースを取り除き、元の文字列を変更せずに新しい文字列を返す。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim

// String.prototype.split()
// split() メソッドは、パターンを受け取り、String をパターン検索によって部分文字列の順序付きリストに分割し、これらの部分文字列を配列に入れ、その配列を返します。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Array.prototype.push()
// push() は Array インスタンスのメソッドで、配列の末尾に指定された要素を追加します。また返値として配列の新しい長さを返します。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// String.prototype.toUpperCase()
// toUpperCase() メソッドは、呼び出す文字列の値を（文字列でない場合、文字列に変換して）大文字に変換して返します。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// Array.prototype.join()
// join() は Array インスタンスのメソッドで、配列の全要素を順に連結した新しい文字列を返します。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join

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
  // 1. 必要値定義 ----------
  // 空判定のための値
  const emptyJudgeVar = lines[0];
  // 入力された行数
  const n = lines.length;
  // keyboardSimulation関数に渡す配列
  const keys = [];
  
  // 2. 判定 ----------
  // 空
  const judgeEmpty = data => data === undefined && true;
  // 英字小文字
  const judgeAlpLower = data => data.match(/^[a-z]*$/) && true;

  // 3. 関数 ----------
  function keyboardSimulation(n, keys) {
    let capslockOn = false;
    let output = [];
  
    for (let i = 0; i < n; i++) {
      let key = keys[i];
      
      if (key === "capslock") {
        capslockOn = !capslockOn;
      } else if (key.startsWith("shift")) {
        let letter = key.split(" ")[1];
        output.push(letter.toUpperCase());
      } else if (!(judgeAlpLower(key))) {
        // 入力値がアルファベット小文字でない場合
        // 何もしない
      } else {
        if (capslockOn) {
          output.push(key.toUpperCase());
        } else {
          output.push(key);
        }
      }
    }
  
    console.log(output.join(''));
  }

  // 4. 処理 ----------
  if (judgeEmpty(emptyJudgeVar)) return console.log('値を入力してください');
  // N行のデータの入力
  lines.map(line => keys.push(line.trim()));
  keyboardSimulation(n, keys);  
});