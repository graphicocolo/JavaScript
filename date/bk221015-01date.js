const dateFunc = (() => {

// https://next-k.site/blog/archives/2021/10/01/551
// https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14127270304

  let now = new Date();
  let Y = now.getFullYear();
  let strY = String(Y);
  let convY = now.getFullYear(now.setDate(now.getDate() + 1 - now.getDay()));
  console.log(convY);
  let M = now.getMonth() + 1;
  let strM = String(M).padStart(2, "0");
  let convM = now.getMonth(now.setDate(now.getDate() + 1 - now.getDay())) + 1;
  console.log(convM);
  let D = now.getDate();
  let strD = String(D);
  let convD = now.getDate(now.setDate(now.getDate() + 1 - now.getDay()));
  console.log(convD);
  let DW = now.getDay();
  let convDW = now.getDay(now.setDate(now.getDate() + 1 - now.getDay()));
  
  const arrDWItems = ['日', '月', '火', '水', '木', '金', '土'];
  let arrDWItem = arrDWItems[DW];
  let convDWItem = arrDWItems[convDW];
  console.log(convDWItem);
  const arrEDWItems = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let arrEDWItem = arrEDWItems[DW];

  // dateTodayDisplay() として引数を渡すことで 1 つの関数にまとめられそう

  // YYYY年MM月DD日DW曜日の形式で表示
  const dateTodayDisplayAll = () => {
    const dateTodayAllItems = document.querySelectorAll('.dateTodayAll');
    dateTodayAllItems.forEach(dateTodayAllItem => {
      dateTodayAllItem.append(`${strY}年${strM}月${strD}日${arrDWItem}曜日`);
    });
  }

  // YYYY年MM月DD日の形式で表示
  const dateTodayDisplayYMD = () => {
    const dateTodayAllItems = document.querySelectorAll('.dateTodayYMD');
    dateTodayAllItems.forEach(dateTodayAllItem => {
      dateTodayAllItem.append(`${strY}年${strM}月${strD}日`);
    });
  }

  // DW YYYY/MM/DDの形式で表示
  const dateTodayDisplayEAll = () => {
    const dateTodayAllItems = document.querySelectorAll('.dateTodayEAll');
    dateTodayAllItems.forEach(dateTodayAllItem => {
      dateTodayAllItem.append(`${arrEDWItem} ${strY}/${strM}/${strD}`);
    });
  }
  
  // YYYY/MM/DDの形式で表示
  const dateTodayDisplayEYMD = () => {
    const dateTodayAllItems = document.querySelectorAll('.dateTodayEYMD');
    dateTodayAllItems.forEach(dateTodayAllItem => {
      dateTodayAllItem.append(`${strY}/${strM}/${strD}`);
    });
  }

  // 常に月曜日の日付と、月曜日から一週間後の日付を更新
  const dateDWDisplay = () => {
    
  }

  window.addEventListener("load", () => {
    dateTodayDisplayAll();
    dateTodayDisplayYMD();
    dateTodayDisplayEAll();
    dateTodayDisplayEYMD();
  })
})();