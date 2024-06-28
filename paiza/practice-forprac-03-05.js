// paizaの森練習問題コンテスト過去問題3 ラッキーナンバー
// https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__b_lucky_number/edit?language_uid=javascript

// 与えられた数字を組み合わせて、ラッキーナンバー777を作ろうと考えました。
// n個の自然数が与えられるので、足して777になる数字の組み合わせを見つけて、
// それらの数字を小さい順に出力してください。
// ただし、そのような組み合わせが複数ある場合には multiple answers
// そのような組み合わせがない場合には no answer
// を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// n
// x_1
// x_2
// ...
// x_n
// ・入力される自然数の数n
// ・x_1, x_2, ..., x_n は自然数
// ・入力はn + 1行となり、末尾に改行を一つ含みます。

// 期待する出力
// 足して777になる組み合わせがある場合には、その数字を昇順にスペース区切りで出力してください。
// ただし、そのような組み合わせが
// ・複数ある場合には、multiple answers
// ・存在しない場合には、no answer
// を出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ n ≤ 8
// 1 ≤ x_1, x_2, ..., x_n ≤ 1000

// 入力例1
// 4
// 333
// 222
// 444
// 666
// 出力例1
// 333 444

// 入力例2
// 4
// 111
// 222
// 333
// 444
// 出力例2
// multiple answers

// 入力例3
// 4
// 800
// 125
// 310
// 602
// 出力例3
// no answer

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

  // 数字にキャスト（単一の値）
  // Number(...)でキャスト
  
  // 数字にキャスト（配列の要素全て）
  const elemToNumber = (array) => {
    const newArray = array.map((item) => Number(item.trim(' ')));
    return newArray;
  }

  // linesから1行目の値を削除
  const deleteElm = (array, indexDelete) => {
    const newArray = array.filter((_, index) => index !== indexDelete);
    return newArray;
  }

  // 3. 判定関数 ----------

  // 1行目の値が空かどうか（lines[0]）
  const isEmpty = data => data === undefined && true;

  // 空文字かどうか
  const isEmptyValue = data => data === '';

  // 数字
  const isNotNumber = data => !/^\d+$/.test(data);

  // 1行目に入力された数字と、2行目以降の文字が入力されている行数が合っているかどうか
  const isNotLinesMatch = array => !(Number(array[0]) === Number(array.length - 1));

  // 数値の上限下限判定（単一の値の場合）
  const isOutOfRange = (data, min, max) => {
    const result = !(data >= min && data <= max);
    return result;
  }

  // 数値の上限下限判定（配列の場合）
  const arrayIsOutOfRange = (array, min, max) => {
    const result = !(array.every(item => item >= min && item <= max));
    return result;
  }

  // 4. 条件判定関数 ----------
  const validateInput = (lines, firstLineVar) => {
    // アラート表示（1行目の値が空の場合）
    if (isEmpty(firstLineVar)) return '値を入力してください';

    // アラート表示（何も入力せず改行をした場合）
    if (lines.every(item => isEmptyValue(item))) return '値を入力してください';

    // アラート表示（数字以外の場合）
    if (lines.every(item => isNotNumber(item))) return '数字を入力してください';

    // 入力値が数字だった場合、キャストする
    const numberedArray = elemToNumber(lines);

    // アラート表示
    // （1行目に入力された数字と、2行目以降の文字が入力されている行数が異なっている場合）
    if (isNotLinesMatch(numberedArray)) return '正しい値を入力してください1';
    // judgeInputMatch(lines) || '正しい値を入力してください');

    // アラート表示
    // （値の数値が条件に適合しているかどうか）
    if (isOutOfRange(numberedArray[0], 1, 8)) return '正しい値を入力してください2';

    // アラート表示
    // （配列の要素の数値が条件に適合しているかどうか）
    if (arrayIsOutOfRange(deleteElm(numberedArray, 0), 1, 1000)) return '正しい値を入力してください3';

    return ''; // 全ての条件を満たす場合は空文字を返す
  }

  // 5. 処理 ----------

  // 条件判定（エラー表示）
  const errorMessage = validateInput(lines, firstLineVar);
  if (errorMessage !== '') return console.log(errorMessage);

  // 数字にキャスト（配列の要素全て）
  const numberedArray = elemToNumber(lines);
  
  // linesから1行目の値を削除
  const newNumberedArray = deleteElm(numberedArray, 0);

  // 組み合わせ関数（ビットマスク）
  function findLuckyCombination(numbers) {
    const targetSum = 777;
    const n = numbers.length;
    let foundCombination = null;
    let multipleAnswers = false;
  
    // Iterate through all possible combinations using bitmask
    for (let i = 1; i < (1 << n); i++) {
      let sum = 0;
      let combination = [];
  
      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
          sum += numbers[j];
          combination.push(numbers[j]);
        }
      }
  
      if (sum === targetSum) {
        combination.sort((a, b) => a - b);
        if (foundCombination === null) {
          foundCombination = combination;
        } else if (JSON.stringify(foundCombination) !== JSON.stringify(combination)) {
          multipleAnswers = true;
          break;
        }
      }
    }
  
    if (multipleAnswers) {
      console.log('multiple answers');
    } else if (foundCombination) {
      console.log(foundCombination.join(' '));
    } else {
      console.log('no answer');
    }
  }

  findLuckyCombination(newNumberedArray);
});