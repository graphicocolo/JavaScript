// 要素を取得
const addButton = document.getElementById('addButton');
const addTask = document.getElementById('addTask');
const doingTaskLists = document.getElementById('listDoing');

const onClickAdd = () => {
  // 入力したテキストを変数に格納後、入力欄を初期化
  const taskContent = addTask.value;
  addTask.value = '';

  // JavaScript 上で li 要素を生成
  // さらにクラス名も追加
  const preTaskElm = document.createElement('li');
  preTaskElm.className = 'taskItem';
  
  // JavaScript 上で div 要素を生成
  const preTaskContentElm = document.createElement('div');

  // li 要素の子要素に div 要素を配置
  preTaskElm.appendChild(preTaskContentElm);

  // JavaScript 上で p 要素を生成
  // さらにクラス名も追加
  const preTaskTextElm = document.createElement('p');
  preTaskTextElm.className = 'todo-title';
  // ユーザーが入力したテキスト内容を要素の中に追加
  preTaskTextElm.innerText = taskContent;

  // 「完了」「削除」ボタンを生成
  const doneButton = document.createElement('button');
  doneButton.innerText = '完了';
  doneButton.addEventListener('click', () => alert('完了'));
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => alert('削除'));

  // div 要素の配下に子要素(p、button)を配置
  preTaskContentElm.appendChild(preTaskTextElm);
  preTaskContentElm.appendChild(doneButton);
  preTaskContentElm.appendChild(deleteButton);
  
  // 未完了の TODO 内の ul 要素の子要素に li 要素を配置
  doingTaskLists.appendChild(preTaskElm);
}

addButton.addEventListener('click', () => onClickAdd());