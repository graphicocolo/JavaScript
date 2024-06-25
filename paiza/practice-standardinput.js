// https://paiza.jp/works/mondai/stdin/problem_index?language_uid=javascript

// 【JS】よく使うバリデーションまとめ
// https://qiita.com/teshimaaaaa1101/items/1494906d04ab7c5f667d

// paiza.io で確認済み
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
  // 1つのデータの入力
  // const word = lines[0];
  // const words = word.length;
  // if ((0 < words <= 100) && (word.match(/^[A-Za-z0-9]*$/))) {
  //   console.log(word);
  // } else {
  //   console.log('');
  // }

  // 1行のデータの入力
  // const word = lines[0];
  // const words = word.length;
  // if ((0 < words <= 100) && (word.match(/^[A-Za-z0-9\s]*$/))) {
  //   console.log(word);
  // } else {
  //   console.log('');
  // }

  // 3行のデータの入力
  const L = 3 // 行数指定
  for (let i = 0; i < L; i++) {
    const word = lines[i]; // 文字内容
    const words = word.length; // 文字数
    if ((0 < words <= 100) && (word.match(/^[A-Za-z0-9\s]*$/))) {
      console.log(word);
    } else {
      console.log('');
    }
  }

  // N行のデータの入力
  // 行数の指定がない場合
  // for (var i = 0; i < lines.length; i++) {
  //   console.log(lines[i]);
  // }
  // lines.map((line) => console.log(line))
  // 1行目に行数の指定がある場合
  // 指定する行数の条件 1 <= N <= 10
  // const N = Number(lines[0]);
  // if (1 <= N <= 10) { // これだとNが11の時うまくいかない
  // if ((1 <= N) && (N <= 10)) {
  //   for (let i = 0; i < N; i++) {
  //     const word = lines[i + 1]; // 文字内容
  //     const words = word.length; // 文字数
  //     if ((0 < words <= 100) && (word.match(/^[A-Za-z0-9\s]*$/))) {
  //       console.log(word);
  //     } else {
  //       console.log('');
  //     }
  //   }
  // } else if ((N === 0) || (N > 10)) {
  //   console.log('行数指定が正しくありません!');
  // }
  // console.log(typeof N)
  // !!!!!うまくいかない例!!!!!
  // Nが11でも許容してしまい、11行目の値の入力がないとエラー
  // if (1 <= N <= 10) {
  //   for (let i = 0; i < N; i++) {
  //     const word = lines[i + 1]; // 文字内容
  //     const words = word.length; // 文字数
  //     if ((0 < words <= 100) && (word.match(/^[A-Za-z0-9\s]*$/))) {
  //       console.log(word);
  //     } else {
  //       console.log('');
  //     }
  //   }
  // } else {
  //   console.log('行数指定が正しくありません!');
  // }

  // 3つのデータの入力
  const datas = lines[0].split(' ');
  datas.map((data) => {
    if ((0 < data.length) && (data.length <= 100) && (data.match(/^[A-Za-z0-9]*$/))) {
      console.log(data);
    }
  });

  // N個のデータの入力
  const linesLength = Number(lines[0]); // 出力行数
  const pendingDatas = lines[1].split(' '); // 出力データ
  pendingDatas.map((data) => {
    if ((0 < data.length) && (data.length <= 100) && (data.match(/^[A-Za-z0-9]*$/))) {
      console.log(data);
    } else {
      console.log('');
    }
  });

  // カンマ区切りの3つのデータの入力
  const pendingDatas2 = lines[0].split(','); // 出力データ
  pendingDatas2.map((data) => {
    if ((0 < data.length) && (data.length <= 100) && (data.match(/^[A-Za-z0-9]*$/))) {
      console.log(data);
    } else {
      console.log('');
    }
  });

  // カンマ区切りのN個のデータの入力
  const pendingDatas3 = lines[1].split(','); // 出力データ
  pendingDatas3.map((data) => {
    if ((0 < data.length) && (data.length <= 100) && (data.match(/^[A-Za-z0-9]*$/))) {
      console.log(data);
    } else {
      console.log('');
    }
  });

  // 1行目に、2行目以降の入力値数（入力行数）が入力される場合
  // 役立つ処理など

  // 1. 必要値定義 ----------
  // 空判定のための値
  const firstLineVar = lines[0];
  // 入力された行数
  const numberOfLines = lines.length;

  // 2. 判定 ----------

  // 1行目の値が空かどうか（lines[0]）
  const judgeEmpty = data => data === undefined && true;

  // 空文字かどうか
  const judgeNotValue = data => data === '' && true;

  // 英字
  const judgeAlp = data => data.match(/^[A-Za-z]*$/);

  // 英字小文字
  const judgeAlpLower = data => data.match(/^[a-z]*$/);

  // 英字大文字
  const judgeAlpUpper = data => data.match(/^[A-Z]*$/);

  // 数字
  // const judgeNum = data => data.match(/^[0-9]*$/) && true;
  const judgeNum = data => data.match(/^[0-9]*$/);

  // 1行目に入力された数字と、2行目以降の文字が入力されている行数が合っているかどうか
  const judgeInputMatch = data => Number(data[0]) === Number(data.length - 1);

  // 数値の上限下限判定（単一の値の場合）
  const judgeLowHighLimit = (judgeData, lowestlimitData, highestLimitData) => {
    const result = judgeData => judgeData >= lowestlimitData && judgeData <= highestLimitData;
    return result;
  }

  // 数値の上限下限判定（配列の場合）
  const arrayJudgeLowHighLimit = (judgeArrayData, lowestlimitData, highestLimitData) => {
    const result = judgeArrayData.every(item => item >= lowestlimitData && item <= highestLimitData);
    return result;
  }

  // 3. 処理 ----------

  // 数字にキャスト（単一の値）
  // Number(...)でキャスト
  
  // 数字にキャスト（配列の要素全て）
  const elemToNumber = (array) => {
    const newArray = array.map((item) => Number(item));
    return newArray;
  }

  // linesから1行目の値を削除
  const deleteElm = (array, indexDelete) => {
    const newArray = array.filter((_, index) => index !== indexDelete);
    return newArray;
  }

  // アラート表示（1行目の値が空の場合）
  if (judgeEmpty(firstLineVar)) return console.log('値を入力してください');

  // アラート表示（何も入力せず改行をした場合）
  if (lines.every(item => judgeNotValue(item))) return console.log('値を入力してください');

  // アラート表示（数字以外の場合）
  if (!lines.every(item => judgeNum(item))) return console.log('数字を入力してください');

  // アラート表示
  // （1行目に入力された数字と、2行目以降の文字が入力されている行数が異なっている場合）
  if (!judgeInputMatch(lines)) return console.log('正しい値を入力してください');
  // judgeInputMatch(lines) || console.log('正しい値を入力してください');

  // アラート表示
  // （値の数値が条件に適合しているかどうか）
  if (!judgeLowHighLimit(firstLineVar, 1, 8)) return console.log('正しい値を入力してください');

  // アラート表示
  // （配列の要素の数値が条件に適合しているかどうか）
  if (!arrayJudgeLowHighLimit(deleteElm(lines, 0), 1, 1000)) return console.log('正しい値を入力してください');
  

});