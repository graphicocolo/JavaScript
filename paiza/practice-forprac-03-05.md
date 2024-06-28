基本的な条件判定

1行目が空かどうか
1行目の入力値が数字かどうか
1行目の値が条件に適合しているかどうか（1 ≤ n ≤ 8）

2行目が空かどうか
2行目以降の入力値が数字かどうか
2行目以降の入力値が条件に適合しているかどうか（1 ≤ x_1, x_2, ..., x_n ≤ 1000）
2行目以降の行数が1行目で指定した数と合っているかどうか



足して777になる数字の組み合わせを見つける条件判定



```
// 再帰関数ver
function findLuckyCombination(n, numbers) {
  // numbers 入力として与えられた自然数の配列です。ここから組み合わせを見つけます。
  let results = [];

  // 再帰的に組み合わせを探索する関数
  function findCombination(sum, combination, start) {
    // sum 現在の組み合わせの合計を保持します。これにより、目標値（この場合は777）に達したかどうかを判断します。
    // combination 現在の組み合わせを保持する配列です。これに選択された数字を追加し、再帰呼び出しが終了した後に削除します（バックトラッキング）。
    // start 現在のループの開始位置を示します。これにより、各ステップで次の要素を選択する際に、前に選択した要素を再び選択することを防ぎます。

    // このようにして、再帰呼び出しが終わるまでループと再帰を続けます。再帰呼び出しの度に `start` が新たに設定され、その `start` から `numbers` の要素をチェックしていきます。元の関数の文脈は保存されており、再帰から戻った時に元のループの `i` に戻って次の要素を試みます。

    if (sum === 777) {
      // 末尾に追加
      // さらに昇順に並び替え
      results.push([...combination].sort((a, b) => a - b));
      return;
    }
    if (sum > 777) return;

    for (let i = start; i < numbers.length; i++) { // ①
      combination.push(numbers[i]); // 末尾に追加
      findCombination(sum + numbers[i], combination, i + 1); // ②
      combination.pop();
    }
  }

  // 組合せ探索関数の初期化
  findCombination(0, [], 0);

  // 結果の処理
  if (results.length === 0) {
    console.log("no answer");
  } else {
    // 重複する組み合わせを排除
    const uniqueResults = Array.from(new Set(results.map(JSON.stringify)), JSON.parse);
    if (uniqueResults.length > 1) {
      console.log("multiple answers");
    } else {
      console.log(uniqueResults[0].join(' '));
    }
  }
}

// 入力例を扱うためのコード
const input = `4
333
222
444
666`;

const lines = input.trim().split('\n');
const n = parseInt(lines[0], 10);
const numbers = lines.slice(1).map(Number);

findLuckyCombination(n, numbers);
```

```
// ビットマスクver
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

// 入力の処理
const input = `4
333
222
444
666`;
const lines = input.trim().split('\n');
const n = parseInt(lines[0], 10);
const numbers = lines.slice(1).map(Number);

findLuckyCombination(numbers);

```

+ [ビット論理積 (&)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
+ [左シフト (<<)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)
+ [ビット演算を使ったUI表示判定実践 with React](https://zenn.dev/mssknd/articles/c1c61846b35389)
+ [JavaScriptでフラグをビットで管理する～複数の状態フラグを少ない容量で管理](https://www.marketechlabo.com/bit-flags/)
+ [ビット演算 (bit 演算) の使い方を総特集！ 〜 マスクビットから bit DP まで 〜](https://qiita.com/drken/items/7c6ff2aa4d8fce1c9361)