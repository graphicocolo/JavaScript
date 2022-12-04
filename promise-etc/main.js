// Promise
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise.all()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// フェッチ API の使用
// https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
// fetch()
// https://developer.mozilla.org/ja/docs/Web/API/fetch

// Promise クラスのインスタンス化
// 第一引数は必須
// 第一引数はresolve：成功したときにreturnさせる値を引数に入れる
// 下記プログラムが実行されると Promise { 'success!' } このような Promise が返る
// Promise が返った時は、Promise を展開してあげることで中身のデータを取り出せる
const resultBasic = () => {
  return new Promise((resolve, reject) => {
    resolve('success!');
    reject('error...');
  });
}

// Promise を呼び出すには then と catch を使う
// then で実行後の処理が可能
// catch で promise 中のエラーを出力できる
resultBasic().then((resolve) => {
  console.log(resolve);
}).catch((reject) => {
  console.log(reject);
});
// 下記コードは promise のスコープにないため
// promise の処理が完了し終わる前に先に実行される
console.log('finish?');

// ちょっと異なる書き方
const promiseBasic = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promiseBasic成功');
  }, 1000);
});
promiseBasic.then((promiseBasic) => {
  console.log(promiseBasic);
})
console.log('promiseBasic finish?');

// Promise.all の例
// https://qiita.com/OsakaKaiyukan/items/94acab101b4e3556b31b
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1成功');
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2成功');
    // 下記のようにすると全ての Promise を実行した結果、promise2 が reject だったため catch() に入る
    // 1つでも reject があれば catch() に入る
    // reject('promise2失敗');
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3成功');
  }, 1000);
});

Promise.all([promise1, promise2, promise3]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
})

// Promise.all 個別のエラーハンドリングの例
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise4失敗');
  }, 1000);
}).catch(() => {
  console.log('promise4エラー');
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise5失敗');
  }, 1000);
}).catch(() => {
  console.log('promise5エラー');
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise6成功');
  }, 1000);
}).catch(() => {
  console.log('promise6エラー');
});

Promise.all([promise4, promise5, promise6]).then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

// fetch
// グローバルメソッド
// ネットワークからリソースを取得するプロセスを開始し、
// レスポンスが利用できるようになったら履行されるプロミスを返す
// メソッドチェーンでは各メソッドの戻り値の確認が必要
// fetch メソッドは Promise オブジェクトを返す
// then メソッドは返ってきた Promise オブジェクトに対して処理を行う(コールバック関数を実行)
const dataBasic = fetch('./prefectures.json').then((data) => {
  // console.log(`${data}どのように表示される？`);
  return data.json();
}).then((result) => {
  console.log(result);
});

const dataTest = fetch('./prefectures.json');
console.log(`dataTestの値${dataTest}`); // dataTestの値[object Promise]
console.log(`${dataTest}`); // [object Promise]
console.log(dataTest); // Promise {<pending>}