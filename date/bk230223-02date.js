const dateFunc = (() => {

  // 1. タイムスタンプから日本語表記でフォーマットされた日付を返す
  // 2. ○曜日に「更新日：○年○月○日（○）」「次回更新日：○年○月○日（○）」を更新（決まった曜日に更新）
  // 3. 常に決まった曜日の日付を取得（前後1週間ずつ取得）

  // 課題：HTML から曜日の設定を可能にしたい

  const today = new Date();

  // 1. タイムスタンプから日本語表記でフォーマットされた日付を返す
  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ja-JP', options);
  }
  // console.log('日本表記でフォーマットされた今日の日付：' + formattedDate(today.getTime()));

  // 2. 「更新日：○年○月○日（○）」を表示させる要素の取得
  const elmUpdatedDay = document.querySelectorAll('.updatedDay');
  // 2. 「次回更新日：○年○月○日（○）」を表示させる要素の取得
  const elmNextUpdatedDay = document.querySelectorAll('.nextUpdateDay');

  // 2. 決まった曜日の日付を取得（今週）
  // number に入れる数字は以下の通り
  // 日曜日：0、月曜日：1、火曜日：2、水曜日：3、木曜日：4、金曜日：5、土曜日：6
  const getDayOfThisWeek = (number) => {
    const dayOfThisWeek = new Date(today.setDate(today.getDate() - today.getDay() + number));
    return dayOfThisWeek;
  };
  const thisWednesday = formattedDate(getDayOfThisWeek(3));

  // 2. 決まった曜日のさらに一週間後の日付を取得（来週）
  const getDayOfNextWeek = (number) => {
    const dayOfNextWeek = new Date(today.setDate(today.getDate() - today.getDay() + number + 7));
    return dayOfNextWeek;
  };
  const nextWednesday = formattedDate(getDayOfNextWeek(3));

  // 2. 決まった曜日のさらに一週間前の日付を取得（先週）
  const getDayOfPrevWeek = (number) => {
    const dayOfPrevWeek = new Date(today.setDate(today.getDate() - today.getDay() + number - 7));
    return dayOfPrevWeek;
  };
  const prevWednesday = formattedDate(getDayOfPrevWeek(3));
  
  // 2. 水曜日を更新日としたい場合
  // 2. 今日が日曜日か月曜日か火曜日の場合
  if (today.getDay() >= 0 && today.getDay() <= 2) {
    elmUpdatedDay.forEach((prevUpdateItem) => {
      prevUpdateItem.append(prevWednesday);
    });
    elmNextUpdatedDay.forEach((nextUpdateItem) => {
      nextUpdateItem.append(thisWednesday);
    });    
  // 2. 今日が水曜日か木曜日か金曜日か土曜日の場合
  } else if ((today.getDay() === 3) || (today.getDay() >= 4 && today.getDay() <= 6)) {
    elmUpdatedDay.forEach((thisUpdateItem) => {
      thisUpdateItem.append(thisWednesday);
    });
    elmNextUpdatedDay.forEach((nextUpdateItem) => {
      nextUpdateItem.append(nextWednesday);
    });
  } else {
    return;
  }

  // 3. 今週の水曜日
  const displayDayOfThisWeek = document.querySelectorAll('.dayOfThisWeek');
  displayDayOfThisWeek.forEach((thisDateItem) => {
    thisDateItem.append(thisWednesday);
  });

  // 3. 先週の水曜日
  // ここで今週の水曜日の日付が表示されてしまう...
  const displayDayOfPrevWeek = document.querySelectorAll('.dayOfPrevWeek');
  displayDayOfPrevWeek.forEach((prevDateItem) => {
    prevDateItem.append(prevWednesday);
  });

  // 3. 来週の水曜日
  const displayDayOfNextWeek = document.querySelectorAll('.dayOfNextWeek');
  displayDayOfNextWeek.forEach((nextDateItem) => {
    nextDateItem.append(nextWednesday);
  });

})();