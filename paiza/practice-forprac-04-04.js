// paizaの森練習問題コンテスト過去問題4 オルタネーティングキャップス (paizaランク D 相当)
// https://paiza.jp/works/mondai/forest_contest_004/forest_contest_004__alternating_caps/edit?language_uid=javascript

// 昔日本の若者の間で流行ったギャル文字の一種に、あいうえおつやゆよわをぁぃぅぇぉっゃょゎで表記する、小文字文化と呼ばれるものがあります。例えば、おいしいおやつをぉぃしぃぉゃっのように表記します。
// 似たような文化として、alternating caps と呼ばれる表記法があります。これは、大文字と小文字を混ぜて文章を書く表記のことで、例えばprogrammingをPRogrAmMiNGのように表記します。
// alternating caps は読みにくいので、alternating caps で表記された英単語をすべて小文字に変換するプログラムを書いてください。

// 入力される値
// s
// 1行目に、alternating caps を用いて表記された英単語 s が与えられます。

// 期待する出力
// s をすべて小文字に変換し、1 行に出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// s は英小文字または英大文字から構成される
// 3 ≦ (s の長さ) ≦ 10

// 入力例1
// pAIza
// 出力例1
// paiza

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

  // 2. util ----------

  // 入力値から空白(半角・全角)を削除
  const removeWhitespace = (str) => {
    return str.replace(/[\s\u3000]+/g, '');
  }

  // 3. 判定関数 ----------

  // paiza では、1行目のみが空の場合は undefined を返す
  // 1行目と2行目が空の場合は [''] を返す
  // 1行目と2行目と3行目が空の場合は ['', ''] を返す

  // 1行目の値が空かどうか（lines[0]）
  // 論理積（```&&```）を使った式では、左辺が false の場合は左辺を返し、右辺を評価しない
  // 左辺が true の場合は右辺を返す（左辺が false の場合は左辺を返す）
  const isEmpty = data => data === undefined && true;

  // 空白文字が入っているかどうか
  const hasWhitespace = str => /[\s\u3000]/.test(str);

  // 配列の中身が空かどうか
  // 1行目未入力のまま改行し、2行目のみ入力値がある場合アラート表示
  const isArrayOfEmptyElm = arr => arr.every(item => item === '');

  // 単数行入力のところ複数行入力しているかどうか（2行目以降で改行もしくは1行目が未入力で2行目のみ入力値あり）
  const isArrayOfMoreThreeLines = arr => arr.length > 1;

  // 文字数の上限下限判定（単一の値の場合）
  const stringIsOutOfRange = (str, min, max) => {
    const result = !(str.length >= min && str.length <= max) && true;
    return result;
  }

  // 英字かどうか
  const isNotAlp = (data) => {
    // const result = removeWhitespace(data);
    return !/^[A-Za-z]*$/.test(data)
  };

  // 4. 条件判定関数 ----------
  const validateInput = (lines, firstLineVar) => {

    // アラート表示（1行目の値が空の場合）
    if (isEmpty(firstLineVar)) return '値を入力してください';

    // アラート表示（1行目に空白文字を入れた場合）
    if (hasWhitespace(firstLineVar)) return '入力値から空白を削除して入力してください';

    // アラート表示（何も入力しない改行が続いた場合）
    if (isArrayOfEmptyElm(lines)) return '1行目に値を入力してください';

    // アラート表示（入力が複数行にわたる場合（2行目以降で改行もしくは1行目が未入力で2行目のみ入力値あり））
    if (isArrayOfMoreThreeLines(lines)) return '1行で値を入力してください';

    // アラート表示（英字以外の値を入力した場合）
    if (isNotAlp(firstLineVar)) return '英字を入力してください';

    // アラート表示（決められた文字数外の値を入力した場合）
    if (stringIsOutOfRange(firstLineVar, 3, 10)) return '正しい文字数で入力してください';

    return ''; // 全ての条件を満たす場合は空文字を返す

  }

  // 5. 処理 ----------

  // 条件判定（エラー表示）
  const errorMessage = validateInput(lines, firstLineVar);
  if (errorMessage !== '') return console.log(errorMessage);
  
  const result = removeWhitespace(firstLineVar);
  console.log(result.toLowerCase());
    
});