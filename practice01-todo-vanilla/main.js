/*
Vanilla JS で簡単な TODO アプリを実装
・DOM 操作が辛い。今何の DOM に対する処理を書いているかわからなくなる
・関数名、変数名、HTML の ID 名の被りを気にしなくてはならない
 */

// 要素を取得
const addButton = document.getElementById('addButton');
const addTask = document.getElementById('addTask');
const doingTaskLists = document.getElementById('listDoing');
const doneTaskLists = document.getElementById('listDone');

// リストから要素を削除
const deleteTargetChildElm = (list, target) => {
  list.removeChild(target);
}

// 未完了リストにタスクを追加
// 戻すボタンをこの中で生成することにより
// createDoingList() が再帰的に呼び出されている
const createDoingList = (text) => {
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
  preTaskTextElm.innerText = text;

  // 完了ボタンを生成
  const doneButton = document.createElement('button');
  doneButton.innerText = '完了';
  // 完了ボタンクリック時の挙動
  doneButton.addEventListener('click', () => {
    // まずボタンの祖先要素 li を取得
    const moveTarget = doneButton.closest('li');
    // 未完了リストから親要素 li を削除
    deleteTargetChildElm(doingTaskLists, moveTarget);
    // タスクテキストを取得
    const moveTargetText = moveTarget.firstElementChild.firstChild.innerText;
    // 親要素 li の中身を初期化
    moveTarget.textContent = null;
    // div を生成
    const doneTaskContentElm = document.createElement('div');
    // 親要素の配下に div を配置
    moveTarget.appendChild(doneTaskContentElm);
    // p を生成、クラス付与、p の中身のテキストを追加
    const doneTaskTextElm = document.createElement('p');
    doneTaskTextElm.className = 'todo-title';
    doneTaskTextElm.innerText = moveTargetText;
    // 戻すボタンを生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      deleteTargetChildElm(doneTaskLists, moveTarget);
      createDoingList(moveTargetText);
    })

    // div の配下に、タスクテキストとボタンを配置
    doneTaskContentElm.appendChild(doneTaskTextElm);
    doneTaskContentElm.appendChild(backButton);
    // 完了リスト配下に、ボタンの親要素を移動
    doneTaskLists.appendChild(moveTarget);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  // 削除ボタンクリック時の挙動
  deleteButton.addEventListener('click', () => {
    // 削除ボタンがクリックされたら未完了リストから親要素 li を削除
    const deleteTarget = deleteButton.closest('li');
    deleteTargetChildElm(doingTaskLists, deleteTarget);
  });

  // div 要素の配下に子要素(p、button)を配置
  preTaskContentElm.appendChild(preTaskTextElm);
  preTaskContentElm.appendChild(doneButton);
  preTaskContentElm.appendChild(deleteButton);
  
  // 未完了の TODO 内の ul 要素の子要素に li 要素を配置
  doingTaskLists.appendChild(preTaskElm);
}

// 新規タスクを追加
const onClickAdd = () => {
  // 入力したテキストを変数に格納後、入力欄を初期化
  const taskContent = addTask.value;
  addTask.value = '';

  createDoingList(taskContent);
}

addButton.addEventListener('click', () => onClickAdd());