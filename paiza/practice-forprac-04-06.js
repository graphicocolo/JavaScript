// paizaの森練習問題コンテスト過去問題4 おつり (paizaランク D 相当)
// https://paiza.jp/works/mondai/forest_contest_004/forest_contest_004__oturi/edit?language_uid=javascript

// あなたはレジ打ちのバイトをしています。
// あなたはおつりをお客さんに渡すとき、硬貨の枚数がなるべく少なくなるように工夫して渡したいと思っています。
// おつりの額が与えられるので、最小で何枚の硬貨でおつりを渡すことができるかを求めてください。
// ただし、おつりを渡すために使える硬貨は 1 円、5 円、10 円、50 円、100 円、500 円の 6 種類とし、各硬貨は好きなだけ使うことができるものとします。

// 入力される値
// p
// 1 行目に、おつりの額 p が整数で与えられます。

// 期待する出力
// おつり p 円を最小で何枚の硬貨で渡すことができるかを求め、1 行に出力してください。

// アイディア
// 与えられた値を、100の位、10の位、1の位にバラす
// 各位の数が5未満の場合、そのままの数を1の位の変数に格納
// 各位の数が5以上の場合、1 + (1の位の数 - 5) の計算を行う
// 新しい配列に各位の数字を順に格納
// 配列内の数字を全て足し合わせる

// 貪欲法 (Greedy Algorithm) を用いた解法
// おつりの額 p から、まず500円硬貨でできる限り引きます。
// 次に、100円硬貨でできる限り引きます。
// その次に50円硬貨、10円硬貨、5円硬貨、最後に1円硬貨の順で、おつりから引いていきます。
// 各硬貨で引いた分の枚数を合計していけば、最小の硬貨枚数を求めることができます。

// 条件
// 1 ≦ p < 1000

// 入力例1
// 813
// 出力例1
// 8

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

  // 数字かどうか
  const isNotNumber = data => !/^\d+$/.test(data);

  // 数値の上限下限判定（単一の値の場合）
  const isOutOfRange = (data, min, max) => {
    const convertData = Number(data);
    const result = !(convertData >= min && convertData < max);
    return result;
  }

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

    // アラート表示（数字かどうか）
    if (isNotNumber(firstLineVar)) return '数字を入力してください';

    // アラート表示（上限下限内かどうか）
    if (isOutOfRange(firstLineVar, 1, 1000)) return '適切な値を入力してください';

    return ''; // 全ての条件を満たす場合は空文字を返す

  }

  // 4. 処理 ----------

  // 条件判定（エラー表示）
  const errorMessage = validateInput(lines, firstLineVar);
  if (errorMessage !== '') return console.log(errorMessage);
  
  const minimumCoins = (p) => {
    const coins = [500, 100, 50, 10, 5, 1];
    let count = 0;
  
    for (let coin of coins) {
      count += Math.floor(p / coin); // その硬貨を使える枚数を計算
      p %= coin; // 残りのおつり額を更新
    }
  
    return count;
  }

  console.log(minimumCoins(firstLineVar));

});