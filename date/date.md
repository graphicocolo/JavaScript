# 開発ログ 時刻関連機能

## 20221103

現在のコードの変数とメソッドまとめ

+ メソッド
  + その週の決まった曜日をセット（setDW(number)）
  + 日付数値を文字列に変換（dateToString(array)）
  + 月日を 0 パディング（引数が文字）（zeroPadding(string)）
  + 月日を 0 パディング（引数が数字）（toStringZeroPadding(number)）
  + 曜日を追加（addDW(number, locale, array)）
  + 曜日を返す（formattedDW(number, locale)）
  + 本日の日付を表示（dateTodayDisplay(array, dw, locale, classname)）
    + YYYY年MM月DD日の形式で表示
    + YYYY年MM月DD日DW曜日の形式で表示
    + YYYY/MM/DDの形式で表示
    + DW YYYY/MM/DDの形式で表示
  + 常に決まった曜日の日付と、その日から一週間後の日付を更新（routineDWDisplay(array, locale, classname)）

今後やること

+ ★クラスを使った記述にリファクタリング
+ 作成した関数に、引数がない場合を許容するときは、どう処理するのが一番良いか<br>
```if (!引数1 || !引数2) { return; }``` だとキリがないしスマートではない...
+ 関数(dateTodayDisplay)の中で似たような処理を複数箇所で行なっている。まとめるにはどうしたら良いか
  + クラス名の異なる DOM によって、日付を表示されるフォーマットを変えたい
+ グローバル関数と関数の違いと、作成した関数をどちらと捉えたら良いか、その基準について
+ ```dateTodayDisplay()``` や ```routineDWDisplay()``` について、ある特定のクラス名がある場合だけ、関数が機能するようにしたい
  + ★要素のクラス名を取得、それによって表示を変える
+ ```dateTodayDisplay()``` や ```routineDWDisplay()``` について、クラス名により条件分岐で振り分けるのではなく、もっと良いやり方はないか
+ ```dateTodayDisplay()``` や ```routineDWDisplay()``` について、デフォルト引数を設定するにはどうしたら良いか、また引数なしだと何もしない、という挙動を追加するにはどうしたら良いか