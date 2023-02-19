const dateFunc = (() => {

  const today = new Date();
  
  // タイムスタンプから日本語表記でフォーマットされた日付を返す
  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ja-JP', options);
  }
  // console.log('日本表記でフォーマットされた今日の日付：' + formattedDate(today.getTime()));

  // 今週の火曜日
  const thisTuesday = new Date(today.getTime() + ((9 - today.getDay()) % 7) * 24 * 60 * 60 * 1000);
  console.log('今週の火曜日:' + formattedDate(thisTuesday));

  // 先週の火曜日
  const prevTuesday = new Date(thisTuesday.getTime() - (7 * 24 * 60 * 60 * 1000));
  console.log('先週の火曜日:' + formattedDate(prevTuesday));

  // 来週の火曜日
  const nextTuesday = new Date(thisTuesday.getTime() + (7 * 24 * 60 * 60 * 1000));
  // ↓これでもいけたが該当曜日を超えるとエラーかも
  // const nextTuesday = new Date(today.getTime() + (9 - today.getDay()) * 24 * 60 * 60 * 1000);
  console.log('来週の火曜日:' + formattedDate(nextTuesday));

  const displayDayOfThisWeek = document.getElementById('dayOfThisWeek');
  displayDayOfThisWeek.textContent = formattedDate(thisTuesday);

})();