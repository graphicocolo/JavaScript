// 要素を取得
const addButton = document.getElementById('addButton');
const addTask = document.getElementById('addTask');

const onClickAdd = () => {
  // 入力したテキストを変数に格納後、入力欄を初期化
  const taskContent = addTask.value;
  addTask.value = '';

  // JavaScript 上で HTML 要素を生成
  // さらにクラス名も追加
  const preTaskElm = document.createElement('li');
  console.log(preTaskElm);
  preTaskElm.className = 'taskItem';
}

addButton.addEventListener(('click'), () => onClickAdd());