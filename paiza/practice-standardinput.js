// https://paiza.jp/works/mondai/stdin/problem_index?language_uid=javascript

// 【JS】よく使うバリデーションまとめ
// https://qiita.com/teshimaaaaa1101/items/1494906d04ab7c5f667d

// 【JavaScript】正規表現の記号とメタ文字まとめ
// https://codeclub965.com/?p=2062

// 【JavaScript】正規表現のパターンまとめ
// https://codeclub965.com/?p=2038

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
});