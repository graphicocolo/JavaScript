// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// 乗客人数

// 【JavaScript】some()で配列に条件を満たす要素が存在するか判定する
// https://into-the-program.com/javascript-some-check-element-condition-exist-array/

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
  // STEP: 1 入力された 2 つの文字列を出力
  // lines.map((data) => {
  //   if ((0 < data.length) && (data.length <= 10) && (data.match(/^[a-z]*$/))) {
  //     console.log(data);
  //   } else { 
  //     console.log('');
  //   }
  // });

  // STEP: 2 引き算・掛け算
  // 条件分岐が複数あり紛らわしい
  // const datas = lines[0].split(' ');
  // const value1 = Number(datas[0]);
  // const value2 = Number(datas[1]);
  // if ((Number.isInteger(value1)) && (Number.isInteger(value2)) && (value1 >= 0 ) && (value1 < 1000) && (value2 >= 0 ) && (value2 < 1000)) {
  //   const calc1 = value1 - value2;
  //   const calc2 = value1 * value2;
  //   console.log(`${calc1} ${calc2}`);
  // }
  // 条件分岐をまとめた
  // const datas = lines[0].split(' ');
  // const changedDatas = datas.map((data) => Number(data));
  // const value1 = changedDatas[0];
  // const value2 = changedDatas[1];
  // const judge1 = data1 => data1 >= 0;
  // const judge2 = data2 => data2 < 1000;
  // const judge3 = data3 => Number.isInteger(data3);
  // if (changedDatas.every(judge1) && changedDatas.every(judge2) && changedDatas.every(judge3)) {
  //   const calc1 = value1 - value2;
  //   const calc2 = value1 * value2;
  //   console.log(`${calc1} ${calc2}`);
  // }

  // STEP: 3 代入演算 2
  // const datas = lines[0].split(' ');
  // const changedDatas = datas.map((data) => Number(data));
  // const judge1 = data1 => data1 >= 0;
  // const judge2 = data2 => data2 < 1000;
  // const judge3 = data3 => Number.isInteger(data3);
  // if (changedDatas.every(judge1) && changedDatas.every(judge2) && changedDatas.every(judge3)) {
  //   let N = 0;
  //   N += changedDatas[0];
  //   N *= changedDatas[1];
  //   N %= changedDatas[2];
  //   console.log(N);
  // }

  // 乗客人数
  const datas = lines[0].split(' ');
  const changedDatas = datas.map((data) => Number(data));
  const judge1 = data1 => data1 >= 1;
  const judge2 = data2 => data2 <= 1000;
  const judge3 = data3 => Number.isInteger(data3);
  if ((judge1(changedDatas[0]) && judge2(changedDatas[0])) && 
    (judge1(changedDatas[2]) && judge2(changedDatas[2])) && 
    ((changedDatas[1] >= 0) && (changedDatas[1] < changedDatas[0])) && 
    changedDatas.every(judge3)) {
      let N = changedDatas[0];
      N -= changedDatas[1];
      N += changedDatas[2];
      console.log(N);
  }
});