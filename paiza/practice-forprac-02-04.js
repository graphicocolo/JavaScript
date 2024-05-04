// paizaの森練習問題コンテスト過去問題2 セール販売 (paizaランク C 相当)
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__c_sale/edit?language_uid=javascript

// ある服屋さんはズボンの在庫を抱えてしまったため、以下のようなセールを行うことにしました。
// ・ズボンを一点以上買っていて、
// ・2000円以上お買い上げ
// の方は合計金額から500円引き。
// あるお客さんの購入アイテムが入力されるので、
// セール割引を適用したあとの合計金額を出力してください。

// 入力される値
// 入力は以下のフォーマットで与えられます
// n
// c_1 p_1
// c_2 p_2
// ...
// c_n p_n
// ・購入アイテム数n
// ・c_1, c_2, ..., c_n はアイテム名（shirt または pants　または shoes のいずれか）
// ・p_1, p_2, ..., p_n はそのアイテムの金額

// 期待する出力
// 購入アイテムの合計金額を出力してください。
// ただし、
// ・ズボン（pants）を一点以上買っていて、
// ・合計金額が2000円以上
// の場合は合計金額を500円引きして出力してください。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// 1 ≤ n ≤ 10
// 200 ≤ p_1, p_2, ..., p_n ≤ 4000

// 入力例1
// 3 購入総アイテム数
// shirt 1000
// shoes 2000
// shirt 500

// paiza.io
// https://paiza.io/ja

// 与えられる入力が下記の場合失敗
// 5
// pants 300
// pants 300
// pants 300
// shoes 300
// shoes 300

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

  // 1. 判定関数----------
  // 1-1. 空データ判定
  const isEmpty = data => data === '';
  // 1-2. 整数判定
  const judgeInteger = data => Number.isInteger(data);
  // 1-3. 正負判定
  const judgeSign = (data) => {
    if (Math.sign(data) === 1) {
      return true;
    } else if (Math.sign(data) === -1) {
      return false;
    } else {
      return;
    }
  }
  // 1-4. 購入総アイテム数の条件判定
  const judgeTotalItemNumber = data => data >= 1 && data <= 10
  // 1-5. 各購入アイテムの価格条件判定
  const judgeItemPriceNumber = datas => datas.every(data => data.fee >= 200 && data.fee <= 4000);
  // 1-6. 商品にpantsが含まれているかどうか
  const judgeHasPants = (datas) => {
    // 配列内の各オブジェクトを検査し、itemName プロパティが 'pants' であるかを判定
    for (const data of datas) {
      if (data.itemName === 'pants') {
        return true; // 'pants' が見つかったら true を返す
      }
    }
    return false; // 'pants' が見つからなかった場合は false を返す
  }
  // 入力行数判定
  // 入力行数の判定は可能か？
  // const judgeLineNumber = data => {
  //   const judgeArr = [];
  //   for (let i = 0; i < data; i++) {
  //     judgeArr.push(line[1 + i].length);
  //   }
  //   return judgeArr;
  // }

  // ユーティリティ関数----------
  // 行ごとの入力データをパース
  const parseData = (data, arr) => {
    const [itemName, feeStr] = data.split(' ');
    const fee = parseInt(feeStr);
    arr.push({ itemName, fee });
  };
  // 合計額算出
  const calcTotalFee = (datas) => {
    let baseTotalFee = 0;
    for (const data of datas) {
      baseTotalFee += data.fee;
    }
    return baseTotalFee;
  }

  // 必要データ定義----------
  // 購入総アイテム数
  const totalItemNumber = Number(lines[0]);
  // 商品入力値を格納する配列
  const itemTotalData = [];

  // まず1行目の商品点数データを適正判定
  if (!isEmpty(totalItemNumber) && judgeInteger(totalItemNumber) && judgeSign(totalItemNumber) && judgeTotalItemNumber(totalItemNumber)) {
    // 入力値を全てパース
    for (let i = 0; i < totalItemNumber; i++) {
      parseData(lines[1 + i], itemTotalData);
    }
    // パース後の各商品の価格の適正判定
    if (judgeItemPriceNumber(itemTotalData)) {

      // 合計額算出
      const totalFee = calcTotalFee(itemTotalData);

      if (totalFee >= 2000 && judgeHasPants(itemTotalData)) {
        console.log(totalFee - 500);
      } else {
        console.log(totalFee);
      }
    } else {
      console.log('商品の価格が適正ではありません');
    }
  } else {
    console.log('入力値が間違っています');
  }
});