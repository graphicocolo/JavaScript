// paizaの森練習問題コンテスト過去問題4 じゃんけん (paizaランク D 相当)
// https://paiza.jp/works/mondai/forest_contest_004/forest_contest_004__rps_easy/edit?language_uid=javascript

// 下記と同様のロジック
// testplace/code-js/paiza/practice-forprac-02-01.js
// paizaの森練習問題コンテスト過去問題2 競輪のユニフォーム
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_keirin/edit?language_uid=javascript

// あなたは絶対に負けないじゃんけんプログラムを作ろうとしています。
// じゃんけんをする相手が出す手が与えられるので、相手に勝つ手を求めてください。
// ただし、プログラム上ではグー (Rock) を R、パー (Paper) を P、チョキ (Scissors) を S で表すことにします。

// 入力される値
// h
// ・ 1 行目に、相手が出す手 h が与えられます。

// 期待する出力
// 相手の手 h に勝つ手を求め、1 行に出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// ・ h は R、P、S のいずれか

// 入力例1
// R
// 出力例1
// P

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

  // じゃんけん組み合わせ
  const pairList = [
    { pairInput: 'R', pairOutput: 'P' },
    { pairInput: 'P', pairOutput: 'S' },
    { pairInput: 'S', pairOutput: 'R' },
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

  const getRpsMatching = (inputVar) => {
    if (pairList.some(i => i.pairInput === inputVar)) {
      const winShoot = pairList.find(i => i.pairInput === inputVar).pairOutput;
      return winShoot;
    } else {
      return '正しい値を入力してください';
    }
  }
  console.log(getRpsMatching(firstLineVar));
  
});