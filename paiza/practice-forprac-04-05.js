// paizaの森練習問題コンテスト過去問題4 パワー 100 倍 (paizaランク D 相当)
// https://paiza.jp/works/mondai/forest_contest_004/forest_contest_004__power_up/edit?language_uid=javascript

// あなたが作っているゲームでは、栄養ドリンクを飲むと攻撃力が一時的に 100 倍になります。
// 現在の攻撃力が与えられるので、栄養ドリンクを飲んだ後の攻撃力がいくつになるかを求めてください。

// 入力される値
// p
// 1 行目に、現在の攻撃力 p が整数で与えられます。

// 期待する出力
// 栄養ドリンクを飲んだ後の攻撃力を求め、1 行に出力してください。

// 条件
// 1 ≦ p ≦ 10^1000

// 入力例1
// 813
// 出力例1
// 81300

// 入力例2
// 123456789012345678901234567890
// 出力例2
// 12345678901234567890123456789000

// BigInt
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// べき乗 (**)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation

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
  const firstLineVar = lines[0];

  // 2. 判定関数 ----------

  // paiza では、1行目のみが空の場合は undefined を返す
  // 1行目と2行目が空の場合は [''] を返す
  // 1行目と2行目と3行目が空の場合は ['', ''] を返す

  // 1行目の値が空かどうか（lines[0]）
  const isEmpty = data => data === undefined;

  // 空白文字が入っているかどうか
  const hasWhitespace = str => /[\s\u3000]/.test(str);

  // 配列の中身が空かどうか
  // 1行目未入力のまま改行し、2行目のみ入力値がある場合アラート表示
  const isArrayOfEmptyElm = arr => arr.every(item => item === '');

  // 単数行入力のところ複数行入力しているかどうか（2行目以降で改行もしくは1行目が未入力で2行目のみ入力値あり）
  const isArrayOfMoreThreeLines = arr => arr.length > 1;

  // 数字のみ、1から始まる、長さが1～1000桁の範囲
  const isNotNumber = data => !/^[1-9][0-9]{0,999}$/.test(data);

  // 3. 条件判定関数 ----------
  const validateInput = (lines, firstLineVar) => {

    // アラート表示（1行目の値が空の場合）
    if (isEmpty(firstLineVar)) return '値を入力してください';

    // アラート表示（1行目に空白文字を入れた場合）
    if (hasWhitespace(firstLineVar)) return '入力値から空白を削除して入力してください';

    // アラート表示（何も入力しない改行が続いた場合）
    if (isArrayOfEmptyElm(lines)) return '1行目に値を入力してください';

    // アラート表示（入力が複数行にわたる場合（2行目以降で改行もしくは1行目が未入力で2行目のみ入力値あり））
    if (isArrayOfMoreThreeLines(lines)) return '1行で値を入力してください';

    // アラート表示（数字かどうか、1から始まる数字で最大1000桁までかどうか）
    if (isNotNumber(firstLineVar)) return '適切な値を入力してください';

    return ''; // 全ての条件を満たす場合は空文字を返す

  }

  // 4. 処理 ----------

  // 条件判定（エラー表示）
  const errorMessage = validateInput(lines, firstLineVar);
  if (errorMessage !== '') return console.log(errorMessage);
  
  const calculatedResult = BigInt(firstLineVar) * BigInt(100);
  console.log(calculatedResult.toString());

});