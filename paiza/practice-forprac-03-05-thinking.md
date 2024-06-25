再帰とループの `i` と `start` の推移を明確にするため、詳細なトレースを以下に示します。ここでは、`numbers = [333, 222, 444, 666]` の例を使用します。

# 初期状態
- `start = 0`
- `sum = 0`
- `combination = []`
- `numbers = [333, 222, 444, 666]`

# トレース

## 注意

+ ```if (sum === 777)``` や ```if (sum > 777) return;``` に処理が移った場合、一つ上の再帰呼び出しに移動し、一つ上の再帰呼び出しの ```combination.pop();``` が実行され、さらに ```for (let i = start; i < numbers.length; i++)``` の ```i++``` が実行され、一つ上の再帰呼び出しの i が変更される
+ 再帰呼び出しにおいて、各再帰呼び出しの中で使われる変数（例えば i や start、combination など）はその特定の再帰呼び出しのスコープ内でのみ有効です。つまり、再帰呼び出し内の変数はその再帰呼び出しが終了した後に元の状態に戻り、他の再帰呼び出しの変数には影響を与えません。

## フルプロセストレース

次に、全体のプロセスをまとめてみます。

1. `findCombination(0, [], 0)`
2. `i = 0` -> `findCombination(333, [333], 1)`
   - `i = 1` -> `findCombination(555, [333, 222], 2)`
     - `i = 2` -> `findCombination(999, [333, 222, 444], 3)` -> `sum > 777` で return
     - `i = 3` -> `findCombination(1221, [333, 222, 666], 4)` -> `sum > 777` で return
   - ポップ -> `combination = [333]`
   - `i = 2` -> `findCombination(777, [333, 444], 3)` -> 成功
   - `i = 3` -> `findCombination(999, [333, 666], 4)` -> `sum > 777` で return
 - ポップ -> `combination = []`
3. `i = 1` -> `findCombination(222, [222], 2)`
   - `i = 2` -> `findCombination(666, [222, 444], 3)`
   - ポップ -> `combination = [222]`
   - `i = 3` -> `findCombination(888, [222, 666], 4)` -> `sum > 777` で return
 - ポップ -> `combination = []`

このようにして、すべての組み合わせが試され、777になる組み合わせが見つかった場合に記録されます。