const dateFunc = (() => {

// https://next-k.site/blog/archives/2021/10/01/551
// https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14127270304

  const now = new Date();

  const Y = now.getFullYear();
  const M = now.getMonth() + 1;
  const D = now.getDate();
  const DW = now.getDay();
  const dateInitArray = [Y, M, D];
  const localeDWArray = ['日', '月', '火', '水', '木', '金', '土'];
  const globalDWArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // const test = String('テスト');
  // console.log(typeof test);

  // その週の決まった曜日をセットする
  const setDW = (number) => {
    // 0: 日曜日 1: 月曜日 2: 火曜日 3: 水曜日 4: 木曜日 5: 金曜日 6: 土曜日 
    const i = number;
    if (0 <= i < 7) {
      return now.setDate(now.getDate() + i - now.getDay());
    } else {
      return;
    }
  }

  const adjY = now.getFullYear(setDW(4));
  const adjM = now.getMonth(setDW(4)) + 1;
  const adjD = now.getDate(setDW(4));
  const adjDW = now.getDay(setDW(4));
  const dateAdjInitArray = [adjY, adjM, adjD];

  const nextBase = now.setDate(adjD + 7);
  const nextAdjY = now.getFullYear(nextBase);
  const nextAdjM = now.getMonth(nextBase) + 1;
  const nextAdjD = now.getDate(nextBase);
  const nexAdjDW = now.getDay(nextBase);
  const nextWeekArray = [nextAdjY, nextAdjM, nextAdjD];

  // 日付数値を文字列に変換
  // 【JavaScript】配列を引数渡しすると破壊的に動作する話【メモ書き】
  // https://qiita.com/yukuduri/items/53109d19d7cd488b499f
  const dateToString = (array) => {
    const dateItems = array.slice();
    const toStringArray = dateItems.map(item => String(item));
    return toStringArray;
  }

  // 月日を 0 パディング
  // 引数が文字
  const zeroPadding = (string) => {
    return string.padStart(2, '0');
  }
  // 引数が数字
  const toStringZeroPadding = (number) => {
    return String(number).padStart(2, '0');
  }
  // console.log(zeroPadding('12'));
  // console.log(toStringZeroPadding(12));

  // 曜日を追加
  const addDW = (number, locale, array) => {
    if(locale === 'j') {
      array.push(localeDWArray[number]);
    } else if(locale === 'e') {
      array.push(globalDWArray[number]);
    } else {
      return;
    }
  }

  // 曜日を返す
  const formattedDW = (number, locale) => {
    if(locale === 'j') {
      return localeDWArray[number];
    } else if(locale === 'e') {
      return globalDWArray[number];
    } else {
      return;
    }
  }

  // dateTodayDisplay() として引数を渡すことで1つの関数にまとめられそう
  // 渡せそうな値は何か→日付配列、曜日番号、日英別、クラス名
  // 月日のゼロパディングがまだ終わってない
  const dateTodayDisplay = (array, dw, locale, classname) => {
    if (!array || !dw || !locale || !classname) {
      return;
    }

    const toStringArray = dateToString(array);

    // YYYY年MM月DD日の形式で表示
    if (locale === 'j' && classname === 'dateTodayYMD' && document.getElementsByClassName('dateTodayYMD')) {
      const dateTodayYMDs = document.querySelectorAll('.dateTodayYMD');
      dateTodayYMDs.forEach(dateTodayYMD => {
        dateTodayYMD.append(`${toStringArray[0]}年${toStringArray[1]}月${toStringArray[2]}日`);
      });
    // YYYY年MM月DD日DW曜日の形式で表示
    } else if (dw && locale === 'j' && classname === 'dateTodayAll' && document.getElementsByClassName('dateTodayAll')) {
      addDW(dw, 'j', toStringArray);
      const dateTodayAllItems = document.querySelectorAll('.dateTodayAll');
      dateTodayAllItems.forEach(dateTodayAllItem => {
        dateTodayAllItem.append(`${toStringArray[0]}年${toStringArray[1]}月${toStringArray[2]}日${toStringArray[3]}曜日`);
      });
    // YYYY/MM/DDの形式で表示
    } else if (locale === 'e' && classname === 'dateTodayEYMD' && document.getElementsByClassName('dateTodayEYMD')) {
      const dateTodayEYMDs = document.querySelectorAll('.dateTodayEYMD');
      dateTodayEYMDs.forEach(dateTodayEYMD => {
        dateTodayEYMD.append(`${toStringArray[0]}/${toStringArray[1]}/${toStringArray[2]}`);
      });
    // DW YYYY/MM/DDの形式で表示
    } else if (dw && locale === 'e' && classname === 'dateTodayEAll' && document.getElementsByClassName('dateTodayEAll')) {
      addDW(dw, 'e', toStringArray);
      const dateTodayEAllItems = document.querySelectorAll('.dateTodayEAll');
      dateTodayEAllItems.forEach(dateTodayEAllItem => {
        dateTodayEAllItem.append(`${toStringArray[3]} ${toStringArray[0]}/${toStringArray[1]}/${toStringArray[2]}`);
      });
    } else {
      return;
    }
  }

  // 常に決まった曜日の日付と、その日から一週間後の日付を更新
  const routineDWDisplay = (array, locale, classname) => {
    if (!array || !locale || !classname) {
      return;
    }

    const toStringArray = dateToString(array);
    const toStringNextArray = dateToString(array);

    if (locale === 'j' && classname === 'dateUpdateDW' && document.getElementsByClassName('dateUpdateDW')) {
      const dateUpdateDWs = document.querySelectorAll('.dateUpdateDW');
      dateUpdateDWs.forEach(dateUpdateDW => {
        dateUpdateDW.append(`更新日：${toStringArray[0]}年${toStringArray[1]}月${toStringArray[2]}日`);
      });
    } else if (locale === 'j' && classname === 'dateAfterOW' && document.getElementsByClassName('dateAfterOW')) {
      const dateAfterOWs = document.querySelectorAll('.dateAfterOW');
      dateAfterOWs.forEach(dateAfterOW => {
        dateAfterOW.append(`次回更新日：${toStringNextArray[0]}年${toStringNextArray[1]}月${toStringNextArray[2]}日`);
      });
    } else {
      return;
    }
  }

  window.addEventListener("load", () => {
    // ↓これは表示されない
    // dateTodayDisplay();
    // dateTodayDisplay('j');
    dateTodayDisplay(dateInitArray, DW, 'j', 'dateTodayAll');
    dateTodayDisplay(dateInitArray, DW, 'j', 'dateTodayYMD');
    dateTodayDisplay(dateInitArray, DW, 'e', 'dateTodayEAll');
    dateTodayDisplay(dateInitArray, DW, 'e', 'dateTodayEYMD');

    // ↓これは表示されない
    // routineDWDisplay();
    // routineDWDisplay(nextWeekArray);
    routineDWDisplay(dateAdjInitArray, 'j', 'dateUpdateDW');
    routineDWDisplay(nextWeekArray, 'j', 'dateAfterOW');
  });
  
})();