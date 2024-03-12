// paizaの森練習問題コンテスト過去問題1 自動車の燃費
// https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_car_fuel/edit?language_uid=javascript

// 自動車の実燃費を調べたいと思ったとき、以下のような手順で調べることができます。
// 1. 燃料を満タンにし、給油量を記録する
// 2. 給油が必要になるまでの走行距離を記録する
// 3. （記録した走行距離）/（記録した給油量）を計算する
// 給油量と（L）と記録した走行距離（km）が入力として与えられるので、
// 上の方法で燃費（km/L）を計算して出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// v d
// ・vは給油量（L）を表す整数値
// ・dは記録した走行距離（km）を表す整数値

// 期待する出力
// 自動車の燃費（km/L）を計算し、出力してください。
// ただし、燃費は小数点以下を切り捨てて出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 20 ≤ v ≤ 100
// 300 ≤ d ≤ 1500

// String.prototype.split()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split

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
  const datas = lines[0].split(' '); // 入力値を配列に格納
  const formattedDatas = datas.map((data) => Number(data)); // 配列に格納された各値を数値型に変換
  const [liter, distance] = formattedDatas;
  const judge1 = data1 => data1 >= 20; // 給油量適正入力値判定1
  const judge2 = data2 => data2 <= 100; // 給油量適正入力値判定2
  const judge3 = data3 => data3 >= 300; // 走行距離適正入力値判定1
  const judge4 = data4 => data4 <= 1500; // 走行距離適正入力値判定2
  if ((judge1(liter) && judge2(liter)) && (judge3(distance) && judge4(distance))) {
    const fuelEfficiency = Math.floor(distance / liter)
    console.log(fuelEfficiency);
  } else {
    console.log('適正な値を入力してください');
  }

  // ChatGPTが出力したコード
  
});