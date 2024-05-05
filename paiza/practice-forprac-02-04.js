// paizaの森練習問題コンテスト過去問題2 セール販売 (paizaランク C 相当)
// https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__c_sale/edit?language_uid=javascript

// 機能追加1
// 1行目で入力した数値と
// パース後の配列データの要素数が異なっていたらコンソール出力

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
// 入力例2
// 4
// shirt 500
// pants 1000
// pants 500
// shoes 2000
// 入力例3
// 5
// pants 300
// pants 300
// pants 300
// shoes 300
// shoes 300

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
  // 必要データ定義----------
  // 購入総アイテム数
  const itemTotalNumber = Number(lines[0]);
  // 全ての商品情報を格納する配列
  const itemTotalData = [];
  
  // 1. 判定関数----------
  // 1-1. 購入総アイテム数判定
  const judgeItemTotalNumber = data => {
    // 空判定
    const isEmpty = !Number.isNaN(data) && true;
    // 整数判定
    const isInteger = Number.isInteger(data);
    // 正負判定
    const isSign = Math.sign(data) === 1 && true;
    // 限界値判定
    const isCorrectLimit = data >= 1 && data <= 10 && true;
    if (isEmpty && isInteger && isSign && isCorrectLimit) {
      return true;
    } else {
      return false;
    }
  }
  // 1-2. 各購入アイテムの価格条件判定
  const judgeItemPriceCorrectLimit = datas => datas.every(data => data.fee >= 200 && data.fee <= 4000);
  // 1-3. 商品にpantsが含まれているかどうか
  const judgeHasPants = (datas) => {
    // 配列内の各オブジェクトを検査し、itemName プロパティが 'pants' であるかを判定
    for (const data of datas) {
      if (data.itemName === 'pants') {
        return true; // 'pants' が見つかったら true を返す
      }
    }
    return false; // 'pants' が見つからなかった場合は false を返す
  }

  // 2. ユーティリティ関数----------
  // 2-1. 2行目以降の入力データをパース
  const parseTotalItemData = (data, arr) => {
    const [itemName, feeStr] = data.split(' ');
    const fee = parseInt(feeStr);
    arr.push({ itemName, fee });
  };
  // 2-2. 合計額算出
  const calcTotalFee = (datas) => {
    let baseTotalFee = 0;
    for (const data of datas) {
      baseTotalFee += data.fee;
    }
    return baseTotalFee;
  }

  if (judgeItemTotalNumber(itemTotalNumber)) {
    for (let i = 0; i < itemTotalNumber; i++) {
      parseTotalItemData(lines[1 + i], itemTotalData);
    }
    if (judgeItemPriceCorrectLimit(itemTotalData)) {
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
    console.log('購入する商品数が間違っています');
  }
});