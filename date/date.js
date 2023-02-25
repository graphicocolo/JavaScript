const dateFunc = (() => {

  // 1. 日本語表記でフォーマットされた日付を返す
  // 2. 常に決まった曜日の日付を取得（前後1週間ずつ取得）
  // 3. ○曜日に「更新日：○年○月○日（○）」「次回更新日：○年○月○日（○）」を更新（決まった曜日に更新）

  // 課題：HTML から曜日の設定を可能にしたい
  // data 属性を利用する（HTML5）
  // https://developer.mozilla.org/ja/docs/Learn/HTML/Howto/Use_data_attributes

  // ベースの日付
  const today = new Date();
  // このまま使用すると参照渡しになるため使用する際はgetTime()をはさむ
  // const useDate = new Date(today.getTime());

  // https://qiita.com/jkr_2255/items/304b6326c7fc54e0aaa2
  // Dateをコピーしたい場合、bar=new Date(foo.getTime())このように、既存のDateから時間値を取り出して、それをコンストラクタに投げることで、同じ値を持った新規オブジェクトを作ることができます。bar=new Date(foo)のようにも書けます。この形でも、fooはいったんプリミティブに変換されて数値となっているので、動作としては同じですし、コピーコンストラクタにも見えるので意味を取りづらいこともないでしょう。
  // https://cly7796.net/blog/javascript/copy-dates-with-javascript/

  // 表示要素
  // 今週の○曜
  const elmDayOfThisWeek = document.querySelectorAll('.dayOfThisWeek');
  // 先週の○曜
  const elmDayOfPrevWeek = document.querySelectorAll('.dayOfPrevWeek');
  // 来週の○曜
  const elmDayOfNextWeek = document.querySelectorAll('.dayOfNextWeek');
  // 更新日
  const elmUpdatedDay = document.getElementById('updatedDay');
  // 次回更新日
  const elmNextUpdatedDay = document.getElementById('nextUpdateDay');

  // 1. 日本語表記でフォーマットされた日付を返す
  const formattedDate = (beforeDate) => {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return beforeDate.toLocaleDateString('ja-JP', options);
  }

  // 2. 今週の○曜日を取得
  // 求めたい曜日に応じて引数 number に、0から6の間の数字を足す
  // 日曜日0、月曜日1、火曜日2、水曜日3、木曜日4、金曜日5、土曜日6
  const basisDayOfWeek = 3;

  // HTML ファイル内の複数箇所で今週の○曜日の日付を表示させたい場合は、class を指定した要素を使う
  // HTML ファイルから曜日を指定したい場合は、id を指定した要素を使う（ただし、複数箇所での表示は無理）

  const getDateBaseDayOfThisWeek = (number) => {
    const dateBaseDayOfThisWeek = new Date(today.getTime());
    // 目的の今週の曜日の日付
    dateBaseDayOfThisWeek.setDate(dateBaseDayOfThisWeek.getDate() - dateBaseDayOfThisWeek.getDay() + number);
    return formattedDate(dateBaseDayOfThisWeek);
  }
  // 変数に入れると使い回し可能
  const dayOfThisWeek = getDateBaseDayOfThisWeek(basisDayOfWeek);

  // 2. 先週の○曜日を取得
  // 求めたい曜日に応じて引数 number に、0から6の間の数字を足す
  // 日曜日0、月曜日1、火曜日2、水曜日3、木曜日4、金曜日5、土曜日6
  const getDateBaseDayOfPrevWeek = (number) => {
    const dateBaseDayOfPrevWeek = new Date(today.getTime());
    // 目的の先週の曜日の日付
    dateBaseDayOfPrevWeek.setDate(dateBaseDayOfPrevWeek.getDate() - dateBaseDayOfPrevWeek.getDay() + number - 7);
    return formattedDate(dateBaseDayOfPrevWeek);
  }
  // 変数に入れると使い回し可能
  const dayOfPrevWeek = getDateBaseDayOfPrevWeek(basisDayOfWeek);

  // 2. 来週の○曜日を取得
  // 求めたい曜日に応じて引数 number に、0から6の間の数字を足す
  // 日曜日0、月曜日1、火曜日2、水曜日3、木曜日4、金曜日5、土曜日6
  const getDateBaseDayOfNextWeek = (number) => {
    const dateBaseDayOfNextWeek = new Date(today.getTime());
    // 目的の来週の曜日の日付
    dateBaseDayOfNextWeek.setDate(dateBaseDayOfNextWeek.getDate() - dateBaseDayOfNextWeek.getDay() + number + 7);
    return formattedDate(dateBaseDayOfNextWeek);
  }
  // 変数に入れると使い回し可能
  const dayOfNextWeek = getDateBaseDayOfNextWeek(basisDayOfWeek);

  // 2. 今週の○曜日を表示
  elmDayOfThisWeek.forEach((thisDateItem) => {
    thisDateItem.append(dayOfThisWeek);
  });

  // 2. 先週の○曜日を表示
  elmDayOfPrevWeek.forEach((prevDateItem) => {
    prevDateItem.append(dayOfPrevWeek);
  });

  // 2. 来週の○曜日を表示
  elmDayOfNextWeek.forEach((nextDateItem) => {
    nextDateItem.append(dayOfNextWeek);
  });

  // 3. 決まった曜日を更新日とする
  // 今日がその日より前の曜日なら先週の更新日を表示
  // 今日がその日より後の曜日なら今週の更新日を表示

  // 更新日の曜日を設定
  // 日曜日0、月曜日1、火曜日2、水曜日3、木曜日4、金曜日5、土曜日6
  const updatedDayOfWeek = parseInt(elmUpdatedDay.dataset.dayofweek);
  // 今日の曜日を取得（0〜6の値で取得される）
  const todayDayOfWeek = new Date(today.getTime()).getDay();

  // 今週の更新日を取得
  const updatedDateDayOfThisWeek = getDateBaseDayOfThisWeek(updatedDayOfWeek);
  // 先週の更新日を取得
  const updatedDateDayOfPrevWeek = getDateBaseDayOfPrevWeek(updatedDayOfWeek);
  // 来週の更新日を取得
  const updatedDateDayOfNextWeek = getDateBaseDayOfNextWeek(updatedDayOfWeek);

  if (updatedDayOfWeek > todayDayOfWeek) {
    const addTextUpdated = document.createTextNode(updatedDateDayOfPrevWeek);
    const addTextNextUpdated = document.createTextNode(updatedDateDayOfThisWeek);
    elmUpdatedDay.appendChild(addTextUpdated);
    elmNextUpdatedDay.appendChild(addTextNextUpdated);
  } else {
    const addTextUpdated = document.createTextNode(updatedDateDayOfThisWeek);
    const addTextNextUpdated = document.createTextNode(updatedDateDayOfNextWeek);
    elmUpdatedDay.appendChild(addTextUpdated);
    elmNextUpdatedDay.appendChild(addTextNextUpdated);
  }

})();