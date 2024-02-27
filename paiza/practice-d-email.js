// レベルアップ問題集 Dランク・スキルチェック過去問題セット 【殿堂入りキャンペーン】Eメールアドレス
// https://paiza.jp/works/mondai/d_rank_skillcheck_archive/email_address/edit?language_uid=javascript

// 【殿堂入りキャンペーン】Eメールアドレス

// paiza.io で確認済み
// https://paiza.io/ja

// 次はこれ？
// https://paiza.jp/works/mondai/forest_contest_001/problem_index?language_uid=javascript

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
  // 【殿堂入りキャンペーン】Eメールアドレス
  const regexJudge = (data) => {
    const regex = /^[A-Za-z0-9.]{1,64}$/;
    return regex.test(data);
  }
  // 1行目に何も入力しない場合、stringが返ってくる
  const data1 = lines[0];
  // 2行目に何も入力しない場合、なぜかundefinedが返ってくる
  // undefinedが返ってくる場合、a@undefinedと出力されてしまうため
  // それを防ぐ目的でNull 合体演算子で判定を行っている
  const data2 = lines[1] ?? '';
  console.log(regexJudge(data1) && regexJudge(data2) ? `${data1}@${data2}` : '');
});