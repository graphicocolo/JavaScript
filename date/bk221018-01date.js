const dateFunc = (() => {

// https://next-k.site/blog/archives/2021/10/01/551
// https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14127270304

  const now = new Date();

  // 日付数値を文字列に変換
  // 【JavaScript】配列を引数渡しすると破壊的に動作する話【メモ書き】
  // https://qiita.com/yukuduri/items/53109d19d7cd488b499f
  const dateToString = (initArray) => {
    const dateItems = initArray.slice();
    const toStringArray = dateItems.map(item => String(item));
    return toStringArray;
  }
  
  // その週の決まった曜日をセットする
  const setDW = () => {
    // 0: 日曜日 1: 月曜日 2: 火曜日 3: 水曜日 4: 木曜日 5: 金曜日 6: 土曜日 
    const i = 1;
    return now.setDate(now.getDate() + i - now.getDay());
  }

  // 曜日を返す
  const formattedDW = (number, locale) => {
    const localeDWArray = ['日', '月', '火', '水', '木', '金', '土'];
    const globalDWArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if(locale === 'j') {
      return localeDWArray[number];
    } else if(locale === 'e') {
      return globalDWArray[number];
    } else {
      return;
    }
  }

  const Y = now.getFullYear();
  const M = now.getMonth() + 1;
  const D = now.getDate();
  const DW = now.getDay();

  const localeStrDW = formattedDW(DW, 'j');
  const globalStrDW = formattedDW(DW, 'e');

  const dateInitArray = [Y, M, D];
  const dateFormattedArray = dateToString(dateInitArray);

  const dateLocaleFixArray = dateFormattedArray.splice(localeStrDW);
  const dateGlobalFixArray = dateFormattedArray.push(globalStrDW);

  const dateAdjLocaleArray = [
    now.getFullYear(setDW()),
    now.getMonth(setDW()) + 1,
    now.getDate(setDW()),
    formattedDW(now.getDay(setDW()), 'j')
  ]
  const dateAdjGlobalArray = [
    now.getFullYear(setDW()),
    now.getMonth(setDW()) + 1,
    now.getDate(setDW()),
    formattedDW(now.getDay(setDW()), 'e')
  ]

  // dateTodayDisplay() として引数を渡すことで 1 つの関数にまとめられそう
  // 渡せそうな値は何か→クラス名

  const dateTodayDisplay = (options) => {
    const paragraph = document.querySelectorAll('p');
    options = options || {};
    let elmName = options.name || 'dateTodayAll';

    // console.log(document.getElementsByClassName('dateTodayAll'));

    // YYYY年MM月DD日DW曜日の形式で表示
    if(elmName === 'dateTodayAll' && document.getElementsByClassName('dateTodayAll')) {
      const dateTodayAllItems = document.querySelectorAll('.dateTodayAll');
      console.log(dateFormattedArray);
      // dateTodayAllItems.forEach(dateTodayAllItem => {
      //   dateTodayAllItem.append(`${dateLocaleFixArray}[0]年${dateLocaleFixArray}[1]月${dateLocaleFixArray}[2]日${dateLocaleFixArray}[3]曜日`);
      // });
    }
    // YYYY年MM月DD日の形式で表示
    // } else if(elmName === 'dateTodayYMD' && element.classList.contains('dateTodayYMD')) {
    //   const dateTodayAllItems = document.querySelectorAll('.dateTodayYMD');
    //   dateTodayAllItems.forEach(dateTodayAllItem => {
    //     dateTodayAllItem.append(`${dateLocaleFixArray}[0]年${dateLocaleFixArray}[1]月${dateLocaleFixArray}[2]日`);
    //   });
    // DW YYYY/MM/DDの形式で表示
    // } else if(elmName === 'dateTodayEAll' && element.classList.contains('dateTodayEAll')) {
    //   const dateTodayAllItems = document.querySelectorAll('.dateTodayEAll');
    //   dateTodayAllItems.forEach(dateTodayAllItem => {
    //     dateTodayAllItem.append(`${dateGlobalFixArray}[3] ${dateGlobalFixArray}[0]/${dateGlobalFixArray}[1]/${dateGlobalFixArray}[2]`);
    //   });
    // YYYY/MM/DDの形式で表示
    // } else if(elmName === 'dateTodayEYMD' && element.classList.contains('dateTodayEYMD')) {
    //   const dateTodayAllItems = document.querySelectorAll('.dateTodayEYMD');
    //   dateTodayAllItems.forEach(dateTodayAllItem => {
    //     dateTodayAllItem.append(`${dateGlobalFixArray}[0]/${dateGlobalFixArray}[1]/${dateGlobalFixArray}[2]`);
    //   });
    // } else {
    //   return;
    // }
  }

  // 常に月曜日の日付と、月曜日から一週間後の日付を更新

  window.addEventListener("load", () => {
    dateTodayDisplay('dateTodayAll');
    // dateTodayDisplayYMD();
    // dateTodayDisplayEAll();
    // dateTodayDisplayEYMD();
  });
  
})();

// window.addEventListener("load", () => {
  // dateTodayDisplay('dateTodayAll');
  // dateTodayDisplayYMD();
  // dateTodayDisplayEAll();
  // dateTodayDisplayEYMD();
// });