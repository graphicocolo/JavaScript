// paizaの森練習問題コンテスト過去問題4 花言葉 (paizaランク D 相当)
// https://paiza.jp/works/mondai/forest_contest_004/forest_contest_004__d_flower_language/edit?language_uid=javascript

// 下記と同様のロジック
// testplace/code-js/paiza/practice-forprac-02-01.js
// paizaの森練習問題コンテスト過去問題2 競輪のユニフォーム
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_keirin/edit?language_uid=javascript

// 花の名前を入力すると、その花の花言葉を出力してくれるプログラムを作成することにしました。
// あらかじめ登録しておく花と花言葉は以下になります。
// ・rose（バラ）: I love you（あなたを愛しています）
// ・cosmos（コスモス）: harmony（調和）
// ・tulip（チューリップ）: perfect lover（理想の恋人）
// ・hydrangea（アジサイ）: heartlessness（冷酷）
// ・jasmine（ジャスミン）: amiability（愛嬌）
// 入力として花の名前が与えられるので、その花の花言葉を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// s

// 期待する出力
// 入力された花の花言葉を出力してください。
// ただし、それぞれの花の花言葉は以下になります。
// ・rose: I love you
// ・cosmos: harmony
// ・tulip: perfect lover
// ・hydrangea: heartlessness
// ・jasmine: amiability

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// sは、rose, cosmos, tulip, hydrangea, jasmine のいずれかの花の名前

// 入力例1
// rose
// 出力例1
// I love you

// 入力例2
// jasmine
// 出力例2
// amiability

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

  // 花言葉ペア
  const pairList = [
    { pairInput: 'rose', pairOutput: 'I love you' },
    { pairInput: 'cosmos', pairOutput: 'harmony' },
    { pairInput: 'tulip', pairOutput: 'perfect lover' },
    { pairInput: 'hydrangea', pairOutput: 'heartlessness' },
    { pairInput: 'jasmine', pairOutput: 'amiability' },
  ];

  // 2. 判定関数 ----------

  // 1行目の値が空かどうか（lines[0]）
  const isEmpty = data => data === undefined && true;

  // 空文字かどうか
  const isEmptyValue = data => data === '';

  // 入力されたワードが決まったものであるかどうか
  const isNotInPair = (input) => {
    const isValid = pairList.some(pair => pair.pairInput === input);
    return !isValid;
  };

  // 3. 条件判定関数 ----------
  const validateInput = (lines, firstLineVar) => {
    // アラート表示（1行目の値が空の場合）
    if (isEmpty(firstLineVar)) return '値を入力してください';

    // アラート表示（何も入力せず改行をした場合）
    if (lines.every(item => isEmptyValue(item))) return '値を入力してください';

    // アラート表示
    // （入力されたワードが決まったものではない場合）
    if (isNotInPair(firstLineVar)) return '正しい値を入力してください';

    return ''; // 全ての条件を満たす場合は空文字を返す
  }

  // 4. 処理 ----------

  // 条件判定（エラー表示）
  const errorMessage = validateInput(lines, firstLineVar);
  if (errorMessage !== '') return console.log(errorMessage);

  const getFlowerWord = (inputVar) => {
    if (pairList.some(i => i.pairInput === inputVar)) {
      const flowerWord = pairList.find(i => i.pairInput === inputVar).pairOutput;
      return flowerWord;
    } else {
      return '正しい値を入力してください';
    }
  }
  console.log(getFlowerWord(firstLineVar));
  
});