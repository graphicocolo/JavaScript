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

  // 2. 決まった曜日の日付を取得
  // number に入れる数字は以下の通り
  // 日曜日：7、月曜日：8、火曜日：9、水曜日：10、木曜日：11、金曜日：12、土曜日：13
  const getDateDayOfWeek = (number) => {
    const dateDayOfWeek = new Date(today.getTime() + ((number - today.getDay()) % 7) * 24 * 60 * 60 * 1000);
    return dateDayOfWeek;
  };

  // 2. 決まった曜日のさらに一週間後の日付を取得
  const getNextDateDayOfWeek = (number) => {
    const nextDateDayOfWeek = new Date(today.getTime() + ((number - today.getDay()) % 7) * 24 * 60 * 60 * 1000 + (7 * 24 * 60 * 60 * 1000));
    return nextDateDayOfWeek;
  };

  // 2. 決まった曜日のさらに一週間前の日付を取得
  const getPrevDateDayOfWeek = (number) => {
    const prevDateDayOfWeek = new Date(today.getTime() + ((number - today.getDay()) % 7) * 24 * 60 * 60 * 1000 - (7 * 24 * 60 * 60 * 1000));
    return prevDateDayOfWeek;
  };
  
  // 2. 今日が日曜日か月曜日か火曜日の場合
  if (today.getDay() >= 0 && today.getDay() <= 2) {
    elmUpdatedDay.forEach((prevUpdateItem) => {
      prevUpdateItem.append(formattedDate(getPrevDateDayOfWeek(9)));
    });
    elmNextUpdatedDay.forEach((nextUpdateItem) => {
      nextUpdateItem.append(formattedDate(getDateDayOfWeek(9)));
    });    
  // 2. 今日が水曜日か木曜日か金曜日か土曜日の場合
  } else if ((today.getDay() === 3) || (today.getDay() >= 4 && today.getDay() <= 6)) {
    elmUpdatedDay.forEach((thisUpdateItem) => {
      thisUpdateItem.append(formattedDate(getDateDayOfWeek(9)));
    });
    elmNextUpdatedDay.forEach((nextUpdateItem) => {
      nextUpdateItem.append(formattedDate(getNextDateDayOfWeek(9)));
    });
  } else {
    return;
  }

  // 3. 今週の火曜日
  const thisTuesday = getDateDayOfWeek(9);
  const displayDayOfThisWeek = document.querySelectorAll('.dayOfThisWeek');
  displayDayOfThisWeek.forEach((thisDateItem) => {
    thisDateItem.append(formattedDate(thisTuesday));
  });

  // 3. 先週の火曜日
  const prevTuesday = getPrevDateDayOfWeek(9);
  const displayDayOfPrevWeek = document.querySelectorAll('.dayOfPrevWeek');
  displayDayOfPrevWeek.forEach((prevDateItem) => {
    prevDateItem.append(formattedDate(prevTuesday));
  });

  // 3. 来週の火曜日
  const nextTuesday = getNextDateDayOfWeek(9);
  const displayDayOfNextWeek = document.querySelectorAll('.dayOfNextWeek');
  displayDayOfNextWeek.forEach((nextDateItem) => {
    nextDateItem.append(formattedDate(nextTuesday));
  });

  // const nextTuesday = new Date(thisTuesday.getTime() + (7 * 24 * 60 * 60 * 1000));
  // ↓これでもいけたが該当曜日を超えるとエラーかも
  // const nextTuesday = new Date(today.getTime() + (9 - today.getDay()) * 24 * 60 * 60 * 1000);

})();