// paizaの森練習問題コンテスト過去問題4 四季 (paizaランク D 相当)
// https://paiza.jp/works/mondai/forest_contest_004/forest_contest_004__four_seasons/edit?language_uid=javascript

// 下記と同様のロジック
// testplace/code-js/paiza/practice-forprac-02-01.js
// paizaの森練習問題コンテスト過去問題2 競輪のユニフォーム
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_keirin/edit?language_uid=javascript

// 気象庁は、季節を表す用語を以下のように定めています。
// ・ 春 ： 3 ~ 5 月の期間
// ・ 夏 ： 6 ~ 8 月の期間
// ・ 秋 ： 9 ~ 11 月の期間
// ・ 冬 ： 12 ~ 2 月の期間
// 1 以上 12 以下の整数 m が与えられます。m 月の季節を求めてください。
// ただし、プログラム上では春を spring、夏を summer、秋を autumn、冬を winter で表すことにします。

// 入力される値
// m
// 1 行目に、月を表す整数 m が与えられます。

// 期待する出力
// m 月の季節を求め、1 行に出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≦ m ≦ 12

// 入力例1
// 1
// 出力例1
// winter

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

  // 入力月と季節の組み合わせ
  const pairList = [
    { pairInput: ['3', '4', '5'], pairOutput: 'spring' },
    { pairInput: ['6', '7', '8'], pairOutput: 'summer' },
    { pairInput: ['9', '10', '11'], pairOutput: 'autumn' },
    { pairInput: ['12', '1', '2'], pairOutput: 'winter' },
  ];

  // 2. 判定関数 ----------

  // paiza では、1行目のみが空の場合は undefined を返す
  // 1行目と2行目が空の場合は [''] を返す
  //  1行目と2行目と3行目が空の場合は ['', ''] を返す

  // 1行目の値が空かどうか（lines[0]）
  const isEmpty = data => data === undefined && true;

  // 1行目のみ入力しているかどうか（2行以上入力しているかどうか）
  const isArrayOfMoreTwoLines = arr => arr.length > 1;

  // 入力されたワードが決まったものであるかどうか
  const isNotInPairInput = (value) => {
    return !pairList.some(pair => pair.pairInput.includes(value));
  }

  // 3. 条件判定関数 ----------
  const validateInput = (lines, firstLineVar) => {
    // アラート表示（1行目の値が空の場合）
    if (isEmpty(firstLineVar)) return '値を入力してください';

    // アラート表示（何も入力せず改行をした場合）
    if (isArrayOfMoreTwoLines(lines)) return '1行で値を入力してください';

    // アラート表示
    // （入力されたワードが決まったものではない場合）
    if (isNotInPairInput(firstLineVar)) return '正しい値を入力してください';

    return ''; // 全ての条件を満たす場合は空文字を返す
  }

  // 4. 処理 ----------

  // 条件判定（エラー表示）
  const errorMessage = validateInput(lines, firstLineVar);
  if (errorMessage !== '') return console.log(errorMessage);
  
  const result = pairList
    .map(pair => {
      if (pair.pairInput.includes(firstLineVar)) {
        return pair.pairOutput;
      }
    })
    .filter(output => output !== undefined)[0];
  
  console.log(result);
    
});