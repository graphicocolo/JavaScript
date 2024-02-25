// Dランクレベルアップメニュー
// https://paiza.jp/works/mondai/d_rank_level_up_problems/problem_index?language_uid=javascript

// FizzBuzz

// 【ES6】FizzBuzz問題のJavaScript最短コードを解説します
// https://qiita.com/obake_fe/items/041715068665dc94aac4

// 【JavaScript】FizzBuzz問題をワンライナーで書いてみた
// https://qiita.com/ken___/items/35f8c4e4499cb70e2eee

// JavaScfiptでワンライナーFizzBuzz
// https://qiita.com/fits-fujiura/items/6bf51edbe976480a5189

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
  // STEP: 1 ある数字までの出力 2
  const inputData = lines[0];
  const formattedData = Number(inputData);
  const judge1 = data1 => data1 >= 1;
  const judge2 = data2 => data2 <= 100;
  const judge3 = data3 => Number.isInteger(data3);
  if ((judge1(formattedData)) && (judge2(formattedData)) && (judge3(formattedData))) {
    for (let i = 0; i < formattedData; i++) {
      console.log(i + 1);
    }
  }

  // FizzBuzz

  // 長い記述
  // for (let i = 1; i < 101; i++) {
  //   if ((i % 3 === 0) && (i % 5 === 0)) {
  //     console.log('FizzBuzz');
  //   } else if (i % 3 === 0) {
  //     console.log('Fizz');
  //   } else if (i % 5 === 0) {
  //     console.log('Buzz');
  //   } else {
  //     console.log(i);
  //   }
  // }

  // 140byte
  // let num = 100; // FizzBuzz数
  // console.log(Object.keys(Array(num).fill()).map(i=>Number(i)+1).map(i=>i%3==0&&i%5==0?"Fizz Buzz":i%3==0?"Fizz":i%5==0?"Buzz":i).join("\n"))

  // 107byte
  // "Fizz" と "Buzz" をつなげてよい、かつ配列スプレッド構文も用いる
  // let num = 100; // FizzBuzz数
  // console.log([...Array(num+1).keys()].slice(1,num+1).map(i=>(i%3?'':'Fizz')+(i%5?'':'Buzz')||i).join("\n"))

  // 短いfor文1
  // let num = 100; // FizzBuzz数
  // for(i=0;i++<num;)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

  // 短いfor文2
  // for(i=1;i<101;i++){console.log(i%15?i%3?i%5?i:'Buzz':'Fizz':'FizzBuzz')}

  // 短いfor文3
  // for(i=0;++i<101;console.log(i%5?x||i:x+'Buzz'))x=i%3?'':'Fizz'

  // 別の書き方
  Array.from(Array(100)).map((_, i) => [i+1, 'fizz', 'buzz', 'fizzbuzz'][[1,0,0][(i+1)%3]+[2,0,0,0,0][(i+1)%5]]).forEach(item => console.log(item));

});